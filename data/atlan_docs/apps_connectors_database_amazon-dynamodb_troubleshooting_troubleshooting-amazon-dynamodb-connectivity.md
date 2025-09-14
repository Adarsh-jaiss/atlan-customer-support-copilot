# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/troubleshooting/troubleshooting-amazon-dynamodb-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/troubleshooting/troubleshooting-amazon-dynamodb-connectivity
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/troubleshooting/troubleshooting-amazon-dynamodb-connectivity
meta-description: Learn about troubleshooting amazon dynamodb connectivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting amazon dynamodb connectivity.
meta-og-locale: en
meta-og-title: Troubleshooting Amazon DynamoDB connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/troubleshooting/troubleshooting-amazon-dynamodb-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Amazon DynamoDB connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Amazon DynamoDB connectivity
============================================

#### What are the known limitations of the Amazon DynamoDB connector?[â](#what-are-the-known-limitations-of-the-amazon-dynamodb-connector "Direct link to What are the known limitations of the Amazon DynamoDB connector?")

Atlan currently does not support cataloging attributes for Amazon DynamoDB tables as native assets in Atlan. Hence, column\-level lineage between Amazon DynamoDB as a source and supported data warehouses is currently not supported.

#### Why are some tables and indexes missing?[â](#why-are-some-tables-and-indexes-missing "Direct link to Why are some tables and indexes missing?")

* Check that the [IAM user](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) defined for the crawler has been granted the `dynamodb:DescribeTable` permission on the missing tables.
* To grant permission on all DynamoDB tables in your selected AWS region, add the following to the IAM policy to `Resource` in the `dynamodb:DescribeTable` permission: `arn:aws:dynamodb:<region>:<account_id>:table/*`
* Check that the names of the missing tables do not match the table names in the [*Exclude tables regex* filter](/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb), if you have specified tables to exclude.

#### Why are some attributes missing from the table asset profile?[â](#why-are-some-attributes-missing-from-the-table-asset-profile "Direct link to Why are some attributes missing from the table asset profile?")

The *Attributes* section in the table asset profile of an Amazon DynamoDB table lists all the attributes that are either used as a partition key or a sort key in the table itself or its global or local secondary indexes.

For example:

* The `Orders` table has a partition key `OrderID` and a sort key `ProductID`.
* This table also has a global secondary index with the partition key `CustomerID`.
* Keeping this in mind, the *Attributes* section in the table asset profile will display the following attributes only:
    + `OrderID`
    + `ProductID`
    + `CustomerID`

#### How to debug test authentication and preflight check errors?[â](#how-to-debug-test-authentication-and-preflight-check-errors "Direct link to How to debug test authentication and preflight check errors?")

**Invalid region**

`Invalid region. Please provide a valid region.`

* Ensure that you have specified the correct [AWS region in your configuration](/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb). The region must match the location of your Amazon DynamoDB tables.

**Invalid secret key**

`Invalid secret key. Please provide a valid secret key.`

* Ensure that the [AWS access key ID matches the secret key](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb). These must be paired correctly and belong to the same IAM user.

**Invalid access key**

`Invalid access key. Please provide a valid access key.`

* Ensure that the [AWS access key ID matches the secret key](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb). These must form a valid pair.
* Ensure that the IAM user associated with the access key is active and neither disabled nor deleted.

**No tables detected in the selected region**

`No tables detected in the selected region. Please check the selected region.`

* Ensure that you have specified the correct [AWS region in your configuration](/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb). The region must match the location of your Amazon DynamoDB tables.
* Confirm that the IAM user or role you are using has the [necessary permissions](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) (`dynamodb:ListTables`) to view Amazon DynamoDB tables in the specified region.

**Access denied: 'ListTables' permission required**

`Access denied: 'ListTables' permission required. Please reach out to your AWS administrator to request the permissions.`

* Ensure that the IAM policy attached to your role includes the `dynamodb:ListTables` permission.
* Confirm that the role has the permissions to list tables.
* If you do not have the permission to update IAM policies, reach out to your AWS administrator to request the necessary permissions.

**Access denied: 'AssumeRole' permission required**

`AccessÂ denied: 'AssumeRole' permission required. Please reach out to your AWS administrator to request the permissions.`

* Ensure that the [IAM policy](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) attached to your user or role includes the `sts:AssumeRole` permission for the role you are trying to assume.
* Confirm that the IAM policy allows access to the specific role ARN you are trying to assume.
* Ensure that the role you are trying to assume has a trust policy allowing your user or role to assume it.
**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)
* [catalog](/tags/catalog)
* [metadata](/tags/metadata)
* [discovery](/tags/discovery)

[PreviousWhat does Atlan crawl from Amazon DynamoDB?](/apps/connectors/database/amazon-dynamodb/references/what-does-atlan-crawl-from-amazon-dynamodb)

Copyright Â© 2025 Atlan Pte. Ltd.

