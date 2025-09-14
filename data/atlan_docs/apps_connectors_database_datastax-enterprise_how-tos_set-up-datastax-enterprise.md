# Source URL
https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise
link-alternate: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise
meta-description: Set up DataStax Enterprise
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Set up DataStax Enterprise
meta-og-locale: en
meta-og-title: Set up DataStax Enterprise | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up DataStax Enterprise | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up DataStax Enterprise
==========================

ð¤ **Who can do this?**You need your DataStax Enterprise administrator or a user who has create role permissions to run these commands; you may not have access yourself. For more details, refer to the [Apache Cassandra documentation on role\-based access control](https://cassandra.apache.org/doc/stable/cassandra/cql/security.html).

This guide outlines the steps to configure your DataStax Enterprise instance so Atlan can crawl its metadata.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, ensure you have the following:

* **Access to a DataStax Enterprise instance**\- You need the necessary credentials to connect to your Cassandra instance.
* **`cqlsh` installed**\- The Cassandra Query Language Shell (cqlsh) is required to execute commands for user and permission management. If `cqlsh` is not installed, refer to the [Apache Cassandra documentation for `cqlsh`](https://cassandra.apache.org/doc/stable/cassandra/tools/cqlsh.html).

Create an Atlan user role[â](#create-an-atlan-user-role "Direct link to Create an Atlan user role")
-----------------------------------------------------------------------------------------------------

This section guides you through creating a dedicated role in DataStax Enterprise for Atlan.

1. **Connect to the DataStax Enterprise instance**: Use `cqlsh` to connect to your DataStax Enterprise instance.
2. **Create a dedicated role for Atlan**: Run the following command in `cqlsh` to create a role.

    ```
    CREATE ROLE <username> WITH SUPERUSER = false AND LOGIN = true AND PASSWORD = '<password>';

    ```
        Replace the placeholders

    * `<username>`: The username for the Atlan role.
        * `<password>`: A strong and unique password.

Grant permissions to the Atlan user role[â](#grant-permissions-to-the-atlan-user-role "Direct link to Grant permissions to the Atlan user role")
--------------------------------------------------------------------------------------------------------------------------------------------------

Atlan needs specific permissions to access metadata in DataStax Enterprise Follow these steps to grant the required permissions:

1. Grant `DESCRIBE` on all keyspaces with:

    ```
    GRANT DESCRIBE ON ALL KEYSPACES TO atlan-admin;

    ```
2. You may also choose to grant `DESCRIBE` permission on specific keyspaces by running the following command:

    ```
    GRANT DESCRIBE ON KEYSPACE <keyspace_name> TO <username>;

    ```
        Replace placeholders:

    * `<keyspace_name>`: The name of the keyspace.
        * `<username>`: The username for the Atlan role.
        Run this command for each keyspace you want Atlan to access.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousDataStax Enterprise](/apps/connectors/database/datastax-enterprise)[NextCrawl DataStax Enterprise](/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise)

Copyright Â© 2025 Atlan Pte. Ltd.

