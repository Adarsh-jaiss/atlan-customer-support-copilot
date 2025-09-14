# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb
meta-description: Learn about set up amazon dynamodb.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up amazon dynamodb.
meta-og-locale: en
meta-og-title: Set up Amazon DynamoDB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Amazon DynamoDB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Amazon DynamoDB
======================

warning**ð¤ Who can do this?** You will probably need your Amazon DynamoDB administrator to run these commands \- you may not have access yourself.

Atlan supports the following authentication methods for fetching metadata from Amazon DynamoDB:

* [IAM user authentication](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) \- this method uses an AWS access key, secret key, and region to fetch metadata.
* [IAM role authentication](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) \- this method uses an AWS role ARN and region to fetch metadata.

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

To create an IAM policy with the necessary permissions, follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Effect": "Allow",  
            "Action": [  
                "dynamodb:ListTables"  
            ],  
            "Resource": "*"  
        },  
				{  
            "Effect": "Allow",  
            "Action": [  
                "dynamodb:DescribeTable"  
            ],  
            "Resource": "arn:aws:dynamodb:<region>:<account_id>:table/*"  
        }  
    ]  
}  

```
* Replace `<region>` with the AWS region of your Amazon DynamoDB instance.
* Replace `<account_id>` with your AWS account ID.

IAM permissions[â](#iam-permissions "Direct link to IAM permissions")
-----------------------------------------------------------------------

Atlan requires the following permissions:

* `dynamodb:ListTables`:
    + Fetches a list of your Amazon DynamoDB tables. This permission is used during the metadata extraction process to dynamically determine a list of tables.
    + Note that this action does not support resource\-level permissions and requires you to choose all resources, hence `*` for `Resource`.
* `dynamodb:DescribeTable`:
    + Fetches metadata for extracted tables. This action supports resource\-level permissions, so for `Resource`, you can either:Â
        - Grant permission to all tables in the region for which you want to extract metadata: `arn:aws:dynamodb:<region>:<account_id>:table/*`
        - Specify the table names for which you want to extract metadata: `arn:aws:dynamodb:<region>:<account_id>:table/table_name_1`, `arn:aws:dynamodb:<region>:<account_id>:table/table_name_2`

Choose authentication mechanism[â](#choose-authentication-mechanism "Direct link to Choose authentication mechanism")
-----------------------------------------------------------------------------------------------------------------------

Using the [policy created above](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb), configure one of the following options for authentication.

### User\-based authentication[â](#user-based-authentication "Direct link to User-based authentication")

To configure IAM user\-based authentication:

1. Create an AWS IAM user by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
2. On theÂ*Set permissions* page, [attach the policy](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) created in the previous step to this user.
3. Refer to [managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to create an access key for the new user.
4. Once the user is created, view or download the user'sÂ*access key ID* andÂ*secret access key*.

dangerThis will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.

### Role delegation\-based authentication[â](#role-delegation-based-authentication "Direct link to Role delegation-based authentication")

To configure role delegation\-based authentication:

1. [Raise a support ticket](/support/submit-request) to get the ARN of the *Node Instance Role* for your Atlan EKS cluster.
2. Create a new role in your AWS account by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).

    1. When prompted for policies, [attach the policy](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) created in the previous step to this role.
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
3. (Optional) To use an [external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) for additional security, paste the external ID into the policy:

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
              "sts:ExternalId": "<atlan_external_id>"  
            }  
          }  
        }  
      ]  
    }

    ```

    * Replace `<atlan_external_id>` with the external ID you want to use.
4. Now, [reach out to Atlan support](/support/submit-request) with:

    * The name of the role you created above.
        * The ID of the AWS account where the role was created.

dangerWait until the support team confirms the account is allowlisted to assume the role before running the crawler.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousAmazon DynamoDB](/apps/connectors/database/amazon-dynamodb)[NextCrawl Amazon DynamoDB](/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb)

Copyright Â© 2025 Atlan Pte. Ltd.

