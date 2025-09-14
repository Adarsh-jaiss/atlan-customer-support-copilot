# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena
meta-description: :::warning Who can do this? You will need your Amazon Athena or AWS administrator involved - you may not have access yourself to complete these steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need your Amazon Athena or AWS administrator involved - you may not have access yourself to complete these steps.
meta-og-locale: en
meta-og-title: Set up a private network link to Amazon Athena | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up a private network link to Amazon Athena | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up a private network link to Amazon Athena
==============================================

Who can do this?You will need your Amazon Athena or AWS administrator involved \- you may not have access yourself to complete these steps.

[AWS PrivateLink](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html) creates a secure, private connection between services running in AWS. This document describes the steps to set this up between Amazon Athena and Atlan.

Request Atlan's details[â](#request-atlans-details "Direct link to Request Atlan's details")
----------------------------------------------------------------------------------------------

Before configuring the connection, you will need the following:

* VPC endpoint ID of the Atlan VPC endpoint in the following format \- `vpce-0d90d77d1be568544`. This will be required to create the IAM policy.
* To enter a hostname for [crawling Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena):
    + If [private DNS hostnames are enabled](https://docs.aws.amazon.com/athena/latest/ug/interface-vpc-endpoint.html), enter the default Athena endpoint in the following format \- `https://athena.<region>.amazonaws.com` \- and it will resolve to your VPC endpoint.
    + If privateÂ DNS hostnames are not enabled, enter the primary DNS name of the Atlan VPC endpoint in the following format \- `vpce-<hash>-<hash.>vpce-svc-<hash>.<region>.vpce.amazonaws.com` \- as retrieved from Atlan support.

[Request it from Atlan support](/support/submit-request).

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

To create an IAM policy with the necessary permissions, follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

1. Create the policy using the following JSON:

    ```
    {  
        "Version": "2012-10-17",  
        "Statement": [  
            {  
                "Sid": "AllowAthenaListDataCatalog",  
                "Effect": "Allow",  
                "Action": [  
                    "athena:ListDataCatalogs"  
                ],  
                "Resource": "*",  
                "Condition": {  
                    "StringEquals": {  
                        "aws:SourceVpce": [  
                            "<vpce-endpoint-id>"  
                        ]  
                    }  
                }  
            },  
            {  
                "Sid": "AllowAthenaActions",  
                "Effect": "Allow",  
                "Action": [  
                    "athena:StartQueryExecution",  
                    "athena:GetQueryResults",  
                    "athena:DeleteNamedQuery",  
                    "athena:GetNamedQuery",  
                    "athena:ListQueryExecutions",  
                    "athena:StopQueryExecution",  
                    "athena:GetQueryResultsStream",  
                    "athena:ListNamedQueries",  
                    "athena:CreateNamedQuery",  
                    "athena:GetQueryExecution",  
                    "athena:BatchGetNamedQuery",  
                    "athena:BatchGetQueryExecution",  
                    "athena:GetWorkGroup",  
                    "athena:GetTableMetadata",  
                    "athena:GetDatabase",  
                    "athena:GetDataCatalog",  
                    "athena:ListDatabases",  
                    "athena:ListTableMetadata"  
                ],  
                "Resource": [  
                    "arn:aws:athena:us-east-2:666568140392:datacatalog/*",  
                    "arn:aws:athena:us-east-2:666568140392:workgroup/*"  
                ],  
                "Condition": {  
                    "StringEquals": {  
                        "aws:SourceVpce": [  
                            "<vpce-endpoint-id>"  
                        ]  
                    }  
                }  
            },  
            {  
                "Sid": "AllowGlueActionsViaAthena",  
                "Effect": "Allow",  
                "Action": [  
                    "glue:GetDatabase",  
                    "glue:GetDatabases",  
                    "glue:CreateDatabase",  
                    "glue:GetTables",  
                    "glue:GetTable",  
                    "glue:SearchTables",  
                    "glue:GetTableVersions",  
                    "glue:GetTableVersion",  
                    "glue:GetPartition",  
                    "glue:GetPartitions",  
                    "glue:GetUserDefinedFunctions",  
                    "glue:GetUserDefinedFunction"  
                ],  
                "Resource": [  
                    "arn:aws:glue:us-east-2:666568140392:tableVersion/*/*/*",  
                    "arn:aws:glue:us-east-2:666568140392:catalog",  
                    "arn:aws:glue:us-east-2:666568140392:table/*/*",  
                    "arn:aws:glue:us-east-2:666568140392:database/*"  
                ],  
                "Condition": {  
                    "ForAnyValue:StringEquals": {  
                        "aws:CalledVia": [  
                            "athena.amazonaws.com"  
                        ]  
                    }  
                }  
            },  
            {  
                "Sid": "AllowS3ActionsOnDataViaAthena",  
                "Effect": "Allow",  
                "Action": [  
                    "s3:GetBucketLocation",  
                    "s3:ListBucket",  
                    "s3:GetObject"  
                ],  
                "Resource": [  
                    "arn:aws:s3:::demo-wide-world-importers",  
                    "arn:aws:s3:::demo-wide-world-importers/*"  
                ],  
                "Condition": {  
                    "ForAnyValue:StringEquals": {  
                        "aws:CalledVia": [  
                            "athena.amazonaws.com"  
                        ]  
                    }  
                }  
            },  
            {  
                "Sid": "AllowS3ActionsOnMetadataViaAthena",  
                "Effect": "Allow",  
                "Action": [  
                    "s3:GetBucketLocation",  
                    "s3:GetObject",  
                    "s3:ListBucket",  
                    "s3:ListBucketMultipartUploads",  
                    "s3:ListMultipartUploadParts",  
                    "s3:AbortMultipartUpload",  
                    "s3:CreateBucket",  
                    "s3:PutObject"  
                ],  
                "Resource": [  
                    "arn:aws:s3:::source-curation-athena-metadata",  
                    "arn:aws:s3:::source-curation-athena-metadata/*"  
                ],  
                "Condition": {  
                    "ForAnyValue:StringEquals": {  
                        "aws:CalledVia": [  
                            "athena.amazonaws.com"  
                        ]  
                    }  
                }  
            }  
        ]  
    }

    ```

    * Replace `<vpce-endpoint-id>` with the [VPC endpoint ID received from Atlan support](#request-atlans-details).
2. Attach this policy to the IAM user or role used for authentication. For more information, see [Choose authentication mechanism](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena#choose-authentication-mechanism) or create a new IAM user by following the steps in the [Create an IAM user](#create-an-iam-user) section.

Create an IAM user[â](#create-an-iam-user "Direct link to Create an IAM user")
--------------------------------------------------------------------------------

Create an AWS IAM user and attach the policy created above to this user.

To create an AWS IAM user:

1. Follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
2. On the *Set permissions* page, attach the policy created in the previous step to this user.
3. Refer to [managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to create an access key for the new user.
4. Once the user is created, view or download the user'sÂ*access key ID* andÂ*secret access key*.

dangerThis will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.

The connection is now established. You can now use the DNS name of the Atlan VPC endpoint as the hostname to [crawl Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena) in Atlan! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena)[NextCrawl Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena)

Copyright Â© 2025 Atlan Pte. Ltd.

