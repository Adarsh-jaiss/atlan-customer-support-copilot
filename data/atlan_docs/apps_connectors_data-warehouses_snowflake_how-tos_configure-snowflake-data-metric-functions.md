# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions
meta-description: Configure Snowflake data metric functions <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure Snowflake data metric functions <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-og-locale: en
meta-og-title: Configure Snowflake data metric functions | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Configure Snowflake data metric functions | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Configure Snowflake data metric functions [Private Preview](/get-started/references/product-release-stages#private-preview)
===========================================================================================================================

To use system data metric functions (DMFs) from Snowflake, you need to configure your Snowflake setup.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before proceeding with the configuration, make sure the following prerequisites are met:

* [Snowflake editions](https://docs.snowflake.com/en/user-guide/intro-editions) \- Atlan data quality for Snowflake is only supported for Enterprise and Business Critical editions of Snowflake.
* Administrative access \- the user configuring Snowflake must have an `ACCOUNTADMIN` role or equivalent administrative privileges.
* Dedicated warehouse \- your organization must have a dedicated Snowflake warehouse for running data quality\-related queries.

Create roles in Snowflake[â](#create-roles-in-snowflake "Direct link to Create roles in Snowflake")
-----------------------------------------------------------------------------------------------------

You will need to create the following two roles in Snowflake for the Atlan data quality integration:

* Data quality admin role (`dq_admin`) \- a high\-privilege role responsible for managing DMF associations on tables and views. This role is used to create and manage the database objects required for data quality operations.
* Atlan data quality service role (`atlan_dq_service_role`) \- a service role that Atlan will use to interact with Snowflake objects related to data quality operations. This role will be assigned to the Atlan service user.

### Create data quality admin role[â](#create-data-quality-admin-role "Direct link to Create data quality admin role")

Run the following commands to create the `dq_admin` role and grant access to the Snowflake warehouse:

```
CREATE OR REPLACE ROLE dq_admin;  
GRANT OPERATE, USAGE ON WAREHOUSE "<warehouse-name>" TO ROLE dq_admin;  

```
* Replace `<warehouse-name>` with the name of your dedicated Snowflake warehouse for running data quality\-related queries.

### Create Atlan data quality service role[â](#create-atlan-data-quality-service-role "Direct link to Create Atlan data quality service role")

Run the following commands to create the `atlan_dq_service_role` and grant access to the Snowflake warehouse:

```
CREATE OR REPLACE ROLE atlan_dq_service_role;  
GRANT OPERATE, USAGE ON WAREHOUSE "<warehouse-name>" TO ROLE atlan_dq_service_role;  

```
* Replace `<warehouse-name>` with the name of your dedicated Snowflake warehouse for running data quality\-related queries.

Create a user in Snowflake[â](#create-a-user-in-snowflake "Direct link to Create a user in Snowflake")
--------------------------------------------------------------------------------------------------------

A dedicated Snowflake user is required for Atlan to connect to your Snowflake instance. You will need to create this integration user and assign the Atlan data quality service role to this user.

Refer to the [Create a user](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#create-a-user) documentation to create the new user.

After creating the user, grant the Atlan data quality service role to the new user you created in Snowflake:

```
GRANT ROLE atlan_dq_service_role TO USER <atlan_dq_user>;  

```

Grant privileges[â](#grant-privileges "Direct link to Grant privileges")
--------------------------------------------------------------------------

The following privileges must be granted to the roles created in Snowflake for the Atlan data quality integration:

### Privileges for data quality admin[â](#privileges-for-data-quality-admin "Direct link to Privileges for data quality admin")

Grant the `dq_admin` role the ability to create databases and access system DMFs in Snowflake:

```
GRANT CREATE DATABASE ON ACCOUNT TO ROLE dq_admin;  
GRANT DATABASE ROLE SNOWFLAKE.DATA_METRIC_USER TO ROLE dq_admin;  

```

### Privileges for table owners[â](#privileges-for-table-owners "Direct link to Privileges for table owners")

For each role that owns tables in your Snowflake environment, grant the following privileges:

```
GRANT ROLE <table_owner> TO ROLE dq_admin;  
GRANT DATABASE ROLE SNOWFLAKE.DATA_METRIC_USER TO ROLE <table_owner>;  
GRANT EXECUTE DATA METRIC FUNCTION ON ACCOUNT TO ROLE <table_owner>;  

```
* Replace `<table_owner>` with the role that owns Snowflake tables.

### Privileges for Atlan data quality service role[â](#privileges-for-atlan-data-quality-service-role "Direct link to Privileges for Atlan data quality service role")

Grant the following privileges to the `atlan_dq_service_role`:

```
GRANT APPLICATION ROLE SNOWFLAKE.DATA_QUALITY_MONITORING_VIEWER TO ROLE atlan_dq_service_role;  
GRANT DATABASE ROLE SNOWFLAKE.DATA_METRIC_USER TO ROLE atlan_dq_service_role;  
GRANT EXECUTE TASK ON ACCOUNT TO ROLE atlan_dq_service_role;  
GRANT EXECUTE MANAGED TASK ON ACCOUNT TO ROLE atlan_dq_service_role;  

```

Set up required objects[â](#set-up-required-objects "Direct link to Set up required objects")
-----------------------------------------------------------------------------------------------

Once you have created roles and granted the required privileges, you will need to create the necessary objects such as a dedicated database, schema, and stored procedure to be used for managing DMF operations.

1. Change to the `dq_admin` role:

    ```
    USE ROLE dq_admin;

    ```
2. Create the database and schema in Snowflake for the Atlan data quality integration:

    ```
    CREATE DATABASE ATLAN_DQ;  
    CREATE SCHEMA ATLAN_DQ.SHARED;

    ```

    * The `ATLAN_DQ` database serves as a container for all objects related to the Atlan data quality integration.
        * The `ATLAN_DQ.SHARED` schema provides a separate namespace for shared procedures and functions.
3. Create the store procedure in Snowflake to manage DMFs:

    ```
    /** 
     * Manages Data Metric Functions (DMF) attachment operations for Snowflake tabular entities. Runs with the privileges of the procedure owner.  
     * @param {string} ACTION - Operation to perform (ATTACH_DMF, DETACH_DMF, SUSPEND_DMF, RESUME_DMF, UPDATE_SCHEDULE)  
     * @param {string} ENTITY_TYPE - Type of entity (TABLE, VIEW, MATERIALIZED VIEW, EXTERNAL TABLE, ICEBERG TABLE)  
     * @param {string} ENTITY_NAME - Fully qualified name of the entity (database.schema.name)  
     * @param {string} [DMF_NAME=null] - Fully qualified name of the DMF (database.schema.name)  
     * @param {string} [DMF_ARGUMENTS_JSON='[]'] - JSON string containing column configurations  
     * @param {string} [SCHEDULE_TYPE=null] - Schedule type (MINUTES, CRON, ON_DATA_CHANGE, NOT_SCHEDULED)  
     * @param {string} [SCHEDULE_VALUE=null] - Schedule value based on type  
     * @returns {string} - JSON string with operation status and result message  
     */  
    CREATE OR REPLACE SECURE PROCEDURE ATLAN_DQ.SHARED.MANAGE_DMF(  
      ACTION STRING,  
      ENTITY_TYPE STRING,  
      ENTITY_NAME STRING,  
      DMF_NAME STRING DEFAULT NULL,  
      DMF_ARGUMENTS_JSON STRING DEFAULT '[]',  
      SCHEDULE_TYPE STRING DEFAULT NULL,  
      SCHEDULE_VALUE STRING DEFAULT NULL  
    )  
    RETURNS STRING  
    LANGUAGE JAVASCRIPT  
    EXECUTE AS OWNER  
    AS  
    $$  
      // -----------------------------------------------------UTILITY FUNCTIONS-----------------------------------------------------  
      /** 
       * Executes a SQL query with parameters  
       * @param {string} sqlText - SQL statement to execute  
       * @param {Array} [binds=[]] - Array of bind parameters for the query  
       * @param {boolean} [returnFirstRow=false] - Whether to return only the first row  
       * @returns {Object} Object containing execution result or error information  
       */  
      function executeQuery(sqlText, binds = [], returnFirstRow = false) {  
        try {  
          if (!sqlText)  
            return {  
              isErrored: true,  
              message: "SQL Text is required",  
              result: null,  
            };  
          const statement = snowflake.createStatement({ sqlText, binds });  
          const result = statement.execute();  
          const response = {  
            isErrored: false,  
            message: "",  
            result: null,  
          };  
          if (returnFirstRow) {  
            response.result = result.next() ? result : null;  
            return response;  
          }  
          response.result = result;  
          return response;  
        } catch (err) {  
          return {  
            isErrored: true,  
            message: `${err.code} - ${err.message} - ${sqlText} with binds: ${binds.join(", ")}`,  
            result: null,  
          };  
        }  
      }  
      /** 
       * Safely parses a JSON string  
       * @param {string} jsonString - JSON string to parse  
       * @returns {Object} Parsed JSON object or null if invalid  
       */  
      function safelyParseJSON(jsonString) {  
        try {  
          return JSON.parse(jsonString);  
        } catch (err) {  
          return null;  
        }  
      }  
      /** 
       * Validates a number within a range  
       * @param {string} value - Number to validate  
       * @param {number} min - Minimum value  
       * @param {number} max - Maximum value  
       * @returns {boolean} True if number is valid  
       * @returns {boolean} False if number is invalid  
       */  
      function isNumberValid(value, min, max) {  
        const num = parseInt(value, 10);  
        return !isNaN(num) && num = min && num &le; max;="max;" }="}" **="**" *="*" escapes="Escapes" and="and" quotes="quotes" a="a" snowflake="Snowflake" identifier="identifier" @param="@param" {string}="{string}" -="-" raw="Raw" to="to" normalize="normalize" @returns="@returns" properly="Properly" quoted="quoted" safe="safe" for="for" sql="SQL" function="FUNCTION" normalizeidentifier(identifier)="normalizeIdentifier(identifier)" {="{" return="return" `="`" ${identifier.replace(="${identifier.replace(" g,="g," )}=")}" `;="`;" retrieves="Retrieves" all="all" columns="columns" given="given" entity.="entity." validates="Validates" that="that" the="the" entityexists="entityexists" procedure="procedure" owner="owner" has="has" access="access" it.="it." entityname="entityName" fully="Fully" qualified="qualified" entity="entity" name="name" {array}="{Array}" array="Array" of="of" column="column" objects="objects" with="with" datatype="dataType" properties="properties" @throws="@throws" {error}="{Error}" if="if" doesn="doesn" t="t" exist="exist" or="or" is="is" inaccessible="inaccessible" getallcolumnsforentity(entityname)="getAllColumnsForEntity(entityName)" const="const" sqltext="SHOW COLUMNS IN IDENTIFIER(?)" ;=";" binds="[entityName];" result,="result," iserrored,="isErrored," message="message" binds);="binds);" (iserrored)="(isErrored)" exists="exists" it="it" throw="throw" new="new" error(message);="Error(message);" while="while" (result.next())="(result.next())" name:="name:" result.getcolumnvalue(="result.getColumnValue(" column_name="column_name" ),=")," datatype:="dataType:" json.parse(result.getcolumnvalue(="JSON.parse(result.getColumnValue(" data_type="data_type" )).type,=")).type," };="};" (column.datatype="==" fixed="FIXED" )=")" column.datatype="NUMBER" columns.push(column);="columns.push(column);" columns;="columns;" dmf="DMF" valid="valid" dmfname="dmfName" dmfarguments="dmfArguments" arguments="arguments" {boolean}="{boolean}" whether="Whether" invalid="invalid" isdmfvalid(dmfname,="isDMFValid(dmfName," dmfarguments)="dmfArguments)" identifier(?)(${dmfarguments})`,="IDENTIFIER(?)(${dmfArguments})`," [dmfname],="[dmfName]," true);="true);" true;="true;" checks="Checks" timezone="Timezone" validate="validate" true="True" false="False" istimezonevalid(timezone)="isTimezoneValid(timezone)" result="executeQuery(`SELECT" convert_timezone(?,="CONVERT_TIMEZONE(?," current_timestamp())`,="CURRENT_TIMESTAMP())`," [timezone],="[timezone]," !result.iserrored;="!result.isErrored;" generates="Generates" type="type" signature="signature" based="based" on="on" {object}="{Object}" entitycolumnsmap="entityColumnsMap" map="Map" names="names" in="in" format="format">: [ { name:  , dataType:  } ] }  
       * @param {string} baseEntityName - Name of the base entity  
       * @returns {string} DMF type signature  
       * @throws {Error} If entity not found in the cache  
       */  
      function generateDMFTypeSignature(dmfArguments, entityColumnsMap, baseEntityName) {  
        if(!dmfArguments || !dmfArguments.length)  
          return "";  
        const baseEntityColumns = entityColumnsMap[baseEntityName];  
        if (!baseEntityColumns) {  
          throw new Error(`Entity ${baseEntityName} not found in the cache`);  
        }  
        const baseEntityColumnArguments = dmfArguments  
          .filter(param = param.type === "COLUMN")  
          .map(param = {  
            const column = baseEntityColumns.find(col = col.name === param.name);  
            return column ? column.dataType : null;    
          })  
          .join(", ");  
        const baseEntityArguments = `TABLE(${baseEntityColumnArguments})`;  
        const referencedEntityArguments = dmfArguments  
          .filter(param = param.type === "TABLE")  
          .map(entityParam = {  
            const entityName = entityParam.name;  
            const entityColumns = entityColumnsMap[entityName];  
            if (!entityColumns) {  
              throw new Error(`Entity ${entityName} not found in the cache`);  
            }  
            const columnTypes = entityParam.nested  
              .map(nestedParam = {  
                const column = entityColumns.find(col = col.name === nestedParam.name);  
                return column ? column.dataType : null;  
              })  
              .filter(Boolean)  
              .join(", ");  
            return `TABLE(${columnTypes})`;  
          });  
        const arguments = [baseEntityArguments, ...referencedEntityArguments].join(", ");  
        return arguments;  
      }  
      /** 
       * Generates DMF arguments for SQL statements  
       * @param {string} dmfArguments - Array of DMF arguments  
       * @returns {string} Formatted DMF arguments for SQL statements  
       */  
      function generateDMFColumnArguments(dmfArguments) {  
        return dmfArguments  
          .map(param = {  
            if (param.type === "COLUMN") {  
              return normalizeIdentifier(param.name);  
            }  
            // Handle TABLE type with nested columns  
            return `${normalizeIdentifier(param.name)}(${  
              param.nested  
                .map(nested = normalizeIdentifier(nested.name))  
                .join(", ")  
            })`;  
          })  
          .join(", ");  
      }  
      // -----------------------------------------------------VALIDATION FUNCTIONS-----------------------------------------------------  
      /** 
        * Validates that mandatory arguments are provided and valid  
        * @throws {Error} If any mandatory argument is missing or invalid  
        */  
      function validateMandatoryArguments() {  
        const VALID_ACTIONS = new Set(["ATTACH_DMF", "DETACH_DMF", "SUSPEND_DMF", "RESUME_DMF", "UPDATE_SCHEDULE"]);  
        const VALID_ENTITY_TYPES = new Set(["TABLE", "VIEW", "MATERIALIZED VIEW", "EXTERNAL TABLE", "ICEBERG TABLE"]);  
        const DMF_OPS = new Set(["ATTACH_DMF", "DETACH_DMF", "SUSPEND_DMF", "RESUME_DMF"]);  
        const VALID_SCHEDULE_TYPES = new Set(["MINUTES", "CRON", "ON_DATA_CHANGE", "NOT_SCHEDULED"]);  
        const SCHEDULE_TYPES_THAT_REQUIRE_VALUE = new Set(["MINUTES", "CRON"]);  
        if (!VALID_ACTIONS.has(ACTION))  
          throw new Error(  
            `Invalid ACTION: "${ACTION}". Valid options are ${Array.from(VALID_ACTIONS).join(", ")}`  
          );  
        if (!VALID_ENTITY_TYPES.has(ENTITY_TYPE))  
          throw new Error(  
            `Invalid ENTITY_TYPE: "${ENTITY_TYPE}". Valid options are ${Array.from(VALID_ENTITY_TYPES).join(", ")}`  
          );  
        if (DMF_OPS.has(ACTION) && !DMF_NAME)  
          throw new Error("DMF_NAME is required for DMF related actions");  
        if (ACTION === "UPDATE_SCHEDULE") {  
          if (!SCHEDULE_TYPE)  
            throw new Error("SCHEDULE_TYPE is required for SCHEDULE action");  
          if (!VALID_SCHEDULE_TYPES.has(SCHEDULE_TYPE))  
            throw new Error(  
              `Invalid schedule type: "${SCHEDULE_TYPE}". Valid options are ${Array.from(VALID_SCHEDULE_TYPES).join(", ")}`  
            );  
          if (SCHEDULE_TYPES_THAT_REQUIRE_VALUE.has(SCHEDULE_TYPE) && !SCHEDULE_VALUE)  
            throw new Error("SCHEDULE_VALUE is required for SCHEDULE action");  
        }  
      }  
      /** 
       * Parses a fully qualified name into its components  
       * @param {string} fullyQualifiedName - Fully qualified name to parse  
       * @returns {Object} Object with database, schema, and name properties  
       * @throws {Error} If invalid fully qualified name  
       */  
      function validateFullyQualifiedName(fullyQualifiedName) {  
        const parts = fullyQualifiedName.split(".").map(part = part.trim()).filter(Boolean);  
        if(parts.length !== 3)   
          throw new Error(`Invalid fully qualified name: ${fullyQualifiedName}. Expected format: database.schema.name`);  
      }  
      /** 
       * Validates the structure of DMF arguments JSON  
       * @param {string} rawDMFArguments - Raw JSON string of DMF arguments  
       * @throws {Error} If DMF arguments structure is invalid  
       */  
      function validateDMFArgumentsStructure(rawDMFArguments) {  
        const parsedStructure = safelyParseJSON(rawDMFArguments);  
        if(!parsedStructure)  
          throw new Error(  
            "Invalid DMF_ARGUMENTS_JSON. Expected a valid JSON string"  
          );    
        if (!Array.isArray(parsedStructure))  
          throw new Error("DMF_ARGUMENTS_JSON must be an array");  
        const referencedEntities = parsedStructure.filter((param) = param.type === "TABLE");  
        if (referencedEntities.length  1)  
          throw new Error("Only one referenced entity is allowed");  
        const validationFunctions = {  
          arrayItem: (param) = ["COLUMN", "TABLE"].includes(param.type) && param.name,  
          nestedItem: (param) = ["COLUMN"].includes(param.type) && param.name,  
        };  
        if (!parsedStructure.every(validationFunctions.arrayItem))  
          throw new Error("Each parameter must have a valid type(TABLE/COLUMN) and name field");  
        if (referencedEntities.length  0) {  
          for(const referencedEntity of referencedEntities) {  
            if (!Array.isArray(referencedEntity.nested) || !referencedEntity.nested.every(validationFunctions.nestedItem))  
              throw new Error("Invalid nested parameters");  
          }  
        }  
      }  
      /** 
       * Validates that all specified columns exist in an entity  
       * @param {Array} columnsToCheck - Array of column names to validate  
       * @param {Array} entityColumns - Array of column metadata from the entity  
       * @param {string} entityName - Name of the entity for error message  
       * @throws {Error} If any column doesn't exist in the entity  
       */  
      function validateColumnsExistInEntity(entityName, allColumnsInEntity, columnsToCheck) {  
        for(const column of columnsToCheck) {  
          if (!allColumnsInEntity.some(col = col.name === column))  
            throw new Error(`Column ${column} not found in entity ${entityName}`);  
        }  
      }  
      /** 
       * Validates that all provided identifiers exist and are accessible  
       * Checks entity names, column names, and DMF compatibility  
       * @param {string} entityName - Fully qualified name of the entity  
       * @param {string} dmfName - Fully qualified name of the DMF  
       * @param {Array} dmfArguments - Array of DMF arguments  
       * @throws {Error} If any identifier doesn't exist or is inaccessible  
       */  
      function validateProvidedIdentifiers(entityName, dmfName = "", dmfArguments = []) {  
        validateFullyQualifiedName(entityName);  
        // Validate the provided entity names and store all the columns for each entity in a map  
        const baseEntityName = entityName;  
        const baseEntityAllColumns = getAllColumnsForEntity(entityName);  
        const entityColumnsMap = { [baseEntityName]: baseEntityAllColumns };  
        const allReferencedEntities = dmfArguments  
          .filter(param = param.type === "TABLE");  
        for(const referencedEntity of allReferencedEntities) {  
          const columns = getAllColumnsForEntity(referencedEntity.name);  
          entityColumnsMap[referencedEntity.name] = columns;  
        }  
        // Valite all of the provided columns are valid and exist in their respective entities  
        const allBaseEntityColumnsInArguments = dmfArguments  
          .filter(param = param.type === "COLUMN")  
          .map(param = param.name);  
        validateColumnsExistInEntity(baseEntityName, baseEntityAllColumns, allBaseEntityColumnsInArguments);  
        for (const referencedEntity of allReferencedEntities) {  
          const columnsInArguments = referencedEntity.nested.map(nestedParam = nestedParam.name);  
          validateColumnsExistInEntity(referencedEntity.name, entityColumnsMap[referencedEntity.name], columnsInArguments);  
        }  
        if(dmfName) {  
          // Validate that the DMF is valid and exists  
          const generatedTypeSignature = generateDMFTypeSignature(dmfArguments, entityColumnsMap, baseEntityName);  
          isDMFValid(dmfName, generatedTypeSignature);  
        }  
        // All provided identifiers are valid, actually exist and are accessible to the procedure owner  
      }  
      /** 
       * Validates CRON expression syntax   
       * Performs detailed validation of all CRON components and timezones to protect against SQL injection  
       * @param {string} cronExpression - CRON expression to validate  
       * @throws {Error} If CRON expression is invalid  
       */  
      function validateCronExpression(cronExpression) {  
        if (cronExpression.length  100)  
          throw new Error("Cron expression is too long");  
        const cronFields = cronExpression.trim().split(/\s+/);  
        if (cronFields.length !== 6)  
          throw new Error("Invalid cron expression. Expected 6 fields");  
        const [minute, hour, dayOfMonth, month, dayOfWeek, timezone] = cronFields;  
        const isTimezoneValidResult = isTimezoneValid(timezone);  
        if (!isTimezoneValidResult)  
          throw new Error("Invalid timezone provided in the cron expression");  
        const regexPatterns = {  
          minute: /^(\*|\d+|\*\/\d+|\d+\-\d+|\d+(,\d+)*)$/,  
          hour: /^(\*|\d+|\*\/\d+|\d+\-\d+|\d+(,\d+)*)$/,  
          dayOfMonth: /^(\*|L|\d+|\*\/\d+|\d+\-\d+|\d+(,\d+)*)$/,  
          month:  
            /^(\*|\d+|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC|\*\/\d+|\d+\-\d+|[A-Z]{3}\-[A-Z]{3}|\d+(,\d+)*|([A-Z]{3}(,[A-Z]{3})*))$/i,  
          dayOfWeek:  
            /^(\*|\d+|SUN|MON|TUE|WED|THU|FRI|SAT|\d+L|[A-Z]{3}L|\*\/\d+|\d+\-\d+|[A-Z]{3}\-[A-Z]{3}|\d+(,\d+)*|([A-Z]{3}(,[A-Z]{3})*))$/i,  
        };  
        if (minute.match(/^\d+$/))  
          if (!isNumberValid(minute, 0, 59))  
            throw new Error("Invalid minute value");  
        if (hour.match(/^\d+$/))  
          if (!isNumberValid(hour, 0, 23)) throw new Error("Invalid hour value");  
        if (dayOfMonth.match(/^\d+$/))  
          if (!isNumberValid(dayOfMonth, 1, 31))  
            throw new Error("Invalid day of month value");  
        if (month.match(/^\d+$/))  
          if (!isNumberValid(month, 1, 12))  
            throw new Error("Invalid month value");  
        if (dayOfWeek.match(/^\d+$/))  
          if (!isNumberValid(dayOfWeek, 0, 6))  
            throw new Error("Invalid day of week value");  
        if (  
          !regexPatterns.minute.test(minute) ||  
          !regexPatterns.hour.test(hour) ||  
          !regexPatterns.dayOfMonth.test(dayOfMonth) ||  
          !regexPatterns.month.test(month) ||  
          !regexPatterns.dayOfWeek.test(dayOfWeek)  
        )  
          throw new Error("Invalid cron expression");  
      }  
      /** 
       * Validates schedule-specific arguments  
       * Ensures schedule type and value are compatible and valid  
       * @throws {Error} If schedule configuration is invalid  
       */  
      function validateProvidedArgumentsForSchedule() {  
        const VALID_MINUTES = new Set(["5", "15", "30", "60", "720", "1440"]);  
        if (SCHEDULE_TYPE === "MINUTES" && !VALID_MINUTES.has(SCHEDULE_VALUE))  
          throw new Error(`Invalid SCHEDULE_VALUE for MINUTES. Valid options are ${Array.from(VALID_MINUTES).join(", ")}`);  
        if (SCHEDULE_TYPE === "CRON")   
          validateCronExpression(SCHEDULE_VALUE);  
        // SCHEDULE_VALUE is valid for the provided SCHEDULE_TYPE  
      }  
      /** 
       * Validates all provided arguments  
       * Performs comprehensive validation on input parameters  
       * @throws {Error} If any validation fails  
       */  
      function validateAllArguments() {  
        validateMandatoryArguments(); // Validates all mandatory arguments are provided in the correct format  
        if(ACTION === "UPDATE_SCHEDULE")  
          validateProvidedArgumentsForSchedule(); // Validates the provided schedule type and value  
        else {  
          validateDMFArgumentsStructure(DMF_ARGUMENTS_JSON);   
        }  
        validateProvidedIdentifiers(ENTITY_NAME, DMF_NAME, safelyParseJSON(DMF_ARGUMENTS_JSON));  
        // All provided arguments are valid and legal  
      }  
      // -----------------------------------------------------MAIN FUNCTION-----------------------------------------------------  
      /** 
       * Main function to manage DMF operations  
       * Validates all arguments and executes the main logic  
       * @returns {string} JSON string with operation status and result message  
       */  
      function main(){  
        validateAllArguments(); // Validate all provided arguments  
        // If the provided arguments are valid, proceed with the main logic  
        const dmfArguments = generateDMFColumnArguments(safelyParseJSON(DMF_ARGUMENTS_JSON));  
        const SQL_TEMPLATES = {  
          ATTACH_DMF: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} ADD DATA METRIC FUNCTION ${DMF_NAME} ON (${dmfArguments})`,  
          DETACH_DMF: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} DROP DATA METRIC FUNCTION ${DMF_NAME} ON (${dmfArguments})`,  
          SUSPEND_DMF: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} MODIFY DATA METRIC FUNCTION ${DMF_NAME} ON (${dmfArguments}) SUSPEND`,  
          RESUME_DMF: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} MODIFY DATA METRIC FUNCTION ${DMF_NAME} ON (${dmfArguments}) RESUME`,  
          UPDATE_SCHEDULE: {  
            MINUTES: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} SET DATA_METRIC_SCHEDULE = '${SCHEDULE_VALUE} MINUTE'`,  
            CRON: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} SET DATA_METRIC_SCHEDULE = 'USING CRON ${SCHEDULE_VALUE}'`,  
            ON_DATA_CHANGE: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} SET DATA_METRIC_SCHEDULE = 'TRIGGER_ON_CHANGES'`,  
            NOT_SCHEDULED: `ALTER ${ENTITY_TYPE} ${ENTITY_NAME} UNSET DATA_METRIC_SCHEDULE`,  
          },  
        };  
        let sqlText = "";  
        let returnMessage = "";  
        if (ACTION === "UPDATE_SCHEDULE") {  
          sqlText = SQL_TEMPLATES[ACTION][SCHEDULE_TYPE];  
          returnMessage = `Successfully updated schedule for ${ENTITY_NAME} to ${SCHEDULE_TYPE} ${SCHEDULE_VALUE}`;  
        } else {  
          sqlText = SQL_TEMPLATES[ACTION];  
          returnMessage = `ACTION: ${ACTION} performed successfully on ${ENTITY_NAME} with DMF: ${DMF_NAME} and DMF Arguments: ${dmfArguments}`;  
        }  
        const result = executeQuery(sqlText);  
        return JSON.stringify({  
          isSuccessful: !result.isErrored,  
          message: result.isErrored ? result.message : returnMessage,  
        });  
      }  
      // Execute the main function and return the result  
      try {  
        return main();  
      }  
      catch (err) {  
        return JSON.stringify({  
          isSuccessful: false,  
          message: err.message,  
        });  
      }  
    $$;

    ```

Grant access to Atlan data quality service role[â](#grant-access-to-atlan-data-quality-service-role "Direct link to Grant access to Atlan data quality service role")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Finally, grant permissions to the Atlan data quality service role to access the database, schema, and stored procedure you created in Snowflake:

```
USE ROLE dq_admin;  
GRANT USAGE ON DATABASE ATLAN_DQ TO ROLE atlan_dq_service_role;  
GRANT USAGE ON SCHEMA ATLAN_DQ.SHARED TO ROLE atlan_dq_service_role;  
GRANT USAGE ON PROCEDURE ATLAN_DQ.SHARED.MANAGE_DMF(  
    STRING, STRING, STRING, STRING, STRING, STRING, STRING  
) TO ROLE atlan_dq_service_role;  
GRANT CREATE SCHEMA ON DATABASE ATLAN_DQ TO ROLE atlan_dq_service_role;  

```
**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [setup](/tags/setup)
* [configuration](/tags/configuration)

[PreviousManage Snowflake tags](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags)[NextMultiple tag values and concatenation](/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation)

Copyright Â© 2025 Atlan Pte. Ltd.

