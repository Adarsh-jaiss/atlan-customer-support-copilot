# Source URL
https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-webhook/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-webhook/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/setup-webhook.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Set up webhook - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/setup-webhook/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/setup-webhook.png
meta-twitter:title: Set up webhook - Developer
meta-viewport: width=device-width,initial-scale=1
title: Set up webhook - Developer
-->

[Skip to content](#setting-up-the-webhook-in-atlan) Developer Set up webhook Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../../snippets/)
* [Asset\-specific](../../../)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Setting up the webhook in Atlan[¶](#setting-up-the-webhook-in-atlan "Permanent link")
=====================================================================================

Create Atlan webhook[¶](#create-atlan-webhook "Permanent link")
---------------------------------------------------------------

Now all you need to do is set up the webhook in Atlan, to call your AWS Lambda function URL.

You need to complete the other steps first

It is important you complete the other steps in this section first (setting up the AWS Lambda function). You will not be able to save the webhook in Atlan without it verifying the target for the webhook, so the AWS Lambda function must be running and able to correctly validate the test payload *before* setting up the webhook in Atlan.

Assuming you have completed those steps first, you should then be able to [create the webhook in Atlan](https://ask.atlan.com/hc/en-us/articles/7145739770511)  — for the *Webhook URL* enter the AWS Lambda's function URL:

[https://demo.arcade.software/uNQpqpBA9k4M7Pw437IL?embed](https://demo.arcade.software/uNQpqpBA9k4M7Pw437IL?embed)

Add signing secret to AWS Lambda[¶](#add-signing-secret-to-aws-lambda "Permanent link")
---------------------------------------------------------------------------------------

During the final step of setting up the webhook, you will be shown a **Secrety Key**. Copy this value for use in your AWS Lambda function to verify incoming requests are actually coming from Atlan.

**Oops, I forgot to copy it. How do I get a new one?**

You can find the existing signing secret again by opening your webhook, or if you need to you can generate a new one there as well. (Just remember if you generate a new one you will need to go update your AWS Lambda function to use the new one.)

To assign the key in your AWS Lambda function:

1. Open the [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. From the list of *Functions*, click your AWS Lambda function.
3. Change to the **Configuration** tab.
4. From the left, click **Environment variables**.
5. In the upper\-right of the *Environment variables* table, click the **Edit** button.
6. Paste the secret key from Atlan as the *Value* for the `SIGNING_SECRET` environment variable. (Create one, if you did not create one earlier.)
7. In the lower\-right, click the **Save** button.

Required to process events

When using the SDKs to handle events using these steps, the signing key is ***required***. Every request will validate the signing key before attempting any processing, so if you:

* have not set up the signing key, or
* are using the wrong signing key, or
* generated a new signing key and forgot to update this environment variable in the AWS Lambda function

Then the AWS Lambda function will reject every event it is sent.[1](#fn:1)

---

1. Except for the verification request when setting up the webhook in Atlan — that single event is unsigned.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2023\-06\-232023\-06\-23

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/events/aws-lambda-webhooks/setup-webhook/) to provide us with more information. 

Back to top

[Previous Deploy your code](../deploy/) [Next Manage your webhook](../managing/) 

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

