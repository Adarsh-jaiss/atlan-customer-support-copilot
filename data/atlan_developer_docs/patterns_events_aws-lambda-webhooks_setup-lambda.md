# Source URL
https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-lambda/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-lambda/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/setup-lambda.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Set up Lambda - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-lambda/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/setup-lambda.png
meta-twitter:title: Set up Lambda - Developer
meta-viewport: width=device-width,initial-scale=1
title: Set up Lambda - Developer
-->

[Skip to content](#setting-up-aws-lambda) Developer Set up Lambda Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../../snippets/)
* [Asset\-specific](../../../)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Setting up AWS Lambda[¶](#setting-up-aws-lambda "Permanent link")
=================================================================

Requires an AWS account

You will need an AWS account with access (and capacity) to manage AWS Lambda layers and functions.

Create a base layer[¶](#create-a-base-layer "Permanent link")
-------------------------------------------------------------

Begin by setting up your environment with the base SDK you want to use for event handling:

Java

Python

We publish a `lambda-layer` artifact with the Java SDK, bundled and ready\-to\-use as a base layer for any Java\-based Lambda functions.

1. Download the latest `lambda-layer` artifact.
2. Open the [AWS Lambda layers console](https://console.aws.amazon.com/lambda/home#/layers) .
3. In the upper\-right, click the **Create layer** button, and then:
    * Enter a *Name* for the layer, such as `atlan-java-sdk`.
    * Upload the file you downloaded in (1\).
    * For *Compatible architectures* select **x86\_64**.
    * For *Compatible runtimes* select **Java 17**.
    * In the lower\-right, click the **Create** button to create the layer.

We publish a `lambda-layer` artifact with the Python SDK, bundled and ready\-to\-use as a base layer for any Python\-based Lambda functions.

1. Download the latest `lambda-layer` artifact.
2. Open the [AWS Lambda layers console](https://console.aws.amazon.com/lambda/home#/layers) .
3. In the upper\-right, click the **Create layer** button, and then:
    * Enter a *Name* for the layer, such as `atlan-python-sdk`.
    * Upload the file you downloaded in (1\).
    * For *Compatible architectures* select **x86\_64**.
    * For *Compatible runtimes* select **Python 3\.10**.
    * In the lower\-right, click the **Create** button to create the layer.

Create a function[¶](#create-a-function "Permanent link")
---------------------------------------------------------

Now you are ready to create an AWS Lambda function:

Java

Python

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. In the upper\-right, click the **Create function** button, and then:
    * Use the default **Author from scratch** option.
    * Enter a *Function name* for your function, something that briefly describes its purpose.
    * For *Runtime* select **Java 17**.
    * For *Architecture* select **x86\_64**.
    * In the lower\-right, click the **Create function** button to create the function.

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. In the upper\-right, click the **Create function** button, and then:
    * Use the default **Author from scratch** option.
    * Enter a *Function name* for your function, something that briefly describes its purpose.
    * For *Runtime* select **Python 3\.10**.
    * For *Architecture* select **x86\_64**.
    * In the lower\-right, click the **Create function** button to create the function.

Configure the function[¶](#configure-the-function "Permanent link")
-------------------------------------------------------------------

Now you need to configure the function. Begin by opening your function in the AWS console, if it is not already open.

### Set the base layer[¶](#set-the-base-layer "Permanent link")

On the **Code** tab of your function:

1. At the bottom of the page in the *Layers* table, click the **Add a layer** button.
2. For *Layer source* choose **Custom layers**.
3. From the *Custom layers* drop\-down, select the layer you created in the steps above.
4. From the *Version* drop\-down, select the most recent version (the one with the highest number).
5. In the lower\-right, click the **Add** button.

### Enable function URL[¶](#enable-function-url "Permanent link")

To be able to receive webhooks, your Lambda function must be exposed on a URL. You can do this be enabling its function URL:

1. Change to the **Configuration** tab of your function.
2. From the left, click **Function URL**.
3. To the right, click the **Create function URL** button:
    * For *Auth type* choose **NONE**.
    * In the lower\-right, click the **Save** button.
4. Copy the URL listed under *Function URL* \- you will use this URL to configure the webhook in Atlan.

**Won't this be insecure?**

Your Lambda will be publicly accessible at this URL; however, we will [show you later](../setup-webhook/#add-signing-secret-to-aws-lambda) how you can verify all incoming requests before taking any action on them, by using Atlan's signing secret.

### Set environment variables[¶](#set-environment-variables "Permanent link")

1. Still within the **Configuration** tab of your function...
2. From the left, click **Environment variables**.
3. To the right, click the **Edit** button.
4. Click the **Add environment variable** button to add each of these:

    | *Key* | *Value* |
    | --- | --- |
    | `ATLAN_API_KEY` | an Atlan API token your code should use for any further interaction with Atlan |
    | `ATLAN_BASE_URL` | the base URL of your tenant (for example `https://example.atlan.com`) |
    | `SIGNING_SECRET` | for now fill in any value, we will replace it later |
5. In the lower\-right, click the **Save** button.

---

2023\-06\-232024\-04\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/events/aws-lambda-webhooks/setup-lambda/) to provide us with more information. 

Back to top

[Previous Handling webhook events via AWS Lambda](../) [Next Code your logic](../coding/) 

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

