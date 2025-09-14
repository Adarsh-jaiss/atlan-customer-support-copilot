# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift
meta-description: :::warning Who can do this? You will need your Amazon Redshift administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need your Amazon Redshift administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Amazon Redshift | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Amazon Redshift | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Amazon Redshift
======================

Who can do this?You will need your Amazon Redshift administrator to run these commands \- you may not have access yourself.

Atlan supports fetching metadata from Amazon Redshift for the following types of deployment:

* Provisioned
    + RA3
    + DC2
* Serverless

dangerIf you're using the DC2 node type, Redshift restricts cross\-database joins and metadata access to a single database. For more information, see [Considerations \- Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/cross-database-use.html). Because of this restriction, you must set up a separate workflow for each database you want to crawl.

Grant permissions[â](#grant-permissions "Direct link to Grant permissions")
-----------------------------------------------------------------------------

For all supported authentication mechanisms [*except* IAM role authentication on serverless deployment](#optional-grant-permissions-for-role-based-authentication-on-serverless), you must first grant the following permissions on Amazon Redshift. For IAM role authentication on serverless deployment only, skip to [this step](#optional-grant-permissions-for-role-based-authentication-on-serverless).

### Create a group and user[â](#create-a-group-and-user "Direct link to Create a group and user")

To create a group and user, run the following commands:

```
CREATE GROUP atlan_users;  
CREATE USER atlan_user password '<pass>' IN GROUP atlan_users;  

```
* Replace `<pass>` with the password for the `atlan_user` being created.
* To [crawl Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), for *Username*, you must enter the username you configured for the database user. For example, `atlan_user`.

### Grant required permissions to group[â](#grant-required-permissions-to-group "Direct link to Grant required permissions to group")

To grant the minimum required permissions, run the following commands:

```
GRANT USAGE ON SCHEMA <schema_name> TO GROUP atlan_users;  
GRANT SELECT ON pg_catalog.svv_table_info TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat the above commands for all the databases in your schema(`<schema_name>`).

The permissions are used for the following:

* [SVV\_TABLE\_INFO](https://docs.aws.amazon.com/redshift/latest/dg/r_SVV_TABLE_INFO.html) is used to obtain information on the table ID to table/schema/database relation.

### External schema[â](#external-schema "Direct link to External schema")

If your Redshift instance setup external schemas, you must grant permissions for each schema.

#### Grant USAGE permissions[â](#grant-usage-permissions "Direct link to Grant USAGE permissions")

For external schemas, use the following command to grant `USAGE` permission:

```
GRANT USAGE ON SCHEMA <schema_name> TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat this command for all external schemas.

**Did you know?**If your external tables are sourced from Amazon S3 and AWS Glue Catalog, granting only the `USAGE` permission is sufficient, provided that the IAM role associated with the Redshift cluster has read access to the data.

#### (Optional) Grant SELECT permissions[â](#optional-grant-select-permissions "Direct link to (Optional) Grant SELECT permissions")

For Redshift\-based external schemas, you must explicitly grant `SELECT` along with `USAGE` permissions to allow metadata crawling. Use the following command to grant this permission:

```
GRANT SELECT ON ALL TABLES IN SCHEMA <schema_name> TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat the command for all the Redshift\-based external schemas.

#### Verify external schema permissions[â](#verify-external-schema-permissions "Direct link to Verify external schema permissions")

Follow these steps to verify permissions granted to your external schema:

1. Log in to the system using the IAM role created earlier.
2. Run the following command using any database viewer tool:

    ```
    SELECT * FROM SVV_EXTERNAL_TABLES WHERE schema_name = '<external_schema_name>'

    ```

    * Replace `<external_schema_name>` with the name of your external schema.

If the tables appear in the results, the permissions are correctly configured.

> If you can't provide `SELECT` or `USAGE` access, create a cloned schema and grant access to the `atlan_users` group. For more information, see [Cloned schema for restricted access](#cloned-schema-for-restricted-access) section.

#### Cloned schema for restricted access[â](#cloned-schema-for-restricted-access "Direct link to Cloned schema for restricted access")

If you can't grant `USAGE` or `SELECT` permissions to the `atlan_users` group, you must create a cloned schema containing the necessary metadata tables. Then, grant permissions to the cloned schema. Follow these steps to create a cloned schema and provide required permissions:

1. Log in as `dbadmin`.
2. Create a new schema and give it a meaningful name. For example, `atlan`.
3. Clone the following views as tables from the `pg_catalog` schema into the cloned schema:

    * `pg_views`
        * `SVV_TABLES`
        * `SVV_EXTERNAL_TABLES`
        * `SVV_COLUMNS`
4. Clone the following views as tables from the `information_schema` into the cloned schema:

    * `key_column_usage` as `information_schema_key_column_usage`
        * `table_constraints` as `information_schema_table_constraints`
5. Grant `USAGE` and `SELECT` access to the `atlan_users` group on the cloned schema:

    ```
    GRANT USAGE ON SCHEMA <cloned_schema_name> TO GROUP atlan_users;  
    GRANT SELECT ON ALL TABLES IN SCHEMA <cloned_schema_name> TO GROUP atlan_users;

    ```

    * Replace `<cloned_schema_name>` with the name of your cloned schema.
6. Since Atlan relies on these tables to crawl metadata, schedule a cron job to refresh the cloned tables periodically.

**Did you know?**You can reach out to Atlan support if you need assistance with setting up a Cloned Schema.

(Optional) Grant permissions for role\-based authentication on serverless[â](#optional-grant-permissions-for-role-based-authentication-on-serverless "Direct link to (Optional) Grant permissions for role-based authentication on serverless")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For IAM role\-based authentication on Amazon Redshift serverless deployment only, you must first grant the following permissions on Amazon Redshift.

### Create a role[â](#create-a-role "Direct link to Create a role")

To create a role, run the following commands:

```
CREATE ROLE atlan_role;  

```

### Grant required permissions to role[â](#grant-required-permissions-to-role "Direct link to Grant required permissions to role")

To grant the minimum required permissions, run the following commands:

```
GRANT USAGE ON SCHEMA <schema_name> TO GROUP atlan_users;  
GRANT SELECT ON pg_catalog.svv_table_info TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat the above commands for all the databases in your schema(`<schema_name>`).

The permissions are used for the following:

* [SVV\_TABLE\_INFO](https://docs.aws.amazon.com/redshift/latest/dg/r_SVV_TABLE_INFO.html) is used to obtain information on the table ID to table/schema/database relation.

### External schema[â](#external-schema-1 "Direct link to External schema")

If your Redshift setup uses external schemas, you must grant permissions for each schema. You can do this in one of the following ways:

#### Grant USAGE permissions[â](#grant-usage-permissions-1 "Direct link to Grant USAGE permissions")

For external schemas, use the following command to grant `USAGE` permission:

```
GRANT USAGE ON SCHEMA <schema_name> TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat this command for all external schemas.

**Did you know?**If your external tables are sourced from Amazon S3 and AWS Glue Catalog, granting only the `USAGE` permission is sufficient, provided that the IAM role associated with the Redshift cluster has read access to the data.

#### (Optional) Grant SELECT permissions[â](#optional-grant-select-permissions-1 "Direct link to (Optional) Grant SELECT permissions")

For Redshift\-based external schemas, you must explicitly grant `SELECT` along with `USAGE` permissions to allow metadata crawling. Use the following command to grant this permission:

```
GRANT SELECT ON ALL TABLES IN SCHEMA <schema_name> TO GROUP atlan_users;  

```
* Replace `<schema_name>` with the name of your schema.
* Repeat the command for all the Redshift\-based external schemas.

#### Verify external schema permissions[â](#verify-external-schema-permissions-1 "Direct link to Verify external schema permissions")

Follow these steps to verify permissions granted to your external schema:

1. Log in to the system using the IAM role created earlier.
2. Run the following command using the [Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html):

    ```
    SELECT * FROM SVV_EXTERNAL_TABLES WHERE schema_name = '<external_schema_name>'

    ```

    * Replace `<external_schema_name>` with the name of your external schema.

If the tables appear in the results, the permissions are correctly configured.

> If you can't provide `SELECT` or `USAGE` access, create a cloned schema and grant access to the `atlan_users` group. For more information, see [Cloned schema for restricted access](#cloned-schema-for-restricted-access) section.

#### Cloned schema for restricted access[â](#cloned-schema-for-restricted-access-1 "Direct link to Cloned schema for restricted access")

If you can't grant `USAGE` or `SELECT` permissions to the `atlan_users` group, you must create a cloned schema containing the necessary metadata tables. Then, grant permissions to the cloned schema. Follow these steps to create a cloned schema and provide required permissions:

1. Log in as `dbadmin`.
2. Create a new schema and give it a meaningful name. For example, `atlan`.
3. Clone the following views as tables from the `pg_catalog` schema into the cloned schema:

    * `pg_views`
        * `SVV_TABLES`
        * `SVV_EXTERNAL_TABLES`
        * `SVV_COLUMNS`
4. Clone the following views as tables from the `information_schema` into the cloned schema:

    * `key_column_usage` as `information_schema_key_column_usage`
        * `table_constraints` as `information_schema_table_constraints`
5. Grant `USAGE` and `SELECT` access to the `atlan_users` group on the cloned schema:

    ```
    GRANT USAGE ON SCHEMA <cloned_schema_name> TO GROUP atlan_users;  
    GRANT SELECT ON ALL TABLES IN SCHEMA <cloned_schema_name> TO GROUP atlan_users;

    ```

    * Replace `<cloned_schema_name>` with the name of your cloned schema.
6. Since Atlan relies on these tables to crawl metadata, schedule a cron job to refresh the cloned tables periodically.

**Did you know?**You can reach out to Atlan support if you need assistance with setting up a Cloned Schema.

Grant additional permissions for mining query history[â](#grant-additional-permissions-for-mining-query-history "Direct link to Grant additional permissions for mining query history")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Did you know?**For mining query history from Redshift Serverless, permissions on STL and SVL views are not required as they do not exist in serverless deployment.

To grant the additional permissions needed to mine query history, run the following commands:

```
GRANT SELECT on pg_catalog.stl_ddltext to GROUP atlan_users;  
GRANT SELECT on pg_catalog.stl_query to GROUP atlan_users;  
GRANT SELECT on pg_catalog.stl_connection_log to GROUP atlan_users;  
GRANT SELECT on pg_catalog.stl_undone to GROUP atlan_users;  
GRANT SELECT on pg_catalog.stl_insert to GROUP atlan_users;  
GRANT SELECT on pg_catalog.svl_statementtext to GROUP atlan_users;  
ALTER USER atlan_user SYSLOG ACCESS UNRESTRICTED;  

```
The additional permissions are used for the following:

* [STL\_DDLTEXT](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_DDLTEXT.html) is used for DDL queries.
* [STL\_QUERY](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_QUERY.html) is used for DML and regular queries.
* [STL\_CONNECTION\_LOG](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_CONNECTION_LOG.html) is used to obtain the session ID that a query is part of.
* [STL\_UNDONE](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_UNDONE.html) is used to obtain information about transactions that have been undone or rolled back.
* [STL\_INSERT](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_INSERT.html) is used to obtain the table ID used in the insert queries.
* [SVL\_STATEMENTTEXT](https://docs.aws.amazon.com/redshift/latest/dg/r_SVL_STATEMENTTEXT.html) is used to obtain the query text for all queries.
* [SYSLOG ACCESS UNRESTRICTED](https://docs.aws.amazon.com/redshift/latest/dg/r_ALTER_USER.html#alter-user-syslog-access) is used to access all queries performed by any user in the system tables above.

To use basic authentication, your setup is now complete. To configure IAM\-based authentication, you need to continue with the following steps.

(Optional) Create IAM policy[â](#optional-create-iam-policy "Direct link to (Optional) Create IAM policy")
------------------------------------------------------------------------------------------------------------

All IAM\-based authentication mechanisms require an IAM policy to be created. For all supported authentication mechanisms [*except* IAM role authentication on serverless deployment](#optional-grant-permissions-for-role-based-authentication-on-serverless), create the following IAM policy. For IAM role authentication on serverless deployment only, skip to [this step](#optional-grant-permissions-for-role-based-authentication-on-serverless).

To create an IAM policy with the necessary permissions follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Effect": "Allow",  
      "Action": [  
        "redshift:GetClusterCredentials"  
      ],  
      "Resource": [  
        "arn:aws:redshift:<region>:<account_id>:dbuser:<redshift_cluster_identifier>/atlan_user",  
        "arn:aws:redshift:<region>:<account_id>:dbname:<redshift_cluster_identifier>/<database>"  
      ]  
    }  
  ]  
}  

```
* Replace `<region>` with the AWS region of your Redshift instance.
* Replace `<account_id>` with your account ID.
* Replace `<redshift_cluster_identifier>` with your Redshift cluster identifier.
* Replace `<database>` with the name of the Redshift database.

(Optional) Create IAM policy for role\-based authentication on serverless[â](#optional-create-iam-policy-for-role-based-authentication-on-serverless "Direct link to (Optional) Create IAM policy for role-based authentication on serverless")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For IAM role\-based authentication on Amazon Redshift serverless deployment only, create an IAM policy with the necessary permissions. Follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

1. Create the policy using the following JSON:

    ```
    {  
      "Version": "2012-10-17",  
      "Statement": [  
        {  
          "Effect": "Allow",  
          "Action": [  
            "redshift-serverless:GetCredentials"  
          ],  
          "Resource": [  
            "arn:aws:redshift-serverless:<region>:<account_id>:workgroup/<workgroup_identifier>",  
          ]  
        }  
      ]  
    }

    ```

    * Replace `<region>` with the AWS region of your Amazon Redshift instance.
        * Replace `<account_id>` with your AWS account ID.
        * Replace `<workgroup_identifier>` with your Amazon Redshift serverless workgroup identifier.
2. Configure tag for IAM role:

    ```
    {  
      RedshiftDbRoles : <role>  
    }

    ```

    * Replace `<role>` with the [role you created](#create-a-role).

(Optional) Choose IAM\-based authentication mechanism[â](#optional-choose-iam-based-authentication-mechanism "Direct link to (Optional) Choose IAM-based authentication mechanism")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Using the policy created above, configure one of the following options for authentication.

### User\-based authentication[â](#user-based-authentication "Direct link to User-based authentication")

To configure user\-based authentication:

1. Create an AWS IAM user by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
2. On the *Set permissions* page, attach the policy created in the previous step to this user.
3. Once the user is created, view or download the user's *access key ID* and *secret access key*.

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

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousAmazon Redshift](/apps/connectors/data-warehouses/amazon-redshift)[NextHow to enable SSO for Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift)

Copyright Â© 2025 Atlan Pte. Ltd.

