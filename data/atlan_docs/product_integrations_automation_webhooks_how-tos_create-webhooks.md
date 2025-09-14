# Source URL
https://docs.atlan.com/product/integrations/automation/webhooks/how-tos/create-webhooks

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/automation/webhooks/how-tos/create-webhooks
link-alternate: https://docs.atlan.com/product/integrations/automation/webhooks/how-tos/create-webhooks
meta-description: If your webhook endpoint is behind a VPN or firewall, you must add the Atlan IP to your allowlist. Please raise a support ticket from within Atlan, or [submit a request](/support/submit-request).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If your webhook endpoint is behind a VPN or firewall, you must add the Atlan IP to your allowlist. Please raise a support ticket from within Atlan, or [submit a request](/support/submit-request).
meta-og-locale: en
meta-og-title: Create webhooks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/automation/webhooks/how-tos/create-webhooks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Create webhooks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Create webhooks
===============

[https://demo.arcade.software/uNQpqpBA9k4M7Pw437IL?embed](https://demo.arcade.software/uNQpqpBA9k4M7Pw437IL?embed)

Who can do this?You will need to be an admin user in Atlan to create webhooks.

dangerIf your webhook endpoint is behind a VPN or firewall, you must add the Atlan IP to your allowlist. Please raise a support ticket from within Atlan, or [submit a request](/support/submit-request).

Webhooks allow you to monitor events happening in Atlan, receive notifications for these events to a URL of your choice, and take action right away. For example, you can create a webhook to send notifications to your email address or messaging app when a [term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) is updated or an asset is [tagged](/product/capabilities/governance/tags/concepts/what-are-tags).

Webhooks send the payload in a specific format that cannot be customized. This is meant for consumption by a programmatic entity down the line \- for example, AWS Lambda or a microservice. For a webhook to be consumed directly, Atlan will need to customize the payload, which is currently not supported. Alternatively, you can explore out\-of\-the\-box integrations such as [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) and [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).

Atlan currently supports creating webhooks for the following event types:

* Asset creation, deletion, and metadata update
* Custom metadata update for assets
* Tag attachment or removal from assets

Create a webhook[â](#create-a-webhook "Direct link to Create a webhook")
--------------------------------------------------------------------------

To create a webhook:

1. From the left menu in Atlan, click **Admin**.
2. Under *Workspace*, click **Webhooks**.
3. On the *Webhooks* page, click **\+ New Webhook** to create a new webhook.
4. In the *New Webhook* dialog, enter the following details:
    1. For *Name*, enter a meaningful name for your webhook.
    2. For *Webhook URL*, enter the URL for where you want to receive event notifications.
    3. For *Asset type*, select the asset types for which you'd like to receive notifications. (This will default to all asset types, if none are specified.)
    4. For *Event type*, under *Assets*, select all the event types for which you'd like to receive notifications:
    
        * **Create** \- to process notifications for [asset creation](https://developer.atlan.com/events/types/entity_create/).
            * **Update** \- to process notifications for when [assets are updated](https://developer.atlan.com/events/types/entity_update/).
            * **Delete** \- to process notifications for [asset deletion](https://developer.atlan.com/events/types/entity_delete/).
            * **Update Custom Metadata** \- to process notifications for when [custom metadata is updated](https://developer.atlan.com/events/types/business_attribute_update/) for assets.
            * **Add Tags** \- to process notifications for when [tags areÂ attached](https://developer.atlan.com/events/types/classification_add/) to an asset.
            * **Delete Tags** \- to process notifications when [tags areÂ removed](https://developer.atlan.com/events/types/classification_delete/) from an asset.
    5. To validate the URL you've entered, in the upper right, click the **Validate** button.
    
        danger Atlan will send a sample payload to test if the webhook URL is correct. You will need to respond with a `2xx` status for the validation to succeed. Atlan will also run this validation before you save your webhook as a precautionary measure.
    6. Click **Save** to finish creating your webhook.
    7. From the *Webhook successfully created* dialog, under *Secret Key*, click the clipboard icon to copy the secret key and store it in a secure location to [verify requests from Atlan](#verify-requests-from-atlan).
    8. Click **Done** to complete setup.

Verify requests from Atlan[â](#verify-requests-from-atlan "Direct link to Verify requests from Atlan")
--------------------------------------------------------------------------------------------------------

Atlan signs its webhooks using a secret that is unique to your app. With the help of signing secrets, you can verify the authenticity of such requests with confidence.

Each HTTP request sent from Atlan will include an `x-atlan-signing-secret` HTTP header. You can use the secret key for your webhook to validate requests from Atlan.

**Tags:*** [webhooks](/tags/webhooks)
* [automation](/tags/automation)
* [notifications](/tags/notifications)

[PreviousWebhooks Integration](/product/integrations/automation/webhooks)[NextCollaboration Integrations](/product/integrations/collaboration)

Copyright Â© 2025 Atlan Pte. Ltd.

