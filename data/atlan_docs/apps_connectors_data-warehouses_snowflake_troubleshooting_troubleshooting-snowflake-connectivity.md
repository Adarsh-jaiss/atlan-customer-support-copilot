# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity
meta-description: Learn about troubleshooting snowflake connectivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting snowflake connectivity.
meta-og-locale: en
meta-og-title: Troubleshooting Snowflake connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Snowflake connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Snowflake connectivity
======================================

#### How to debug test authentication and preflight check errors?[â](#how-to-debug-test-authentication-and-preflight-check-errors "Direct link to How to debug test authentication and preflight check errors?")

**Missing warehouse grants**

`The user doesnât have USAGE and OPERATE grants on a warehouse.`

* [Grant warehouse access to the role](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake):

```
GRANT OPERATE, USAGE ON WAREHOUSE "<warehouse>" TO ROLE atlan_user_role;  

```
* Then, ensure that you [grant the role to the new user](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake):

```
GRANT ROLE atlan_user_role TO USER atlan_user;  

```

**Missing authorized access to SNOWFLAKE.ACCOUNT\_USAGE schema**

`The user doesnât have authorized access to the SNOWFLAKE.ACCOUNT_USAGE database`

* Reach out to your account admin to [grant imported privileges](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) on the `Snowflake` database to the role:

```
USE ROLE ACCOUNTADMIN;  
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE atlan_user_role;  

```
* If [using a copied database](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), you'll need to grant the following permissions:

```
GRANT USAGE ON DATABASE "<copied-database>" TO ROLE atlan_user_role;  
GRANT USAGE ON SCHEMA "<copied-schema>" IN DATABASE "<copied-database>" TO ROLE atlan_user_role;   
GRANT REFERENCES ON ALL VIEWS IN DATABASE "<copied-database>" TO ROLE atlan_user_role;  

```

**Missing usage grants on databases and/or schemas**

`The user doesn't have usage grants to the databases ` $missingDatabases ` and schemas ` $missingSchemas`

* Grant [missing permissions listed here](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) for information schema extraction method.

**Atlan IP not allowlisted**

`Atlan's current location or network isn't recognized by Snowflake's security settings. This can happen if Atlan's IP address isn't on the list of allowed addresses in Snowflake's network policies.`

* If you are using the IP allowlist in your Snowflake instance, you must add the [Atlan IP to the allowlist](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake). Contact [Atlan support](/support/submit-request) to obtain Atlan's IP addresses.

**Incorrect credentials**

`The username or the password provided to connect to the Snowflake account is incorrect.`

* Sign into the Snowflake account for the specified host and verify that the username and password are correct.
* You can also create a new user, if required, by following the steps [here](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake).

**Missing or unauthorized role**

`The role specified in your connection configuration doesn't exist in Snowflake or your user account doesn't have grant to use this role.`

* If the role does not exist or is missing the required grants, [create a role](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#create-role) and then [grant the role to the user](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake).

**User account locked**

`The user account you're using to connect to Snowflake has been locked temporarily because of multiple incorrect login attempts.`

* Wait for the user account to unlock or create a different user account to continue.

**Missing or unauthorized warehouse**

`The warehouse specified in your connection configuration doesn't exist in Snowflake or your user account doesn't have grant to use this warehouse.`

