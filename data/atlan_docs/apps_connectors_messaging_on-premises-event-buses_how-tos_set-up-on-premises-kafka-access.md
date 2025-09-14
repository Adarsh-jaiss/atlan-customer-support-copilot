# Source URL
https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access
link-alternate: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access
meta-description: In some cases you won't be able to expose your Kafka instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: In some cases you won't be able to expose your Kafka instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission-critical data.
meta-og-locale: en
meta-og-title: Set up on-premises Kafka access | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up on-premises Kafka access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up on\-premises Kafka access
================================

Who can do this?You will need access to a machine that can run Docker on\-premises. You will also need your Kafka instance details, including credentials.

In some cases you won't be able to expose your Kafka instance for Atlan to crawl and ingest metadata. For example, this may happen when security requirements restrict access to sensitive, mission\-critical data.

In such cases you may want to decouple the extraction of metadata from its ingestion in Atlan. This approach gives you full control over your resources and metadata transfer to Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

To extract metadata from your Kafka instance, you will need to use Atlan's kafka\-extractor tool.

**Did you know?**Atlan uses exactly the same kafka\-extractor behind the scenes when it connects to Kafka in the cloud.

### Install Docker Compose[â](#install-docker-compose "Direct link to Install Docker Compose")

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running applications composed of many [Docker](https://docs.docker.com/get-started/overview/) containers. (Any guesses where the name came from? ð)

To install Docker Compose:

1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

**Did you know?**Instructions provided in this documentation should be enough even if you are completely new to Docker and Docker Compose. However, you can also walk through the [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/) tutorial if you want to learn Docker Compose basics first.

### Get the kafka\-extractor tool[â](#get-the-kafka-extractor-tool "Direct link to Get the kafka-extractor tool")

To get the kafka\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get the link to the latest version.
2. Download the image using the link provided by support.
3. Load the image to the server you'll use to crawl Kafka:

    ```
    sudo docker load -i /path/to/kafka-extractor-master.tar

    ```

Get the compose file[â](#get-the-compose-file "Direct link to Get the compose file")
--------------------------------------------------------------------------------------

Atlan provides you with a [Docker compose file](https://docs.docker.com/compose/compose-file/) for the kafka\-extractor tool.

To get the compose file:

1. Download the [latest compose file](https://atlan-public.s3.eu-west-1.amazonaws.com/atlan/kafka-extractor/docker-compose.yaml).
2. Save the file to an empty directory on the server you'll use to access your on\-premises Kafka instance.
3. The file is `docker-compose.yaml`.

Define Kafka connections[â](#define-kafka-connections "Direct link to Define Kafka connections")
--------------------------------------------------------------------------------------------------

The structure of the compose file includes three main sections:

* `x-templates` contains configuration fragments. Keep the default settings; no changes are required.
* `services` is where you will define your Kafka connections.
* `volumes` contains mount information. Keep the default settings; no changes are required.

### Define services for Apache Kafka[â](#define-services-for-apache-kafka "Direct link to Define services for Apache Kafka")

For each Apache Kafka instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
# Example Apache Kafka connection  
  connection-name:  
    <<: *extract  
    environment:  
      <<: *kafka-defaults  
      # Kafka bootstrap servers (semicolon-separated)  
      KAFKA_BOOTSTRAP_SERVERS: "localhost:9092"  
      # Skip topics that are internal to Kafka (e.g. __consumer_offsets)  
      SKIP_INTERNAL_TOPICS: "true"  
    volumes:  
      # You can change './output/connection-name' to any output location you want  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract` tells the kafka\-extractor tool to run.
* `environment` contains all parameters for the tool.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Apache Kafka connections as you want.

### Define services for Confluent Kafka[â](#define-services-for-confluent-kafka "Direct link to Define services for Confluent Kafka")

For each Confluent Kafka instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
# Example Confluent Kafka connection  
  connection-name:  
    <<: *extract  
    environment:  
      <<: *kafka-defaults  
      # Kafka bootstrap servers (semicolon-separated)  
      KAFKA_BOOTSTRAP_SERVERS: "localhost:9092"  
      # Skip topics that are internal to Kafka (e.g. __consumer_offsets)  
      SKIP_INTERNAL_TOPICS: "true"  
      KAFKA_FLAVOUR: "CONFLUENT_CLOUD"  
      CONFLUENT_AUTH: "<cloud_api_key>:<cloud_api_secret>"  
      CONFLUENT_CLUSTER_ID: "<lkc-xxxx>"  
    volumes:  
      # You can change './output/connection-name' to any output location you want  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract`: Tells the kafka\-extractor tool to run.
* `environment`: Contains all parameters for the tool.
* `KAFKA_FLAVOUR`: Defines the Kafka distribution being used. Use `CONFLUENT_CLOUD` when working with Confluent Cloud.
* `CONFLUENT_AUTH`: Configures authentication using a Cloud API key and secret.
    + Replace `cloud_api_key` with the Cloud API key retrieved during setup. For more information, see [How to set up Confluent Kafka Cloud API Key](/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka).
    + Replace `cloud_api_secret` with the corresponding secret for your Cloud API key. For more information, see [How to set up Confluent Kafka Cloud API Key](/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka).
* `CONFLUENT_CLUSTER_ID`: The unique ID of your Kafka cluster. You can find this in the cluster overview page of the Confluent Cloud console. The cluster ID follows the `lkc-xxxx` format.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Confluent Kafka connections as you want.

### Define services for Aiven Kafka[â](#define-services-for-aiven-kafka "Direct link to Define services for Aiven Kafka")

For each Aiven Kafka instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
# Example Aiven Kafka connection  
  connection-name:  
    <<: *extract  
    secrets:  
      - kafka_client_config  
      - kafka_ca_cert  
      # Uncomment the following lines if you are using Aiven Kafka with Client Certificate Authentication  
#      - kafka_access_cert  
#      - kafka_access_key  
    environment:  
      <<: *kafka-defaults  
      # Kafka bootstrap servers (semicolon-separated)  
      KAFKA_BOOTSTRAP_SERVERS: "localhost:9092"  
      # Skip topics that are internal to Kafka (e.g. __consumer_offsets)  
      SKIP_INTERNAL_TOPICS: "true"  
    volumes:  
      # You can change './output/connection-name' to any output location you want  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract` tells the kafka\-extractor tool to run.
* `environment` contains all parameters for the tool.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Aiven Kafka connections as you want.

### Define services for Redpanda Kafka[â](#define-services-for-redpanda-kafka "Direct link to Define services for Redpanda Kafka")

For each Redpanda Kafka instance, define an entry under `services` in the compose file.

Each entry will have the following structure:

```
# Example Redpanda Kafka connection  
  connection-name:  
    <<: *extract  
    environment:  
      <<: *kafka-defaults  
      # Kafka bootstrap servers (semicolon-separated)  
      KAFKA_BOOTSTRAP_SERVERS: "localhost:9092"  
      # Skip topics that are internal to Kafka (e.g. __consumer_offsets)  
      SKIP_INTERNAL_TOPICS: "true"  
    volumes:  
      # You can change './output/connection-name' to any output location you want  
      - ./output/connection-name:/output  

```
* Replace `connection-name` with the name of your connection.
* `<<: *extract` tells the kafka\-extractor tool to run.
* `environment` contains all parameters for the tool.
* `volumes` specifies where to store results. In this example, the extractor will store results in the `./output/connection-name` folder on the local file system.

You can add as many Redpanda Kafka connections as you want.

**Did you know?**[Docker's documentation](https://docs.docker.com/compose/compose-file/#services-top-level-element) describes the `services` format in more detail.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To define the credentials for your Kafka connections, you will need to provide a Kafka client configuration file. For managed Kafka instances such as [Confluent Cloud](https://confluent.cloud/) and [Aiven](https://aiven.io/), this configuration can be copied directly from the console.Â

Here is an example that would be compatible with all Kafka variants: Apache Kafka, Confluent Cloud, and Aiven Kafka. This is just an example, your cluster configuration may vary:

```
# Required connection configs for Kafka producer, consumer, and admin  
# If SSL enabled, use SASL_SSL, otherwise use SASL_PLAINTEXT (when using with basic auth)  
security.protocol=SASL_SSL  
# If basic auth is enabled  
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username='{{ USERNAME or CLUSTER_API_KEY }}' password='{{ PASSWORD or CLUSTER_API_SECRET }}';  
sasl.mechanism=PLAIN  
  
# Best practice for higher availability in Apache Kafka clients prior to 3.0  
session.timeout.ms=45000  

```
Redpanda Kafka only supports the [SCRAM authentication method](https://docs.redpanda.com/docs/manage/security/authentication/#saslscram). Here is an example configuration:

```
sasl.mechanism=<SCRAM-SHA-256 or SCRAM-SHA-512 depending on your config>  
security.protocol=SASL_SSL  
sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="<username>" password="<password>";  
  
# Best practice for higher availability in Apache Kafka clients prior to 3.0  
session.timeout.ms=45000  

```

Secure credentials[â](#secure-credentials "Direct link to Secure credentials")
--------------------------------------------------------------------------------

### Using local files[â](#using-local-files "Direct link to Using local files")

dangerIf you decide to keep Kafka credentials in plaintext files, we recommend you restrict access to the directory and compose file. For extra security, we recommend you use [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) to store the sensitive passwords.

To specify the local files in your compose file:

```
secrets:  
  kafka_client_config:  
    # Change it to the actual location of your kafka config file (MANDATORY)  
    file: ./kafka.client.config  
  kafka_ca_cert:  
    # Change it to the actual location of your kafka CA cert file (OPTIONAL - only use if using custom CA)  
    file: ./ca.pem  
  kafka_access_cert:  
    # Change it to the actual location of your kafka access cert file (OPTIONAL - only use if using Client Certificate auth)  
    file: ./service.cert  
  kafka_access_key:  
    # Change it to the actual location of your kafka access key file (OPTIONAL - only use if using Client Certificate auth)  
    file: ./service.key  

```
dangerThis `secrets` section is at the same top\-level as the `services` section described earlier. It is not a sub\-section of the `services` section.

### Using Docker secrets[â](#using-docker-secrets "Direct link to Using Docker secrets")

To create and use Docker secrets:

1. Store the Kafka configuration file:

    ```
    sudo docker secret create kafka_client_config path/to/kafka.client.config  
    # Optional  
    sudo docker secret create kafka_ca_cert path/to/ca.pem  
    sudo docker secret create kafka_access_cert path/to/service.cert  
    sudo docker secret create kafka_access_key path/to/service.key

    ```
2. At the top of your compose file, add a [secrets](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets-configuration-reference) element to access your secret:

    ```
    secrets:  
      kafka_client_config:  
    		external: true  
        name: kafka_client_config  
      kafka_ca_cert:  
    		external: true  
        name: kafka_ca_cert  
      kafka_access_cert:  
    		external: true  
        name: kafka_access_cert  
      kafka_access_key:  
    		external: true  
        name: kafka_access_key

    ```

    * The `name` should be the same one you used in the `docker secret create` command above.
        * Once stored as a Docker secret, you can remove the local Kafka configuration file.
3. Within the `service` section of the compose file, add a new secrets element and specify the name of the secret within your service to use it.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Let's explain in detail with an example:

```
secrets:  
  kafka_client_config:  
		external: true  
    name: kafka_client_config  
  
x-templates:  
  # ...  
  
services:  
  # Example Apache Kafka connection  
  apache-kafka-example:  
    <<: *extract  
    environment:  
      <<: *kafka-defaults  
      # Kafka bootstrap servers (semicolon-separated)  
      KAFKA_BOOTSTRAP_SERVERS: "localhost:9092"  
      # Skip topics that are internal to Kafka (e.g. __consumer_offsets)  
      SKIP_INTERNAL_TOPICS: "true"  
    volumes:  
      # You can change './output/apache-kafka-example' to any output location you want  
      - ./output/apache-kafka-example:/output  

```
1. In this example, we've defined the secrets at the top of the file (you could also define them at the bottom). The `kafka_client_config` refers to an external Docker secret created using the `docker secret create` command.
2. The name of this service is `apache-kafka-example`. You can use any meaningful name you want.
3. The `<<: *kafka-defaults` sets the connection type to Kafka.
4. `KAFKA_BOOTSTRAP_SERVERS` tells the extractor about the Kafka hosts or brokers.
5. `SKIP_INTERNAL_TOPICS` tells the extractor whether to extract internal topics or skip them.
6. TheÂ`./output/apache-kafka-example:/output`Â line tells the extractor where to store results. In this example, the extractor will store results in theÂ`./output/apache-kafka-example`Â directory on the local file system. We recommend you output the extracted metadata for different connections in separate directories.
7. The `secrets` section within `services` tells the extractor which secrets to use for this service. Each of these refers to the name of a secret listed at the beginning of the compose file.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka)[NextCrawl on\-premises Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

