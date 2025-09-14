# Source URL
https://docs.atlan.com/product/capabilities/insights/how-tos/save-and-share-queries

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/insights/how-tos/save-and-share-queries
link-alternate: https://docs.atlan.com/product/capabilities/insights/how-tos/save-and-share-queries
meta-description: You can save queries to re-run them later, schedule them, or share them.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You can save queries to re-run them later, schedule them, or share them.
meta-og-locale: en
meta-og-title: Save and share queries | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/insights/how-tos/save-and-share-queries
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Save and share queries | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Save and share queries
======================

You can save queries to re\-run them later, schedule them, or share them.

**Did you know?**You can only save queries through a *collection*. You can share collections with others, to share your queries.

Save a query[â](#save-a-query "Direct link to Save a query")
--------------------------------------------------------------

[https://demo.arcade.software/VOIsXIJRUp5YfRmDG0xd?embed](https://demo.arcade.software/VOIsXIJRUp5YfRmDG0xd?embed)

To save a query:

1. Open the query in Insights.
2. At the top right of the query, click the **Save** button.
3. In the resulting *Save query* dialog, enter the following details:
    1. For *Query name*, enter a name for the query.
    2. (Optional) For *Description*, add a description for the query.
    3. For *Collection*, you can either:
        * If you have access to existing collections, click the **Choose collection** dropdown to select an existing collection.
        * If you do not have any existing collections, click the **Create Collection** button. In the *Create collection* dialog, enter the following details:
            1. For *Name*, enter a name for the collection.
            2. (Optional) To the left of the name, click the image icon to choose an icon for the collection.
            3. (Optional) For *Description*, describe the collection.
            4. (Optional) For *Share*, select other users or groups that can access the collection. (See below for more details.)
            5. At the bottom of the *Create Collection* dialog, click **Create**.
    4. (Optional) For *Certificate*, click the **No certification** dropdown to assign a [certificate](/product/capabilities/discovery/how-tos/add-certificates) to the query.
    5. (Optional) For *Linked terms*, click the **Select terms** dropdown to assign a [term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) to the query.
    6. At the bottom of the dialog:
        * To only save your query, click **Save**.
        * To save and share your query, click **Save and share**.
            1. In the *Query saved* dialog, enter the following details:
                1. For *Add users or groups*, select other users or groups that can access the saved query.
                    1. (Optional) To the right of the user or group, click the **Editor** dropdown to change the sharing permissions:
                        + *Viewer* allows users to view and run all queries in the collection, but not edit them.
                        + *Editor* allows users to view, run, and edit all queries in the collection.
                    2. Click **Invite** to invite the users or groups.
                2. (Optional) Click **Copy Link** to copy the link for the saved query to share with others in your team.
                3. (Optional) Click the **Slack** or **Teams** button to share directly on [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams), respectively.
            2. Click **Done** to confirm your selections.

**Did you know?**Atlan currently supports a query length of 2 million characters for saved queries.

Share a query collection[â](#share-a-query-collection "Direct link to Share a query collection")
--------------------------------------------------------------------------------------------------

A collection helps you organize saved queries in Atlan. A collection could represent a topic, department, or team with similar saved queries under one roof. Within each collection, you can have a folder that contains multiple saves queries of a similar type.

[https://demo.arcade.software/3A7DtMd45Vy32LofaOX1?embed](https://demo.arcade.software/3A7DtMd45Vy32LofaOX1?embed)

To share a collection of queries:

1. Open Insights.
2. In the upper left, click the papers\-in\-a\-box icon.
3. Under the icon, click the name of the selected query collection.
4. From the resulting list of collections, hover over the collection you want to share.
5. Click the 3\-dot icon to the right of the collection name and choose **Edit collection**.
6. In the *Edit collection* dialog, under *Share*:
    1. Search for users or groups with whom to share the collection.
    2. (Optional) To the right of the user or group, click the **Can edit** dropdown to change the sharing permissions:
        * *Can edit* allows users to view, run, and edit all queries in the collection.
        * *Can view* allows users to view and run all queries in the collection, but not edit them.
    3. Repeat these steps for each user or group with whom you want to share the collection.
7. At the bottom of the *Edit collection* dialog, click **Update**.

**Did you know?**Users with only *Can view* permissions will still be able to change the interactive part of [interactive queries](/product/capabilities/insights/how-tos/make-a-query-interactive).

Move a saved query[â](#move-a-saved-query "Direct link to Move a saved query")
--------------------------------------------------------------------------------

[https://demo.arcade.software/Q1KFo144hm7oXcX3JhOe?embed](https://demo.arcade.software/Q1KFo144hm7oXcX3JhOe?embed)

To move a saved query to another query collection:

1. Open Insights.
2. In the upper left, click the papers\-in\-a\-box icon.
3. Under the icon, click the name of the selected query collection.
4. From the resulting list of collections, hover over the collection from which you want to move a query.
5. Click the 3\-dot icon to the right of the saved query name, and then click **Move to**.
6. In the *Move to* dialog, select the query collection to which you want to move your saved query.
7. Click **Move** to complete moving the saved query.

To duplicate, rename, edit, or delete your saved query, click the 3\-dot icon to the right of the saved query name and select the relevant option.

**Did you know?**If you add a Slack channel to the [*Query output share channels* field in your Slack integration](/product/integrations/collaboration/slack/how-tos/integrate-slack), you will be able to share your saved query and query results directly on that Slack channel. Atlan will deliver the query results as a CSV file on the same Slack thread.

View query sidebar[â](#view-query-sidebar "Direct link to View query sidebar")
--------------------------------------------------------------------------------

Once you've [saved a query](#save-a-query), you can access the query sidebar to view additional context for your saved queries.

[https://demo.arcade.software/zkh4T7a3Ek20HUGLF3i9?embed](https://demo.arcade.software/zkh4T7a3Ek20HUGLF3i9?embed)

To open the query sidebar for a saved query:

1. In the left *Explorer* panel in *Insights*, hover over a saved query and click the **Open query sidebar** icon.
2. From the saved query sidebar in the right, you can:
    * View details about your saved query in *Overview*, including the actual query. (Optional) You can add more details to your saved query:
        + Click the star button to [star the query](/product/capabilities/discovery/how-tos/star-assets) for quick access.
        + For *Description*, add a [description](/product/capabilities/discovery/how-tos/add-descriptions) to your saved query.
        + Click **\+Add README** to add a [README](/product/integrations) to your saved query and provide more context.
        + For *Collection*, click the collection name to view the query collection.
        + Copy the SQL query or expand the query view to fullscreen.
        + For *Terms*, add a [term](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) to [link to your saved query](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
        + For *Owners*, update the [owner](/product/capabilities/discovery/how-tos/add-owners) of the saved query or add more owners.
        + For *Tags*, [attach a tag](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your saved query.
        + For *Certificate*, update the [certification status](/product/capabilities/discovery/how-tos/add-certificates) of your saved query.
    * Click the **Relations** tab to view queried assets.
        + (Optional) Select a related asset to open the asset sidebar. From the asset sidebar, click the **Queries** tab to view the saved query auto\-linked to the asset.
    * Click the **Activity** tab to view the [activity log](/product/capabilities/discovery/faq#what-is-an-activity-log) for the saved query.
    * Click the **Schedules** tab to view [associated schedules](/product/capabilities/insights/how-tos/schedule-a-query) for the saved query, if any.
    * Click the **Resources** tab to view any linked [resources](/product/capabilities/discovery/how-tos/add-a-resource).
    * Click the **Requests** tab to view any [requests](/product/capabilities/requests/concepts/what-are-requests) on the saved query.
    * Click the **Properties** tab to view query properties.
    * Click the **Slack** or **Teams** tab to view [Slack](/product/integrations/collaboration/slack/faq/slack-integration) or [Teams](/product/integrations/collaboration/microsoft-teams/faq/microsoft-teams-integration) messages pertaining to the query.

Link saved queries[â](#link-saved-queries "Direct link to Link saved queries")
--------------------------------------------------------------------------------

Once you have saved a query, the saved query will be auto\-linked to all the assets queried or referenced in the SQL query. Linked queries are displayed in the [asset profile](/product/capabilities/discovery/concepts/what-are-asset-profiles) and [sidebar](/product/capabilities/discovery/concepts/what-are-asset-profiles).

[https://demo.arcade.software/EUHCHV2DBsI7lYuw0qnH?embed](https://demo.arcade.software/EUHCHV2DBsI7lYuw0qnH?embed)

You might want to link it to other assets, too. This can help you provide additional context on the assets and quickly find the saved query. For such assets, you can link the saved query as a [resource](/product/capabilities/discovery/how-tos/add-a-resource).

To link a saved query to an asset:

1. Open Insights.
2. In the upper left, click the papers\-in\-a\-box icon.
3. Under the icon, click the name of a query collection.
4. From the resulting list of collections, select a collection and then select the saved query you want to link as a [resource](/product/capabilities/discovery/how-tos/add-a-resource).
5. To copy the link for a saved query, you can either:

    * Click the 3\-dot icon to the right of the saved query name and then click **Copy link**.
        * In the top right of the query editor, click the 3\-dot icon and then click **Share**. From the *Share* menu, click **Copy link**.
6. From the left of menu, click **Assets** to navigate to your assets.
7. From the *Assets* page, select an asset to open the asset sidebar.
8. From the asset sidebar on the right, click the **Resources** tab and then click **\+ Add resource**.
9. In the *Add Resource* dialog, enter the following details:

    1. For *Link*, paste the saved query link you copied in Insights.
        2. For *Title*, add a title for your saved query.
        3. Click **Add** to add the saved query as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to the asset.

**Did you know?**Any user in Atlan will be able to preview saved queries for auto\-linked or manually linked assets from the asset sidebar \- unless there are [access policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) prohibiting them.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousHow to query data](/product/capabilities/insights/how-tos/query-data)[NextMake a query interactive](/product/capabilities/insights/how-tos/make-a-query-interactive)

Copyright Â© 2025 Atlan Pte. Ltd.

