# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity
meta-description: Learn about troubleshooting tableau connectivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting tableau connectivity.
meta-og-locale: en
meta-og-title: Troubleshooting Tableau connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Tableau connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Tableau connectivity
====================================

#### What are the known limitations of the Tableau connector?[â](#what-are-the-known-limitations-of-the-tableau-connector "Direct link to What are the known limitations of the Tableau connector?")

Atlan currently does not support the following:

* Crawling [Tableau flows](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau) when using the [JWT bearer authentication method](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau), due to limitations at source.
* Crawling [tags](https://help.tableau.com/current/pro/desktop/en-us/tags.htm) from Tableau.
* Cataloging Tableau Pulse, stories, and views.
* Parsing custom SQL queries, where all tables referenced (whether in the main query or subqueries) are considered as upstream lineage for the asset.

#### Why does Atlan require the Site Administrator Explorer role in Tableau?[â](#why-does-atlan-require-the-site-administrator-explorer-role-in-tableau "Direct link to Why does Atlan require the Site Administrator Explorer role in Tableau?")

Atlan requires the *Site Administrator Explorer* role in Tableau to extract data source fields and calculated fields. It is not possible to fetch data source fields and calculated fields with the *Viewer* role in the current version of the Tableau Metadata API. Atlan uses this data to generate granular column\-level lineage across data sources and SQL assets. To extract lineage for assets in Tableau, the user must have the *Site Administrator Explorer* role.

#### Is lineage available for Tableau custom SQL data sources?[â](#is-lineage-available-for-tableau-custom-sql-data-sources "Direct link to Is lineage available for Tableau custom SQL data sources?")

Yes, Atlan can parse custom SQL queries in Tableau to generate lineage between the data source and tables. Lineage is available for tables from all SQL sources. However, column\-level lineage is currently not supported.

#### Why is upstream lineage missing for Tableau data sources?[â](#why-is-upstream-lineage-missing-for-tableau-data-sources "Direct link to Why is upstream lineage missing for Tableau data sources?")

If your [Tableau data source](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau) is in a [paused state](https://help.tableau.com/current/pro/desktop/en-us/refresh.htm?_gl=1*1grln1c*_ga*MTIzNzUxOTYwNS4xNzAyNjQ3NTY5*_ga_8YLN0SNXVS*MTcxMTY1MjI1Ni4xNC4xLjE3MTE2NTMyMDYuMC4wLjA.#pause-automatic-updates), the Tableau Metadata API may fail to provide the requisite metadata on source databases and tables for Atlan to generate upstream lineage. Restart your Tableau data source and ensure that it remains active while [crawling Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau). This will allow Atlan to fetch the requisite metadata to generate upstream lineage for data sources.

#### Why is there a discrepancy in asset count between Tableau and Atlan?[â](#why-is-there-a-discrepancy-in-asset-count-between-tableau-and-atlan "Direct link to Why is there a discrepancy in asset count between Tableau and Atlan?")

* Dashboards \- the Tableau UI does not display a unique count of dashboards. Dashboards in Tableau are represented in collections of one or more views. These may have same names as the views but are independent objects. Hence, the total count of these views in Tableau does not match the dashboard count in Atlan. Atlan sources the dashboard count from the Tableau API, which is the only reliable way to fetch the dashboard count.
* Data sources \- embedded data sources are not reported on the Tableau UI. However, in Atlan, data sources can be filtered to show only published data sources, which should match the count of data sources on the Tableau UI.

#### Can users who do not have access to a dashboard still see the preview?[â](#can-users-who-do-not-have-access-to-a-dashboard-still-see-the-preview "Direct link to Can users who do not have access to a dashboard still see the preview?")

Users can only see asset previews if the following conditions are met:

* They have the necessary permissions in both Tableau and Atlan.
* They are logged into Atlan and Tableau on the same browser.

Therefore, if a user lacks the permission to view a dashboard in Tableau, they will not be able to view the dashboard preview in Atlan. Even if they do have the necessary permissions, they will need to be logged into Tableau on the same browser as their Atlan instance for asset previews to work.

#### Why can I not see previews for my Tableau assets?[â](#why-can-i-not-see-previews-for-my-tableau-assets "Direct link to Why can I not see previews for my Tableau assets?")

* Your Tableau assets will be updated with previews during the next run of your Tableau workflow. If you have run the workflow and still do not see the previews, we suggest you rerun the workflow. Once you've rerun the workflow, the previews should be visible to all eligible users.
* If you're using Tableau Server with clickjack protection enabled and your Tableau instance URL is of a different origin than the Atlan instance URL, the asset previews will not load due to a same\-origin error from the browser. You will need to [disable clickjack protection](https://help.tableau.com/current/server/en-us/clickjack_protection.htm) to allow the Tableau asset previews to load.

#### Is the certified status in Tableau mapped to the certificates field in Atlan?[â](#is-the-certified-status-in-tableau-mapped-to-the-certificates-field-in-atlan "Direct link to Is the certified status in Tableau mapped to the certificates field in Atlan?")

Yes, the [isCertified status](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau) for published data sources in Tableau is mapped to the [certificates](/product/capabilities/discovery/how-tos/add-certificates) field in Atlan.

#### Is the owner field in Tableau mapped to the owners field in Atlan?[â](#is-the-owner-field-in-tableau-mapped-to-the-owners-field-in-atlan "Direct link to Is the owner field in Tableau mapped to the owners field in Atlan?")

No, the asset owner in Tableau is displayed as the source owner in the *Overview* section of the [asset sidebar](/product/capabilities/discovery/concepts/what-are-asset-profiles#asset-sidebar) in Atlan. This is also only available for Tableau [projects](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#projects), [flows](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#flows), [workbooks](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau), and published [data sources](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau).

Tableau has [retired metrics methods in API 3\.22](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_metrics.htm), hence source owner attribute for [metrics](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#metrics) is not supported in Atlan.

#### Why am I getting a "still creating the Metadata API store" error?[â](#why-am-i-getting-a-still-creating-the-metadata-api-store-error "Direct link to Why am I getting a \"still creating the Metadata API store\" error?")

Error message: `Still creating the Metadata API Store. Results from the query might be incomplete at this time. BACKFILL-RUNNING`

If your Tableau workflow is failing with the above error message, this is because the [Tableau Metadata API is being re\-indexed](https://kb.tableau.com/articles/Issue/error-still-creating-the-metadata-api-store-results-from-the-query-might-be-incomplete-at-this-time-querying-the-metadata-api) after a quarterly release. The re\-indexing of the Metadata API after quarterly releases can take up to a week, depending on the size of your instance.

Since [Atlan uses the Tableau Metadata API](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau) to fetch metadata, your Tableau workflows in Atlan may fail if the re\-indexing has not been completed. You can check the backfill status of the Tableau Metadata API Store following this [guide](https://help.tableau.com/current/server/en-us/dm_tools_backfill.htm).

Learn more about [common errors](https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_errors.html#common-errors) in your Metadata API query.

#### How to debug test authentication and preflight check errors?[â](#how-to-debug-test-authentication-and-preflight-check-errors "Direct link to How to debug test authentication and preflight check errors?")

**Incorrect hostname**

`Unable to connect to the specified host. Please verify that the host details are correct and retry.`

* Ensure that you have entered the hostname for your Tableau Online or Tableau Server instance correctly.
* If you're using a domain name, verify that the DNS name correctly resolves to the corresponding IP address.

**Connection timed out**

`Unable to connect to Tableau instance. Please verify server port or check if your server is up and running.`

* Ensure that you're using the correct port number, especially if using a custom port for Tableau Server.
* Verify network connectivity and DNS resolution \- you can also test from a different network or device.

**SSL error**

`Unable to connect. Please check your SSL setting.`

* Ensure that the server URL uses `https` if [SSL is enabled](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau). If the connection does not require an SSL, use `http` instead.

`The ssl details provided are incorrect. Please provide correct ssl certs.`

* If your Tableau Server instance uses a self\-signed or an internal CA SSL certificate, enter the [SSL certificate correctly in the recommended format](/product/connections/how-tos/provide-ssl-certificates).

**Incorrect port number**

`Unable to connect to Tableau instance. Please verify server port and retry.`

* Ensure that you're using the correct port number, especially if using a custom port for Tableau Server.

**Invalid personal access token**

`The personal access token you provided is invalid. Please check your PAT name and token value.`

* Ensure that you have entered the token name correctly and it matches the token generated in Tableau:
    + Token name is case\-sensitive.
    + Ensure that there are no extra spaces or characters.
* If the token you provided is invalid, you can [create a new token](https://help.tableau.com/current/pro/desktop/en-us/useracct.htm#create-a-personal-access-token).Â

**Incorrect site details**

`The site details provided are incorrect. Please provide correct site details.`

* Confirm that the site name in the URL matches the exact case and spelling of the site you are trying to access. Site names in Tableau are case\-sensitive.

**Incorrect username**

`Provided username is incorrect. Please check.`

* Confirm that the username is present in Tableau. Otherwise, you can [add a new user for basic authentication](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau).

**Incorrect client ID**

`The client id provided is incorrect or site is empty or connected app in tableau is deleted. Please check and try again.`

* Ensure that you have specified the site name if using JWT bearer authentication.
* Ensure that the [connected app](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau) is present in Tableau and verify the client ID.

**Incorrect secret ID or value**

`The secret id provided is incorrect or the secret value is deleted. Please check and try again.` or `The secret value provided is incorrect. Please check your secret value and try again.`

* Verify the secret ID of the [connected app](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau).
* Ensure that the secret value of the [connected app](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau) has not been deleted.
**Tags:*** [catalog](/tags/catalog)
* [metadata](/tags/metadata)
* [discovery](/tags/discovery)

[PreviousPreflight checks for Tableau](/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau)

Copyright Â© 2025 Atlan Pte. Ltd.

