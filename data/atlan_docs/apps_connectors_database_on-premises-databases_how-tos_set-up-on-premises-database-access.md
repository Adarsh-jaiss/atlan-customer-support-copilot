# Source URL
https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access
link-alternate: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access
meta-description: In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.
meta-og-locale: en
meta-og-title: Set up on-premises database access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises database access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises database access
===================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your database access details, including credentials.

In some cases you won't be able to expose your databases for Atlan to crawl and ingest metadata. This may happen for various reasons:

1. Transactional databases may have high\-load mechanisms. That could make direct connection problematic.
2. Security requirements may restrict accessing sensitive, mission critical transactional databases from outside.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your on\-premises databases you will need to use Atlan's metadata\-extractor tool.

**Did you know?**Atlan uses exactly the same metadata\-extractor behind the scenes when it connects to cloud databases.

dangerIf you have already installed Docker Compose, ensure that the version is 1\.17\.0 or higher. It is good practice to upgrade the tool to the latest available version.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. But you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the metadata\-extractor tool[â](#get-the-metadata-extractor-tool "Direct link to Get the metadata-extractor tool")

To get the metadata\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get a link to the latest version.
2. Download the image using the link provided by support.
3. To load the image:

    * For Docker Image, load the image to the server you'll use to crawl databases:

    ```
        sudo docker load -i /path/to/jdbc-metadata-extractor-master.tar

    ```
        * For OCI Image:

    + Docker:

    - Install [Skopeo](https://github.com/containers/skopeo/blob/main/install.md).
                - Load the image to the server you'll use to crawl databases:

    ```
                skopeo copy oci-archive:/path/to/jdbc-metadata-extractor-master-oci.tar docker-daemon:jdbc-metadata-extractor-master:latest

    ```
            + Podman:

    - Load the image to the server you'll use to crawl databases:

    ```
                podman load -i /path/to/jdbc-metadata-extractor-master-oci.tar  
                podman tag <loaded image hash> jdbc-metadata-extractor-master:latest

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you a configuration file for the metadata\-extractor tool. This is a [Docker compose file](https://docs.docker.com/compose/compose-file/).

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/jdbc-metadata-extractor-master/docker-compose.yml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises databases.
3. The file is `docker-compose.yml`.

Define database connections[â](#define-database-connections "Direct link to Define database connections")
-----------------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. You should ignore this section \- do not make any changes to it.
* `services` is where you will define your database connections.
* `volumes` contains mount information. You should ignore this section as well \- do not make any changes to it.

### Define services[â](#define-services "Direct link to Define services")

For each on\-premises database, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
services:  
  CONNECTION-NAME:  
    <<: *extract  
    environment:  
      <<: *CONNECTION-TYPE  
      # Credentials  
      # Database address  
    volumes:  
      # Output folder  

```
* Replace `CONNECTION-NAME` with the name of your connection.
* `<<: *extract` tells the metadata\-extractor tool to run.
* `environment` contains all parameters for the tool.
* `<<: *CONNECTION-TYPE` applies default arguments for the corresponding connection type.

Refer to [Supported connections for on\-premises databases](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases) for full details of each connection type.

### Example[â](#example "Direct link to Example")

Let's explain in detail using an example:

```
services:  
  inventory:                        # 1. Call this connection "inventory"  
    <<: *extract  
    environment:  
      <<: *psql                     # 2. Connect to PostgreSQL using basic authentication  
      USERNAME: some-username       # 3. Credentials  
      PASSWORD: some-password  
      HOST: inventory.local         # 4. Database address  
      PORT: 5432  
      DATABASE: inventory  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/inventory:/output  # 5. Store results in ./output/inventory  

```
1. The name of this service is `inventory`. You can use any meaningful name you want. In this example, we are using the same name as the database we're going to crawl.
2. The `<<: *psql` sets the connection type to Postgres using basic authentication.
3. `USERNAME` and `PASSWORD` specify the credentials required for the `psql` connection.
4. `HOST`, `PORT` and `DATABASE` specify the database address. The `PORT` is `5432` by default, so you can omit it most of the time.
5. The `./output/inventory:/output` line specifies where to store results. You will need to replace `inventory` with the name of your connection. We recommend you to output metadata for different databases in separate folders.

You can add as many [database connections](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases) as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

dangerIf you decide to keep database credentials in the compose file, we recommend you restrict access to the directory and compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To create and use Docker secrets:

1. Create a JSON file and add the credentials that you want to use in Docker secrets. For example:

    ```
    {  
      "USERNAME": "my-secret-user",  
      "PASSWORD": "my-secret-password"  
    }

    ```
    info ðª **Did you know?** The keys here will be the environment variable names, hence consider migrating them from the compose file to secrets. Once set to secrets, the environment variables in secrets will take precedence over the ones in the compose file. If not provided in secrets, the values will be parsed from the compose file instead.
2. Create a new Docker secret:

    ```
    docker secret create my_database_credentials credentials.json

    ```
3. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      my_database_credentials:  
        external: true

    ```
4. Within the `service` section of the compose file, add a new secrets element and specify `CREDENTIAL_SECRET_PATH` to use it as credentials.

    danger If you have added database credentials directly to the compose file, Atlan recommends that you leave `CREDENTIAL_SECRET_PATH` as blank.

For example, your compose file would now look something like this:

```
secrets:  
  my_database_password:  
    external: true  
  
x-templates:  
  # ...  
  
services:  
  my-database:  
    <<: *extract  
    environment:  
      <<: *psql  
      CREDENTIAL_SECRET_PATH: "/run/secrets/my_database_credentials"  
      # ...  
    volumes:  
      # ...  
    secrets:  
      - my_database_password  
  
volumes:  
  jars:  

```

### Troubleshooting secure credentials[â](#troubleshooting-secure-credentials "Direct link to Troubleshooting secure credentials")

Atlan recommends the following troubleshooting measures:

* If you're unable to create Docker secrets, ensure that [Swarm mode](https://docs.docker.com/engine/swarm/) is enabled. Secrets are encrypted during transit and at rest in a Docker swarm. Run the following command to enable Swarm mode:

```
docker swarm init  

```
* If running the compose file after providing the credentials secret results in `Unsupported external secret <secret_name>`, complete the following steps:

    1. Modify the compose file as follows:

        ```
        secrets:  
          my_database_password:  
            external: true  
        x-templates:  
          # ...  
        services:  
          my-database:  
            <<: *extract  
            environment:  
              <<: *psql  
              CREDENTIAL_SECRET_PATH: "/run/secrets/my_database_credentials"  
              # ...  
            volumes:  
              # ...  
            secrets:  
              - my_database_password  
            deploy:  
              replicas: 1  
              restart_policy:  
                condition: none  
        volumes:  
          jars:

        ```
    2. Run the compose file using the following command:

        ```
        docker stack deploy -c docker-compose.yml <stack_name>

        ```

        + Replace the `<stack_name>` with the name you provided while deploying the stack.
    3. Verify deployment status using the following command:

        ```
        docker stack ps --no-trunc <stack_name>

        ```

        + Replace the `<stack_name>` with the name you provided while deploying the stack.
    4. If stack deployment has been successfully completed, monitor the `docker service logs` using the following command:

        ```
        docker service logs <stack_name>_<service_name> --follow

        ```

        + Replace the `<stack_name>` with the name you provided while deploying the stack.
            + Replace the `<service_name>` with the service name in Docker.
        danger The `docker stack deploy` command will run all the services in the `docker-compose.yml` file, so ensure that the `docker-compose.yml` only contains the service you intend to run.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousOn\-Premises Databases](/apps/connectors/database/on-premises-databases)[NextCrawl on\-premises databases](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases)

Copyright Â© 2025 Atlan Pte. Ltd.