* Ensure that the warehouse name is configured correctly.
* Update the warehouse name in the configuration if your account is using a different warehouse. [Create a role](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#create-role) and then [grant the role to the user](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) for the updated warehouse.

**Missing access to non\-system databases or schemas**

`The configured user doesn't have usage grants to any database or schema.` or `The configured user doesn't have usage grants to any non-system database or schema.`

* This pertains to the information schema method of fetching metadata. Ensure that the user has authorized access to the databases and schemas to be crawled.
* Grant the requisite permissions as outlined [here](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake).

#### Why are some assets from a database or schema missing?[â](#why-are-some-assets-from-a-database-or-schema-missing "Direct link to Why are some assets from a database or schema missing?")

* Check the grants on the role attached to the user defined for the crawler. Ensure the missing database or schema is present in these grants.

```
SHOW GRANTS TO ROLE atlan_user_role;  

```

#### Why are new tables or views missing?[â](#why-are-new-tables-or-views-missing "Direct link to Why are new tables or views missing?")

* When using incremental extraction, consider running a one\-time full extraction to capture any newly introduced metadata.
* Make sure the role attached to the user defined for the crawler has grants for future tables and views being created in the database:

```
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
* Make sure you run the below commands as well so that new tables and views you've created in\-between are also visible to the user:

```
GRANT USAGE ON ALL SCHEMAS IN DATABASE "<database-name>" TO role atlan_user_role;   
GRANT REFERENCES ON ALL TABLES IN DATABASE "<database-name>" TO role atlan_user_role;   
GRANT REFERENCES ON ALL EXTERNAL TABLES IN DATABASE "<database-name>" TO atlan_user_role;  
GRANT REFERENCES ON ALL VIEWS IN DATABASE "<database-name>" TO role atlan_user_role;  

```

#### Why is some lineage missing?[â](#why-is-some-lineage-missing "Direct link to Why is some lineage missing?")

* The query miner only mines query history for up to the previous two weeks. The miner will not mine any queries that ran before that time window. If the queries that created your assets ran before that time window, lineage for those assets will not be present.
* To mine more than the previous two weeks of query history, either use [S3\-based query mining](/product/connections/how-tos/mine-queries-through-s3) or [contact Atlan support](/support/submit-request). Note that Snowflake itself only retains query history for so long as well, though. Once Snowflake itself no longer contains the query history we will be unable to mine it for lineage.
* Lineage is unsupported for parameterized queries. Snowflake currently [does not resolve values](https://community.snowflake.com/s/article/How-to-rebuild-parameterized-queries-from-bind-variables) for parameterized queries before logging them in query history. This limits Atlan from generating lineage in such cases.

#### Missing attributes and lineage[â](#missing-attributes-and-lineage "Direct link to Missing attributes and lineage")

* When using the account usage extraction method, there are currently some limitations. We are working with Snowflake to find workarounds for crawling the following:
    + External table location data
    + Procedures
    + Primary key designation
* Furthermore, only database\-level filtering is currently possible.

#### What views does Atlan require access to for the account usage method?[â](#what-views-does-atlan-require-access-to-for-the-account-usage-method "Direct link to What views does Atlan require access to for the account usage method?")

When using the [account usage method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#grant-permissions-for-account-usage-method) for fetching metadata, Atlan requires access to the following views in Snowflake:

* For the crawler: `DATABASES`, `SCHEMATA`, `TABLES`, `VIEWS`, `COLUMNS`, and `PIPES`
* For the miner and [popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics): `QUERY_HISTORY`, `ACCESS_HISTORY`, and `SESSIONS`

#### Why am I getting a destination URL mismatch error when authenticating via Okta SSO?[â](#why-am-i-getting-a-destination-url-mismatch-error-when-authenticating-via-okta-sso "Direct link to Why am I getting a destination URL mismatch error when authenticating via Okta SSO?")

This error can occur when you're connecting to Snowflake through [Okta SSO](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) and enter the URL of your Snowflake instance in a format different from the one used in Okta.

Snowflake follows two URL formats:

* Legacy format \- Â`<AccountLocator>.<Region>.snowflakecomputing.com` or `<AccountLocator>.<Region>.<cloud>.snowflakecomputing.com`
* New URL format \- `<Orgname>-<AccountName>.snowflakecomputing.com`

Ensure that you're using the same Snowflake URL format in Snowflake and Okta. Refer to [Snowflake documentation](https://community.snowflake.com/s/article/Destination-URL-mismatch-when-using-Native-OKTA-SSO) to learn more.

#### Why am I getting a 'name or service not known' error when connecting via private link?[â](#why-am-i-getting-a-name-or-service-not-known-error-when-connecting-via-private-link "Direct link to Why am I getting a 'name or service not known' error when connecting via private link?")

If you're getting the following error messages \- `java.net.UnknownHostException` and `Name or service not known` \- this is a known error for users who have upgraded to the Snowflake JDBC driver version 3\.13\.25\., have underscores in their account name, and connect to their Snowflake accounts over [private link](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake) (for example, `https://my_account.us-west-2.privatelink.snowflakecomputing.com`).

If your Snowflake account name has an underscore \- for example, `my_account` \- Â the updated JDBC driver will automatically convert underscores to dashes or hyphens `-`. This does not affect normal URLs because Snowflake accepts URLs with both hyphens and underscores.

For private link users, however, the JDBC driver will return an error if there are underscores present in the account name and the connection will fail. To troubleshoot further, refer to [Snowflake documentation](https://community.snowflake.com/s/article/Behaviour-Change-Release-information-associated-with-Snowflake-JDBC-driver-version-3-13-25).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousPreflight checks for Snowflake](/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake)[NextTroubleshooting Snowflake tag management](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-tag-management)

Copyright Â© 2025 Atlan Pte. Ltd.

