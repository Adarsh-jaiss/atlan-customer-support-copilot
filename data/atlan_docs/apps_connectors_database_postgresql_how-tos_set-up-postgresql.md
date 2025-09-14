# Source URL
https://docs.atlan.com/apps/connectors/database/postgresql/how-tos/set-up-postgresql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/postgresql/how-tos/set-up-postgresql
link-alternate: https://docs.atlan.com/apps/connectors/database/postgresql/how-tos/set-up-postgresql
meta-description: :::warning Who can do this? You will probably need your PostgreSQL administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your PostgreSQL administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up PostgreSQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/postgresql/how-tos/set-up-postgresql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up PostgreSQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up PostgreSQL
=================

Who can do this?You will probably need your PostgreSQL administrator to run these commands \- you may not have access yourself.

Create a database role[â](#create-a-database-role "Direct link to Create a database role")
--------------------------------------------------------------------------------------------

To configure a database role for PostgreSQL, run the following commands:

```
CREATE role atlan_user_role;  
GRANT USAGE ON SCHEMA <schema> TO atlan_user_role;  

```
* Replace `<schema>` with the schema to which the user should have access.

dangerYou (or your administrator) will need to run these statements for each database and schema you want to crawl.

Atlan requires the following privileges:

* `USAGE`:
    + Access a schema and fetch metadata. By default, users cannot access any objects in schemas that they do not own. The owner of a schema must grant the `USAGE` privilege on the schema to allow access.
    + Fetch the technical metadata persisted in the `INFORMATION_SCHEMA`.

These permissions enables Atlan to crawl metadat from PostgreSQL.

(Optional) Grant permissions to query and preview data[â](#optional-grant-permissions-to-query-and-preview-data "Direct link to (Optional) Grant permissions to query and preview data")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To grant permissions to query data and preview sample data:

```
 GRANT SELECT, REFERENCES ON ALL TABLES IN SCHEMA schema_name TO atlan_user_role;  

```
* Replace `schema_name`: Name of the schema you want Atlan to access.
* Replace `atlan_user_role`: Role assigned to Atlan in your database.

The`SELECT` privilege is required to preview and query data from within Atlan.

Choose authentication mechanism[â](#choose-authentication-mechanism "Direct link to Choose authentication mechanism")
-----------------------------------------------------------------------------------------------------------------------

Atlan currently supports the following authentication mechanisms. You will need to choose one and configure it according to the steps below.

* [Basic authentication](#basic-authentication)
* [Identity and Access Management (IAM) authentication](#identity-and-access-management-iam-authentication)

Basic authentication[â](#basic-authentication "Direct link to Basic authentication")
--------------------------------------------------------------------------------------

To create a username and password for basic authentication for PostgreSQL run the following commands:

```
CREATE USER atlan_user password '<pass>';  
GRANT atlan_user_role TO atlan_user;  

```
* Replace `<pass>` with the password for the `atlan_user` user you are creating.

Identity and Access Management (IAM) authentication[â](#identity-and-access-management-iam-authentication "Direct link to Identity and Access Management (IAM) authentication")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To configure IAM authentication for PostgreSQL follow each of these steps.

### Enable IAM authentication[â](#enable-iam-authentication "Direct link to Enable IAM authentication")

To enable IAM authentication for your database instance follow [the steps in the Amazon RDS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html).

When given the option, apply the changes immediately and wait until they are complete.

### Create database user[â](#create-database-user "Direct link to Create database user")

To create a database user with the necessary permissions run the following commands:

1. Connect to the database:

    ```
    psql -h {{endpoint}} -U {{username}} -d {{database}}

    ```

    * Replace `{{endpoint}}` with the database or cluster endpoint.
        * Replace `{{username}}` with the master username (admin account) for the database.
        * Replace `{{database}}` with the name of the database.
2. Create a database user:

    ```
    CREATE USER {{db-username}} WITH LOGIN;   
    GRANT atlan_user_role, rds_iam TO {{db-username}};

    ```

    * Replace `{{db-username}}` with the name for the database user to create.

### Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")

To create an IAM policy with the necessary permissions follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Effect": "Allow",  
      "Action": [  
        "rds-db:connect"  
      ],  
      "Resource": [  
        "arn:aws:rds-db:{{aws-region}}:{{account-id}}:dbuser:{{resource-id}}/{{db-username}}"  
      ]  
    }  
  ]  
}  

```
* Replace `{{aws-region}}` with the AWS region of your database instance.
* Replace `{{account-id}}` with your account ID.
* Replace `{{resource-id}}` with the resource ID.
* Replace `{{db-username}}` with the username created in the previous step.

### Attach IAM policy[â](#attach-iam-policy "Direct link to Attach IAM policy")

To attach the IAM policy for Atlan's use, you have two options:

* **IAM role**: Create a new role in your AWS account and attach the policy to this role. To create an AWS IAM role:

    1. Follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).
    2. When prompted for policies, attach the policy created in the previous step to this role.
    3. [Raise a support ticket](/support/submit-request) to provide the AWS IAM role ARN to Atlan and get the ARN of the *Node Instance Role* for your Atlan EKS cluster from Atlan.
    4. When prompted, create a trust relationship for the role using the following trust policy. (Replace `<atlan_nodeinstance_role_arn>` with the ARN received from Atlan support.)

        ```
        {  
          "Version": "2012-10-17",  
          "Statement": [  
            {  
              "Effect": "Allow",  
              "Principal": {"AWS": "<atlan_nodeinstance_role_arn>"},  
              "Action": "sts:AssumeRole",  
            }  
          ]  
        }

        ```
* **IAM user**: Create an AWS IAM user and attach the policy to this user. To create an AWS IAM user:

    1. Follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
    2. On the *Set permissions* page, attach the policy created in the previous step to this user.
    3. Once the user is created, view or download the user'sÂ*access key ID* andÂ*secret access key*.

        danger This will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousPostgreSQL](/apps/connectors/database/postgresql)[NextCrawl PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)

Copyright Â© 2025 Atlan Pte. Ltd.

