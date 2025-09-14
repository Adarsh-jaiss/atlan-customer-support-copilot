# Source URL
https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github
link-alternate: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github
meta-description: Add contract impact analysis in GitHub <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Add contract impact analysis in GitHub <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-og-locale: en
meta-og-title: Add contract impact analysis in GitHub | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Add contract impact analysis in GitHub | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Add contract impact analysis in GitHub [Private Preview](/get-started/references/product-release-stages#private-preview)
========================================================================================================================

Impact analysis helps you identify how modifications to your data contracts might impact downstream processes, data quality, and overall business operations. This can help you analyze proposed changes and mitigate potential risks before implementation.

If you have ever changed a [data contract](/product/capabilities/governance/contracts/how-tos/create-data-contracts) only to find out later that it broke a downstream table or dashboard, Atlan provides a [GitHub Action](https://github.com/marketplace/actions/atlan-action) to help you out.

This action places Atlan's impact analysis right into your pull request. So, you can view the potential downstream impact of your changes before merging the pull request.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

1. Before running the action, you will need to create an [Atlan API token](/get-started/references/api-authentication).
2. You will also need to assign a [persona](/product/capabilities/governance/access-control/how-tos/create-a-persona) to the API token and add a [metadata policy](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#metadata-policies) that provides the requisite permissions on assets for the Atlan action to work. For example, you can add the following permissions:
    * Asset, such as a table \- *Read* only
    * Any downstream connections, such as Microsoft Power BI \- *Read* only
3. You will need to configure the default `GITHUB_TOKEN` permissions. Grant *Read and write permissions* to the `GITHUB_TOKEN` in your repository to allow the `atlan-action` to seamlessly add or update comments on pull requests. Refer to [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-default-github_token-permissions) to learn more.

Configure the action[â](#configure-the-action "Direct link to Configure the action")
--------------------------------------------------------------------------------------

To set up the Atlan action in GitHub:

1. [Create repository secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) in your repository:
    * `ATLAN_INSTANCE_URL` with the URL of your Atlan instance.
    * `ATLAN_API_TOKEN` with the value of the API token.
2. Add the GitHub Action to your workflow:
    1. Create a workflow file in your repository \- `.github/workflows/atlan-action.yml`.
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
              - name: Checkout  
                uses: actions/checkout@v4  
              - name: Run Action  
                uses: atlanhq/atlan-action@v1  
                with:  
                  GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}  
                  ATLAN_INSTANCE_URL: ${{secrets.ATLAN_INSTANCE_URL}}  
                  ATLAN_API_TOKEN: ${{secrets.ATLAN_API_TOKEN}}  
                  ATLAN_CONFIG: .atlan/config.yaml
    
        ```

Test the action[â](#test-the-action "Direct link to Test the action")
-----------------------------------------------------------------------

After you've completed the configuration above, create a pull request with a changed [Atlan data contract](/product/capabilities/governance/contracts/how-tos/create-data-contracts) file to test the action. You should see the Atlan GitHub action running and then adding comments in your pull request:

* The GitHub workflow will add and update a single comment for every file change.
* The impacted assets in the comment will be displayed in a collapsible section and grouped by source and asset type.
* The comment will include some metadata for your impacted assets \- such as descriptions, owners, and linked glossary terms.
* View impacted assets directly in Atlan.

Inputs[â](#inputs "Direct link to Inputs")
--------------------------------------------

| Name | Description | Required |
| --- | --- | --- |
| `GITHUB_TOKEN` | For [writing comments on PRs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-default-github_token-permissions) to print downstream assets | true |
| `ATLAN_INSTANCE_URL` | For making API requests to the user's tenant | true |
| `ATLAN_API_TOKEN` | For [authenticating API requests](/get-started/references/api-authentication) to the user's tenant | true |
| `ATLAN_CONFIG` | For impact analysis of [Atlan data contracts](/product/capabilities/governance/contracts/how-tos/create-data-contracts), if included in a GitHub PR | true |

**Tags:*** [data](/tags/data)
* [api](/tags/api)

[PreviousCreate data contracts](/product/capabilities/governance/contracts/how-tos/create-data-contracts)

Copyright Â© 2025 Atlan Pte. Ltd.

