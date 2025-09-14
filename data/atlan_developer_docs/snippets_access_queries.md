# Source URL
https://developer.atlan.com/snippets/access/queries/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/access/queries/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to run SQL queries on an asset in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to run SQL queries on an asset in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/access/queries/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Running SQL queries on an asset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/access/queries/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to run SQL queries on an asset in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/access/queries/index.png
meta-twitter:title: Running SQL queries on an asset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Running SQL queries on an asset - Developer
-->

[Skip to content](#use-api-token-to-run-queries) Developer Running SQL queries on an asset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/sql/query/stream (POST)](../../../endpoints/#tag:apisqlquerystream-post)

Run queries on an asset
=======================

[1\.9\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.9.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To run SQL queries on an asset:

Java

Python

Kotlin

Raw REST API

| Running SQL query on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` QueryRequest query = QueryRequest.creator( // (1)             "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;",             "default/snowflake/1705755637"         )         .defaultSchema("RAW.WIDEWORLDIMPORTERS_WAREHOUSE") // (2)         .build(); QueryResponse response = client.queries.stream(query); // (3)  ``` |

1. To create a minimal query object, use the `QueryRequest` creator method and provide the following arguments:
    * SQL query to run.
    * unique name of the connection to use for the query.
2. You must provide default schema name to use for unqualified objects in the SQL, in the form `DB.SCHEMA`.
3. You can now execute the query using the `stream()` method.

| Running SQL query on an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.query import QueryRequest  client = AtlanClient()  query = QueryRequest( # (1)     sql='SELECT * FROM "PACKAGETYPES" LIMIT 50;',     data_source_name="default/snowflake/1705755637",     default_schema="RAW.WIDEWORLDIMPORTERS_WAREHOUSE", ) response = client.queries.stream(request=query)  # (2)  ``` |

1. To build a query, you need to use the `QueryRequest` and provide the following parameters:
    * `sql`: SQL query to run.
    * `data_source_name`: unique name of the connection to use for the query.
    * `default_schema`: default schema name to use for
     unqualified objects in the SQL, in the form `DB.SCHEMA`.
2. You can now execute the query using the `stream()` method.

| Running SQL query on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val query = QueryRequest.creator( // (1)             "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;",             "default/snowflake/1705755637"         )         .defaultSchema("RAW.WIDEWORLDIMPORTERS_WAREHOUSE") // (2)         .build() val response = client.queries.stream(query) // (3)  ``` |

1. To create a minimal query object, use the `QueryRequest` creator method and provide the following arguments:
    * SQL query to run.
    * unique name of the connection to use for the query.
2. You must provide default schema name to use for unqualified objects in the SQL, in the form `DB.SCHEMA`.
3. You can now execute the query using the `stream()` method.

| POST /api/sql/query/stream | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {    "sql": "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;", // (1)    "dataSourceName": "default/snowflake/1705755637",    "defaultSchema": "RAW.WIDEWORLDIMPORTERS_WAREHOUSE" }  ``` |

1. You must provide the following properties:
    * `sql`: SQL query to run.
    * `dataSourceName`: unique name of the connection to use for the query.
    * `defaultSchema`: default schema name to use for unqualified objects
     in the SQL, in the form `DB.SCHEMA`.

Use API token to run queries[¶](#use-api-token-to-run-queries "Permanent link")
-------------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also grant permission to run SQL queries on an asset using an API token, if you want. (This must be explicitly granted, as it is not possible by default.) You can even mask certain information through data policies on purposes linked to the API token.

API token permissions

Before executing queries on an asset using an API token, ensure that the [token is linked](../tokens/#link-an-api-token-to-a-persona) to [a persona with a data policy](../personas/#add-a-data-policy) that **permits queries for that specific asset**.

Java

Python

Kotlin

Raw REST API

| Running SQL query on an asset with API token | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` AuthPolicy data = Purpose.createDataPolicy( // (1)             "Mask the data", // (2)             purpose.getGuid(), // (3)             AuthPolicyType.DATA_MASK, // (4)             null,             List.of(token.getApiTokenUsername()), // (5)             false         )         .policyMaskType(DataMaskingType.REDACT) // (6)         .build(); AssetMutationResponse response = client.assets.save(List.of(data), false); // (7)  try (AtlanClient tokenClient = new AtlanClient(client.getBaseUrl(), token.getAttributes().getAccessToken())) { // (8)     QueryRequest query = QueryRequest.creator( // (9)             "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;",             "default/snowflake/1705755637"         )         .defaultSchema("RAW.WIDEWORLDIMPORTERS_WAREHOUSE") // (10)         .build();     QueryResponse response = tokenClient.queries.stream(query); // (11) }  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the `Purpose` to attach this policy to.
4. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
5. Set the policy user to the API `token`.
6. Set the type of masking to `REDACT` to redact the tagged elements in the query response.
7. To then add the policy to the purpose in Atlan, call the `save()` method with the policy object you've built.
8. Create a new `AtlanClient` set up to use the new API token.
9. To create a minimal query object, use the `QueryRequest` creator method and provide the following arguments:
    * SQL query to run.
    * unique name of the connection to use for the query.
10. You must provide default schema name to use for unqualified objects in the SQL, in the form `DB.SCHEMA`.
11. You can now execute the query using the `stream()` method.

| Running SQL query on an asset with API token | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.query import QueryRequest  client = AtlanClient()  data = Purpose.create_data_policy( # (1)     client=client, # (2)     name="Mask the data", # (3)     purpose_id=purpose.guid, # (4)     policy_type=AuthPolicyType.DATA_MASK, # (5)     policy_users={f"service-account-{token.client_id}"}, # (6)     all_users=False, # (7) ) data.policy_mask_type = DataMaskingType.REDACT # (8) response = client.asset.save(data) # (9)  token_client = AtlanClient( # (10)     base_url=client.base_url,     api_key=token.attributes.access_token ) query = QueryRequest( # (11)     sql='SELECT * FROM "PACKAGETYPES" LIMIT 50;',     data_source_name="default/snowflake/1705755637",     default_schema="RAW.WIDEWORLDIMPORTERS_WAREHOUSE", ) response = token_client.queries.stream(request=query)  # (12)  ``` |

1. Use the `create_data_policy()` method to start building
a data policy with the minimal required information.
2. You must provide a client instance.
3. You must give the policy a name.
4. You must provide the GUID of the `purpose` to attach this policy to.
5. Specify the type of policy (granting, denying or
masking the data of assets with the tags in the purpose).
6. Set the `policy_users` to the API `token`.
7. Set the `all_users` option to `False` as
this policy is intended specifically for the API token.
8. Set the type of masking to `REDACT` to redact the tagged elements in the query response.
9. To then add the policy to the purpose in Atlan,
call the `save()` method with the policy object you've built.
10. Create a new client with the API token.
11. To build a query, you need to use the `QueryRequest` and provide the following parameters:
    * `sql`: SQL query to run.
    * `data_source_name`: unique name of the connection to use for the query.
    * `default_schema`: default schema name to use for
     unqualified objects in the SQL, in the form `DB.SCHEMA`.
12. You can now execute the query using the `stream()` method.

| Running SQL query on an asset with API token | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` val data = Purpose.createDataPolicy( // (1)             "Mask the data", // (2)             purpose.getGuid(), // (3)             AuthPolicyType.DATA_MASK, // (4)             null,             List.of(token.getApiTokenUsername()), // (5)             false         )         .policyMaskType(DataMaskingType.REDACT) // (6)         .build() val response = client.assets.save(listOf(data), false) // (7)  AtlanClient(client.getBaseUrl(), token.getAttributes().getAccessToken()).use { tokenClient -> // (8)     val query = QueryRequest.creator( // (9)             "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;",             "default/snowflake/1705755637"         )         .defaultSchema("RAW.WIDEWORLDIMPORTERS_WAREHOUSE") // (10)         .build()     val response = tokenClient.queries.stream(query) // (11) }  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the `Purpose` to attach this policy to.
4. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
5. Set the policy user to the API `token`.
6. Set the type of masking to `REDACT` to redact the tagged elements in the query response.
7. To then add the policy to the purpose in Atlan, call the `save()` method with the policy object you've built.
8. Create a new `AtlanClient` set up to use the new API token.
9. To create a minimal query object, use the `QueryRequest` creator method and provide the following arguments:
    * SQL query to run.
    * unique name of the connection to use for the query.
10. You must provide default schema name to use for unqualified objects in the SQL, in the form `DB.SCHEMA`.
11. You can now execute the query using the `stream()` method.

| POST /api/sql/query/stream | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {    "sql": "SELECT * FROM \"PACKAGETYPES\" LIMIT 50;", // (1)    "dataSourceName": "default/snowflake/1705755637",    "defaultSchema": "RAW.WIDEWORLDIMPORTERS_WAREHOUSE" }  ``` |

1. You must provide the following properties:
    * `sql`: SQL query to run.
    * `dataSourceName`: unique name of the connection to use for the query.
    * `defaultSchema`: default schema name to use for
     unqualified objects in the SQL, in the form `DB.SCHEMA`.

Policy implementation delay

Be aware that there is a delay of a few minutes after applying new policies
to the token before they become fully effective. If you run a query immediately
after creating the policy, you may still observe unredacted information until
the policy is fully implemented.

---

2024\-01\-312025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/access/queries/) to provide us with more information. 

Back to top

[Previous API token management](../tokens/) [Next Users and groups introduction](../../users-groups/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

