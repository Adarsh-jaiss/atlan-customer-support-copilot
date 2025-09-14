# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue
meta-description: Learn about set up aws glue.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up aws glue.
meta-og-locale: en
meta-og-title: Set up AWS Glue | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up AWS Glue | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up AWS Glue
===============

warning**ð¤ Who can do this?** You will need your AWS Glue Data Catalog administrator to run these commands \- you may not have access yourself.

**Did you know?**Prefixing all resources created for Atlan with `atlan-` will help you better identify them. You should also add AWS tags and descriptions to these resources for later reference.

Atlan supports fetching metadata from [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html). If you also want to be able to preview and query the data, you can [set up an Amazon Athena connection](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena) instead.

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

To create an IAM policy with the necessary permissions follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Sid": "VisualEditor0",  
      "Effect": "Allow",  
      "Action": [  
        "glue:GetTables",  
        "glue:GetDatabases",  
        "glue:GetTable",  
        "glue:GetDatabase",  
        "glue:SearchTables",  
        "glue:GetTableVersions",  
        "glue:GetTableVersion",  
        "glue:GetPartition",  
        "glue:GetPartitions",  
        "glue:GetUserDefinedFunctions",  
        "glue:GetUserDefinedFunction"  
      ],  
      "Resource": [  
        "arn:aws:glue:<region>:<account_id>:tableVersion/*/*/*",  
        "arn:aws:glue:<region>:<account_id>:table/*/*",  
        "arn:aws:glue:<region>:<account_id>:catalog",  
        "arn:aws:glue:<region>:<account_id>:database/*"  
      ]  
    }  
  ]  
}  

```
* Replace `<region>` with the AWS region of your Glue instance.
* Replace `<account_id>`Â with your account ID.

dangerIf you're using AWS Lake Formation to manage access to your AWS resources, you will need to [grant permissions in AWS Lake Formation](https://docs.aws.amazon.com/lake-formation/latest/dg/granting-catalog-permissions.html) as well as to the objects you want to crawl.

Choose authentication mechanism[â](#choose-authentication-mechanism "Direct link to Choose authentication mechanism")
-----------------------------------------------------------------------------------------------------------------------

Using the policy created above, configure one of the following options for authentication.

### User\-based authentication[â](#user-based-authentication "Direct link to User-based authentication")

To configure user\-based authentication:

1. Create an AWS IAM user by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
2. On theÂ*Set permissions* page, attach the policy created in the previous step to this user.
3. Once the user is created, view or download the user'sÂ*access key ID* andÂ*secret access key*.

    danger This will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.

### Role delegation\-based authentication[â](#role-delegation-based-authentication "Direct link to Role delegation-based authentication")

To configure role delegation\-based authentication:

1. [Raise a support ticket](/support/submit-request) to get the ARN of the *Node Instance Role* for your Atlan EKS cluster.
2. Create a new role in your AWS account by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).

    1. When prompted for policies, attach the policy created in the previous step to this role.
        2. When prompted, create a trust relationship for the role using the following trust policy. (Replace `<atlan_nodeinstance_role_arn>` with the ARN received from Atlan support.)

    ```
            {  
              "Version": "2012-10-17",  
              "Statement": [  
                {  
                  "Effect": "Allow",  
                  "Principal": {  
                    "AWS": "<atlan_nodeinstance_role_arn>"  
                  },  
                  "Action": "sts:AssumeRole",  
                  "Condition": {}  
                }  
              ]  
            }

    ```
3. (Optional) To use an [external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) for additional security:

    1. [Generate the external ID within Atlan](/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue#provide-credentials).
        2. Paste the external ID into the policy (replace `<atlan_generated_external_id>` with it):

    ```
            {  
              "Version": "2012-10-17",  
              "Statement": [  
                {  
                  "Effect": "Allow",  
                  "Principal": {  
                    "AWS": "<atlan_nodeinstance_role_arn>"  
                  },  
                  "Action": "sts:AssumeRole",  
                  "Condition": {  
                    "StringEquals": {  
                      "sts:ExternalId": "<atlan_generated_external_id>"  
                    }  
                  }  
                }  
              ]  
            }

    ```
4. Now, [reach out to Atlan support](/support/submit-request) with:

    * The name of the role you created above.
        * The ID of the AWS account where the role was created.

dangerWait until the support team confirms the account is allowlisted to assume the role before running the crawler.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousAWS Glue](/apps/connectors/etl-tools/aws-glue)[NextCrawl AWS Glue](/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue)

Copyright Â© 2025 Atlan Pte. Ltd.

