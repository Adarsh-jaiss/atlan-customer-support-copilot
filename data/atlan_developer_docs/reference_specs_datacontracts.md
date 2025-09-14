# Source URL
https://developer.atlan.com/reference/specs/datacontracts/

================================================================================

<!--
canonical: https://developer.atlan.com/reference/specs/datacontracts/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Specification of the data contract format.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Specification of the data contract format.
meta-og-image: https://developer.atlan.com/assets/images/social/reference/specs/datacontracts.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Data contracts spec - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/reference/specs/datacontracts/
meta-twitter:card: summary_large_image
meta-twitter:description: Specification of the data contract format.
meta-twitter:image: https://developer.atlan.com/assets/images/social/reference/specs/datacontracts.png
meta-twitter:title: Data contracts spec - Developer
meta-viewport: width=device-width,initial-scale=1
title: Data contracts spec - Developer
-->

[Skip to content](#data-contracts-specification) Developer Data contracts spec Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../)

Data contracts specification[¶](#data-contracts-specification "Permanent link")
===============================================================================

Backwards compatibility

While we are in a closed preview state, we are not guaranteeing backwards compatibility. Version `0.0.2` is not backwards compatible with `0.0.1`.

Following is the template for a [data contract](../../../snippets/datacontract/), where the highlighted lines are mandatory:

```
---
kind: DataContract                   # (1)
status: draft                        # (2)
template_version: 0.0.2              # (3)

dataset: sale_txn                    # (4)
type: Table                          # (5)
description: This is the ...         # (6)

datasource: snowflake                # (7)

owners:                              # (8)
  users:
    - jdoe
    - jsmith
  groups:
    - data_producers_group

certification:                       # (9)
  status: VERIFIED                   # (10)
  message: Verified by data producers

announcement:                        # (11)
  type: Informational                # (12)
  title: Informational announcement
  description: Explanation of the ...

terms:                               # (13)
  - Sales
  - Transactions

tags:                                # (14)
  - name: PII
    propagate: false
    restrict_propagation_through_lineage: true
    restrict_propagation_through_hierarchy: false
  - name: GDPR
    propagate: false
    restrict_propagation_through_lineage: true
    restrict_propagation_through_hierarchy: false

custom_metadata:                      # (15)
  Data Quality:
    Completeness Score: 100
    Failed Checks:
      - 884438be-82cc-4e04-bfe1-fba59276df38
      - afa0e560-a916-4862-a2f2-c491f19f39f5

columns:
 - name: txn_credit_card_number       # (16)
    business_name: credit card number # (17)
    description: some description...  # (18)             
    data_type: NUMBER                 # (19) 
    terms:                            # (20) 
      - ARR
    tags:                             # (21) 
      - name: PII
        propagate: false
        restrict_propagation_through_lineage: false
    primary: false                    # (22)
    required: true                    # (23)
    scale: 0                          # (24)
    precision: 16                     # (25)
  - name: txn_ref_dt                  
    business_name: transaction date   
    description: transaction date description...                 
    data_type: DATE                  
    terms: []
    tags: []
    primary: false
    required: true

checks:                               # (26)
  - missing_count(txn_ref_dt) = 0
  - missing_count(txn_ref_dt) = 100
  - current_time - date(record_date) < 5
...

```
1. Must always be `DataContract`.
2. State of the contract:
    * `draft`: contract is still being defined (work in progress)
    * `verified`: contract is published and ready to be used
3. Version of the template for the data contract.
4. Name of the asset as it exists inside Atlan.
5. (Optional) Type of the dataset in Atlan:
    * `Table`: a database table
    * `View`: a database view
    * `MaterialisedView`: a materialized view in a database
6. (Optional) Description of this dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata).
7. Name that must match a [data source](../../../sdks/cli/#define-data-sources) defined in your config file.
8. (Optional) Owners of the dataset, which can include users (by username) and / or groups (by internal Atlan alias), and can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata).
9. (Optional) Certification to apply to the dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata).
10. Valid values:
    * `DRAFT`: dataset is still being defined (work in progress)
    * `VERIFIED`: dataset is trusted and ready to be used
    * `DEPRECATED`: dataset should no longer be trusted or used
11. (Optional) Announcement to apply to the dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata).
12. Valid values:
    * `information`: something should be noted about the dataset (appears blue in the UI)
    * `warning`: something is problematic with the dataset (appears yellow in the UI)
    * `issue`: something is wrong with the dataset (appears red in UI)
13. (Optional) Glossary terms to assign to the dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata).
14. (Optional) List of the names of [tags](../../../snippets/common-examples/tags/) for this dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata). For each tag you can optionally also specify:
    * `propagate`: whether the tag should propagate to other assets
    * `restrict_propagation_through_lineage`: if propagation is enabled, whether the tag should propagate through lineage
    * `restrict_propagation_through_hierarchy`: if propagation is enabled, whether the tag should propagate to child assets
15. (Optional) Dictionary of [custom metadata](../../../snippets/common-examples/custom-metadata/) for this dataset, which can be [synced to the asset being governed](../../../snippets/datacontract/manage/#sync-metadata). Specify the name of the custom metadata and its attributes using their human\-readable names. Multi\-valued attributes should have their values provided as a list.
16. Name of the column as it is defined in the source system (often technical).
17. (Optional) Alias for the column, to make it's name more readable.
18. (Optional) Description of this column, for documentation purposes.
19. (Optional) Data type of values in this column (e.g. `DATE`, `NUMBER`, `STRING` etc).
20. (Optional) Glossary terms to assign to this column.
21. (Optional) List of the names of [tags](../../../snippets/common-examples/tags/) for this column. For each tag you can optionally also specify:
    * `propagate`: whether the tag should propagate to other assets
    * `restrict_propagation_through_lineage`: if propagation is enabled, whether the tag should propagate through lineage
    * `restrict_propagation_through_hierarchy`: if propagation is enabled, whether the tag should propagate to child assets
22. (Optional) When `true`, this column is the primary key for the table.
23. (Optional) When `true`, the values in this column can't be null.
24. (Optional) Number of digits allowed to the right of the decimal point, when the `data_type` is numeric.
25. (Optional) Total number of digits allowed, when the `data_type` is numeric.
26. (Optional) List of [checks](https://docs.soda.io/soda/data-contracts-checks.html)  to run to verify data quality of this dataset.

---

2024\-04\-252024\-11\-19

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/reference/specs/datacontracts/) to provide us with more information. 

Back to top

[Previous Specifications](../) [Next OpenLineage spec](../openlineage/) 

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

