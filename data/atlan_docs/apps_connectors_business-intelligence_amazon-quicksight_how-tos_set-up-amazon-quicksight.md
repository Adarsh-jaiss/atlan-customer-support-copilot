# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight
meta-description: Learn about set up amazon quicksight.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up amazon quicksight.
meta-og-locale: en
meta-og-title: Set up Amazon QuickSight | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Amazon QuickSight | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Amazon QuickSight
========================

warning**ð¤ Who can do this?** You will probably need your Amazon QuickSight administrator to run these commands \- you may not have access yourself.

Atlan currently only supports IAM user authentication for Amazon QuickSight.

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

To create an IAM policy with the necessary permissions, follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
  "Version": "2012-10-17",  
  "Statement": [{  
      "Effect": "Allow",  
      "Action": [  
        "quicksight:ListAnalyses",  
        "quicksight:ListDataSets",  
        "quicksight:ListDashboards",  
        "quicksight:ListFolders",  
        "quicksight:ListDataSources",  
        "quicksight:DescribeAnalysis",  
        "quicksight:DescribeDashboard",  
        "quicksight:DescribeDataSet",  
        "quicksight:DescribeFolder",  
        "quicksight:ListFolderMembers"  
      ],  
      "Resource": [  
        "arn:aws:quicksight:<region>:<account_id>:*"  
      ]  
    }]  
}  

```
* Replace `<region>` with the AWS region of your Amazon QuickSight instance.
* Replace `<account_id>` with your AWS account ID.

Configure user\-based authentication[â](#configure-user-based-authentication "Direct link to Configure user-based authentication")
------------------------------------------------------------------------------------------------------------------------------------

Using the IAM policy created above, configure user\-based authentication.

To configure user\-based authentication:

1. Create an AWS IAM user by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
2. On theÂ*Set permissions* page, attach the policy created in the previous step to this user.
3. Once the user is created, view or download the user'sÂ*access key ID* andÂ*secret access key*.

    danger This will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.
**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousAmazon QuickSight](/apps/connectors/business-intelligence/amazon-quicksight)[NextCrawl Amazon QuickSight](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight)

Copyright Â© 2025 Atlan Pte. Ltd.

