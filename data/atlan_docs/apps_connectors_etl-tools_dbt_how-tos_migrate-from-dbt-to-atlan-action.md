# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action
meta-description: The dbt-action is a custom action designed to perform impact analysis on changes to your dbt models in a [GitHub](/apps/connectors/etl-tools/dbt/how-tos/.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The dbt-action is a custom action designed to perform impact analysis on changes to your dbt models in a [GitHub](/apps/connectors/etl-tools/dbt/how-tos/.
meta-og-locale: en
meta-og-title: Migrate from dbt to Atlan action | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Migrate from dbt to Atlan action | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Migrate from dbt to Atlan action
================================

The `dbt-action` is a custom action designed to perform impact analysis on changes to your dbt models in a [GitHub](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github) or [GitLab](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab) repository. Atlan plans to enhance this customÂ action to provide additional capabilities, such as [impact analysis for data contracts](/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github)) and more.

Instead of creating separate custom actions for each new capability, Atlan has renamed the `dbt-action` to `atlan-action` to better reflect the multiple capabilities on offer and will eventually deprecate the `dbt-action`.

If you're currently using the `dbt-action`, Atlan strongly recommends migrating to the `atlan-action`.

Migration notice and timeline[â](#migration-notice-and-timeline "Direct link to Migration notice and timeline")
-----------------------------------------------------------------------------------------------------------------

Atlan is providing you with a window of over six months to complete the migration, with a deadline set for June 2025\. However, rest assured that Atlan will not archive the `dbt-action` until every organization has successfully transitioned to the `atlan-action`.

If you choose not to migrate, please be aware that the `dbt-action` will no longer receive any updates. This means no new fixes or features will be implemented.

Impact of migration[â](#impact-of-migration "Direct link to Impact of migration")
-----------------------------------------------------------------------------------

You can expect a seamless transition \- there will be no changes in terms of functionality. Your workflows will continue to operate as usual post\-migration.

Migrate to Atlan action[â](#migrate-to-atlan-action "Direct link to Migrate to Atlan action")
-----------------------------------------------------------------------------------------------

### GitHub[â](#github "Direct link to GitHub")

To migrate to the `atlan-action`:

1. Open your GitHub workflow file that currently uses the `dbt-action`.
2. Replace the `dbt-action@v1` with `atlan-action@v1` as follows:

    ```
    name: Atlan action  
    on:  
      pull_request:  
        types: [opened, edited, synchronize, reopened, closed]  
    jobs:  
      get-downstream-impact:  
        name: Get Downstream Assets  
        runs-on: ubuntu-latest  
        steps:        
          - name: Checkout  
             uses: actions/checkout@v4  
          - name: Run Action  
    -       uses: atlanhq/dbt-action@v1  
    +        uses: atlanhq/atlan-action@v1  
            with:  
              GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}  
              ATLAN_INSTANCE_URL: ${{secrets.ATLAN_INSTANCE_URL}}  
              ATLAN_API_TOKEN: ${{secrets.ATLAN_API_TOKEN}}

    ```

### GitLab[â](#gitlab "Direct link to GitLab")

To migrate to the `atlan-action`:

1. Open your GitLab workflow file `.gitlab-ci.yml` that currently uses the `dbt-action`.
2. Clone `v1` tag of `atlan-action` instead of the `main` branch of `dbt-action`:

    ```
    stages:  
      - get-downstream-impact  
    get-downstream-impact-open:  
      stage: get-downstream-impact  
      image: node:20  
      script:  
    -  - git clone https://github.com/atlanhq/dbt-action.git  
    +   - git clone --branch v1 https://github.com/atlanhq/atlan-action.git  
    -  - cd dbt-action  
    +   - cd atlan-action  
        - npm install  
        - npm run build  
        - node ./adapters/index.js  
      environment:  
        name: get-downstream-impact  
      rules:  
        - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'  
        - if: '$CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS'  
          when: never  
        - if: '$CI_COMMIT_BRANCH'

    ```
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [model](/tags/model)

[PreviousEnrich Atlan through dbt](/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt)[NextAdd impact analysis in GitHub](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github)

Copyright Â© 2025 Atlan Pte. Ltd.

