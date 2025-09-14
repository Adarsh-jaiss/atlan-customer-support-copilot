# Source URL
https://developer.atlan.com/snippets/datacontract/manage/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datacontract/manage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to manage data contracts for assets.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to manage data contracts for assets.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datacontract/manage.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage data contracts - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datacontract/manage/
meta-twitter:card: summary_large_image
meta-twitter:description: How to manage data contracts for assets.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datacontract/manage.png
meta-twitter:title: Manage data contracts - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage data contracts - Developer
-->

[Skip to content](#manage-data-contracts) Developer Manage data contracts Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Manage data contracts[¶](#manage-data-contracts "Permanent link")
=================================================================

Limited availability

Data contracts can currently only be managed for [tables](../../../models/entities/table/), [views](../../../models/entities/view/),
and [materialized views](../../../models/entities/materialisedview/).

Initialize a contract[¶](#initialize-a-contract "Permanent link")
-----------------------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.0 "Minimum version")

To generate a [contract](../../../reference/specs/datacontracts/) for an existing asset in Atlan:

Atlan CLI

```
atlan init contract \  # (1)
    --asset "Table@CUST_TXN" \  # (2)
    --data-source "snowflake"  # (3)

```
1. Use `atlan init contract` to initialize a contract. If you provide no other arguments, the CLI will generate a skeletal contract you can fill in yourself.
2. To pre\-populate the contract with information about a dataset, you must provide the type and (technical) `name` of the asset to generate from, in the format `TypeName@name`.
3. To pre\-populate the contract, you must also provide the name of the [data source](../../../sdks/cli/#define-data-sources) in which to find the asset.

This will generate a contract in your current working directory, using the details from the asset in Atlan as a starting point. (This requires you to first [configure the Atlan CLI](../../../sdks/cli/) with details about your tenant.)

Can I manage contracts without Atlan connectivity?

You can also initialize a contract without any connection to Atlan, by leaving out the `--asset` and `--data-source` arguments. This will provide you a skeletal contract you can then fill in yourself.

Validate contract[¶](#validate-contract "Permanent link")
---------------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.0 "Minimum version")

You can validate the contract file is syntactically correct and refers to an asset known to Atlan:

Atlan CLI

```
atlan validate contract \  # (1)
    -f "contract.yaml"  # (2)

```
1. Use `atlan validate contract` to validate a contract.
2. You must specify the filename that defines the contract.

Push contract[¶](#push-contract "Permanent link")
-------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.0 "Minimum version")

To apply the contract in Atlan, you then need to push the contract:

Atlan CLI

```
atlan push contract \  # (1)
    -f "contract.yaml"  # (2)

```
1. Use `atlan push contract` to push a contract.
2. You must specify the filename that defines the contract.

Sync metadata[¶](#sync-metadata "Permanent link")
-------------------------------------------------

[0\.1\.5](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.5 "Minimum version")

To sync metadata from a contract file to the asset governed by the contract in Atlan:

Atlan CLI

```
atlan sync contract \  # (1)
    -f "contract.yaml"  # (2)

```
1. Use `atlan sync contract` to sync metadata contained in a contract to the asset governed by that contract.
2. You must specify the filename that defines the contract (containing the metadata to be synced).

This command will sync the following from the contract file to the governed asset in Atlan:

```
description: |-       # (1)
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu orci non arcu placerat tincidunt eu et ligula.
  Nullam non nisi in risus finibus tristique non quis erat. Phasellus hendrerit finibus velit nec dapibus.
  Sed non viverra ligula, at dignissim diam. Mauris finibus elementum mi id luctus.
  Maecenas sit amet lectus placerat, lobortis turpis dictum, semper magna.
  Nullam sollicitudin ipsum eget felis vulputate, sit amet ultrices nisi posuere. Ut facilisis eu enim id maximus.

owners:
  users:              # (2)
    - jdoe
    - jsmith
  groups:             # (3)
    - data_producers_group

certification:
  status: VERIFIED    # (4)
  message: ""

announcement:
  type: information   # (5)
  title: ""
  description: ""

terms:                # (6)
  - ""

tags:                 # (7)
  - name: PII
    propagate: false
    restrict_propagation_through_lineage: false
    restrict_propagation_through_hierarchy: false

custom_metadata:       # (8)
  Data Quality:
    Completeness Score: 100
    Failed Checks:
      - 884438be-82cc-4e04-bfe1-fba59276df38
      - afa0e560-a916-4862-a2f2-c491f19f39f5

```
1. Updates the [user\-managed description](../../../models/entities/asset/#userdescription) of the governed asset.
2. Appends [individual user owners](../../../models/entities/asset/#ownerusers) to the list of existing owning users of the governed asset. Each user should be listed by their username in Atlan.
3. Appends [group owners](../../../models/entities/asset/#ownergroups) to the list of existing owning groups of the governed asset. Each group should be listed by its internal alias name in Atlan.
4. Updates the [certificate](../../../models/entities/asset/#certificatestatus) of the governed asset. Must be one of:
    * `VERIFIED`
    * `DRAFT`
    * `DEPRECATED`
5. Updates the [announcement](../../../models/entities/asset/#announcementtype) on the governed asset. Must be one of:
    * `information`
    * `warning`
    * `issue`
6. Appends [assigned terms](../../../models/entities/asset/#meanings-atlasglossaryterm) to the list of terms assigned to the governed asset. Each term should be listed by its name in Atlan.

    If multiple terms exist with the same name

    If multiple terms are found with the same name in Atlan, these will be returned as a conflict (rather than any being added to the asset).
7. Appends [tags](../../../models/entities/referenceable/#classifications) to the list of tags assigned to the governed asset. Each tag should be listed by its name in Atlan.
8. Merges the [custom metadata](../../../models/entities/referenceable/#businessattributes) provided with any existing custom metadata on the governed asset. Each custom metadata set and its attributes should be keyed by its name in Atlan.

Managing via CI/CD[¶](#managing-via-cicd "Permanent link")
----------------------------------------------------------

You can combine the actions above to manage data contracts via automated CI/CD pipelines. For example, a process to automate publication of data contracts could be as follows:

### Configure CLI for CI/CD[¶](#configure-cli-for-cicd "Permanent link")

First, [configure the CLI](../../../sdks/cli/) within your CI/CD environment.

Separate sensitive and non\-sensitive configuration

As a general rule, we recommend removing sensitive information (like the API token) from your configuration file. Instead manage this through an environment variable, which your CI/CD environment can inject into the job that runs the CLI. (For example, in GitHub you can use [GitHub Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)  to manage the API token and have it automatically injected as an environment variable in GitHub Actions.)

The non\-sensitive configuration details can remain in the configuration file, and the configuration file itself can then be version\-controlled in your source code repository, too.

The examples below assume you have stored:

* your tenant's URL in a repository secret named `ATLAN_BASE_URL`
* the API token in a repository secret named `ATLAN_API_KEY`

### Publish contracts from CI/CD[¶](#publish-contracts-from-cicd "Permanent link")

Once configured, you can use the CLI to publish any new contracts or changes to existing contracts:

1. Commit contract file(s) to your revision control repository.
2. Apply any validations or approval processes you like in your revision control repository. (For example, GitHub Actions that are triggered by pull request events.)
3. When the committed changes are merged to a particular branch (for example, `main`), trigger an action to publish them to Atlan using the command in the [push contract](#push-contract) step.

GitHub

| .atlan/config.yaml | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` atlan_api_key: ""  # (1) log:   enabled: true  # (2)   level: info  data_source snowflake:  # (3)   type: snowflake   connection:     name: snowflake-prod     qualified_name: "default/snowflake/1234567890"   database: db   schema: analytics  ``` |

1. Your repository should [configure the CLI](../../../sdks/cli/#configure-the-cli). The simplest way to do this is to include the configuration file in your repository (it must be at exactly `.atlan/config.yaml` in your repository to be picked up by the GitHub Action automatically).

    Leave sensitive information out

    Leave the sensitive information (like API token and URL of your tenant) out of the configuration file. These can instead be stored as GitHub Secrets and used via environment variables in the GitHub Action.
2. You may want to enable logging, so you'll have debugging information to review if something goes wrong.
3. You will need to [define the data sources](../../../sdks/cli/#define-data-sources) used by your contracts.

| .github/workflows/push\-contracts.yml | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 ``` | ``` name: Push contract to Atlan  on:   push:     branches:       - main     paths:       - 'contracts/**'  # (1)  env:   ATLAN_BINARY_URL: "https://github.com/atlanhq/atlan-cli-releases/releases/latest/download/atlan_Linux_amd64.tar.gz"   BINARY_FILE_NAME: "atlan_Linux_amd64.tar.gz"  jobs:   push-contract:     runs-on: ubuntu-latest     steps:        - name: Checkout repository         uses: actions/checkout@v4        - name: Download atlan CLI         run: |           curl -LO $ATLAN_BINARY_URL        - name: Uncompress CLI archive         run: tar -xzf $BINARY_FILE_NAME        - name: Give permissions to CLI         run: |           sudo mv atlan /usr/local/bin/atlan           chmod +x /usr/local/bin/atlan        - name: Configure the CLI  # (2)         run: |           echo "atlan_base_url: \"$ATLAN_BASE_URL\"" >> .atlan/config.yaml         env:           ATLAN_BASE_URL: ${{ secrets.ATLAN_BASE_URL }}        - name: Run atlan push command  # (3)         run: |           atlan push dc -f "$GITHUB_WORKSPACE/contracts"         env:           ATLAN_API_KEY: ${{ secrets.ATLAN_API_KEY }}  # (4)  ``` |

1. Specify the path where your contract files exist in the GitHub repository, so the action is only triggered when contract files themselves change.
2. Configure the CLI with the URL of your tenant, here pulled from a repository secret with the name `ATLAN_BASE_URL`.
3. Again, this directory may need to change depending on where the contract files are within your GitHub repository.
4. Include your API token as the `ATLAN_API_KEY` environment variable, here pulled from a repository secret with the same name.

---

2024\-04\-252024\-11\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datacontract/manage/) to provide us with more information. 

Back to top

[Previous Data contracts](../) [Next Manage data contracts (via SDK)](../manage-via-sdks/) 

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

