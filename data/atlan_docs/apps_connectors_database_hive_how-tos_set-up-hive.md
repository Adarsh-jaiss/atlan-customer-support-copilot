# Source URL
https://docs.atlan.com/apps/connectors/database/hive/how-tos/set-up-hive

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/hive/how-tos/set-up-hive
link-alternate: https://docs.atlan.com/apps/connectors/database/hive/how-tos/set-up-hive
meta-description: :::warning Who can do this? You will need your Hadoop administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need your Hadoop administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Hive | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/hive/how-tos/set-up-hive
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Hive | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Hive
===========

Who can do this?You will need your Hadoop administrator to run these commands \- you may not have access yourself.

Currently, we only support basic username and password authentication for Hive. Complete the following steps to configure it.

Set the right permissions[â](#set-the-right-permissions "Direct link to Set the right permissions")
-----------------------------------------------------------------------------------------------------

To configure basic authentication for Hive, enter the following details:

1. For *Host Name*, enter theÂ Atlan\-accessible Hive instance URL.
2. For *Port*, enter the port number where your Hive instance is accessible.
3. For *Default Schema*, enter the default schema name in your Hive instance for connection. Atlan will crawl other schemas too \- not just the default one.

Grant read permission on objects[â](#grant-read-permission-on-objects "Direct link to Grant read permission on objects")
--------------------------------------------------------------------------------------------------------------------------

Grant read permission on objects with the following commands:

```
GRANT SELECT ON DATABASE <database_name> TO USER <username>;  

```
Atlan requires read permission for all the objects you want to crawl in Hive.

**Did you know?**Available users and access control may also be controlled or affected by HDFS ACL, LDAP, and any other policy engine that is in effect. Overall, Atlan requires the authenticating user to have read permission at a minimum.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousHive](/apps/connectors/database/hive)[NextSet up a private network link to Hive](/apps/connectors/database/hive/how-tos/set-up-a-private-network-link-to-hive)

Copyright Â© 2025 Atlan Pte. Ltd.

