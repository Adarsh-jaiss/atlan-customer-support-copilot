# Source URL
https://developer.atlan.com/patterns/events/aws-lambda-webhooks/coding/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/coding/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/coding.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Code your logic - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/coding/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/coding.png
meta-twitter:title: Code your logic - Developer
meta-viewport: width=device-width,initial-scale=1
title: Code your logic - Developer
-->

[Skip to content](#coding-your-logic) Developer Code your logic Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../../snippets/)
* [Asset\-specific](../../../)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Coding your logic[¶](#coding-your-logic "Permanent link")
=========================================================

What events you want to process and how you want to process them is up to you.

We have tried to make writing this logic as simple as possible via the SDKs:

Java

Python

In Java, create a new class that implements the following from the  [Java SDK](../../../../sdks/):

* Extend the `com.atlan.events.AbstractLambdaHandler` class.
* Implement the `com.atlan.events.AtlanEventHandler` interface.

The `AbstractLambdaHandler` class handles receiving and parsing the event through the AWS Lambda function, and passing it along to your logic for processing. The `AtlanEventHandler` interface defines 5 methods that are executed in logical sequence to carry out your event\-handling:

1. `validatePrerequisites()` validates the event contains information you expect and intend to process.
2. `getCurrentState()` retrieves the current state of the asset in the event from Atlan. This limits the possibility you are working against stale data.
3. `calculateChanges()` is where you will implement the majority of your logic. This is where you look up any additional information, make any changes to assets, create notifications in external systems, and so on.

    Ensure idempotency

    You should only return assets from this method that have actually changed, to ensure idempotency. If you blindly return every asset of interest every time from this method, you may end up with an infinite loop of picking up an event, sending back a change to Atlan, which generates another event, this handler sends back another change, and so on ad infinitum.

    The `hasChanges()` method below can be helpful to think through how to detect what has actually changed and thus needs to be sent back to Atlan.
4. `hasChanges()` is a convenience method you can implement to determine whether an asset has changed or not. You would typically call it from within your `calculateChanges()` implementation above.
5. `upsertChanges()` takes any of the changed assets from the `calculateChanges()` method and actually sends these back to Atlan for persistence. (Each such change may then generate subsequent events that either this or other handlers can then pickup.)

| Example: reverting verified assets that have no description or owner | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 ``` | ``` import com.atlan.AtlanClient; import com.atlan.events.AbstractLambdaHandler; import com.atlan.events.AtlanEventHandler; import com.atlan.exception.AtlanException; import com.atlan.exception.ErrorCode; import com.atlan.exception.NotFoundException; import com.atlan.model.assets.Asset; import com.atlan.model.enums.CertificateStatus; import java.util.Collection; import java.util.Collections; import java.util.List; import java.util.Set; import org.slf4j.Logger;  public class VerificationEnforcer // (1)                 extends AbstractLambdaHandler // (2)                 implements AtlanEventHandler { // (3)      private static final List<String> REQUIRED_ATTRS = List.of(         "description",         "userDescription",         "ownerUsers",         "ownerGroups",         "certificateStatus"); // (4)      @Override // (5)     public Asset getCurrentState(AtlanClient client, Asset fromEvent, Logger log) throws AtlanException {         Asset asset = AtlanEventHandler.getCurrentViewOfAsset( // (6)             fromEvent, REQUIRED_ATTRS, false, false);         if (asset == null) {             throw new NotFoundException(                     ErrorCode.ASSET_NOT_FOUND_BY_QN, fromEvent.getQualifiedName(), fromEvent.getTypeName());         }         return asset;     }      @Override // (7)     public Collection<Asset> calculateChanges(Asset asset, Logger log) throws AtlanException {         if (asset.getCertificateStatus() == CertificateStatus.VERIFIED) {             if (!AtlanEventHandler.hasDescription(asset)                     || !AtlanEventHandler.hasOwner(asset)) {                 return Set.of(asset.trimToRequired() // (8)                         .certificateStatus(CertificateStatus.DRAFT)                         .certificateStatusMessage(ENFORCEMENT_MESSAGE)                         .build());             } else {                 log.info(                         "Asset has all required information present to be verified, no enforcement required: {}",                         asset.getQualifiedName());             }         } else {             log.info("Asset is no longer verified, no enforcement action to consider: {}", asset.getQualifiedName());         }         return Collections.emptySet();     }      // (9)     private static final VerificationEnforcer INSTANCE = createInstance();     private static VerificationEnforcer createInstance() {         return new VerificationEnforcer();     }     public static VerificationEnforcer getInstance() {         return INSTANCE;     }      public VerificationEnforcer() { // (10)         super(VerificationEnforcer.getInstance());     }  }  ``` |

1. You can package your event handler with whatever name you want.
2. Ensure that it extends the `com.atlan.events.AbstractLambdaHandler` class.
3. Ensure that it also implements the `com.atlan.events.AtlanEventHandler` class.
4. Of course you can set up any of your own variables. In this example, since we want to validate certain information is present on the asset, we're defining a list of those attributes we want to check on the asset.
5. Most methods in `AtlanEventHandler` provide a default implementation that you may be able to reuse (like `validatePrerequisites()` in this example), but you can always override the default implementation as well.
6. `AtlanEventHandler` also provides a number of static methods for common actions, such as an efficient way of retrieving the current view of an asset with a minimal set of information.
7. By breaking down the logic into these 5 different methods, you can more precisely think through the logic of how to handle your events. In this example, we only need to consider changing an asset if:

    * It is currently verified, and
        * it is missing either a description or an owner
8. During event\-handling you may want to change several assets. For example, you may want to look at lineage and change multiple upstream or downstream assets. Hence the method allows returning any collection of assets.

    The functionality in this example only needs to potentially modify the single asset in the event: specifically changing its certificate back to `DRAFT` and leaving an enforcement message, if it should not have been verified in the first place.
9. For efficiency, you may want to create a singleton for this class for reuse in the next step.
10. All you need to then do to "register" this class to handle events through the Lambda function is define a default constructor that sends your class up to the `AbstractLambdaHandler` superclass. The superclass will then take care of everything else.

In Python, create a module (file) that extends the following from the  [Python SDK](../../../../sdks/):

* Defines a new class, that extends the `pyatlan.events.atlan_event_handler.AtlanEventHandler` class.
* Defines a new function `lambda_handler(event, context)` that calls the `pyatlan.events.atlan_lambda_handler.process_event` function.

The `lambda_handler` function is necessary to receive the event from the AWS Lambda function, but then only needs to pass it off to the `process_event` function for parsing and processing using your logic. The `AtlanEventHandler` superclass defines 5 methods that are executed in logical sequence (by `process_event`) to carry out your event\-handling:

1. `validate_prerequisites()` validates the event contains information you expect and intend to process.
2. `get_current_state()` retrieves the current state of the asset in the event from Atlan. This limits the possibility you are working against stale data.
3. `calculate_changes()` is where you will implement the majority of your logic. This is where you look up any additional information, make any changes to assets, create notifications in external systems, and so on.

    Ensure idempotency

    You should only return assets from this method that have actually changed, to ensure idempotency. If you blindly return every asset of interest every time from this method, you may end up with an infinite loop of picking up an event, sending back a change to Atlan, which generates another event, this handler sends back another change, and so on ad infinitum.

    The `has_changes()` method below can be helpful to think through how to detect what has actually changed and thus needs to be sent back to Atlan.
4. `has_changes()` is a convenience method you can implement to determine whether an asset has changed or not. You would typically call it from within your `calculate_changes()` implementation above.
5. `upsert_changes()` takes any of the changed assets from the `calculate_changes()` method and actually sends these back to Atlan for persistence. (Each such change may then generate subsequent events that either this or other handlers can then pickup.)

| Example: reverting verified assets that have no description or owner | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 ``` | ``` from typing import List, Optional  from pyatlan.client.atlan import AtlanClient from pyatlan.events.atlan_lambda_handler import process_event from pyatlan.events.atlan_event_handler import (     AtlanEventHandler,     get_current_view_of_asset,     has_description,     has_owner,     has_lineage, ) from pyatlan.model.assets import Asset from pyatlan.model.enums import CertificateStatus  REQUIRED_ATTRS = [ # (1)     "description",     "userDescription",     "ownerUsers",     "ownerGroups",     "certificateStatus", ] ENFORCEMENT_MESSAGE = (     "To be verified, an asset must have a description, at least one owner, and lineage." ) client = AtlanClient() # (2)  class VerificationEnforcer(AtlanEventHandler): # (3)     # (4)     def get_current_state(self, from_event: Asset) -> Optional[Asset]:         return get_current_view_of_asset(self.client, from_event, REQUIRED_ATTRS) # (5)      # (6)     def calculate_changes(self, asset: Asset) -> List[Asset]:         if asset.certificate_status == CertificateStatus.VERIFIED:             if (                 not has_description(asset)                 or not has_owner(asset)                 or not has_lineage(asset)             ):                 trimmed = asset.trim_to_required()                 trimmed.certificate_status = CertificateStatus.DRAFT                 trimmed.certificate_status_message = ENFORCEMENT_MESSAGE                 return [trimmed] # (7)             else:                 print(                     f"Asset has all required information present to be verified, no enforcement required: {asset.qualified_name}"                 )         else:             print(                 f"Asset is no longer verified, no enforcement action to consider: {asset.qualified_name}"             )         return []   def lambda_handler(event, context): # (8)     process_event(LambdaEnforcer(client), event, context)  ``` |

1. You can of course set up any of your own variables. In this example, since we want to validate certain information is present on the asset, we're defining a list of those attributes we want to check on the asset.
2. You will need to initialize an AtlanClient, to interact with Atlan. (This will auto\-configure based on those environment variables you set up earlier.)
3. You can package your event handler with whatever name you want. Just ensure it extends the `pyatlan.events.atlan_event_handler.AtlanEventHandler` class.
4. Most methods in `AtlanEventHandler` provide a default implementation that you may be able to reuse (like `validate_prerequisites()` in this example), but you can always override the default implementation as well.
5. `AtlanEventHandler` also provides a number of utility methods for common actions, such as an efficient way of retrieving the current view of an asset with a minimal set of information.
6. By breaking down the logic into these 5 different methods, you can more precisely think through the logic of how to handle your events. In this example, we only need to consider changing an asset if:

    * It is currently verified, and
        * it is missing either a description or an owner
7. During event\-handling you may want to change several assets. For example, you may want to look at lineage and change multiple upstream or downstream assets. Hence the method allows returning any collection of assets.

    The functionality in this example only needs to potentially modify the single asset in the event: specifically changing its certificate back to `DRAFT` and leaving an enforcement message, if it should not have been verified in the first place.
8. All you need to then do to "register" this class to handle events through the Lambda function is define a `lambda_handler(event, context)` function that sends your class and client to the `process_event` function \- it will then take care of everything else.

---

2023\-06\-232024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/events/aws-lambda-webhooks/coding/) to provide us with more information. 

Back to top

[Previous Set up Lambda](../setup-lambda/) [Next Deploy your code](../deploy/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

