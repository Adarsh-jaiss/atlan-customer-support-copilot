# Source URL
https://docs.atlan.com/product/administration/logs/how-tos/view-query-logs

================================================================================

<!--
canonical: https://docs.atlan.com/product/administration/logs/how-tos/view-query-logs
link-alternate: https://docs.atlan.com/product/administration/logs/how-tos/view-query-logs
meta-description: You can also view additional details and run status for each query and use filters to track specific queries. Query logs are persisted throughout the lifecycle of the Atlan instance for your organization.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You can also view additional details and run status for each query and use filters to track specific queries. Query logs are persisted throughout the lifecycle of the Atlan instance for your organization.
meta-og-locale: en
meta-og-title: View query logs | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/administration/logs/how-tos/view-query-logs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: View query logs | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

View query logs
===============

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to view query logs.

The query log helps you track all queries run in Atlan, including:

* saved and unsaved queries in the Insights query editor
* queries run through both the Atlan UI and API
* sample data previews from asset profiles

You can also view additional details and run status for each query and use filters to track specific queries. Query logs are persisted throughout the lifecycle of the Atlan instance for your organization.

[https://demo.arcade.software/z3jtVaejsAh2Vc1g3Eq4?embed&show_copy_link=true](https://demo.arcade.software/z3jtVaejsAh2Vc1g3Eq4?embed&show_copy_link=true)

To view query logs:

1. From the left menu of any screen in Atlan, click **Admin**.
2. Under the *Logs* heading of your admin *Workspace*, click **Query logs**.
3. On the *Query logs* page, you can view all the queries that your users have run or are running in Atlan.
4. (Optional) Click the funnel icon to filter queries and then:
    * Click **Status** to filter queries by run status â *Succeeded*, *Failed*, or *Aborted*.
    * Click **Users** to filter queries by Atlan users.
5. (Optional) Use the search bar to search for queries using specific keywords.
6. The default date range is set to 30 days. Use the date filter to view query logs for the last 7 days, past 3 or 6 months, or a custom date range of your choice.
7. For any query listed in the query logs, you can view the query name, connection, execution details, user that run the query, and timestamp for when the query was run. (Optional) Click any query to view more details in the *Query details* sidebar:
    * In the *Query details* sidebar, you can view the full query, connection, database, schema, and asset name, query status, and query run time.
    * Click the copy icon to copy the query and use it as a template for writing your own queries.
    * Click the expand icon to see the full query.
    * For *Query Source*, click **Copy ID** to copy the query ID.
**Tags:*** [data](/tags/data)
* [api](/tags/api)

[PreviousHow to view event logs](/product/administration/logs/how-tos/view-event-logs)[NextCreate README templates](/product/administration/readme-templates/how-tos/create-readme-templates)

Copyright Â© 2025 Atlan Pte. Ltd.

