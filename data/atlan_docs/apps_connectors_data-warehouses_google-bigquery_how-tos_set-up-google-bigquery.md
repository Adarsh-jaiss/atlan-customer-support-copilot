# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery
meta-description: You must be a Google BigQuery administrator to run these commands. For more information, see [Google Cloud's Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You must be a Google BigQuery administrator to run these commands. For more information, see [Google Cloud's Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
meta-og-locale: en
meta-og-title: Set up Google BigQuery | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Google BigQuery | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Google BigQuery
======================

Who can do this?You must be a Google BigQuery administrator to run these commands. For more information, see [Google Cloud's Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

Atlan [extracts metadata from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery) through read\-only access. Once you have crawled metadata for your Google BigQuery assets, you can [mine query history](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery) to construct lineage. If you have enabled sample data preview or querying, asset previews and queries will be cost\-optimized for [tables](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#tables) only. For [views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#views) and [materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#materialized-views), Atlan will send you a cost nudge before you run the preview or query the data \- learn more [here](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery).

You must create a service account to enable Atlan to [extract metadata from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery). To create a service account, you can either use:

* Google Cloud console
* Google Cloud CLI

Permissions[â](#permissions "Direct link to Permissions")
-----------------------------------------------------------

Atlan requires the following permissions to extract metadata from Google BigQuery.

### (Required) For metadata crawling[â](#required-for-metadata-crawling "Direct link to (Required) For metadata crawling")

To configure permissions for crawling metadata, add the following permissions to the custom role:

* `bigquery.datasets.get` enables Atlan to retrieve metadata about a dataset.
* `bigquery.datasets.getIamPolicy` enables Atlan to read a dataset's IAM permissions.
* `bigquery.jobs.create` enables Atlan to run jobs (including queries) within the project.

danger Without this, Atlan can't query the source.
* `bigquery.routines.get` enables Atlan to retrieve routine definitions and metadata.
* `bigquery.routines.list` enables Atlan to list routines and metadata on routines.
* `bigquery.tables.get` enables Atlan to retrieve table metadata.
* `bigquery.tables.getIamPolicy` enables Atlan to read a table's IAM policy.
* `bigquery.tables.list` enables Atlan to list tables and metadata on tables.
* `bigquery.readsessions.create` enables Atlan to create a session to stream large results.
* `bigquery.readsessions.getData` enables Atlan to retrieve data from the session.
* `bigquery.readsessions.update` enables Atlan to cancel the session.
* `resourcemanager.projects.get` enables Atlan to retrieve project names and metadata.

### (Optional) To add data preview and querying[â](#optional-to-add-data-preview-and-querying "Direct link to (Optional) To add data preview and querying")

To configure permissions for previewing and querying data, add the following permissions to the custom role:

* `bigquery.tables.getData` enables Atlan to retrieve table data.

danger This permission is also required for retrieving metadata such as the row count and update time of a table.
* `bigquery.jobs.get` enables Atlan to retrieve data and metadata on any job, including queries.
* `bigquery.jobs.listAll` enables Atlan to list all jobs and retrieve metadata on any job submitted by any user.
* `bigquery.jobs.update` enables Atlan to cancel any job, including a running query.

### (Optional) To add query history mining[â](#optional-to-add-query-history-mining "Direct link to (Optional) To add query history mining")

To configure permissions for mining query history, add the following permissions to the custom role:

* `bigquery.jobs.listAll` enables Atlan to fetch all queries for a project.
* `bigquery.jobs.get` enables Atlan to access query text for queries.

### (Optional) To crawl tags[â](#optional-to-crawl-tags "Direct link to (Optional) To crawl tags")

To configure permissions for crawling [Google BigQuery tags and policy tags](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags), add the following permissions to the custom role:

* `resourcemanager.tagKeys.list` enables Atlan to fetch all tag keys.
* `resourcemanager.tagValues.list` enables Atlan to fetch all tag values for tag keys.
* `datacatalog.taxonomies.list` enables Atlan to fetch all policy tag taxonomies.
* `datacatalog.taxonomies.get` enables Atlan to fetch all policy tag taxonomies.

Google Cloud console[â](#google-cloud-console "Direct link to Google Cloud console")
--------------------------------------------------------------------------------------

### Create a custom role[â](#create-a-custom-role "Direct link to Create a custom role")

You will need to [create a custom role](https://cloud.google.com/iam/docs/creating-custom-roles#iam-custom-roles-create-console) in the Google Cloud console for integration with Atlan.

To create a custom role:

1. Open the [Google Cloud console](https://console.cloud.google.com).
2. From the left menu under *IAM and admin*, click **Roles**.
3. Using the dropdown list at the top of the page, select the project in which you want to create a role.
4. From the upper left of the *Roles* page, click **Create Role**.
5. In the *Create role* page, enter the following details:
    1. For *Title*, enter a meaningful name for the custom role \- for example, `Atlan User Role`.
    2. (Optional) For *Description*, enter a description for the custom role.
    3. For *ID*, the Google Cloud console generates a custom role ID based on the custom role name. Edit the ID if necessary \- the ID cannot be changed later.
    4. (Optional) For *Role launch stage*, assign a stage for the custom role \- for example, *Alpha*, *Beta*, or *General Availability*.
    5. Click **Add permissions** to select the permissions you want to include in the custom role. In the *Add permissions* dialog, click the **Enter property name or value** filter and add the required and any optional permissions.
    6. Click **Create** to finish custom role setup.

Once you have created a custom role, you will need to [create a service account](https://cloud.google.com/iam/docs/service-accounts-create#creating) and add your custom role to it.

To create a service account:

1. Open the [Google Cloud console](https://console.cloud.google.com).
2. From the left menu under *IAM and admin*, click **Service accounts**.
3. Select a Google Cloud project.
4. From the upper left of the *Service accounts* page, click **Create Service Account**.
5. For *Service account details*, enter the following details:
    1. For *Service account name*, enter a service account name to display in the Google Cloud console.
    2. For *Service account ID*, the Google Cloud console generates a service account ID based on this name. Edit the ID if necessary \- the ID cannot be changed later.
    3. (Optional) For *Service account description*, enter a description for the service account.
    4. Click **Create and continue** to proceed to the next step.
6. For *Grant this service account access to the project*, enter the following details:
    1. Click the **Select a role** dropdown and then select the custom role you created in the previous step \- for example, `Atlan User Role`.
    2. Click **Continue** to proceed to the next step.
7. Click **Done** to finish the service account setup.

### Create service account key[â](#create-service-account-key "Direct link to Create service account key")

Once you have created a service account, you will need to [create a service account key](https://cloud.google.com/iam/docs/keys-create-delete#creating) for [crawling Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery).

To create a service account key:

1. Open the [Google Cloud console](https://console.cloud.google.com).
2. From the left menu under *IAM and admin*, click **Service accounts**.
3. Select the Google Cloud project for which you created the service account.
4. On the *Service accounts* page, click the email address of the service account that you want to create a key for.
5. From the upper left of your service account page, click the **Keys** tab.
6. On the *Keys* page, click the **Add Key** dropdown and then click **Create new key**.
7. In the *Create private key* dialog, for *Key type*, click **JSON** and then click **Create**. This will create a service account key file. Download the key file and store it in a secure location \- you will not be able to download it again.

Google Cloud CLI[â](#google-cloud-cli "Direct link to Google Cloud CLI")
--------------------------------------------------------------------------

### Prerequisites[â](#prerequisites "Direct link to Prerequisites")

You will need to set up the Google Cloud CLI in any one of the following development environments:

* **Cloud Shell** \- to use an online terminal with the gcloud CLI already set up, activate Cloud Shell:
    + To launch a Cloud Shell session from the Google Cloud console, open the [Google Cloud console](https://console.cloud.google.com), and from the top right, click the **Activate Cloud Shell** icon.
    + A Cloud Shell session will start and display a command\-line prompt. It can take a few seconds for the session to initialize.
* **Local shell** \- to use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.

### Create a custom role[â](#create-a-custom-role-1 "Direct link to Create a custom role")

To create a custom role with the requisite and any optional permissions, run the following command:

```
gcloud iam roles create atlanUserRole --project=<project_id> \  
    --title="Atlan User Role" --description="Atlan User Role to extract metadata" \  
    --permissions="bigquery.datasets.get,bigquery.datasets.getIamPolicy,bigquery.jobs.create,bigquery.readsessions.create,bigquery.readsessions.getData,bigquery.readsessions.update,bigquery.routines.get,bigquery.routines.list,bigquery.tables.get,bigquery.tables.getIamPolicy,bigquery.tables.list,resourcemanager.projects.get" \  
    --stage=ALPHA  

```
* Replace `<project_id>` with the project ID of your Google Cloud project.

### Create a service account[â](#create-a-service-account "Direct link to Create a service account")

To create a service account, run the following command:

```
gcloud iam service-accounts create atlanUser \  
    --description="Atlan Service Account to extract metadata" \  
    --display-name="Atlan User"  

```
To add your custom role to your service account, run the following command:

```
gcloud projects add-iam-policy-binding <project_id> \  
    --member="serviceAccount:atlanUser@<project_id>.iam.gserviceaccount.com" \  
    --role="atlanUserRole"  

```
* Replace `<project_id>` with the project ID of your Google Cloud project.

### Create a service account key[â](#create-a-service-account-key "Direct link to Create a service account key")

To create a service account key, run the following command:

```
gcloud iam service-accounts keys create  <key_file_path> \  
    --iam-account=atlanUser@<project_id>.iam.gserviceaccount.com"  

```
* Replace `<key_file_path>` with path to a new output file for the private key \- for example, `~/atlanUser-private-key.json`.
* Replace `<project_id>` with the project ID of your Google Cloud project.

dangerDue to limitations at source, Atlan currently does not support generating lineage using the `bq cp` commands \- for example, `bq cp <source-table> <destination-table>`.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousGoogle BigQuery](/apps/connectors/data-warehouses/google-bigquery)[NextHow to enable SSO for Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery)

Copyright Â© 2025 Atlan Pte. Ltd.

