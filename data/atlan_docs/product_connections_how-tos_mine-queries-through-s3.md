# Source URL
https://docs.atlan.com/product/connections/how-tos/mine-queries-through-s3

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/mine-queries-through-s3
link-alternate: https://docs.atlan.com/product/connections/how-tos/mine-queries-through-s3
meta-description: Once you have crawled assets from a supported connector, you can mine query history.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have crawled assets from a supported connector, you can mine query history.
meta-og-locale: en
meta-og-title: Mine queries through S3 | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/mine-queries-through-s3
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine queries through S3 | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine queries through S3
=======================

Once you have crawled assets from a supported connector,Â you can mine query history.

Supported connectors include the following:

* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)
* [Hive](/apps/connectors/database/hive/how-tos/crawl-hive)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)
* [Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata)

For each of the supported connectors, Atlan supports mining query history via S3\. This is useful when you have files that hold query history beyond what the source itself retains.

To mine lineage from these sources from S3, complete the following steps.

Structure the query files[â](#structure-the-query-files "Direct link to Structure the query files")
-----------------------------------------------------------------------------------------------------

To make the query history files available for Atlan, ensure the files:

* Use a `.json` extension.
* Are present in a single S3 bucket and prefix (directory).

To structure the contents of the files for Atlan, ensure:

* Each line is a single JSON value. (The JSON object cannot be pretty\-formatted or span multiple lines.)
* Each SQL query is on its own line.
* Commas are *not* used to separate the lines.

**Did you know?**You can also provide a default database and schema, and session IDs in the JSON.

* If a SQL query has only the name of the table or view it queries, Atlan will use the default database and schema to generate lineage for the query.
* Including the session ID speeds up lineage processing. If provided, ensure that all queries belonging to the same session are next to each other in the file.
Here is an example of what your JSON should look like. (Here it is split across multiple lines to assist reading, but remember it must all be on a single line in the file!)

```
{  
  "QUERY_TEXT": "insert into NETFLIX_DB.PUBLIC.MOVIES_FILTERED as select m.* from MOVIES m where m.RATING > 5;",  
  "DATABASE_NAME": "NETFLIX_DB",  
  "SCHEMA_NAME": "PUBLIC",  
  "SESSION_ID": "5c2f0a41-5d02-46f1-b9bd-ef80ad571013"  
}  

```
The name of the keys or properties in the JSON can be configured while setting up the miner package. In the example above, the default database (`DATABASE_NAME`) and schema (`SCHEMA_NAME`) will be used to qualify the query against the table `MOVIES` as `NETFLIX_DB.PUBLIC.MOVIES`.

Set up the S3 bucket[â](#set-up-the-s3-bucket "Direct link to Set up the S3 bucket")
--------------------------------------------------------------------------------------

The query files must be available in an S3 bucket. You can either upload these files to the Atlan deployment bucket or use your own S3 bucket.

Option 1: Use the Atlan S3 bucket[â](#option-1-use-the-atlan-s3-bucket "Direct link to Option 1: Use the Atlan S3 bucket")
----------------------------------------------------------------------------------------------------------------------------

To avoid access issues, we recommend uploading the required files to the same S3 bucket as Atlan. [Raise a support request](/support/submit-request) to get the details of your Atlan bucket and include the ARN value of the IAM user or IAM role we can provision access to.

To configure access, add the following IAM policy to the default EC2 instance role used by the Atlan EKS cluster.

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Sid": "VisualEditor0",  
      "Effect": "Allow",  
      "Action": [  
        "s3:GetBucketLocation",  
        "s3:ListBucket",  
        "s3:GetObject"  
      ],  
      "Resource": [  
        "arn:aws:s3:::<bucket-name>",  
        "arn:aws:s3:::<bucket-name>/<prefix>/*"  
      ]  
    }  
  ]  
}  

```
* Replace `<bucket-name>` with the bucket where the data is uploaded.
* Replace `<prefix>` with the prefix (directory) where all the files have been uploaded.

If you instead opt to use your own S3 bucket, you will need to complete the following steps:

Option 2: Use your own S3 bucket[â](#option-2-use-your-own-s3-bucket "Direct link to Option 2: Use your own S3 bucket")
-------------------------------------------------------------------------------------------------------------------------

dangerS3 buckets with VPC endpoints currently do not support [cross\-region requests](https://repost.aws/knowledge-center/s3-troubleshoot-copy-between-buckets). This may result in workflows not picking up objects from your bucket.

You'll first need to create a cross\-account bucket policy giving Atlan's IAM role access to your bucket. A cross\-account bucket policy is required since your Atlan tenant and S3 bucket may not always be deployed in the same AWS account. The permissions required for the S3 bucket include \- `GetBucketLocation`, `ListBucket`, and `GetObject`.

To create a cross\-account bucket policy:

1. [Raise a support ticket](/support/submit-request) to get the ARN of the *Node Instance Role* for your Atlan EKS cluster.
2. Create a new policy to allow access by this ARN and update your bucket policy with the following:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Sid": "VisualEditor0",  
          "Effect": "Allow",  
          "Principal": {  
            "AWS": "<role-arn>"  
          },  
          "Action": [  
            "s3:GetBucketLocation",  
            "s3:ListBucket",  
            "s3:GetObject"  
          ],  
          "Resource": [  
            "arn:aws:s3:::<bucket-name>",  
            "arn:aws:s3:::<bucket-name>/<prefix>/*"  
          ]  
        }  
      ]  
    }

    ```

    * Replace `<role-arn>` with the role ARN of Atlan's node instance role.
        * Replace `<bucket-name>` with the name of the bucket you are creating.
        * Replace `<prefix>` with the name of the prefix (directory) within that bucket where you will upload the files.
