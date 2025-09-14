# Source URL
https://docs.atlan.com/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements
link-alternate: https://docs.atlan.com/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements
meta-description: Adding an announcement to your data asset helps you call attention to an important feature or notify others about a change coming down the pipeline. Since announcements in Atlan display the time stamp and author information, you can easily identify whether an announcement is still relevant and who to ask for questions.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Adding an announcement to your data asset helps you call attention to an important feature or notify others about a change coming down the pipeline. Since announcements in Atlan display the time stamp and author information, you can easily identify whether an announcement is still relevant and who to ask for questions.
meta-og-locale: en
meta-og-title: Create announcements | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Create announcements | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Create announcements
====================

Adding an announcement to your data asset helps you call attention to an important feature or notify others about a change coming down the pipeline. Since announcements in Atlan display the time stamp and author information, you can easily identify whether an announcement is still relevant and who to ask for questions.

What type of announcements would you want to share with your team? Here are a few examples:

Add an announcements[â](#add-an-announcements "Direct link to Add an announcements")
--------------------------------------------------------------------------------------

[https://demo.arcade.software/d0JC6QAitiV9RBjTXBYc?embed](https://demo.arcade.software/d0JC6QAitiV9RBjTXBYc?embed)

To add an announcement to an asset:

1. From the left menu of any screen in Atlan, click **Assets**.
2. On the *Assets* page, select an asset to add an announcement. You can either:
    * Open the asset profile. From the top right of the *Overview* tab in the asset profile, click the **vertical 3\-dot**Â icon, and then from the dropdown, click **Add announcement**.
    * In the *Overview* tab of the asset sidebar, click the **horizontal 3\-dot** icon, and then from the dropdown, click **Add announcement**.
3. In the *New Announcement* dialog, enter the following details:
    1. From the top right, click the **downward arrow**Â and choose from three announcement types: *Information*, *Issue*, or *Warning*.
    2. For *Add title*, enter a title for your announcement.
    3. For *Description*, enter a description for your announcement.
    
        * (Optional) You can include HTML hyperlinks to direct users to additional information \- for example, wrap the text with `<a href="https://my.url.com">description text</a>`.
            * (Optional) You can use Markdown syntax to write a description. Any headings will be rendered in heading 6 (`<h6>`).
        danger Atlan currently does not support adding images to your announcements.
    4. (Optional) To share your announcement on Slack or Teams, you can either:
    
        * Click the **Share** buttonÂ to integrate [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).
            * If you have already integrated [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams), click the checkbox for **Share on Slack** or **Share on Teams**, respectively.
    5. (Optional) To configure the announcements channel for Slack or Teams:
    
        * If you have already configured a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel to receive announcement alerts, that channel will be preselected. You can change to a different channel, if available.
            * If you have not configured a channel for announcements, enter the channel name to receive notifications for announcements. This channel will be displayed as the *Announcements channel*Â in yourÂ[Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) integration.
    6. Click **Add** to create your announcement.
4. (Optional) To edit an announcement, from the top right of the announcement box, click the 3\-dot icon and then click **Edit**.
5. (Optional) To delete an announcement, from the top right of the announcement box, click the 3\-dot icon and then click **Delete**.

You just created an announcement! ð

This announcement will be visible to anyone who views the asset. You can also create similar announcements for other types of data assets, including [glossaries, categories, and terms](/product/capabilities/governance/glossary/how-tos/set-up-glossaries).

To create, remove, and manage announcements using API, refer to our [developer documentation](https://developer.atlan.com/snippets/common-examples/announcements/).

**Did you know?**You can only create one announcement per asset. To add more information to your announcement, you can either edit the existing one to update it or delete the old one and create a new announcement.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousConfigure SMTP](/product/integrations/communication/smtp-and-announcements/how-tos/configure-smtp)[NextManage system announcements](/product/integrations/communication/smtp-and-announcements/how-tos/manage-system-announcements)

Copyright Â© 2025 Atlan Pte. Ltd.

