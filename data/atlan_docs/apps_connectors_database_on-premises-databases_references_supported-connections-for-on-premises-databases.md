# Source URL
https://docs.atlan.com/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases
link-alternate: https://docs.atlan.com/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases
meta-description: The metadata-extractor tool supports the following connection types.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The metadata-extractor tool supports the following connection types.
meta-og-locale: en
meta-og-title: Supported connections for on-premises databases | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Supported connections for on-premises databases | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Supported connections for on\-premises databases
================================================

The metadata\-extractor tool supports the following connection types.

These describe the details required when [setting up on\-premises database access](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access).

Amazon Redshift with basic authentication[â](#amazon-redshift-with-basic-authentication "Direct link to Amazon Redshift with basic authentication")
-----------------------------------------------------------------------------------------------------------------------------------------------------

Use `<<: *redshift` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 5439*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database username (*required*)
* `PASSWORD` \- database user password (*required*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-redshift-database:  
    <<: *extract  
    environment:  
      <<: *redshift  
      USERNAME: my-database-username  
      PASSWORD: my-database-password  
      HOST: redshift-host  
      PORT: redshift-database-port  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/redshift-example:/output  

```

Amazon Redshift with IAM user authentication[â](#amazon-redshift-with-iam-user-authentication "Direct link to Amazon Redshift with IAM user authentication")
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Use `<<: *redshift` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 5439*)
* `DATABASE` \- database name (*required*)
* `DATABASE_USER` \- database username of the IAM user (*required*)
* `AWS_ACCESS_KEY_ID` \- AWS access key ID (*required*)
* `AWS_SECRET_ACCESS_KEY` \- AWS secret access key (*required*)
* `CLUSTER_ID` \- cluster identifier of your private Amazon Redshift cluster (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  redshift-iam-user-example:  
    <<: *extract  
    environment:  
      <<: *redshift-iam-user  
      AWS_ACCESS_KEY_ID: aws-access-key-id  
      AWS_SECRET_ACCESS_KEY: aws-secret-access-key  
      HOST: redshift-host  
      DATABASE: my-database-name  
      DATABASE_USER: my-database-user  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      CLUSTER_ID: private-cluster-id  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/redshift-iam-user-example:/output  

```

Hive with basic authentication[â](#hive-with-basic-authentication "Direct link to Hive with basic authentication")
--------------------------------------------------------------------------------------------------------------------

Use `<<: *hive` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 10000*)
* `DEFAULT_SCHEMA` \- default schema name (*optional, default is* `default`)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `SCHEMA_EXCLUDE_REGEX` \- regex to exclude schemas (*optional*)
* `SCHEMA_INCLUDE_REGEX` \- regex to include schemas (*optional*)
* `TEMP_TABLE_REGEX` \- regex to exclude tables (*optional*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
hive-example:  
    <<: *hive-extract  
    environment:  
      <<: *hive  
      HOST: hive-host  
      PORT: hive-port  
      DEFAULT_SCHEMA: default  
      USERNAME: my-hive-username  
      PASSWORD: my-hive-password  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/hive-example:/output  

```

Microsoft SQL Server with basic authentication[â](#microsoft-sql-server-with-basic-authentication "Direct link to Microsoft SQL Server with basic authentication")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

Use `<<: *mssql` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-mssql-database:  
    <<: *extract  
    environment:  
      <<: *mssql  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: mssql-database-host  
      DATABASE: northwind  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/mssql-database:/output  

```

MySQL with basic authentication[â](#mysql-with-basic-authentication "Direct link to MySQL with basic authentication")
-----------------------------------------------------------------------------------------------------------------------

Use `<<: *mysql` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 3306*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-mysql-database:  
    <<: *extract  
    environment:  
      <<: *mysql  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: mysql-database-host.internal  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-mysql-database:/output  

```

MySQL with IAM authentication[â](#mysql-with-iam-authentication "Direct link to MySQL with IAM authentication")
-----------------------------------------------------------------------------------------------------------------

Use `<<: *mysql-iam` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 3306*)
* `USERNAME` \- database user name (*required*)
* `AWS_ACCESS_KEY_ID` \- AWS access key id (*required*)
* `AWS_SECRET_ACCESS_KEY` \- AWS secret access key (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-mysql-database:  
    <<: *extract  
    environment:  
      <<: *mysql-iam  
      AWS_ACCESS_KEY_ID: my-access-key-id  
      AWS_SECRET_ACCESS_KEY: my-secret-access-key  
      USERNAME: db-user  
      HOST: mysql-database-host.internal  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-mysql-database:/output  

```

Oracle with basic authentication[â](#oracle-with-basic-authentication "Direct link to Oracle with basic authentication")
--------------------------------------------------------------------------------------------------------------------------

Use `<<: *oracle` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 1521*)
* `SERVICE_NAME` \- database service name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-oracle-database:  
    <<: *extract  
    environment:  
      <<: *oracle  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: oracle-database-host.internal  
      SERVICE_NAME: my-service-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-oracle-database:/output  

```

PostgreSQL with basic authentication[â](#postgresql-with-basic-authentication "Direct link to PostgreSQL with basic authentication")
--------------------------------------------------------------------------------------------------------------------------------------

Use `<<: *postgresql` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 5432*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-postgresql-database:  
    <<: *extract  
    environment:  
      <<: *postgresql  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: postgresql-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-postgresql-database:/output  

```

PostgreSQL with IAM authentication[â](#postgresql-with-iam-authentication "Direct link to PostgreSQL with IAM authentication")
--------------------------------------------------------------------------------------------------------------------------------

Use `<<: *postgresql-iam` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 5432*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `AWS_ACCESS_KEY_ID` \- AWS access key id (*required*)
* `AWS_SECRET_ACCESS_KEY` \- AWS secret access key (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-postgresql-database:  
    <<: *extract  
    environment:  
      <<: *postgresql-iam  
      AWS_ACCESS_KEY_ID: my-access-key-id  
      AWS_SECRET_ACCESS_KEY: my-secret-access-key  
      USERNAME: db-user  
      HOST: postgresql-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-postgresql-database:/output  

```

SAP HANA with basic authentication[â](#sap-hana-with-basic-authentication "Direct link to SAP HANA with basic authentication")
--------------------------------------------------------------------------------------------------------------------------------

Use `<<: *sap-hana` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 39015*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-sap-hana-database:  
    <<: *extract  
    environment:  
      <<: *sap-hana  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: sap-hana-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-sap-hana-database:/output  

```

Snowflake with basic authentication[â](#snowflake-with-basic-authentication "Direct link to Snowflake with basic authentication")
-----------------------------------------------------------------------------------------------------------------------------------

Use `<<: *snowflake` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 443*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-snowflake-database:  
    <<: *extract  
    environment:  
      <<: *snowflake  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: snowflake-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-snowflake-database:/output  

```

Snowflake with OAuth authentication[â](#snowflake-with-oauth-authentication "Direct link to Snowflake with OAuth authentication")
-----------------------------------------------------------------------------------------------------------------------------------

Use `<<: *snowflake-oauth` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 443*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `CLIENT_ID` \- OAuth client ID (*required*)
* `CLIENT_SECRET` \- OAuth client secret (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-snowflake-database:  
    <<: *extract  
    environment:  
      <<: *snowflake-oauth  
      USERNAME: db-user  
      CLIENT_ID: my-client-id  
      CLIENT_SECRET: my-client-secret  
      HOST: snowflake-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-snowflake-database:/output  

```

Teradata with basic authentication[â](#teradata-with-basic-authentication "Direct link to Teradata with basic authentication")
--------------------------------------------------------------------------------------------------------------------------------

Use `<<: *teradata` under the `environment` section to use this connection type.

Available attributes:

* `HOST` \- database host name or IP address (*required*)
* `PORT` \- database port (*optional, default is 1025*)
* `DATABASE` \- database name (*required*)
* `USERNAME` \- database user name (*required*)
* `PASSWORD` \- database user password (*required*)
* `USE_SOURCE_SCHEMA_FILTERING` \- Boolean to specify if schema\-level filtering needs to be enabled while fetching schemas, tables, and columns (*optional*)
* `EXCLUDE_FILTER_TEMPLATE` \- exclude filter pattern (*optional*)
* `INCLUDE_FILTER_TEMPLATE` \- include filter pattern (*optional*)
* `USE_JDBC_INTERNAL_METHODS` \- Boolean to specify if JDBC internal methods need to be used as part of the extraction (*optional*)

**Example**

```
services:  
  my-teradata-database:  
    <<: *extract  
    environment:  
      <<: *teradata  
      USERNAME: db-user  
      PASSWORD: db-user-password  
      HOST: teradata-database-host.internal  
      DATABASE: my-database-name  
      # If using Docker Swarm mode for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$$": ["^SCHEMA1$$", "^SCHEMA2$$"]}'  
      # If using Docker Compose for offline extraction, format the filters as follows:  
      INCLUDE_FILTER_TEMPLATE: '{"^DB1$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      EXCLUDE_FILTER_TEMPLATE: '{"^DB2$": ["^SCHEMA1$", "^SCHEMA2$"]}'  
      USE_SOURCE_SCHEMA_FILTERING: "false"  
      USE_JDBC_INTERNAL_METHODS: "false"  
    volumes:  
      - *shared-jdbc-drivers  
      - ./output/my-teradata-database:/output  

```
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousCrawl on\-premises databases](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases)[NextTroubleshooting on\-premises database connectivity](/apps/connectors/database/on-premises-databases/troubleshooting/troubleshooting-on-premises-database-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

