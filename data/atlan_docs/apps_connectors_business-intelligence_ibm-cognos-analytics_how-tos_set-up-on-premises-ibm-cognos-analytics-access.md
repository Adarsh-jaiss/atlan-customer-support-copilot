# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access
meta-description: :::warning Who can do this? You will need access to a machine that can run Docker on-premises. You will also need your IBM Cognos Analytics instance details,.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need access to a machine that can run Docker on-premises. You will also need your IBM Cognos Analytics instance details,.
meta-og-locale: en
meta-og-title: Set up on-premises IBM Cognos Analytics access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises IBM Cognos Analytics access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises IBM Cognos Analytics access
===============================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your IBM Cognos Analytics instance details, including credentials.

In some cases you will not be able to expose your IBM Cognos Analytics instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your on\-premises IBM Cognos Analytics instance, you will need to use Atlan's cognos\-extractor tool.

**Did you know?**Atlan uses exactly the same cognos\-extractor behind the scenes when it connects to IBM Cognos Analytics in the cloud.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. However, you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the cognos\-extractor tool[â](#get-the-cognos-extractor-tool "Direct link to Get the cognos-extractor tool")

To get the cognos\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get the link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to crawl IBM Cognos Analytics:

    ```
    sudo docker load -i /path/to/cognos-extractor-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a [Docker compose file](https://docs.docker.com/compose/compose-file/) for the cognos\-extractor tool.

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/cognos-extractor/docker-compose.yaml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises IBM Cognos Analytics instance.
3. The file is `docker-compose.yaml`.

Define IBM Cognos Analytics connections[â](#define-ibm-cognos-analytics-connections "Direct link to Define IBM Cognos Analytics connections")
-----------------------------------------------------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your IBM Cognos Analytics connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises IBM Cognos Analytics instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  cognos-example:  
    <<: *extract  
    environment:  
      <<: *cognos-defaults  
      EXCLUDE_FILTER: '{}'  
      INCLUDE_FILTER: '{}'  
    volumes:  
      - ./output/cognos-example:/output/process  

```
* Replace `cognos-example` with the name of your connection.
* `<<: *extract` tells the cognos\-extractor tool to run.
* `environment` contains all parameters for the tool.
    + `EXCLUDE_FILTER` and `INCLUDE_FILTER` \- specify a regular expression to filter assets to exclude or include, respectively. For example, to exclude a folder with the ID `76471ff1e0f02c7d3349` in `team_content`, configure the `EXCLUDE_FILTER` as follows \- `'{"team_content": {"76471ff1e0f02c7d3349": {}}'`.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/cognos-example`Â folder on the local file system.

You can add as many IBM Cognos Analytics connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To define the credentials for your IBM Cognos Analytics connections, you will need to provide an IBM Cognos Analytics configuration file.

The IBM Cognos Analytics configuration is a `.ini` file with the following format:

```
[CognosConfig]  
host=http://cognos-application-host-example.us-east-2.compute.amazonaws.com  
port=9300  
namespace=CognosEx  
# possible values are "basic_auth", "okta_auth" and "api_key"  
auth_type=basic_auth  
  
# Only required when auth_type = basic_auth  
[BasicAuth]  
[[email protected]](/cdn-cgi/l/email-protection)  
password=<password>  
  
# Only required when auth_type = okta_auth  
[OKTAAuth]  
[[email protected]](/cdn-cgi/l/email-protection)  
password=<password>  
  
# Only required when auth_type = api_key  
[APIKeyAuth]  
key=<yourAPIkey>  

```

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep IBM Cognos Analytics credentials in plaintext files, we recommend you restrict access to the directory and the compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To specify the local files in your compose file:

```
secrets:  
  cognos_config:  
    file: ./cognos.ini  

```
dangerThis `secrets` section is at the same top\-level as the `services` section described earlier. It is not a sub\-section of the `services` section.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Store the IBM Cognos Analytics configuration file:

    ```
    sudo docker secret create cognos_config path/to/cognos.ini

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      cognos_config:  
        external: true  
        name: cognos_config

    ```

    * The `name` should be the same one you used in the `docker secret create` command above.
        * Once stored as a Docker secret, you can remove the local IBM Cognos Analytics configuration file.
3. Within the `service` section of the compose file, add a new secrets element and specify the name of the secret within your service to use it.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  cognos_config:  
    external: true  
    name: cognos_config  
  
x-templates:  
  # ...  
  
services:  
  cognos-example:  
    <<: *extract  
    environment:  
      <<: *cognos-defaults  
      EXCLUDE_FILTER: '{}'  
      INCLUDE_FILTER: '{}'  
    volumes:  
      - ./output/cognos-example:/output/process  
    secrets:  
      - cognos_config  

```
1. In this example, we've defined the secrets at the top of the file (you could also define them at the bottom). The `cognos_config` refers to an external Docker secret created using the `docker secret create` command.
2. The name of this service is `cognos-example`. You can use any meaningful name you want.
3. The `<<: *cognos-defaults` sets the connection type to IBM Cognos Analytics.
4. The `EXCLUDE_FILTER` and `INCLUDE_FILTER` tells the extractor to filter folders.
5. The `./output/cognos-example:/output/process` line tells the extractor where to store results. In this example, the extractor will store results in the `./output/cognos-example` directory on the local file system. We recommend you output the extracted metadata for different connections in separate directories.
6. The `secrets` section within `services` tells the extractor which secrets to use for this service. Each of these refers to the name of a secret listed at the beginning of the compose file.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics)[NextCrawl IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

