# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access
meta-description: In some cases you may not be able to expose your Tableau instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In some cases you may not be able to expose your Tableau instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-og-locale: en
meta-og-title: Set up on-premises Tableau access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises Tableau access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises Tableau access
==================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your Tableau instance details, including credentials.

In some cases you may not be able to expose your Tableau instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your on\-premises Tableau instance, you will need to use Atlan's tableau\-extractor tool.

**Did you know?**Atlan uses exactly the same tableau\-extractor behind the scenes when it connects to Tableau in the cloud.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. However, you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the tableau\-extractor tool[â](#get-the-tableau-extractor-tool "Direct link to Get the tableau-extractor tool")

To get the tableau\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get the link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to crawl Tableau:

    ```
    sudo docker load -i /path/to/tableau-extractor-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a [Docker compose file](https://docs.docker.com/compose/compose-file/) for the tableau\-extractor tool.

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/tableau-extractor/docker-compose.yaml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises Tableau instance.
3. The file is `docker-compose.yaml`.

Define Tableau connections[â](#define-tableau-connections "Direct link to Define Tableau connections")
--------------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your Tableau connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises Tableau instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  connection-name:  
    <<: *extract  
    environment:  
      <<: *tableau-defaults  
      EXCLUDE_PROJECTS_REGEX: "Test1.*|Test2.*"  
      CRAWL_UNPUBLISHED_WORKSHEETS_DASHBOARDS: "true"  
      CERT_PATH: ""  
    volumes:  
      - ./output/connection-name:/output/process  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract` tells the tableau\-extractor tool to run.
* `environment` contains all parameters for the tool.
* `CERT_PATH` \- if applicable, specify the [SSL certificate](/product/connections/how-tos/provide-ssl-certificates) path and store it as a new volume.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Tableau connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To define the credentials for your Tableau connections, you will need to provide a Tableau configuration file.

The Tableau configuration is a `.ini` file with the following format:

```
[TableauConfig]  
# Tableau instance URL. Do not include /api/* in the URL.  
server_url=https://:<hostname>:<port>  
# Tableau site name. Leaving this empty will select the default site.  
site_name=YourTableauSite  
# Tableau authentication type. Options: basic, personal_access_token.  
auth_type=basic  
  
# Required only if auth_type is basic.  
[BasicAuth]  
username=YourTableauUsername  
password=YourTableauPassword  
  
# Required only if auth_type is personal_access_token.  
[PersonalAccessTokenAuth]  
token_name=YourTableauTokenName  
token_value=YourTableauTokenValue  

```
dangerFor basic authentication, ensure that your password does not contain the special character `%`. If the percent sign is included in your password, add another `%` to escape it.

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep Tableau credentials in plaintext files, we recommend you restrict access to the directory and the compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To specify the local files in your compose file:

```
secrets:  
  tableau_config:  
    file: ./tableau.ini  

```
dangerThis `secrets` section is at the same top\-level as the `services` section described earlier. It is not a sub\-section of the `services` section.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Store the Tableau configuration file:

    ```
    sudo docker secret create tableau_config path/to/tableau.ini

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      tableau_config:  
        external: true  
        name: tableau_config

    ```

    * The `name` should be the same one you used in the `docker secret create` command above.
        * Once stored as a Docker secret, you can remove the local Tableau configuration file.
3. Within the `service` section of the compose file, add a new secrets element and specify the name of the secret within your service to use it.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  tableau_config:  
    external: true  
    name: tableau_config  
  
x-templates:  
  # ...  
  
services:  
  my-tableau:  
    <<: *extract  
    environment:  
      <<: *tableau-defaults  
      EXCLUDE_PROJECTS_REGEX: "Test1.*|Test2.*"  
      CRAWL_UNPUBLISHED_WORKSHEETS_DASHBOARDS: "true"  
      CERT_PATH: "/tmp/tab-cert.pem"  
    volumes:  
      - ./output/my-tableau:/output/process  
      - ./tab-cert.pem:/tmp/tab-cert.pem  
    secrets:  
      - tableau_config  

```
1. In this example, we've defined the secrets at the top of the file (you could also define them at the bottom). The `tableau_config` refers to an external Docker secret created using the `docker secret create` command.
2. The name of this service is `my-tableau`. You can use any meaningful name you want.
3. The `<<: *tableau-defaults` sets the connection type to Tableau.
4. `EXCLUDE_PROJECTS_REGEX` tells the extractor to filter out all the projects whose names match the `Test1.*` and `Test2.*` regex patterns in the extracted metadata.
5. `CRAWL_UNPUBLISHED_WORKSHEETS_DASHBOARDS` tells the extractor to include all hidden or unpublished worksheets and dashboards that are part of a Tableau workbook in the extracted metadata.
6. `CRAWL_EMBEDDED_DASHBOARDS` tells the extractor to create relationships between Tableau dashboards used within another dashboard as a *Web Page* item.
7. The `CERT_PATH` tells the extractor where to store the [SSL certificate](/product/connections/how-tos/provide-ssl-certificates), if applicable. In this example, the extractor will store results in the `./tab-cert.pem` directory on the local file system. If the SSL certificate is not stored in the same folder as the compose file, you will need to specify the full path.
8. The `./output/my-tableau:/output/process` line tells the extractor where to store results. In this example, the extractor will store results in the `./output/my-tableau` directory on the local file system. We recommend you output the extracted metadata for different connections in separate directories.
9. The `secrets` section within `services` tells the extractor which secrets to use for this service. Each of these refers to the name of a secret listed at the beginning of the compose file.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Tableau](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau)[NextSet up a private network link to Tableau server](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server)

Copyright Â© 2025 Atlan Pte. Ltd.

