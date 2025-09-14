# Source URL
https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access
link-alternate: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access
meta-description: In some cases you will not be able to expose your Teradata instance for Atlan to mine query history. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In some cases you will not be able to expose your Teradata instance for Atlan to mine query history. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-og-locale: en
meta-og-title: Set up on-premises Teradata miner access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises Teradata miner access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises Teradata miner access
=========================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your Teradata instance details, including credentials.

In some cases you will not be able to expose your Teradata instance for Atlan to mine query history. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the mining of query history from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Once you have mined query history on\-premises and [uploaded the results to S3](/product/connections/how-tos/mine-queries-through-s3), you can mine query history in Atlan:

* [How to mine Teradata](/apps/connectors/database/teradata/how-tos/mine-teradata)

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To mine query history from your on\-premises Teradata instance, you will need to use Atlan's teradata\-miner tool.

**Did you know?**Atlan uses exactly the same teradata\-miner behind the scenes when it connects to Teradata in the cloud.

dangerIf you have already installed Docker Compose, ensure that the version is 1\.17\.0 or higher. It is good practice to upgrade the tool to the latest available version.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. But you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the teradata\-miner tool[â](#get-the-teradata-miner-tool "Direct link to Get the teradata-miner tool")

To get the teradata\-miner tool:

1. [Raise a support ticket](/support/submit-request) to get a link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to mine Teradata:

    ```
    sudo docker load -i /path/to/teradata-miner-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a configuration file for the teradata\-miner tool. This is a [Docker compose file](https://docs.docker.com/compose/compose-file/).

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/jdbc-metadata-extractor-master/docker-compose.yml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises Teradata instance.
3. The file is `docker-compose.yml`.

Define database connections[â](#define-database-connections "Direct link to Define database connections")
-----------------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your Teradata connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises Teradata instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  connection-name:  
    <<: *mine  
    environment:  
      <<: *teradatadb  
      USERNAME: <USERNAME>  
      PASSWORD: <PASSWORD>  
      HOST: <HOST>  
      MARKER: "0"  
    volumes:  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *mine` tells the teradata\-miner tool to run.
* `environment` contains all parameters for the tool:
    + `USERNAME` \- specify the database username.
    + `PASSWORD` \- specify the database password.
    + `HOST` \- specify the database host.
    + `MARKER` \- specify the timestamp from when queries should be mined.
* `volumes` specifies where to store results. In this example, the miner will store results in the `./output/connection-name` folder on the local file system.

You can add as many Teradata connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep Teradata credentials in plaintext files, we recommend you restrict access to the directory and compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Create a new Docker secret:

    ```
    printf "This is a secret password" | docker secret create my_database_password -

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      my-database-password:  
        external: true

    ```
3. Within the `service` section of the compose file, add a new secrets element and specify `PASSWORD_SECRET_PATH` to use it as a password.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  my-database-password:  
    external: true  
  
x-templates:  
  # ...  
  
services:  
  my-database:  
    <<: *mine  
    environment:  
      <<: *teradatadb  
      USERNAME: <USERNAME>  
      PASSWORD_SECRET_PATH: "/run/secrets/my_database_password"  
      # ...  
    volumes:  
      # ...  
    secrets:  
      - my-database-password  
  
volumes:  
  jars:  

```
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousMine Teradata](/apps/connectors/database/teradata/how-tos/mine-teradata)[NextWhat does Atlan crawl from Teradata?](/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata)

Copyright Â© 2025 Atlan Pte. Ltd.

