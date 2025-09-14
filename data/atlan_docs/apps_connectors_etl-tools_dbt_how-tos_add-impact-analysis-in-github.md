# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github
meta-description: Learn about add impact analysis in github.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about add impact analysis in github.
meta-og-locale: en
meta-og-title: Add impact analysis in GitHub | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Add impact analysis in GitHub | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Add impact analysis in GitHub
=============================

dangerFor existing users, the `dbt-action` is no longer maintained and will be deprecated eventually. Atlan strongly recommends migrating to the `atlan-action`. Refer to [How to migrate from dbt to Atlan action](/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action) to learn more and complete the migration.

If you have ever changed a dbt model only to find out later that it broke a downstream table or dashboard,Â Atlan provides a [GitHub Action](https://github.com/marketplace/actions/atlan-action) to help you out.

This action places Atlan's impact analysis right into your pull request. So, you can view the potential downstream impact of your changes before merging the pull request.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

1. Before running the action, you will need to create an [Atlan API token](/get-started/references/api-authentication).
2. You will also need to assign a [persona](/product/capabilities/governance/access-control/how-tos/create-a-persona) to the API token and add a [metadata policy](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#metadata-policies) that provides the requisite permissions on assets for the Atlan dbt action to work. For example, you can add the following permissions:
    * dbt \- *Read* and *Update*
    * Materialized layer, such as Snowflake \- *Read* and *Update*
    * Any downstream connections, such as Microsoft Power BI \- *Read* only
3. When a pull request with changes to one or more dbt models is merged, the Atlan dbt action will link the pull request as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to the assets in Atlan. To ensure that the pull request is linked as a resource, you will need to assign the right persona with requisite permissions to the API token.
4. You will need to configure the default `GITHUB_TOKEN` permissions. Grant *Read and write permissions* to the `GITHUB_TOKEN` in your repository to allow the `atlan-action` to seamlessly add or update comments on pull requests. Refer to [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-default-github_token-permissions) to learn more.

Configure the action[â](#configure-the-action "Direct link to Configure the action")
--------------------------------------------------------------------------------------

To set up the Atlan action in GitHub:

1. [Create repository secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) in your repository:
    * `ATLAN_INSTANCE_URL` with the URL of your Atlan instance.
    * `ATLAN_API_TOKEN` with the value of the API token.
2. Add the GitHub Action to your workflow:
    1. Create a workflow file in your repository \- `.github/workflows/atlan-dbt.yml`.
    2. Add the following code to your workflow file:
    
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
              - name: Run Action  
                uses: atlanhq/atlan-action@v1  
                with:  
                  GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}  
                  ATLAN_INSTANCE_URL: ${{secrets.ATLAN_INSTANCE_URL}}  
                  ATLAN_API_TOKEN: ${{secrets.ATLAN_API_TOKEN}}
    
        ```

Test the action[â](#test-the-action "Direct link to Test the action")
-----------------------------------------------------------------------

After you've completed the configuration above, create a pull request with a changed dbt model file to test the action. You should see the Atlan GitHub action running and then adding comments in your pull request:

* The GitHub workflow will add and update a single comment for every file change.
* The impacted assets in the comment will be displayed in a collapsible section and grouped by source and asset type.
* The comment will include some metadata for your impacted assets \- such as descriptions, owners, and linked glossary terms.
* View the impacted assets in Atlan or open the source URL \- for example, view an impacted Looker dashboard directly in Looker.
* Once you have merged the pull request, it will be added as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to the dbt model and its materialized assets. You can view the linked pull request from the *Resources* tab of the asset sidebar.

For example:

[https://demo.arcade.software/5Urfdg984z0bCcE3Hbzj?embed](https://demo.arcade.software/5Urfdg984z0bCcE3Hbzj?embed)

Inputs[â](#inputs "Direct link to Inputs")
--------------------------------------------

| Name | Description | Required |
| --- | --- | --- |
| `GITHUB_TOKEN` | For [writing comments on PRs](https://dev.to/github/the-githubtoken-in-github-actions-how-it-works-change-permissions-customizations-3cgp) to print downstream assets | true |
| `ATLAN_INSTANCE_URL` | For making API requests to the user's tenant | true |
| `ATLAN_API_TOKEN` | For [authenticating API requests](/get-started/references/api-authentication) to the user's tenant | true |
| `DBT_ENVIRONMENT_BRANCH_MAP` | For mapping the GitHub branch with a specific dbt environment | false |
| `IGNORE_MODEL_ALIAS_MATCHING` | For turning off matching aliases using this variable | false |

Troubleshooting the action[â](#troubleshooting-the-action "Direct link to Troubleshooting the action")
--------------------------------------------------------------------------------------------------------

#### Why does the action fetch a model from an incorrect environment?[â](#why-does-the-action-fetch-a-model-from-an-incorrect-environment "Direct link to Why does the action fetch a model from an incorrect environment?")

If there are multiple dbt models with the same name but across different environments in your Atlan instance, the action may fetch an incorrect model. In order to ensure that the action fetches a model from the right environment, you can map the GitHub branch with a specific dbt environment. This will allow the Atlan GitHub action to parse lineage for that specific environment.

For example, you can provide the mapping in this format \- `branch name` : `dbt environment name`

```
jobs:  
  get-downstream-impact:  
    name: Get Downstream Assets  
    runs-on: ubuntu-latest  
    steps:  
      - name: Run Action  
        uses: atlanhq/atlan-action@v1  
        with:  
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}  
          ATLAN_INSTANCE_URL: ${{secrets.ATLAN_INSTANCE_URL}}  
          ATLAN_API_TOKEN: ${{secrets.ATLAN_API_TOKEN}}  
+         DBT_ENVIRONMENT_BRANCH_MAP: |  
+           main: dbt-prod  
+           beta: dbt-test  

```

#### Why does the action fetch a model by its alias and not model name?[â](#why-does-the-action-fetch-a-model-by-its-alias-and-not-model-name "Direct link to Why does the action fetch a model by its alias and not model name?")

By default, the action checks if there is an alias defined for a dbt model in the code and looks for the relevant asset in Atlan using that alias. To turn off matching aliases for your dbt models, you can set the `IGNORE_MODEL_ALIAS_MATCHING` input to true.

For example:

```
jobs:  
  get-downstream-impact:  
    name: Get Downstream Assets  
    runs-on: ubuntu-latest  
    steps:  
      - name: Run Action  
        uses: atlanhq/atlan-action@v1  
        with:  
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}  
          ATLAN_INSTANCE_URL: ${{secrets.ATLAN_INSTANCE_URL}}  
          ATLAN_API_TOKEN: ${{secrets.ATLAN_API_TOKEN}}  
+         IGNORE_MODEL_ALIAS_MATCHING: true  

```
**Tags:*** [connectors](/tags/connectors)
* [api](/tags/api)
* [authentication](/tags/authentication)
* [model](/tags/model)

[PreviousMigrate from dbt to Atlan action](/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action)[NextAdd impact analysis in GitLab](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab)

Copyright Â© 2025 Atlan Pte. Ltd.