3. Once the new policy has been set up, please notify the support team. Your request should include the S3 bucket name and prefix. This should be done prior to setting up the workflow so that we can create and attach an IAM policy for your bucket to Atlan's IAM role.

### (Optional) Update KMS policy[â](#optional-update-kms-policy "Direct link to (Optional) Update KMS policy")

If your S3 bucket is encrypted, you will need to update your KMS policy. This will allow Atlan to decrypt the objects in your S3 bucket.

1. Provide the KMS key ARN and KMS key alias ARN to the Atlan support team. The KMS key that you provide must be a customer managed KMS key. (This is because you can only change the key policy for a customer managed KMS key, and not for an AWS managed KMS key. Refer to [AWS documentation](https://aws.amazon.com/kms/faqs/#:~:text=What%E2%80%99s%20the%20difference%20between%20a%20KMS%20key%20I%20create%20and%20KMS%20keys%20created%20automatically%20for%20me%20by%20other%20AWS%20services%3F) to learn more.)
2. To whitelist the ARN of Atlan's node instance, update the KMS policy with the following:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Sid": "Decrypt Cross Account",  
          "Effect": "Allow",  
          "Principal": {  
            "AWS": "<role-arn>"  
          },  
          "Action": [  
            "kms:Decrypt",  
            "kms:DescribeKey"  
          ],  
          "Resource": "*"  
        }  
      ]  
    }

    ```

* Replace `<role-arn>` with the role ARN of Atlan's node instance role.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the S3 miner:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select the miner for your source and click on **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the S3 miner:

1. For *Connection*, select the connection to mine. (To select a connection, a crawler must have already run against that source.)
2. For *Miner extraction method*, select **S3**.
3. Enter the details for your files:
    * For *Bucket Name*, enter the name of your S3 bucket or Atlan's bucket, including `s3://`.
    * For *Bucket Prefix*, enter the S3 prefix (directory) within the bucket where the files are located.
    * (Optional) For *Bucket Region*, enter the name of the S3 region in which the bucket exists.
    * For *SQL Json key*, enter the JSON key containing the SQL query value. (In the example above, this was `QUERY_TEXT`.)
    * For *Default Database Json Key*, enter the JSON key containing the name of the default database. (In the example above, this was `DATABASE_NAME`.)
    * For *Default Schema Json Key*, enter the JSON key containing the name of the default schema. (In the example above, this was `SCHEMA_NAME`.)
    * For *Session ID Json Key*, enter the JSON key containing the session ID under which the query ran. (In the example above, this was `SESSION_ID`.)
4. (Optional) For *Control Config*, if Atlan support has provided you a custom control configuration, select **Custom** and enter the configuration into the *Custom Config* box. You can also:
    * Enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the S3 miner, after completing the steps above:

* To run the miner once, immediately, at the bottom of the screen click the **Run** button.
* To schedule the miner to run hourly, daily, weekly or monthly, at the bottom of the screen click the **Schedule \& Run** button.

Once the miner has completed running, you will see lineage for your source's assets created by the queries in S3! ð

Frequently asked questions[â](#frequently-asked-questions "Direct link to Frequently asked questions")
--------------------------------------------------------------------------------------------------------

#### If I remove queries from S3 and run the miner, does it remove the lineage generated from those queries?[â](#if-i-remove-queries-from-s3-and-run-the-miner-does-it-remove-the-lineage-generated-from-those-queries "Direct link to If I remove queries from S3 and run the miner, does it remove the lineage generated from those queries?")

No, we do not remove lineage from older queries that are no longer in the bucket.

#### Does the miner reprocess files in the S3 prefix?[â](#does-the-miner-reprocess-files-in-the-s3-prefix "Direct link to Does the miner reprocess files in the S3 prefix?")

Yes, we process all files present in the S3 prefix and publish any new lineage generated. We recommend removing older files when updating the files in the S3 prefix.

#### I used this approach for initial mining. Can I convert the miner I already set up to do its future mining direct from the source (not S3\)?[â](#i-used-this-approach-for-initial-mining-can-i-convert-the-miner-i-already-set-up-to-do-its-future-mining-direct-from-the-source-not-s3 "Direct link to I used this approach for initial mining. Can I convert the miner I already set up to do its future mining direct from the source (not S3)?")

Yes, just [edit the workflow configuration](/product/connections/how-tos/manage-connectivity). Alternatively, you can also set up another miner for the same connection.

#### Are the database and schema name parameters always required in the JSON file?[â](#are-the-database-and-schema-name-parameters-always-required-in-the-json-file "Direct link to Are the database and schema name parameters always required in the JSON file?")

The `DATABASE_NAME` and `SCHEMA_NAME` fields can be set to null if that data is already available in the query. These properties are used as a fallback option for when queries are run in the context of a certain schema or database.

#### What SQL statements should be added to the S3 miner JSON file for lineage?[â](#what-sql-statements-should-be-added-to-the-s3-miner-json-file-for-lineage "Direct link to What SQL statements should be added to the S3 miner JSON file for lineage?")

You will need to add DDL and DML statements to the S3 miner JSON file for mining lineage. `SELECT` is not required since it is a DQL statement. Both `UPDATE` and `DELETE` can be based on values from another table, so these statements will be required for generating lineage.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousConnect data sources for Azure\-hosted Atlan instances](/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances)[NextHow to order workflows](/product/connections/how-tos/order-workflows)

Copyright Â© 2025 Atlan Pte. Ltd.

