# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access
meta-description: In some cases you won't be able to expose your Looker instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In some cases you won't be able to expose your Looker instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-og-locale: en
meta-og-title: Set up on-premises Looker access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises Looker access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises Looker access
=================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your Looker access details, including credentials.

In some cases you won't be able to expose your Looker instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your on\-premises Looker instance you will need to use Atlan's looker\-extractor tool.

**Did you know?**Atlan uses exactly the same looker\-extractor behind the scenes when it connects to Looker in the cloud.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. But you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the looker\-extractor tool[â](#get-the-looker-extractor-tool "Direct link to Get the looker-extractor tool")

To get the looker\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get a link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to crawl Looker:

    ```
    sudo docker load -i /path/to/looker-extractor-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a configuration file for the looker\-extractor tool. This is a [Docker compose file](https://docs.docker.com/compose/compose-file/).

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/looker-extractor/docker-compose.yaml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises databases.
3. The file is `docker-compose.yaml`.

Define Looker connections[â](#define-looker-connections "Direct link to Define Looker connections")
-----------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your Looker connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises Looker instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  CONNECTION-NAME:  
    <<: *extract  
    environment:  
      <<: *looker-defaults  
      INCLUDE_PROJECTS: "project1,project2"  
      USE_FIELD_LEVEL_LINEAGE: "true"  
    volumes:  
      - ./output/looker-example:/output/process  

```
* Replace `CONNECTION-NAME` with the name of your connection.
* `<<: *extract` tells the looker\-extractor tool to run.
* `environment` contains all parameters for the tool. Replaces the values given for `INCLUDE_PROJECTS` with the names of your own Looker projects you want to extract. Separate each project name by a comma.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/looker-example` folder on the local file system.

You can add as many Looker connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To define the credentials for your Looker connections you will need to provide:

* A [Looker SDK configuration](https://developers.looker.com/api/getting-started#configuring-the-sdk) file
* A private key to access your git repository via ssh (to extract field\-level lineage)
* A passphrase to decipher the private key (to extract field\-level lineage)

The Looker metadata includes the git repo locations.

The Looker SDK configuration is a `.ini` file with the following format:

```
[Looker]  
# Base URL for your looker instance API. Do not include /api/* in the URL.  
base_url=https://<host>:<port>  
# API 3 client id  
client_id=YourClientID  
# API 3 client secret  
client_secret=YourClientSecret  
verify_ssl=True  

```

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep Looker credentials in plaintext files, we recommend you restrict access to the directory and the compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To specify the local files in your compose file:

```
secrets:  
  looker_config:  
    file: ./looker.ini  
  looker_git_private_key:  
    file: ./id_ed25519  
  looker_git_private_key_passphrase:  
    file: ./passphrase.txt  

```
dangerThis `secrets` section is at the same top\-level as the `services` section described earlier. It is not a sub\-section of the `services` section.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Store the Looker SDK configuration file:

    ```
    sudo docker secret create looker_config path/to/looker.ini

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      looker_config:  
        external: true  
        name: looker_config

    ```

    * The `name` should be the same one you used in the `docker secret create` command above.
        * Once stored as a Docker secret, you can remove the local Looker SDK configuration file.
    info ðª **Did you know?** You can use the same steps to create Docker secrets for your git details, as well. Replace the name (`looker_config`) and path to the file, but otherwise run the same command.
3. Within the `service` section of the compose file, add a new secrets element and specify the name of the secret within your service to use it.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  looker_config:  
    external: true  
    name: looker_config  
  looker_git_private_key:  
    file: ./id_ed25519  
  looker_git_private_key_passphrase:  
    external: true  
    name: looker_git_private_key_passphrase  
  
x-templates:  
  # ...  
  
services:  
  my-looker:  
    <<: *extract  
    environment:  
      <<: *looker-defaults  
      INCLUDE_PROJECTS: "project1,project2"  
      USE_FIELD_LEVEL_LINEAGE: "true"  
    volumes:  
      - ./output/looker-example:/output/process  
    secrets:  
      - looker_config  
      - looker_git_private_key  
      - looker_git_private_key_passphrase  
  
volumes:  
  jars:  

```
1. In this example we've defined the secrets at the top of the file (you could also define them at the bottom):
    * `looker_config` refers to an external Docker secret created using the `docker secret create` command.
    * `looker_git_private_key` refers to a local file.
    * `looker_git_private_key_passphrase` refers to an external Docker secret created using the `docker secret create` command.
2. The name of this service is `my-looker`. You can use any meaningful name you want.
3. The `<<: *looker-defaults` sets the connection type to Looker.
4. `INCLUDE_PROJECTS` tells the extractor to only extract `project1` and `project2` from Looker.
5. `USE_FIELD_LEVEL_LINEAGE` tells the extractor to extract field\-level lineage. This means the git private key information is also required.
6. The `./output/looker-example:/output/process` line tells the extractor where to store results. In this example, the extractor will store results in the `./output/looker-example` directory on the local file system. We recommend you output metadata for different connections in separate directories.
7. The `secrets` section within `services` tells the extractor which secrets to use for this service. Each of these refers to the name of a secret listed at the beginning of the compose file.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Looker](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker)[NextCrawl Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker)

Copyright Â© 2025 Atlan Pte. Ltd.

