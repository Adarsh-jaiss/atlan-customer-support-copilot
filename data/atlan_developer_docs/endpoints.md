# Source URL
https://developer.atlan.com/endpoints/

================================================================================

<!--
canonical: https://developer.atlan.com/endpoints/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/endpoints.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Endpoints - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/endpoints/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/endpoints.png
meta-twitter:title: Endpoints - Developer
meta-viewport: width=device-width,initial-scale=1
title: Endpoints - Developer
-->

[Skip to content](#endpoints) Developer Endpoints Initializing search 

* 
* [Overview](..)
* [Getting started](../getting-started/)
* [Common tasks](../snippets/)
* [Asset\-specific](../patterns/)
* [Governance structures](../governance/)
* [Reference](../reference/)

Endpoints[¶](#endpoints "Permanent link")
=========================================

Following is a list of all API endpoints and the use cases they enable:

/api/meta/entity/auditSearch (POST)[¶](#tag:apimetaentityauditsearch-post "Permanent link")
-------------------------------------------------------------------------------------------

* [Review changes to an asset](../snippets/advanced-examples/history/)

/api/meta/entity/bulk (DELETE)[¶](#tag:apimetaentitybulk-delete "Permanent link")
---------------------------------------------------------------------------------

* [Delete an asset](../snippets/advanced-examples/delete/)
* [Manage lineage](../snippets/common-examples/lineage/manage/)
* [Manage personas](../snippets/access/personas/)
* [Manage policies](../snippets/access/policies/)
* [Manage purposes](../snippets/access/purposes/)

/api/meta/entity/bulk (POST)[¶](#tag:apimetaentitybulk-post "Permanent link")
-----------------------------------------------------------------------------

* [Add asset resources](../snippets/common-examples/resources/)
* [Categorize terms](../snippets/common-examples/glossary/categorize-terms/)
* [Certify assets](../snippets/common-examples/certificates/)
* [Change custom metadata](../snippets/common-examples/custom-metadata/)
* [Change description](../snippets/common-examples/descriptions/)
* [Change owners](../snippets/common-examples/owners/)
* [Combine multiple operations](../snippets/advanced-examples/combine/)
* [Create a hierarchy](../snippets/common-examples/glossary/create-hierarchy/)
* [Create an asset](../snippets/advanced-examples/create/)
* [Create objects](../snippets/common-examples/glossary/create/)
* [End\-to\-end bulk update](../patterns/bulk/end-to-end/)
* [Link domains to assets](../snippets/common-examples/domain-assignment/)
* [Link terms to assets](../snippets/common-examples/term-assignment/)
* [Manage AI assets](../patterns/create/ai/)
* [Manage API assets](../patterns/create/api/)
* [Manage AWS S3 assets](../patterns/create/aws/)
* [Manage Airflow assets](../patterns/create/airflow/)
* [Manage App assets](../patterns/create/app/)
* [Manage Azure Data Lake Storage assets](../patterns/create/adls/)
* [Manage Azure Event Hub assets](../patterns/create/azure_event_hub/)
* [Manage Data Quality rules](../patterns/create/dq_rules/)
* [Manage DocumentDB assets](../patterns/create/documentdb/)
* [Manage Google Cloud Storage assets](../patterns/create/gcs/)
* [Manage Google Data Studio assets](../patterns/create/gds/)
* [Manage Insights assets](../patterns/create/insight/)
* [Manage Kafka assets](../patterns/create/kafka/)
* [Manage Preset assets](../patterns/create/preset/)
* [Manage QuickSight assets](../patterns/create/quick_sight/)
* [Manage Superset assets](../patterns/create/superset/)
* [Manage announcements](../snippets/common-examples/announcements/)
* [Manage asset READMEs](../snippets/common-examples/readme/)
* [Manage asset relationships with attributes](../snippets/common-examples/relationship-attributes/)
* [Manage column profiling](../snippets/common-examples/profiling-and-popularity/profiling/)
* [Manage cube assets](../patterns/create/cube/)
* [Manage data domains](../snippets/datamesh/datadomains/)
* [Manage data products](../snippets/datamesh/dataproducts/)
* [Manage file assets](../patterns/create/file/)
* [Manage lineage](../snippets/common-examples/lineage/manage/)
* [Manage personas](../snippets/access/personas/)
* [Manage policies](../snippets/access/policies/)
* [Manage popularity](../snippets/common-examples/profiling-and-popularity/popularity/)
* [Manage purposes](../snippets/access/purposes/)
* [Manage relational assets](../patterns/create/relational/)
* [Restore an asset](../snippets/advanced-examples/restore/)
* [Tag (classify) assets](../snippets/common-examples/tags/)
* [Update an asset](../snippets/advanced-examples/update/)
* [Update multiple assets](../patterns/bulk/multiple-assets/)

/api/meta/entity/guid/{guid} (GET)[¶](#tag:apimetaentityguidguid-get "Permanent link")
--------------------------------------------------------------------------------------

* [Retrieve an asset](../snippets/advanced-examples/read/)

/api/meta/entity/guid/{guid}/businessmetadata (POST)[¶](#tag:apimetaentityguidguidbusinessmetadata-post "Permanent link")
-------------------------------------------------------------------------------------------------------------------------

* [Change custom metadata](../snippets/common-examples/custom-metadata/)

/api/meta/entity/guid/{guid}/businessmetadata/{name} (POST)[¶](#tag:apimetaentityguidguidbusinessmetadataname-post "Permanent link")
------------------------------------------------------------------------------------------------------------------------------------

* [Change custom metadata](../snippets/common-examples/custom-metadata/)

/api/meta/entity/uniqueAttribute/type/{typeName}/attr:qualifiedName\={qualifiedName} (GET)[¶](#tag:apimetaentityuniqueattributetypetypenameattrqualifiednamequalifiedname-get "Permanent link")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* [Retrieve an asset](../snippets/advanced-examples/read/)

/api/meta/entity/uniqueAttribute/type/{typeName}/classification/{name}?attr:qualifiedName\={qualifiedName} (DELETE)[¶](#tag:apimetaentityuniqueattributetypetypenameclassificationnameattrqualifiednamequalifiedname-delete "Permanent link")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* [Tag (classify) assets](../snippets/common-examples/tags/)

/api/meta/entity/uniqueAttribute/type/{typeName}/classifications?attr:qualifiedName\={qualifiedName} (POST)[¶](#tag:apimetaentityuniqueattributetypetypenameclassificationsattrqualifiednamequalifiedname-post "Permanent link")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* [Tag (classify) assets](../snippets/common-examples/tags/)

/api/meta/entity/uniqueAttribute/type/{typeName}?attr:qualifiedName\={qualifiedName} (GET)[¶](#tag:apimetaentityuniqueattributetypetypenameattrqualifiednamequalifiedname-get "Permanent link")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* [Manage column profiling](../snippets/common-examples/profiling-and-popularity/profiling/)
* [Manage popularity](../snippets/common-examples/profiling-and-popularity/popularity/)

/api/meta/lineage/getlineage (POST)[¶](#tag:apimetalineagegetlineage-post "Permanent link")
-------------------------------------------------------------------------------------------

* [Traverse lineage](../snippets/common-examples/lineage/traverse/)

/api/meta/lineage/list (POST)[¶](#tag:apimetalineagelist-post "Permanent link")
-------------------------------------------------------------------------------

* [Traverse lineage](../snippets/common-examples/lineage/traverse/)

/api/meta/search/indexsearch (POST)[¶](#tag:apimetasearchindexsearch-post "Permanent link")
-------------------------------------------------------------------------------------------

* [Aggregating search results](../search/aggregation/)
* [Common search fields](../search/attributes/common/)
* [Compound queries](../search/queries/compound/)
* [End\-to\-end bulk update](../patterns/bulk/end-to-end/)
* [Find and apply suggestions](../snippets/advanced-examples/suggestions/)
* [Limiting details](../search/limit/)
* [Manage personas](../snippets/access/personas/)
* [Manage policies](../snippets/access/policies/)
* [Manage purposes](../snippets/access/purposes/)
* [Paging search results](../search/paging/)
* [Querying overview](../search/queries/)
* [Retrieval by name](../snippets/common-examples/glossary/retrieve-by-name/)
* [Search examples](../snippets/common-examples/finding/examples/)
* [Search for assets](../snippets/advanced-examples/search/)
* [Sorting search results](../search/sort/)
* [Term\-level queries](../search/queries/terms/)
* [Traverse category hierarchy](../snippets/common-examples/glossary/hierarchy/)

/api/meta/search/searchlog (POST)[¶](#tag:apimetasearchsearchlog-post "Permanent link")
---------------------------------------------------------------------------------------

* [Review accesses of an asset](../snippets/search-logs/)

/api/meta/task/search (POST)[¶](#tag:apimetatasksearch-post "Permanent link")
-----------------------------------------------------------------------------

* [Monitor propagation](../snippets/tags/monitor-propagation/)

/api/meta/types/typedef/name/{name} (DELETE)[¶](#tag:apimetatypestypedefnamename-delete "Permanent link")
---------------------------------------------------------------------------------------------------------

* [Delete custom metadata](../snippets/custom-metadata/delete/)

/api/meta/types/typedef/name/{name} (GET)[¶](#tag:apimetatypestypedefnamename-get "Permanent link")
---------------------------------------------------------------------------------------------------

* [Manage Atlan tags](../snippets/tags/manage/)
* [Manage options (enumerations)](../snippets/custom-metadata/enums/)

/api/meta/types/typedef/{name} (DELETE)[¶](#tag:apimetatypestypedefname-delete "Permanent link")
------------------------------------------------------------------------------------------------

* [Manage Atlan tags](../snippets/tags/manage/)
* [Manage options (enumerations)](../snippets/custom-metadata/enums/)

/api/meta/types/typedefs (GET)[¶](#tag:apimetatypestypedefs-get "Permanent link")
---------------------------------------------------------------------------------

* [Retrieve custom metadata](../snippets/custom-metadata/read/)

/api/meta/types/typedefs (POST)[¶](#tag:apimetatypestypedefs-post "Permanent link")
-----------------------------------------------------------------------------------

* [Create custom metadata](../snippets/custom-metadata/create/)
* [Manage Atlan tags](../snippets/tags/manage/)
* [Manage badges](../snippets/custom-metadata/badge/)
* [Manage options (enumerations)](../snippets/custom-metadata/enums/)

/api/meta/types/typedefs (PUT)[¶](#tag:apimetatypestypedefs-put "Permanent link")
---------------------------------------------------------------------------------

* [Manage Atlan tags](../snippets/tags/manage/)
* [Manage options (enumerations)](../snippets/custom-metadata/enums/)
* [Update custom metadata](../snippets/custom-metadata/update/)

/api/meta/types/typedefs/?type\=CLASSIFICATION (GET)[¶](#tag:apimetatypestypedefstypeclassification-get "Permanent link")
-------------------------------------------------------------------------------------------------------------------------

* [Manage Atlan tags](../snippets/tags/manage/)

/api/meta/types/typedefs/?type\=ENUM (GET)[¶](#tag:apimetatypestypedefstypeenum-get "Permanent link")
-----------------------------------------------------------------------------------------------------

* [Manage options (enumerations)](../snippets/custom-metadata/enums/)

/api/service/apikeys (GET)[¶](#tag:apiserviceapikeys-get "Permanent link")
--------------------------------------------------------------------------

* [API token management](../snippets/access/tokens/)

/api/service/apikeys (POST)[¶](#tag:apiserviceapikeys-post "Permanent link")
----------------------------------------------------------------------------

* [API token management](../snippets/access/tokens/)

/api/service/apikeys/{guid} (DELETE)[¶](#tag:apiserviceapikeysguid-delete "Permanent link")
-------------------------------------------------------------------------------------------

* [API token management](../snippets/access/tokens/)

/api/service/apikeys/{guid} (POST)[¶](#tag:apiserviceapikeysguid-post "Permanent link")
---------------------------------------------------------------------------------------

* [API token management](../snippets/access/tokens/)

/api/service/events/login (GET)[¶](#tag:apiserviceeventslogin-get "Permanent link")
-----------------------------------------------------------------------------------

* [Access events](../snippets/access/events/)

/api/service/events/main (GET)[¶](#tag:apiserviceeventsmain-get "Permanent link")
---------------------------------------------------------------------------------

* [Access events](../snippets/access/events/)

/api/service/files/presignedUrl (POST)[¶](#tag:apiservicefilespresignedurl-post "Permanent link")
-------------------------------------------------------------------------------------------------

* [File management](../snippets/files/)

/api/service/groups (GET)[¶](#tag:apiservicegroups-get "Permanent link")
------------------------------------------------------------------------

* [Retrieve users and groups](../snippets/users-groups/read/)

/api/service/groups (POST)[¶](#tag:apiservicegroups-post "Permanent link")
--------------------------------------------------------------------------

* [Create users and groups](../snippets/users-groups/create/)

/api/service/groups/{guid} (POST)[¶](#tag:apiservicegroupsguid-post "Permanent link")
-------------------------------------------------------------------------------------

* [Update users and groups](../snippets/users-groups/update/)

/api/service/groups/{guid}/delete (POST)[¶](#tag:apiservicegroupsguiddelete-post "Permanent link")
--------------------------------------------------------------------------------------------------

* [Delete users and groups](../snippets/users-groups/delete/)

/api/service/groups/{guid}/members (GET)[¶](#tag:apiservicegroupsguidmembers-get "Permanent link")
--------------------------------------------------------------------------------------------------

* [Retrieve users and groups](../snippets/users-groups/read/)

/api/service/groups/{guid}/members/remove (POST)[¶](#tag:apiservicegroupsguidmembersremove-post "Permanent link")
-----------------------------------------------------------------------------------------------------------------

* [Update users and groups](../snippets/users-groups/update/)

/api/service/idp/{sso\_alias}/mappers (GET)[¶](#tag:apiserviceidpsso_aliasmappers-get "Permanent link")
-------------------------------------------------------------------------------------------------------

* [Manage SSO group mapping](../snippets/users-groups/sso-group-mapping/)

/api/service/idp/{sso\_alias}/mappers (POST)[¶](#tag:apiserviceidpsso_aliasmappers-post "Permanent link")
---------------------------------------------------------------------------------------------------------

* [Manage SSO group mapping](../snippets/users-groups/sso-group-mapping/)

/api/service/idp/{sso\_alias}/mappers/{group\_map\_id} (GET)[¶](#tag:apiserviceidpsso_aliasmappersgroup_map_id-get "Permanent link")
------------------------------------------------------------------------------------------------------------------------------------

* [Manage SSO group mapping](../snippets/users-groups/sso-group-mapping/)

/api/service/idp/{sso\_alias}/mappers/{group\_map\_id} (POST)[¶](#tag:apiserviceidpsso_aliasmappersgroup_map_id-post "Permanent link")
--------------------------------------------------------------------------------------------------------------------------------------

* [Manage SSO group mapping](../snippets/users-groups/sso-group-mapping/)

/api/service/idp/{sso\_alias}/mappers/{group\_map\_id}/delete (POST)[¶](#tag:apiserviceidpsso_aliasmappersgroup_map_iddelete-post "Permanent link")
---------------------------------------------------------------------------------------------------------------------------------------------------

* [Manage SSO group mapping](../snippets/users-groups/sso-group-mapping/)

/api/service/users (GET)[¶](#tag:apiserviceusers-get "Permanent link")
----------------------------------------------------------------------

* [Retrieve users and groups](../snippets/users-groups/read/)

/api/service/users (POST)[¶](#tag:apiserviceusers-post "Permanent link")
------------------------------------------------------------------------

* [Create users and groups](../snippets/users-groups/create/)

/api/service/users/{guid} (POST)[¶](#tag:apiserviceusersguid-post "Permanent link")
-----------------------------------------------------------------------------------

* [Update users and groups](../snippets/users-groups/update/)

/api/service/users/{guid}/groups (GET)[¶](#tag:apiserviceusersguidgroups-get "Permanent link")
----------------------------------------------------------------------------------------------

* [Retrieve users and groups](../snippets/users-groups/read/)

/api/service/users/{guid}/groups (POST)[¶](#tag:apiserviceusersguidgroups-post "Permanent link")
------------------------------------------------------------------------------------------------

* [Update users and groups](../snippets/users-groups/update/)

/api/service/users/{guid}/update (POST)[¶](#tag:apiserviceusersguidupdate-post "Permanent link")
------------------------------------------------------------------------------------------------

* [Update users and groups](../snippets/users-groups/update/)

/api/service/workflows/indexsearch (POST)[¶](#tag:apiserviceworkflowsindexsearch-post "Permanent link")
-------------------------------------------------------------------------------------------------------

* [Athena assets](../snippets/workflows/packages/athena-assets/)
* [BigQuery assets](../snippets/workflows/packages/bigquery-assets/)
* [Confluent Kafka assets](../snippets/workflows/packages/confluent-kafka-assets/)
* [Databricks assets](../snippets/workflows/packages/databricks-assets/)
* [Databricks miner](../snippets/workflows/packages/databricks-miner/)
* [DynamoDB assets](../snippets/workflows/packages/dynamodb-assets/)
* [Fivetran enrichment](../snippets/workflows/packages/fivetran-enrichment/)
* [Glue assets](../snippets/workflows/packages/glue-assets/)
* [Looker assets](../snippets/workflows/packages/looker-assets/)
* [MongoDB assets](../snippets/workflows/packages/mongodb-assets/)
* [Oracle assets](../snippets/workflows/packages/oracle-assets/)
* [Postgres assets](../snippets/workflows/packages/postgres-assets/)
* [PowerBI assets](../snippets/workflows/packages/powerbi-assets/)
* [Redshift assets](../snippets/workflows/packages/redshift-assets/)
* [SQL Server assets](../snippets/workflows/packages/sql-server-assets/)
* [Sigma assets](../snippets/workflows/packages/sigma-assets/)
* [Snowflake assets](../snippets/workflows/packages/snowflake-assets/)
* [Snowflake miner](../snippets/workflows/packages/snowflake-miner/)
* [Tableau assets](../snippets/workflows/packages/tableau-assets/)
* [dbt assets](../snippets/workflows/packages/dbt-assets/)

/api/service/workflows/submit (POST)[¶](#tag:apiserviceworkflowssubmit-post "Permanent link")
---------------------------------------------------------------------------------------------

* [Athena assets](../snippets/workflows/packages/athena-assets/)
* [BigQuery assets](../snippets/workflows/packages/bigquery-assets/)
* [Confluent Kafka assets](../snippets/workflows/packages/confluent-kafka-assets/)
* [Databricks assets](../snippets/workflows/packages/databricks-assets/)
* [Databricks miner](../snippets/workflows/packages/databricks-miner/)
* [DynamoDB assets](../snippets/workflows/packages/dynamodb-assets/)
* [Fivetran enrichment](../snippets/workflows/packages/fivetran-enrichment/)
* [Glue assets](../snippets/workflows/packages/glue-assets/)
* [Looker assets](../snippets/workflows/packages/looker-assets/)
* [MongoDB assets](../snippets/workflows/packages/mongodb-assets/)
* [Oracle assets](../snippets/workflows/packages/oracle-assets/)
* [Postgres assets](../snippets/workflows/packages/postgres-assets/)
* [PowerBI assets](../snippets/workflows/packages/powerbi-assets/)
* [Redshift assets](../snippets/workflows/packages/redshift-assets/)
* [SQL Server assets](../snippets/workflows/packages/sql-server-assets/)
* [Sigma assets](../snippets/workflows/packages/sigma-assets/)
* [Snowflake assets](../snippets/workflows/packages/snowflake-assets/)
* [Snowflake miner](../snippets/workflows/packages/snowflake-miner/)
* [Tableau assets](../snippets/workflows/packages/tableau-assets/)
* [dbt assets](../snippets/workflows/packages/dbt-assets/)

/api/sql/query/stream (POST)[¶](#tag:apisqlquerystream-post "Permanent link")
-----------------------------------------------------------------------------

* [Run queries on an asset](../snippets/access/queries/)

---

2023\-04\-272025\-05\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/endpoints/) to provide us with more information. 

Back to top

[Previous ThoughtspotWorksheet](../models/entities/thoughtspotworksheet/) 

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

