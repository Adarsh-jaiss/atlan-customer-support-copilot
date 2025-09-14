# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab
meta-description: Learn about add impact analysis in gitlab.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about add impact analysis in gitlab.
meta-og-locale: en
meta-og-title: Add impact analysis in GitLab | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Add impact analysis in GitLab | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Add impact analysis in GitLab
=============================

dangerFor existing users, the `dbt-action` is no longer maintained and will be deprecated eventually. Atlan strongly recommends migrating to the `atlan-action`. Refer to [How to migrate from dbt to Atlan action](/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action) to learn more and complete the migration.

If you have ever changed a dbt model only to find out later that it broke a downstream table or dashboard, Atlan provides a GitLab CI/CD pipelineÂ to help you out.

This pipeline places Atlan's impact analysis right into your merge request. So, you can view the potential downstream impact of your changes before merging the request.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

1. Before running the action, you will need to create an [Atlan API token](/get-started/references/api-authentication).
2. Assign a [persona](/product/capabilities/governance/access-control/how-tos/create-a-persona) to the API token and add a [metadata policy](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#metadata-policies) that provides requisite permissions on assets for the Atlan dbt action to work. For example, you can add the following permissions:
    * dbt \- *Read* and *Update*
    * Materialized layer, such as Snowflake \- *Read* and *Update*
    * Any downstream connections, such as Microsoft Power BI \- *Read* only
3. When a merge request with changes to one or more dbt models is merged, the Atlan dbt action will link the merge request as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to the assets in Atlan. To ensure that the merge request is linked as a resource, you will need to assign the right persona with requisite permissions to the [API token](/get-started/references/api-authentication).

[https://demo.arcade.software/Vb7LvsTQubu1dZUYTkmf?embed](https://demo.arcade.software/Vb7LvsTQubu1dZUYTkmf?embed)

Configure the action[â](#configure-the-action "Direct link to Configure the action")
--------------------------------------------------------------------------------------

To set up the Atlan dbt action in GitLab:

1. [Define CI/CD variables](https://docs.gitlab.com/ee/ci/variables/index.html#define-a-cicd-variable-in-the-ui) in your repository:
    * `ATLAN_INSTANCE_URL` with the URL of your Atlan instance.
    * `ATLAN_API_TOKEN` with the value of the [API token](/get-started/references/api-authentication).
    * `GITLAB_TOKEN` with the value of the project access token.
2. Click the checkboxes for **Mask variable** and **Expand variable** only. Leave the *Protect variable* checkbox unchecked \- merge request pipelines [do not have access to protected variables](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html).
3. Add the GitLab pipeline to your workflow:
    1. Create a workflow file in the root directory of your repository \- `.gitlab-ci.yml`.
    2. Add the following code to your workflow file:
    
        ```
        stages:  
          - get-downstream-impact  
        get-downstream-impact-open:  
          stage: get-downstream-impact  
          image: node:20  
          script:  
            - git clone   - branch v1 https://github.com/atlanhq/atlan-action.git  
            - cd atlan-action  
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

Test the action[â](#test-the-action "Direct link to Test the action")
-----------------------------------------------------------------------

After you've completed the configuration above, create a merge request with a changed dbt model file to test the action. You should see the Atlan GitLab CI/CD pipeline running and adding comments in your merge request:

* The GitLab CI/CD pipeline will add and update a single comment for every file change.
* The impacted assets in the comment will be displayed in a collapsible section and grouped by source and asset type.
* The comment will include some metadata for your impacted assets \- such as descriptions, owners, and linked glossary terms.
* View the impacted assets in Atlan or open the source URL \- for example, view an impacted Looker dashboard directly in Looker.
* Once you have merged the merge request, it will be added as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to the dbt model and its materialized assets. You can view the linked merge request from the *Resources* tab of the asset sidebar. For example:

Inputs[â](#inputs "Direct link to Inputs")
--------------------------------------------

| Name | Description | Required |
| --- | --- | --- |
| `GITLAB_TOKEN` | For [writing comments on PRs](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) to print downstream assets | true |
| `ATLAN_INSTANCE_URL` | For making API requests to the user's tenant | true |
| `ATLAN_API_TOKEN` | For [authenticating API requests](/get-started/references/api-authentication) to the user's tenant | true |
| `DBT_ENVIRONMENT_BRANCH_MAP` | For mapping the GitLab branch with a specific dbt environment | false |
| `IGNORE_MODEL_ALIAS_MATCHING` | For turning off matching aliases using this variable | false |

Troubleshooting the action[â](#troubleshooting-the-action "Direct link to Troubleshooting the action")
--------------------------------------------------------------------------------------------------------

#### Why does the action fetch a model from an incorrect environment?[â](#why-does-the-action-fetch-a-model-from-an-incorrect-environment "Direct link to Why does the action fetch a model from an incorrect environment?")

If there are multiple dbt models with the same name but across different environments in your Atlan instance, the action may fetch an incorrect model. In order to ensure that the action fetches a model from the right environment, you can map the GitLab branch with a specific dbt environment. This will allow the Atlan GitLab CI/CD pipeline to parse lineage for that specific environment.

For example, you can provide the mapping in this format \- `branch name` : `dbt environment name`

```
stages:  
  - get-downstream-impact  
  
get-downstream-impact-open:  
  stage: get-downstream-impact  
  image: node:20  
  variables:  
+    DBT_ENVIRONMENT_BRANCH_MAP: |  
+      main: [Enter Your Branch name]  
  script:  
    - git clone   - branch v1 https://github.com/atlanhq/atlan-action.git  
    - cd atlan-action  
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

#### Why does the action fetch a model by its alias and not model name?[â](#why-does-the-action-fetch-a-model-by-its-alias-and-not-model-name "Direct link to Why does the action fetch a model by its alias and not model name?")

By default, the action checks if there is an alias defined for a dbt model in the code and looks for the relevant asset in Atlan using that alias. To turn off matching aliases for your dbt models, you can set the `IGNORE_MODEL_ALIAS_MATCHING` input to true.

For example:

```
stages:  
  - get-downstream-impact  
  
get-downstream-impact-open:  
  stage: get-downstream-impact  
  image: node:20  
  variables:  
+    IGNORE_MODEL_ALIAS_MATCHING: "true"  
  script:  
    - git clone   - branch v1 https://github.com/atlanhq/atlan-action.git  
    - cd atlan-action  
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
* [api](/tags/api)
* [authentication](/tags/authentication)
* [model](/tags/model)

[PreviousAdd impact analysis in GitHub](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-github)[NextWhat does Atlan crawl from dbt Cloud?](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud)

Copyright Â© 2025 Atlan Pte. Ltd.

