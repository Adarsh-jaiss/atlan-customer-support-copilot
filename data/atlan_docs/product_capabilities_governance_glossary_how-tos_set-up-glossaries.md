# Source URL
https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/set-up-glossaries

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/set-up-glossaries
link-alternate: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/set-up-glossaries
meta-description: The Atlan [glossary](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) allows you to add new terms and categories, search for existing glossary definitions, and archive old ones. You can also nest terms under categories and subcategories to create a glossary hierarchy.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Atlan [glossary](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) allows you to add new terms and categories, search for existing glossary definitions, and archive old ones. You can also nest terms under categories and subcategories to create a glossary hierarchy.
meta-og-locale: en
meta-og-title: Set up glossaries | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/set-up-glossaries
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up glossaries | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up glossaries
=================

[https://demo.arcade.software/Mo2OYCV5wmWRNz2l4Yfu?embed](https://demo.arcade.software/Mo2OYCV5wmWRNz2l4Yfu?embed)

The Atlan [glossary](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) allows you to add new terms and categories, search for existing glossary definitions, and archive old ones. You can also nest terms under categories and subcategories to create a glossary hierarchy.

Set up a glossary[â](#set-up-a-glossary "Direct link to Set up a glossary")
-----------------------------------------------------------------------------

To define the relevant terms and categories for your data assets, you will first need to set up a glossary.

To create a glossary:

1. From the left menu of any screen in Atlan, click **Glossary** and then click **Get started**.
2. In the *Create new glossary* dialog, enter the following details:
    1. For *Glossary name*, enter a name for your glossary \- for example, `Finance`. The character limit for a glossary name is 80 characters.
    2. In the top right, *Draft* is set as the default certificate. To change the certificate, click the dropdown arrow and select the [certificate](/product/capabilities/discovery/how-tos/add-certificates) you'd like to apply to your glossary.
    3. Click the glossary icon to personalize the icon for your glossary.
    4. For *Description*, write a short or detailed description for your glossary \- size limit for [description](/product/capabilities/discovery/how-tos/add-descriptions) values is 32766 bytes.
    5. For *Add owners*, add yourself or anyone else in your team as [owners](/product/capabilities/discovery/how-tos/add-owners) of the glossary.
    6. Click **Create** to add your glossary.
3. (Optional) From the top right of the glossary profile:
    * Click the user avatars to view a list of recently visited users, total views on your glossary, total number of unique visitors, and total views by user.
        + Use the days filter to filter glossary views and user activity in the last 7, 30, and 90 days.
        + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
    * Click the star button to [star your glossary](/product/capabilities/discovery/how-tos/star-assets).
    * Click the clipboard icon to copy the link for your glossary.
    * Click the pencil icon to edit the glossary name, description, and icon.
    * Click the **Slack** or **Teams** icon to share directly on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
    * Click the bell icon to enable [Slack](/product/integrations/collaboration/slack/faq/slack-integration) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration) notifications for glossary updates in Atlan.
    * Click the 3\-dot icon and then:
        + Click **Add announcement** to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) to your glossary.
        + Click **Bulk upload terms** to [bulk upload terms](/product/capabilities/governance/glossary/how-tos/bulk-upload-terms-in-the-glossary) to your glossary.
        + Click **Export** to [export nested categories and terms](/product/integrations/collaboration/spreadsheets/how-tos/export-assets) within a glossary to spreadsheets.
        + Click **Archive** to archive the glossary.

Your glossary is now ready for you to start adding [terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) and [categories](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#category)! ð

Add new glossary terms[â](#add-new-glossary-terms "Direct link to Add new glossary terms")
--------------------------------------------------------------------------------------------

[Terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) are the building blocks of your glossary. While defining a new glossary term, add as much information as possible for your term so that your team fully understands how to use it.

To add a new glossary term:

1. On the *Glossary* page, click the **\+** icon next to *All glossaries* and then click **Add term** from the dropdown.
2. In the *Create new term* dialog, enter the following details:
    1. For *Select glossary*, select a glossary for your term. In this example, we'll select the `Finance` glossary.
    2. For *Term name*, enter a name for your term \- for example, `Credit Score`. The character limit for a term name is 80 characters.
    3. In the top right, *Draft* is set as the default certificate. To change the certificate, click the dropdown arrow and select the [certificate](/product/capabilities/discovery/how-tos/add-certificates) you'd like to apply to your term.
    4. (Optional) For *Alias*, [add an alias](/product/capabilities/discovery/how-tos/add-an-alias) to your term.
    5. For *Description*, write a short or detailed description for your term \- size limit for [description](/product/capabilities/discovery/how-tos/add-descriptions) values is 32766 bytes.
    6. For *Add owners*, add yourself or anyone else in your team as [owners](/product/capabilities/discovery/how-tos/add-owners) of the glossary.
    7. (Optional) Turn on **Create multiple** to create more terms from the same dialog.
    8. Click **Create** to add your term.
3. (Optional) From the top right of the term profile:
    * Click the user avatars to view a list of recently visited users, total views on your term, total number of unique visitors, and total views by user.
        + Use the days filter to filter views and user activity in the last 7, 30, and 90 days.
        + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
    * Click the star button to [star your term](/product/capabilities/discovery/how-tos/star-assets).
    * Click the clipboard icon to copy the link for your term.
    * Click the pencil icon to edit the term name and description or [add an alias](/product/capabilities/discovery/how-tos/add-an-alias) to your term.
    * Click the **Slack** or **Teams** icon to share directly on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
    * Click the bell icon to enable [Slack](/product/integrations/collaboration/slack/faq/slack-integration) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration) notifications for glossary updates in Atlan.
    * Click the 3\-dot icon to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) or archive the term.

