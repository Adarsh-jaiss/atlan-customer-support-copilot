# Source URL
https://developer.atlan.com/patterns/events/aws-lambda-webhooks/managing/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/managing/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/managing.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage your webhook - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/managing/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/managing.png
meta-twitter:title: Manage your webhook - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage your webhook - Developer
-->

[Skip to content](#managing-your-webhook) Developer Manage your webhook Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../../snippets/)
* [Asset\-specific](../../../)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Managing your webhook[¶](#managing-your-webhook "Permanent link")
=================================================================

Your webhook should now be processing metadata events in real\-time. 

Reviewing metrics[¶](#reviewing-metrics "Permanent link")
---------------------------------------------------------

You can monitor the activity through the **Monitor** tab of your function:

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. From the list of *Functions*, click your function.
3. Change to the **Monitor** tab.

Here you can see basic graphs of metrics from CloudWatch.

Reviewing logs[¶](#reviewing-logs "Permanent link")
---------------------------------------------------

You can review logs of individual requests through CloudWatch logs:

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. From the list of *Functions*, click your function.
3. Change to the **Monitor** tab.
4. Click the **View CloudWatch logs** button.

Under the **Log streams** tab, in the *Log streams* table you will see all the logs created by events. You can click on any log stream in the table to view the detailed messages logged during event processing.

Updating the SDK[¶](#updating-the-sdk "Permanent link")
-------------------------------------------------------

Because we used layers, you can easily update the SDK for your function by updating the layer:

1. Open the [AWS Lambda layers console](https://console.aws.amazon.com/lambda/home#/layers) .
2. From the list of *Layers*, click your layer containing the SDK you want to update.
3. In the upper\-right, click the **Create version** button.
4. Click the **Upload** button to select the lambda\-layer file for the SDK.
5. For *Compatible architectures* select **x86\_64**.
6. For *Compatible runtimes* select the latest version of the target language.
7. In the lower\-right, click the **Create** button.
8. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
9. On the **Code** tab, scroll down to *Layers*.
10. In the upper\-right of the *Layers* table, click the **Edit** button.
11. From the *Layers* table, select the latest version of the layer you created under *Layer version*.
12. In the lower\-right, click the **Save** button.

Updating your code[¶](#updating-your-code "Permanent link")
-----------------------------------------------------------

To modify your own code:

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. From the *Functions* list, click the function you want to deploy your code into.
3. On the **Code** tab:

    Java

    Python

    1. In the upper\-right of the *Code source* table, click **Upload from** and then **.zip or .jar file**.
        2. Use the **Upload** button to select the zip file containing your code.
        3. In the lower\-right of the dialog click the **Save** button to deploy your new code.

    1. In the *Code source* table you can either:

    * (Recommended) Copy / paste the code from your new module (file) into the editor window for **lambda\_function.py**.
                * In the upper\-right, click **Upload from** and choose the location of your code.
        2. Towards the middle of the *Code source* table, click the **Deploy** button to deploy your code.

---

2023\-06\-232024\-04\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/events/aws-lambda-webhooks/managing/) to provide us with more information. 

Back to top

[Previous Set up webhook](../setup-webhook/) [Next Asset\-specific tasks](../../../) 

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

