# Source URL
https://docs.atlan.com/product/connections/how-tos/manage-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/manage-connectivity
link-alternate: https://docs.atlan.com/product/connections/how-tos/manage-connectivity
meta-description: Once you've scheduled or run a workflow you can modify its configuration at any time. The configuration that can be modified may vary by workflow but the general steps remain consistent.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've scheduled or run a workflow you can modify its configuration at any time. The configuration that can be modified may vary by workflow but the general steps remain consistent.
meta-og-locale: en
meta-og-title: Manage connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/manage-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage connectivity
===================

Once you've scheduled or run a workflow you can modify its configuration at any time. The configuration that can be modified may vary by workflow but the general steps remain consistent.

Modify connectivity[â](#modify-connectivity "Direct link to Modify connectivity")
-----------------------------------------------------------------------------------

[https://demo.arcade.software/lygvxF6AHa5wWtVSCAYS?embed](https://demo.arcade.software/lygvxF6AHa5wWtVSCAYS?embed)

To modify the configuration of an existing workflow, complete the following steps.

1. On the left of any screen, navigate toÂ**Workflow**.
2. Under *Monitor* select an existing workflow tile. (You may need to expand the run history or filter first.)
3. From the *Workflow Run History* table, click on the previous run of the workflow you want to modify.
4. In the upper left of the screen, change to the **Config** tab.
5. Modify the parts of the workflow configuration you require:
    * Under *`<Connector>` Credential*, use the **Edit Credentials** button to change the credentials for the source.
    
    danger If you're updating the connection credentials, you may also need to update the metadata filters before running the updated workflow. Atlan currently does not detect changes to your connection settings and update the metadata filters automatically.
    * Under *Connection settings*, use the **Edit**Â button to change the connection details:
    
    
        + Modify whether or not querying or data previews are allowed for the source.
        + Modify the query row limit to enable [exporting large query results via email](/product/capabilities/insights/references/tips-and-tricks#export-large-query-results-via-email).
        + Modify the query timeout limit \- expandable up to 60 minutes.
    * Under *Connection Admins*, click the pencil icon to add or remove connection admins.
    
    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
    * Under *Metadata*, use the selectors to modify which metadata to include and exclude.
    * To check for any [permissions or other configuration issues](/product/connections/concepts/what-are-preflight-checks) before running the workflow, click **Preflight checks**.
6. Once you've made your updates, click theÂ**Update** button to save the changes.
    * You can optionally run the workflow with the new configuration immediately.
    * You will need to confirm your changes by clicking theÂ**Yes** button. Note that some workflow changes may take a few minutes to come into effect.

That's it \- next time you run the workflow, or it runs on its schedule, it will use your changes! ð

dangerIf you modify the *Metadata* portion, any previously crawled metadata that is now excluded will be [archived](/product/capabilities/discovery/how-tos/access-archived-assets) on the next workflow run.

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [workflow](/tags/workflow)
* [automation](/tags/automation)
* [orchestration](/tags/orchestration)

[PreviousConnectors](/product/connections)[NextMonitor connectivity](/product/connections/how-tos/monitor-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

