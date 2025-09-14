# Source URL
https://developer.atlan.com/patterns/create/dq_rules/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/dq_rules/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Create, update, retrieve, and delete data quality rules for monitoring data quality.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Create, update, retrieve, and delete data quality rules for monitoring data quality.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/dq_rules.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage data quality rules - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/dq_rules/
meta-twitter:card: summary_large_image
meta-twitter:description: Create, update, retrieve, and delete data quality rules for monitoring data quality.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/dq_rules.png
meta-twitter:title: Manage data quality rules - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage data quality rules - Developer
-->

[Skip to content](#manage-data-quality-rules) Developer Manage data quality rules Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage data quality rules[¶](#manage-data-quality-rules "Permanent link")
=========================================================================

Experimental feature

Data quality rules are currently an experimental feature. The functionality may change in future releases.

Create data quality rules[¶](#create-data-quality-rules "Permanent link")
-------------------------------------------------------------------------

Data quality rules can be created using three different creator methods depending on the type of rule you want to create:

1. **Column level rules**: For rules that apply to specific columns (e.g., Freshness, 
Null Count)
2. **Table level rules**: For rules that apply to entire tables (e.g., Row Count)
3. **Custom SQL rules**: For Custom SQL rule only

### Column level rules[¶](#column-level-rules "Permanent link")

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

Column level rules are used for data quality checks that apply to specific columns within a asset.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a column level data quality rule | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import alpha_DQRule, Table, Column from pyatlan.model.enums import (     alpha_DQRuleAlertPriority,     alpha_DQRuleThresholdCompareOperator,     alpha_DQDimension,     alpha_DQRuleThresholdUnit ) from pyatlan.model.assets import Asset  client = AtlanClient()  # Create a Freshness rule for a specific column dq_rule = alpha_DQRule.column_level_rule_creator( # (1)     client=client, # (2)     rule_type="Freshness", # (3)     asset=Table.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq/weather/monitoring"), # (4)     column=Column.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq/weather/monitoring/evaluated_at"), # (5)     threshold_value=1, # (6)     alert_priority=alpha_DQRuleAlertPriority.URGENT, # (7)     threshold_unit=alpha_DQRuleThresholdUnit.DAYS # (8) )  response = client.asset.save(dq_rule) # (9)  # Create a Null Count rule for a specific column dq_rule_null = alpha_DQRule.column_level_rule_creator(      client=client,     rule_type="Null Count",     asset=Table.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq/weather/monitoring"),     column=Column.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary/catalog"),     threshold_compare_operator=alpha_DQRuleThresholdCompareOperator.LESS_THAN_EQUAL, # (10)     threshold_value=5,      alert_priority=alpha_DQRuleAlertPriority.HIGH )  response = client.asset.save(dq_rule_null)  ``` |

1. Use the `column_level_rule_creator` method to create column\-level data quality rules.
2. Provide the Atlan client instance.
3. Specify the rule type (e.g., "Freshness", "Null Count"). The rule type must match exactly what is shown in the UI.
4. Reference the asset using its qualified name to which you want to apply this rule.
5. Reference the specific column using its qualified name of that asset to which you want to apply this rule. Ensure the column data type is compatible with the rule type (e.g., date/time columns for Freshness rules).
6. Set the threshold value for the rule (same as you would in the UI).
7. Set the alert priority level (same as you would in the UI).
8. **Optional**: Specify the threshold unit (e.g., DAYS, HOURS) for rules that support units (such as Freshness). For rules without units (such as Null Count), omit this parameter.
9. Save the data quality rule to Atlan.
10. **Optional**: Specify the threshold compare operator (same as you would in the UI).

Coming soon

Coming soon

### Table Level rules[¶](#table-level-rules "Permanent link")

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

Table level rules are used for data quality checks that apply to entire table.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a Table Level data quality rule | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import alpha_DQRule, Table from pyatlan.model.enums import (     alpha_DQRuleAlertPriority,     alpha_DQRuleThresholdCompareOperator )  client = AtlanClient()  # Create a Row Count rule for a table dq_rule = alpha_DQRule.table_level_rule_creator( # (1)     client=client, # (2)     rule_type="Row Count", # (3)     asset=Table.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary"), # (4)     threshold_compare_operator=alpha_DQRuleThresholdCompareOperator.EQUAL, # (5)     threshold_value=15, # (6)     alert_priority=alpha_DQRuleAlertPriority.URGENT # (7) )  response = client.asset.save(dq_rule) # (8)  ``` |

1. Use the `table_level_rule_creator` method to create table\-level data quality rules.
2. Provide the Atlan client instance.
3. Specify the rule type (e.g., "Row Count"). The rule type must match exactly what is shown in the UI.
4. Reference the asset using its qualified name to which you want to apply this rule.
5. Set the threshold comparison operator (e.g., EQUAL, LESS\_THAN\_EQUAL).
6. Set the threshold value for the rule (same as you would in the UI).
7. Set the alert priority level (same as you would in the UI).
8. Save the data quality rule to Atlan.

Coming soon

Coming soon

### Custom SQL rule[¶](#custom-sql-rule "Permanent link")

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

Custom SQL rule allow you to define data quality check using custom SQL queries.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a Custom SQL data quality rule | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import alpha_DQRule, Table from pyatlan.model.enums import (     alpha_DQRuleAlertPriority,     alpha_DQRuleThresholdCompareOperator,     alpha_DQDimension )  client = AtlanClient()  # Create a Custom SQL rule dq_rule = alpha_DQRule.custom_sql_creator( # (1)     client=client, # (2)     rule_name="Test SQL Rule", # (3)     asset=Table.ref_by_qualified_name(qualified_name="default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary"), # (4)     custom_sql="SELECT count(*) FROM `dq_poc`.`accuweather`.`_quality_monitoring_summary`", # (5)     threshold_compare_operator=alpha_DQRuleThresholdCompareOperator.LESS_THAN_EQUAL, # (6)     threshold_value=10, # (7)     alert_priority=alpha_DQRuleAlertPriority.URGENT, # (8)     dimension=alpha_DQDimension.COMPLETENESS, # (9)     description="Custom SQL rule for completeness check" # (10) )  response = client.asset.save(dq_rule) # (11)  ``` |

1. Use the `custom_sql_creator` method to create custom SQL data quality rules.
2. Provide the Atlan client instance.
3. Provide a name for the custom rule (same as you would in the UI).
4. Reference the asset using its qualified name to which you want to apply this rule.
5. Provide the custom SQL query for the rule (same as you would in the UI).
6. Set the threshold comparison operator (same as you would in the UI).
7. Set the threshold value for the rule (same as you would in the UI).
8. Set the alert priority level (same as you would in the UI).
9. Set the data quality dimension (e.g., COMPLETENESS, ACCURACY) (same as you would in the UI).
10. **Optional**: Provide a description for the rule.
11. Save the data quality rule to Atlan.

Coming soon

Coming soon

Update data quality rules[¶](#update-data-quality-rules "Permanent link")
-------------------------------------------------------------------------

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

To update an existing data quality rule, you only need to provide the `qualified name` and the `Atlan Client`. All other parameters are optional and will only be updated if provided.

Java

Python

Kotlin

Raw REST API

Coming soon

| Update a data quality rule | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import alpha_DQRule from pyatlan.model.enums import (     alpha_DQRuleAlertPriority,     alpha_DQRuleThresholdCompareOperator,     alpha_DQDimension,     alpha_DQRuleThresholdUnit )  client = AtlanClient()  # Update specific fields of an existing data quality rule updated_rule = alpha_DQRule.updater( # (1)     client=client, # (2)     qualified_name="default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary/rule/40e01c39-dcb8-4348-9259-041f353a8348", # (3)     threshold_compare_operator=alpha_DQRuleThresholdCompareOperator.LESS_THAN_EQUAL, # (4)      threshold_value=20, # (5)     alert_priority=alpha_DQRuleAlertPriority.HIGH, # (6)     threshold_unit=alpha_DQRuleThresholdUnit.DAYS, # (7)     dimension=alpha_DQDimension.COMPLETENESS, # (8)     custom_sql="SELECT count(*) FROM updated_table", # (9)     rule_name="Updated Rule Name", # (10)     description="Updated description for the rule" # (11) )  response = client.asset.save(updated_rule) # (12)  ``` |

1. Use the `updater` method to update an existing data quality rule.
2. Provide the Atlan client instance.
3. Provide the qualified name of the existing rule.
4. **Optional**: Update the threshold comparison operator.
5. **Optional**: Update the threshold value for the rule.
6. **Optional**: Update the alert priority level.
7. **Optional**: Update the threshold unit.
8. **Optional**: Update the data quality dimension (for custom SQL rules).
9. **Optional**: Update the custom SQL query (for custom SQL rules).
10. **Optional**: Update the name of the rule (for custom SQL rules).
11. **Optional**: Update the description of the rule (for custom SQL rules).
12. Save the updated data quality rule to Atlan.

Coming soon

Coming soon

UI compatibility required

When updating data quality rules, only update parameters that are applicable to your specific rule type as shown in the UI. Updating parameters that don't apply to your rule type may cause the operation to fail or produce unexpected results.

Retrieve data quality rules[¶](#retrieve-data-quality-rules "Permanent link")
-----------------------------------------------------------------------------

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

To retrieve data quality rules, you can use fluent search to retireve data quality rules.

Java

Python

Kotlin

Raw REST API

Coming soon

| Retrieve data quality rules | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, Connection, alpha_DQRule from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient()  # Example 1: Retrieve all data quality rules on a connection search_request = ( # (1)     FluentSearch()     .select(include_archived=False)      .where_some(Connection.QUALIFIED_NAME.eq("default/databricks/1750768309"))     .where_some(Asset.TYPE_NAME.eq("alpha_DQRule"))     .include_on_results(alpha_DQRule.GUID)     .include_on_results(alpha_DQRule.QUALIFIED_NAME) ).to_request()  results = client.asset.search(search_request) # (2) for result in results: # (3)     print(f"Rule GUID: {result.guid}")     print(f"Rule Qualified Name: {result.qualified_name}")  # Example 2: Retrieve all information of a specific data quality rule using its qualified name search_request = (     FluentSearch()     .where(alpha_DQRule.QUALIFIED_NAME.eq("default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary/rule/a481d03a-7fb9-48c1-a752-3aad4f6a98c1"))     .include_on_results(alpha_DQRule.GUID)     .include_on_results(alpha_DQRule.QUALIFIED_NAME)     .include_on_results(alpha_DQRule.ALPHADQ_RULE_BASE_COLUMN_QUALIFIED_NAME)     .include_on_results(alpha_DQRule.ALPHADQ_RULE_ALERT_PRIORITY)     .include_on_results(alpha_DQRule.ALPHADQ_RULE_DIMENSION) ).to_request()  result = client.asset.search(search_request) search_result = result.current_page()[0]   print(f"GUID: {search_result.guid}") print(f"Qualified Name: {search_result.qualified_name}") print(f"Column Qualified Name: {search_result.alpha_dq_rule_base_column_qualified_name}") print(f"Alert Priority: {search_result.alpha_dq_rule_alert_priority}") print(f"Dimension: {search_result.alpha_dq_rule_dimension}")  ``` |

1. Create a Fluent Search request to retrieve data quality rules from a specific connection.
2. Execute the search request to retrieve the data quality rules.
3. Iterate through all matching data quality rules and print their details.

Coming soon

Coming soon

Delete data quality rules[¶](#delete-data-quality-rules "Permanent link")
-------------------------------------------------------------------------

[7\.1\.5](https://github.com/atlanhq/atlan-python/releases/tag/7.1.5 "Minimum version")

To delete data quality rules, you can use the standard asset deletion method.

Java

Python

Kotlin

Raw REST API

Coming soon

| Soft\-delete data quality rules | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import alpha_DQRule  client = AtlanClient() response = client.asset.delete_by_guid(guid="b4113341-251b-4adc-81fb-2420501c30e6") # (1) if deleted := response.assets_deleted(asset_type=alpha_DQRule): # (2)     term = deleted[0] # (3)  ``` |

1. Use the `asset.delete_by_guid()` method to delete a data quality rule. Provide the GUID of the rule you want to delete.
2. The `assets_deleted(asset_type=alpha_DQRule)` method returns a list of the assets of the given type that were deleted.
3. If an asset of the given type was deleted, then the deleted form of the asset is available.

Coming soon

Coming soon

Schedule data quality rules[¶](#schedule-data-quality-rules "Permanent link")
-----------------------------------------------------------------------------

[7\.1\.6](https://github.com/atlanhq/atlan-python/releases/tag/7.1.6 "Minimum version")

To add a schedule for data quality rules on an asset, you can use the `add_dq_rule_schedule` method. This method allows you to set up the schedule for data quality rule execution.

Java

Python

Kotlin

Raw REST API

Coming soon

| Add data quality rule schedule | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient()  response = client.asset.add_dq_rule_schedule( # (1)     asset_type=Table, # (2)     asset_name="_quality_monitoring_summary", # (3)     asset_qualified_name="default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary", # (4)     schedule_crontab="41 20 * 1 *", # (5)     schedule_time_zone="Europe/Paris" # (6) )  ``` |

1. Use the `add_dq_rule_schedule` method to add a schedule for data quality rules on an asset.
2. Specify the asset type (e.g., Table).
3. Provide the name of the asset as it appears in Atlan.
4. Provide the qualified name of the asset (same as you would see in the Atlan UI).
5. Provide the cron schedule string following the standard cron format (e.g., "41 20 \* 1 \*" means run at 20:41 only in January).
6. Provide the timezone string in the format used by Atlan UI (e.g., "Europe/Paris", "Asia/Calcutta").

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {     "entities": [         {             "guid": "e971e35d-5d45-4d6c-a8e5-e2bc6a1e1c74", // (1)             "typeName": "Table", // (2)             "attributes": {                 "name": "_quality_monitoring_summary", // (3)                 "qualifiedName": "default/databricks/1750768309/dq_poc/accuweather/_quality_monitoring_summary", // (4)                 "alpha_assetDQScheduleType": "CRON", // (5)                 "alpha_assetDQScheduleCrontab": "41 20 * * 0,1,4-6", // (6)                 "alpha_assetDQScheduleTimeZone": "Asia/Calcutta" // (7)             }         }     ] }  ``` |

1. The asset GUID to which the DQ rule schedule needs to be implemented.
2. The type of the asset (e.g., "Table").
3. The name of the asset.
4. The qualified name of the asset.
5. Set to "CRON" for cron\-based scheduling.
6. The cron schedule string (e.g., "41 20 \* \* 0,1,4\-6").
7. The timezone string (e.g., "Asia/Calcutta").

Cron Schedule Format

The standard cron schedule format consists of five fields, separated by spaces:

* **Minute (0\-59\)**: The minute of the hour when the command will run
* **Hour (0\-23\)**: The hour of the day when the command will run (0 is midnight, 23 is 11 PM)
* **Day of Month (1\-31\)**: The day of the month when the command will run
* **Month (1\-12\)**: The month of the year when the command will run (1 is January, 12 is December)
* **Day of Week (0\-6\)**: The day of the week when the command will run (0 is Sunday, 1 is Monday, and so on up to 6 for Saturday)

---

2025\-08\-012025\-08\-07

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/dq_rules/) to provide us with more information. 

Back to top

[Previous Manage DocumentDB assets](../documentdb/) [Next Connector types and icons](../../../models/connectortypes/) 

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