**Did you know?**Once you've added terms to your glossaries, you can also [link them to your assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).

Update your glossary terms[â](#update-your-glossary-terms "Direct link to Update your glossary terms")
--------------------------------------------------------------------------------------------------------

You can also add a term to your glossary without attaching a certificate or adding an owner at first. Once you have completed adding a term, navigate to the sidebar next to the term profile:

* Click **\+** under *Owners* to assign [owners](/product/capabilities/discovery/how-tos/add-owners) for a term.
* Click **Draft** to update the certificate for a term. Choose from four [certificate](/product/capabilities/discovery/how-tos/add-certificates) options \- *Draft*, *Verified*, *Deprecated*, and *No certificate*.
* Click **\+** under *Tags* to [classify](/product/capabilities/governance/tags/how-tos/attach-a-tag) the key characteristics of your term and configure [tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) for [linked assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
* Click **\+** under *Categories* to assign a term to a particular category.
* Click **\+** under any of the [associated term options](#add-associated-terms) to create relationships between terms.

**Did you know?**Adding an [owner](/product/capabilities/discovery/how-tos/add-owners) to your term can help your teammates figure out who is an expert on a glossary term. This is the person they should reach out to if they have any questions about the term or would like to collaborate on updating it.

Add new glossary categories[â](#add-new-glossary-categories "Direct link to Add new glossary categories")
-----------------------------------------------------------------------------------------------------------

You can add [categories](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#category) to your glossary to better organize your terms and create a hierarchy of information.

To add a category to your glossary:

1. On the *Glossary* page, next to the name of your glossary in the left, click the three horizontal dots icon and then click **Add category**.
2. In the *Create new category* dialog, enter the following details:
    1. For *Category name*, enter a name for your category \- for example, `Personal Finance`. The character limit for a category name is 80 characters.
    2. In the top right, *Draft* is set as the default certificate. To change the certificate, click the dropdown arrow and select the [certificate](/product/capabilities/discovery/how-tos/add-certificates) you'd like to apply to your category.
    3. For *Description*, write a short or detailed description for your category \- size limit for [description](/product/capabilities/discovery/how-tos/add-descriptions) values is 32766 bytes.
    4. For *Add owners*, add yourself or anyone else in your team as [owners](/product/capabilities/discovery/how-tos/add-owners) of the glossary.
    5. (Optional) Turn on **Create multiple** to create more categories from the same dialog.
    6. Click **Create** to add your category.
3. Next to the category name in the left menu, click the three horizontal dots icon and then add new terms or subcategories to your category.
4. (Optional) From the top right of the category profile:
    * Click the user avatars to view a list of recently visited users, total views on your category, total number of unique visitors, and total views by user.
        + Use the days filter to filter views and user activity in the last 7, 30, and 90 days.
        + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
    * Click the star button to [star your category](/product/capabilities/discovery/how-tos/star-assets).
    * Click the clipboard icon to copy the link for your term.
    * Click the pencil icon to edit the category name and description.
    * Click the **Slack** or **Teams** icon to share directly on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
    * Click the bell icon to enable [Slack](/product/integrations/collaboration/slack/faq/slack-integration) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration) notifications for glossary updates in Atlan.
    * Click the 3\-dot icon and then:
        + Click **Add announcement** to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) to your category.
        + Click **Export** to [export nested terms](/product/integrations/collaboration/spreadsheets/how-tos/export-assets) within a category to spreadsheets.
        + Click **Archive** to archive the category.

Move terms and categories[â](#move-terms-and-categories "Direct link to Move terms and categories")
-----------------------------------------------------------------------------------------------------

You can move terms and categories within and across glossaries to better organize your business context. Move terms to a different category or create subcategories within the same glossary or across your glossaries in Atlan.

You will need the following permissions:

* Moving a term or category from one glossary to another \- read, update, and delete permissions on both glossaries.
* Moving a term or category within the same glossary \- update permission on the glossary you want to reorganize.

To move an existing term or category:

1. From the left menu of any screen in Atlan, click **Glossary**.
2. In the left menu of the *Glossary* page, you can either:
    * Drag and drop a term or category into the relevant category within the same or a different glossary. In the popup, click **Confirm** to confirm the changes.
    * To the right of the term or category name, click the three dots icon and then click **Move to**. In the *Move to* dialog, select a relevant category within the same or a different glossary and then click **Move** to confirm the changes.

Search for glossary terms[â](#search-for-glossary-terms "Direct link to Search for glossary terms")
-----------------------------------------------------------------------------------------------------

There are two ways to search for glossary terms:

* In the left panel of the *Glossary* page, type the name of your term in the search bar and select your preferred option from the search results.
* Click the **\>** icon preceding the name of a category to expand the full list of nested terms in that category.

Add READMEs to your assets[â](#add-readmes-to-your-assets "Direct link to Add READMEs to your assets")
--------------------------------------------------------------------------------------------------------

For glossaries, terms, and categories, the asset profile provides a helpful summary. For example, the *Linked assets* section displays all the data assets that are linked to a particular term. This is also where you can [add a README](/product/integrations).

The secret to making your glossary really useful is to provide as much information as possible. Adding a README will allow you to state your objectives for defining a glossary unit in greater detail.

Inspect glossary terms and categories[â](#inspect-glossary-terms-and-categories "Direct link to Inspect glossary terms and categories")
-----------------------------------------------------------------------------------------------------------------------------------------

The navigation bar to the right of the asset profile provides high\-level information about the glossary item you are looking at. Here's what you can view:

* **Overview** shows key characteristics of a glossary term or category and helps you understand its relationship to other items in a glossary.
* **Activity** displays the [changelog](/product/capabilities/discovery/faq#what-is-an-activity-log) for your glossary items. For instance, you can find out who updated a term and when.
* **Resources** are links to [internal or external URLs](/product/capabilities/discovery/how-tos/add-a-resource) that can help your team better understand your glossary items. You can add links from GitHub, Google Docs, Google Sheets, or more as resources to your glossary item to provide additional context.
* **Requests** for a particular glossary item can be filtered by their status, such as *Pending*, *Approved*, and *Rejected*.
* **Properties** show the unique identification number of a glossary item and other properties.
* **Integrations** show [Slack](/product/integrations/collaboration/slack/faq/slack-integration) or [Teams](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration) messages and [Jira](/product/integrations/project-management/jira/faq/jira-integration) tickets pertaining to a particular glossary item.

Add associated terms[â](#add-associated-terms "Direct link to Add associated terms")
--------------------------------------------------------------------------------------

Who can do this?You will need your Atlan administrator to [enable associated terms](/product/integrations/identity-management/sso/how-tos/enable-associated-terms) \- except related terms.

In order to [inter\-relate your terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#associated-terms), you will first need to [set up a glossary](#set-up-a-glossary) and then [add terms](#add-new-glossary-terms).

To add relationships between terms:

1. From the left menu on any screen, click **Glossary**.
2. Under *Glossary* in the left menu, click the name of your glossary.
3. Under the glossary name, click the category in which your term is nested and then click the term you would like to enrich with an associated term.
4. In the *Overview* tab of the term sidebar to the right, under *Associated terms*, click **\+** to add relationships to your term. In the *Associate terms* dialog, configure the following:
    1. To select a term relationship:
        * Click **Related to** to add a [term that is related in some way](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#related-term).
        * Click **Recommended** to add a [standard form of use for the term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#recommended-term).
        * Click **Synonyms** to add a [term that is similar in meaning](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#synonym).
        * Click **Antonyms** to add a [term that is opposite in meaning](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#antonym).
        * Click **Translates to** to add a [translated version of the term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary).
        * Click **Valid values for** to add [applicable values for the term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary).
        * Click **Classifies** to add an [umbrella category for the term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary).
        * Click **Classified By** to add a [term that falls under the purview of the term in use](/product/capabilities/governance/glossary/concepts/what-is-a-glossary).
    2. For *Select terms*, select existing terms to associate.
    3. Click **Associate terms** to confirm your selections. The interrelated terms will reflect the relationships automatically in the term profile and sidebar.
5. (Optional) Under *Associated terms* in the term profile, you can view a visual representation of your term relationships:
    * Click any term attribute to focus on that specific term relationship.Â
    * Click the minus or plus icons to zoom out or zoom in on the graph, respectively.
    * Click the expand icon to enlarge the graph.
**Tags:*** [glossary](/tags/glossary)
* [business\-terms](/tags/business-terms)
* [definitions](/tags/definitions)

[PreviousGlossary](/product/capabilities/governance/glossary)[NextBulk upload terms in the glossary](/product/capabilities/governance/glossary/how-tos/bulk-upload-terms-in-the-glossary)

Copyright Â© 2025 Atlan Pte. Ltd.

