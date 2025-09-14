# Source URL
https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-s3

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-s3
link-alternate: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-s3
meta-description: Create AWS IAM permissions and credentials for Atlan to access and catalog your S3 buckets and objects.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Create AWS IAM permissions and credentials for Atlan to access and catalog your S3 buckets and objects.
meta-og-locale: en
meta-og-title: Set up Amazon S3 | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-s3
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Amazon S3 | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Amazon S3
================

This guide walks you through creating IAM permissions and authentication credentials to allow Atlan to catalog your S3 buckets and objects.

warningThis integration catalogs only S3 buckets and objects. It doesn't support data lineage.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin:

* [Set up S3 inventory reports](/apps/connectors/storage/amazon-s3/references/inventory-report-structure), required only if you plan to use **inventory\-based ingestion**.

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

To complete this setup, you'll need:

* AWS Administrator access to create IAM policies and users/roles in AWS Management Console
* Atlan workflow access to configure connectors and workflows in Atlan
* Access to configure S3 inventory reports only if you plan to use [inventory ingestion](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3#choose-ingestion-method)

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

Choose the appropriate policy depending on your ingestion method.

* Direct ingestion
* Inventory ingestion

1. In AWS, go to **IAM â Policies**
2. Click **Create policy**
3. Select the **JSON** tab and paste:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Sid": "AllowAccessToBuckets",  
          "Effect": "Allow",  
          "Action": [  
            "s3:GetBucketLocation",  
            "s3:ListAllMyBuckets",  
            "s3:ListBucket",  
            "s3:GetObject",  
            "s3:GetEncryptionConfiguration",  
            "s3:GetBucketVersioning"  
          ],  
          "Resource": [  
            "arn:aws:s3:::<s3_bucket_1>",  
            "arn:aws:s3:::<s3_bucket_1>/*",  
            "arn:aws:s3:::<s3_bucket_2>",  
            "arn:aws:s3:::<s3_bucket_2>/*"  
          ]  
        }  
      ]  
    }

    ```
4. Replace `<s3_bucket>` with your actual bucket name or pattern.
5. Click **Next**, name your policy (e.g. `AtlanS3CrawlerDirectPolicy`), and create it.
1. In AWS, go to **IAM â Policies**
2. Click **Create policy**
3. Select the **JSON** tab and paste:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Sid": "AllowInventoryAccess",  
          "Effect": "Allow",  
          "Action": [  
            "s3:ListBucket",  
            "s3:GetObject",  
            "s3:SelectObjectContent"  
          ],  
          "Resource": [  
            "arn:aws:s3:::<s3_bucket>",  
            "arn:aws:s3:::<s3_bucket>/*"  
          ]  
        }  
      ]  
    }

    ```
4. Replace `<s3_bucket>` with your actual bucket name or pattern.
5. Click **Next**, name your policy (e.g. `AtlanS3CrawlerInventoryPolicy`), and create it.

Set up authentication[â](#set-up-authentication "Direct link to Set up authentication")
-----------------------------------------------------------------------------------------

Choose between IAM user (simpler) and IAM role (more secure and recommended for production).

* IAM user
* IAM role

1. In AWS, go to **IAM â Users**
2. Click **Add users**, give a name (e.g. `atlan-s3-crawler`)
3. Select **Attach policies directly** and choose the policy you just created
4. Complete the steps and create an **access key**
5. Save the **Access Key ID** and **Secret Access Key** â you'll need them in Atlan
1. Contact Atlan support for the **Node Instance Role ARN** of your Atlan EKS cluster
2. In AWS, go to **IAM â Roles** â **Create role**
3. Select **Trusted entity type: AWS account**
4. Enter Atlanâs AWS account ID (available via support)
5. Attach the policy you created earlier
6. Name the role (e.g. `AtlanS3CrawlerRole`) and create it
7. Edit the trust relationship with this policy:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Effect": "Allow",  
          "Principal": {  
            "AWS": "<atlan_nodeinstance_role_arn>"  
          },  
          "Action": "sts:AssumeRole"  
        }  
      ]  
    }

    ```
8. Share the **role name** and **AWS account ID** with Atlan support
9. Once Atlan confirms access, copy the Role ARN (e.g. `arn:aws:iam::<account-id>:role/<role-name>`) for use in the workflow

warningWait for confirmation from Atlan before proceeding to workflow configuration.

Need help?[â](#need-help "Direct link to Need help?")
-------------------------------------------------------

* Check [AWS IAM documentation](https://docs.aws.amazon.com/iam/) for detailed reference
* [Contact Atlan support](/support/submit-request) for help with setup or integration

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

[Crawl S3 assets](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3): Configure your workflow and crawl S3 assets.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [storage](/tags/storage)
* [amazon\-s3](/tags/amazon-s-3)
* [aws](/tags/aws)

[PreviousAmazon S3](/apps/connectors/storage/amazon-s3)[NextSet up Inventory reports](/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3)

Copyright Â© 2025 Atlan Pte. Ltd.

