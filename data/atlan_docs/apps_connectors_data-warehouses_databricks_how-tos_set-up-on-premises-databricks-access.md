# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access
meta-description: In some cases you will not be able to expose your Databricks instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In some cases you will not be able to expose your Databricks instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-og-locale: en
meta-og-title: Set up on-premises Databricks access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises Databricks access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises Databricks access
=====================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your Databricks instance details, including credentials.

In some cases you will not be able to expose your Databricks instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your on\-premises Databricks instance, you will need to use Atlan's databricks\-extractor tool.

**Did you know?**Atlan uses exactly the same databricks\-extractor behind the scenes when it connects to Databricks in the cloud.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. However, you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the databricks\-extractor tool[â](#get-the-databricks-extractor-tool "Direct link to Get the databricks-extractor tool")

To get the databricks\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get the link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to crawl Databricks:

    ```
    sudo docker load -i /path/to/databricks-extractor-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a [Docker compose file](https://docs.docker.com/compose/compose-file/) for the databricks\-extractor tool.

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/databricks-extractor/docker-compose.yaml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises Databricks instance.
3. The file is `docker-compose.yaml`.

Define Databricks connections[â](#define-databricks-connections "Direct link to Define Databricks connections")
-----------------------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your Databricks connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises Databricks instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  connection-name:  
    <<: *extract  
    environment:  
      <<: *databricks-defaults  
      INCLUDE_FILTER: '{"DB_1": [], "DB_2": ["SCHEMA_1", "SCHEMA_2"]}'  
      EXCLUDE_FILTER: '{"DB_1": ["SCHEMA_1", "SCHEMA_2"]}'  
      TEMP_TABLE_REGEX: '.*temp.*|.*tmp.*|.*TEMP.*|.*TMP.*'  
      SYSTEM_SCHEMA_REGEX: '^information_schema$'  
    volumes:  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract` tells the databricks\-extractor tool to run.
* `environment` contains all parameters for the tool.
    + `INCLUDE_FILTER` \- specify the databases and schemas from which you want to extract metadata. Remove this line if you want to extract metadata from all databases and schemas.
    + `EXCLUDE_FILTER` \- specify the databases and schemas you want to exclude from metadata extraction. This will take precedence over `INCLUDE_FILTER`. Remove this line if you do not want to exclude any databases or schemas.
    + `TEMP_TABLE_REGEX` \- specify a regular expression for excluding temporary tables. Remove this line if you do not want to exclude any temporary tables.
    + `SYSTEM_SCHEMA_REGEX` \- specify a regular expression for excluding system schemas. If unspecified, `INFORMATION_SCHEMA` will be excluded from the extracted metadata by default.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Databricks connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To define the credentials for your Databricks connections, you will need to provide a Databricks configuration file.

The Databricks configuration is a `.ini` file with the following format:

```
[DatabricksConfig]  
host = <host>  
port = <port>  
# seconds to wait for a response from the server  
timeout = 300  
# Databricks authentication type. Options: personal_access_token, aws_service_principal  
auth_type = personal_access_token  
  
# Required only if auth_type is personal_access_token.  
[PersonalAccessTokenAuth]  
personal_access_token = <personal_access_token>  
  
# Required only if auth_type is aws_service_principal.  
[AWSServicePrincipalAuth]  
client_id = <client_id>  
client_secret = <client_secret>  

```

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep Databricks credentials in plaintext files, we recommend you restrict access to the directory and the compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To specify the local files in your compose file:

```
secrets:  
  databricks_config:  
    file: ./databricks.ini  

```
dangerThis `secrets` section is at the same top\-level as the `services` section described earlier. It is not a sub\-section of the `services` section.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Store the Databricks configuration file:

    ```
    sudo docker secret create databricks_config path/to/databricks.ini

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      databricks_config:  
        external: true  
        name: databricks_config

    ```

    * The `name` should be the same one you used in the `docker secret create` command above.
        * Once stored as a Docker secret, you can remove the local Databricks configuration file.
3. Within the `service` section of the compose file, add a new secrets element and specify the name of the secret within your service to use it.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  databricks_config:  
    external: true  
    name: databricks_config  
  
x-templates:  
  # ...  
  
services:  
  databricks-example:  
    <<: *extract  
    environment:  
      <<: *databricks-defaults  
      INCLUDE_FILTER: '{"DB_1": [], "DB_2": ["SCHEMA_1", "SCHEMA_2"]}'  
      EXCLUDE_FILTER: '{"DB_1": ["SCHEMA_1", "SCHEMA_2"]}'  
      TEMP_TABLE_REGEX: '.*temp.*|.*tmp.*|.*TEMP.*|.*TMP.*'  
      SYSTEM_SCHEMA_REGEX: '^information_schema$'  
    volumes:  
      - ./output/databricks-example:/output  
    secrets:  
      - databricks_config  

```
1. In this example, we've defined the secrets at the top of the file (you could also define them at the bottom). The `databricks_config` refers to an external Docker secret created using the `docker secret create` command.
2. The name of this service is `databricks-example`. You can use any meaningful name you want.
3. The `<<: *databricks-defaults` sets the connection type to Databricks.
4. The `./output/databricks-example:/output`Â line tells the extractor where to store results. In this example, the extractor will store results in theÂ`./output/databricks-example`directory on the local file system. We recommend you output the extracted metadata for different connections in separate directories.
5. The `secrets` section within `services` tells the extractor which secrets to use for this service. Each of these refers to the name of a secret listed at the beginning of the compose file.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)[NextCrawl on\-premises Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks)

Copyright Â© 2025 Atlan Pte. Ltd.

