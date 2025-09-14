# Source URL
https://docs.atlan.com/apps/connectors/database/mysql/how-tos/set-up-mysql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/set-up-mysql
link-alternate: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/set-up-mysql
meta-description: :::warning Who can do this? You will probably need your MySQL administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your MySQL administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up MySQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/set-up-mysql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up MySQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up MySQL
============

Who can do this?You will probably need your MySQL administrator to run these commands \- you may not have access yourself.

**Did you know?**Atlan supports both of the following AWS database engines \- RDS MySQL and Aurora MySQL.

Currently we support the following authentication mechanisms. You will need to choose one and configure it according to the steps below.

* [Basic authentication](#basic-authentication)
* [Identity and Access Management (IAM) authentication](#identity-and-access-management-iam-authentication)

Basic authentication[â](#basic-authentication "Direct link to Basic authentication")
--------------------------------------------------------------------------------------

To configure basic authentication for MySQL, run the following commands:

```
CREATE USER '{{db-username}}'@'%' IDENTIFIED BY '{{password}}';  
GRANT SELECT,SHOW VIEW,EXECUTE ON *.* TO '{{db-username}}'@'%';  
FLUSH PRIVILEGES;  

```
* Replace `{{db-username}}` with the username you want to create.
* Replace `{{password}}` with the password to be used for that username.

Atlan requires the following privileges to:

* `SELECT`:
    + Fetch the technical metadata persisted in the `INFORMATION_SCHEMA`. `*.*` is required because `INFORMATION_SCHEMA` tables cannot be granted access directly. Metadata is inferred from the access that the querying user has on the underlying tables.
    + Enable users to preview or query the underlying tables and views \- this functionality can also be turned off.
* `SHOW VIEW` enables the use of the `SHOW CREATE VIEW` statement to fetch view definitions for generating lineage.
* `EXECUTE` is only required if using MySQL 5\.7 and any earlier versions.

Identity and Access Management (IAM) authentication[â](#identity-and-access-management-iam-authentication "Direct link to Identity and Access Management (IAM) authentication")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To configure IAM authentication for MySQL follow each of these steps.

### Enable IAM authentication[â](#enable-iam-authentication "Direct link to Enable IAM authentication")

To enable IAM authentication for your database instance:

* For Amazon RDS, follow [the steps in the Amazon RDS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html).
* For Aurora, follow [the steps in the User Guide for Aurora documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.Enabling.html).

When given the option, apply the changes immediately and wait until they are complete.

### Create database user[â](#create-database-user "Direct link to Create database user")

To create a database user with the necessary permissions run the following commands:

```
CREATE USER '{{db-username}}'@'%' IDENTIFIED WITH AWSAuthenticationPlugin as 'RDS';  
GRANT SELECT,SHOW VIEW,EXECUTE ON *.* TO '{{db-username}}'@'%';  
FLUSH PRIVILEGES;  

```
* Replace `{{db-username}}` with the username you want to create.

These permissions will allow you to crawl metadata, preview and query data from within Atlan.

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

* **IAM role**: Attach the policy created in the previous step to the EC2 role that Atlan uses for its EC2 instances in the EKS cluster. Please [raise a support ticket](/support/submit-request) to use this option.
* **IAM user**: Create an AWS IAM user and attach the policy to this user. To create an AWS IAM user:
    1. Follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
    2. On the *Set permissions* page, attach the policy created in the previous step to this user.
    3. Once the user is created, view or download the user's *access key ID* and *secret access key*.
    
        danger This will be your only opportunity to view or download the access keys. You will not have access to them again after leaving the user creation screen.
**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousMySQL](/apps/connectors/database/mysql)[NextSet up a private network link to MySQL](/apps/connectors/database/mysql/how-tos/set-up-a-private-network-link-to-mysql)

Copyright Â© 2025 Atlan Pte. Ltd.

