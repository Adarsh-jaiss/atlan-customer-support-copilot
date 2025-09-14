# Source URL
https://docs.atlan.com/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration
link-alternate: https://docs.atlan.com/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration
meta-description: With two of your most important workspaces connected, you can save time and improve the way you share data assets with your team.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: With two of your most important workspaces connected, you can save time and improve the way you share data assets with your team.
meta-og-locale: en
meta-og-title: What is included in the Microsoft Teams integration? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What is included in the Microsoft Teams integration? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What is included in the Microsoft Teams integration?
====================================================

With two of your most important workspaces connected, you can save time and improve the way you share data assets with your team.

Once you've [integrated Microsoft Teams with Atlan](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams), you can do all of the following \- all without leaving Atlan!

* Share data assets on Microsoft Teams
* Link important Microsoft Teams threads to Atlan assets
* Set up Microsoft Teams notifications for [announcements](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements), [glossary updates](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration), [starred assets](/product/capabilities/discovery/how-tos/star-assets), and [playbook runs](/product/capabilities/playbooks/how-tos/manage-playbooks)

When users share assets on Microsoft Teams \- including asset links, glossaries, and saved queries \- Atlan will provide an embedded preview and context for the asset directly in Microsoft Teams.

Share assets without leaving Atlan[â](#share-assets-without-leaving-atlan "Direct link to Share assets without leaving Atlan")
--------------------------------------------------------------------------------------------------------------------------------

To share assets on Microsoft Teams, without leaving Atlan:

1. From any asset in Atlan, in the asset sidebar, click the **Share on Teams** icon.
2. In the *Share on Teams* dialog:
    1. For *Channel*, choose the Microsoft Teams channel where you want to post.
    2. For *Message*, enter the message you want to share for the asset on the channel. (Note that tagging another user from your Atlan workspace in the message is currently not supported.)
    3. (Optional) For *Add as a resource*, toggle the slider on to add the message as a resource to your asset. When you add the message as a resource, anyone viewing the asset in Atlan will be able to see previous discussions in Microsoft Teams about that asset.
3. Click **Share**Â to post on Microsoft Teams.

Your message is now on Microsoft Teams and linked to the asset for future reference! ð

[https://demo.arcade.software/JzhO7dQ0FbqeYW1cCPNC?embed](https://demo.arcade.software/JzhO7dQ0FbqeYW1cCPNC?embed)

[https://demo.arcade.software/Z2ORmWpbGFc5U43KS4IV?embed](https://demo.arcade.software/Z2ORmWpbGFc5U43KS4IV?embed)

[https://demo.arcade.software/vbLsl125FSubWnlAwG7l?embed](https://demo.arcade.software/vbLsl125FSubWnlAwG7l?embed)

Add existing Microsoft Teams discussions to assets[â](#add-existing-microsoft-teams-discussions-to-assets "Direct link to Add existing Microsoft Teams discussions to assets")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?Any [non\-guest user with edit access to an asset's metadata](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) can add existing Microsoft Teams discussions to assets.

If you've ever discussed a data asset in Microsoft Teams, it could be helpful to bring that context back to your asset.

To add existing discussions from Microsoft Teams, within Atlan:

1. From the asset, on the right of the screen, click theÂ**Teams** sidebar icon:
    * If there are existing discussions on the asset, to the right of *Teams conversations*, click the **Add** link.
    * If there are no existing discussions on the asset, click the **\+** **Add Teams thread** button.
2. In the *Add Teams thread* dialog, under the *Link* heading, paste the link to the Microsoft Teams thread.
3. Under the *Title* heading, write a brief description of the thread.
4. At the bottom of the dialog, click the **Add** button.

Your existing discussion on Microsoft Teams is now linked to the asset for future reference! ð

[https://demo.arcade.software/8pGyY30xIz3MxrTqHbOm?embed](https://demo.arcade.software/8pGyY30xIz3MxrTqHbOm?embed)

Enable alerts for glossary updates in Atlan[â](#enable-alerts-for-glossary-updates-in-atlan "Direct link to Enable alerts for glossary updates in Atlan")
-----------------------------------------------------------------------------------------------------------------------------------------------------------

warning**ð¤ Who can do this?** You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to enable Microsoft Teams notifications for glossary updates. Once enabled, anyone in the selected channel will be able to view these alerts directly in Microsoft Teams.

You can set up Microsoft Teams notifications for updates made to your [glossaries](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) in Atlan. You can also customize the type of change alerts you want to receive. With real\-time alerts sent to a [Microsoft Teams channel of your choice](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams), you'll be able to stay informed about the latest changes to your glossaries.

Microsoft Teams notifications can only be set up at the glossary level. Even if configured from a specific term or category profile, the notification settings will be applicable to the entire glossary.

To enable Microsoft Teams notifications for glossary updates, from Atlan:

1. From the left menu on any screen, click **Glossary**.
2. Under *Glossary* in the left menu, click the name of the glossary for which you want to set up change notifications.
3. From the top right of the glossary profile, click the bell icon to set up notifications for glossary updates.
4. In the notifications setup dialog, click **Teams** and then enter the following details:
    1. For *Notification channel*, click the dropdown to select a Microsoft Teams channel where you want to receive notifications from the channel(s) configured in your [Microsoft Teams integration in Atlan](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).Â
    2. For *Notify me about*, you can either:
        1. Click **All updates** to receive notifications for all the changes listed in *Custom updates* made to your glossary.
        2. Click **Custom updates** to limit notifications to specific types of updates:
            * Click **\+ New term or category** to receive an alert when a new term or category is added to the glossary.
            * Click **Name** to receive an alert when the name of the glossary or that of a nested category or term is updated.
            * Click **Description** to receive an alert when a [description](/product/capabilities/discovery/how-tos/add-descriptions) is added to, updated, or removed from the glossary or a nested category or term.
            * Click **Announcement** to receive an alert when an [announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) is added to, updated, or removed from the glossary or a nested category or term.
            * Click **Certificate** to receive an alert when a [certificate](/product/capabilities/discovery/how-tos/add-certificates) is added to, updated, or removed from the glossary or a nested category or term.
            * Click **Owners** to receive an alert when an [owner](/product/capabilities/discovery/how-tos/add-owners) is assigned toÂ or removed from the glossary or a nested category or term.
            * Click **Readme** to receive an alert when a [README](/product/integrations)Â is added to, updated, or removed from the glossary or a nested category or term.
            * Click **Tags (for terms)** to receive an alert when a tag is [attached to](/product/capabilities/governance/tags/how-tos/attach-a-tag) or [removed from](/product/capabilities/governance/tags/how-tos/remove-a-tag) a term within the glossary.
            * Click **Categories updated (for terms)** to receive an alert when a [term is assigned to a different category](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) within the same glossary. (Notifications for moving terms across glossaries are currently not supported.)
            * Click **Remove term** to receive an alert when a term is removed from the glossary. (Notifications for removal of categories are currently not supported.)
    3. Â Click **Save** to save your notification preferences.
5. (Optional) To edit notification settings, click the bell icon. In the notifications setup dialog, you can change the channel or further customize your notifications.
6. (Optional) To remove notifications, click the bell icon. In the notifications setup dialog, click the **Enabled (by username)** dropdown. Click **Remove notification** to reset your notification settings.

You will now receive Microsoft Teams notifications for changes made to your glossary! ð

If the [Microsoft Teams channel](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) you selected for sending notifications is removed from your Microsoft Teams integration in Atlan, glossary alerts will continue to be sent to that channel. In that case, you can either remove the notifications or select a different channel.

**Did you know?**You can also set up Microsoft Teams notifications for metadata updates on all your [starred assets](/product/capabilities/discovery/how-tos/star-assets) in Atlan.

[https://demo.arcade.software/vB4I9NzRspv1tejuM8mc?embed](https://demo.arcade.software/vB4I9NzRspv1tejuM8mc?embed)

Expand any asset link in Microsoft Teams[â](#expand-any-asset-link-in-microsoft-teams "Direct link to Expand any asset link in Microsoft Teams")
--------------------------------------------------------------------------------------------------------------------------------------------------

If you share an asset link in Microsoft Teams, Atlan's bot will expand that link directly in the Microsoft Teams channel and provide an embedded preview of the asset.

To provide detail for an asset in Microsoft Teams:

1. Paste an asset link into Microsoft Teams, along with any other context in your message.
2. The Atlan bot will expand the link with a card of contextual metadata.
3. (Optional) Click **View in Atlan** to open the asset link in Atlan.

The channel can now understand basic information about the asset without leaving Microsoft Teams! ð

View workflow alerts in Microsoft Teams[â](#view-workflow-alerts-in-microsoft-teams "Direct link to View workflow alerts in Microsoft Teams")
-----------------------------------------------------------------------------------------------------------------------------------------------

You can [configure the Microsoft Teams integration](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams#configure-integration-from-atlan-to-microsoft-teams) to receive alerts for workflow activities from Atlan. This can help you [monitor your workflows](/product/connections/how-tos/monitor-connectivity) directly in Microsoft Teams. You can also choose to receive failure alerts only.

To view workflow alerts in Microsoft Teams:

1. Open the Microsoft Teams channel you [configured](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams#configure-integration-from-atlan-to-microsoft-teams) to view workflow notifications.
2. The Atlan bot will share workflow alerts \- including details like run status, start time, run time, trigger type, and last three runs.
3. (Optional) Click **View in Atlan** to open the workflow link in Atlan.

You can now inspect crawled assets or troubleshoot in case of any failed workflows.

**Did you know?**Atlan also supports workflow alerts for all [custom packages](https://solutions.atlan.com/overview/). If you have set up any custom packages on your Atlan instance, you will be able to monitor your workflows directly in Microsoft Teams.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [faq](/tags/faq)
* [faq\-integrations](/tags/faq-integrations)

[PreviousTroubleshooting Microsoft Teams](/product/integrations/collaboration/microsoft-teams/troubleshooting/troubleshooting-microsoft-teams)[NextSlack](/product/integrations/collaboration/slack)

Copyright Â© 2025 Atlan Pte. Ltd.

