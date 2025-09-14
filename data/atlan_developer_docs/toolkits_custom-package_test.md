# Source URL
https://developer.atlan.com/toolkits/custom-package/test/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/test/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to test your package's logic, prior to releasing it.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to test your package's logic, prior to releasing it.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/test.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Test your package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/test/
meta-twitter:card: summary_large_image
meta-twitter:description: How to test your package's logic, prior to releasing it.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/test.png
meta-twitter:title: Test your package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Test your package - Developer
-->

[Skip to content](#test-your-packages-logic) Developer Test your package Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Test your package's logic[¶](#test-your-packages-logic "Permanent link")
========================================================================

Through testing frameworks[¶](#through-testing-frameworks "Permanent link")
---------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.4\.5](https://github.com/atlanhq/atlan-python/releases/tag/2.4.5 "Minimum version")

You should start by testing your package's logic using standard testing frameworks. These will allow you to run automated regression tests to ensure that your package's logic behaves as you intend as both the package and any of its dependencies evolve.

In fact, you can even start with testing this way before you've bundled up your package into a container image and merged it into `atlanhq/marketplace-packages`!

Python

Kotlin

In Python, we use the [`pytest`](https://docs.pytest.org/en/stable/) testing
framework to write integration tests. Make sure it's installed in your environment:

| requirements\-dev.txt | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` pytest # pytest plugins (optional)  pytest-order pytest-sugar  ``` |

```
pip install -r requirements-dev.txt

```

| tests/test\_package.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 ``` | ``` from typing import Generator  import pytest from open_apispec_loader.main import main from open_apispec_loader.open_apispec_loader_cfg import CustomConfig, RuntimeConfig  from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.enums import AtlanConnectorType from pyatlan.test_utils import (     TestId,     create_connection,     delete_asset,     validate_error_free_logs,     validate_files_exist, )  test_id = TestId.make_unique("oapi")  # (1) files = ["/tmp/debug.log", "/tmp/pyatlan.json"]  # (2)   @pytest.fixture(scope="module") def client() -> AtlanClient:  # (3)     return AtlanClient()   @pytest.fixture(scope="module") def connection(client: AtlanClient) -> Generator[Connection, None, None]:  # (4)     result = create_connection(         client=client, name=test_id, connector_type=AtlanConnectorType.API     )     yield result     delete_asset(client, guid=result.guid, asset_type=Connection)   @pytest.fixture(scope="function") def custom_config(monkeypatch, connection):  # (5)     custom_config = CustomConfig(         spec_url="https://petstore3.swagger.io/api/v3/openapi.json",         connection_usage="CREATE",         connection=connection,     )     runtime_config = RuntimeConfig(custom_config=custom_config)     for key, value in runtime_config.envars_as_dict.items():         monkeypatch.setenv(key, value)   class TestPackage:  # (6)     def test_main(         self,         caplog,         custom_config: CustomConfig,     ):         main()         assert f"Starting execution of open_apispec_loader..." in caplog.text          validate_files_exist(files)  # (7)         validate_error_free_logs(files)  # (8)   class TestConnection:  # (9)     def test_connection(self, client: AtlanClient, connection: Connection):         results = client.asset.find_connections_by_name(             name=test_id, connector_type=AtlanConnectorType.API         )         assert results         assert len(results) == 1         assert results[0].name == test_id   class TestProcessor: # (10)     def test_process(self):         pass  ``` |

1. Use the built\-in `TestId.make_unique()` method to create a unique ID for the test\-run. This appends some randomly\-generated characters onto the string you provide to ensure each run of the test is unique.

    Use this generated ID for all objects your test creates

    To ensure your test is appropriately isolated from other tests (and possible later runs of the same test), use this generated ID in the naming of all of the objects your test creates. This will ensure it does not clobber, conflict or overlap with any other tests or test runs that might happen in parallel.
2. Provide a list of file paths to the log files that need to be validated.
3. Instead of duplicating code across tests, create fixtures and attach these functions to the tests. `@pytest.fixture()` run before each test, providing the necessary data or setup for the test.
4. When creating fixtures for Atlan assets (e.g: `Connection`), ensure that you call
the `delete_asset()` utility function after `yield` to clean up the test object upon test completion.
5. Create a `CustomConfig` fixture for your test package with test values. Use `monkeypatch.setenv(key, value)` to patch `RuntimeConfig` environment variables. This approach is useful for testing code that depends on environment variables without altering the actual system environment.
6. A common pattern is to create a test class, such as `TestPackage`, with methods that directly invoke the `main()` function of your package (`main.py`). This simulates running your package in a test environment.
7. It is also common to include a method that calls the utility function `validate_files_exist()` to ensure that certain files are created by the package.
8. Additionally, include a method that calls the utility function `validate_error_free_logs()` to verify that there are no `ERROR` level messages in the log files generated by the package.
9. Optionally, you can create multiple test classes
and methods to cover various conditions for the package. For example:
    * `TestConnection` class can be used to test connection functionality.
10. Optionally, you can create multiple test classes
and methods to cover various conditions for the package. For example:
    * `TestProcessor` class can include methods that call the package’s `Process.process()` method (if implemented) to validate different
     processing logic within your package.

In Kotlin, to write an integration test you need to extend the package toolkit's `PackageTest` class.

Use `-PpackageTests` option to run the test

By default, integration tests will be skipped, since they require first setting up appropriate connectivity to an Atlan tenant to run. If you want to run them, you need to pass the `-PpackageTests` argument to Gradle.

| src/test/kotlin/ImportPetStoreTest.kt | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 ``` | ``` import com.atlan.Atlan import com.atlan.model.assets.Connection import com.atlan.model.enums.AtlanConnectorType import com.atlan.pkg.PackageTest import org.testng.Assert.assertFalse import org.testng.Assert.assertTrue import org.testng.ITestContext import org.testng.annotations.AfterClass import org.testng.annotations.BeforeClass import kotlin.test.Test import kotlin.test.assertEquals import kotlin.test.assertNotNull  class ImportPetStoreTest : PackageTest("x") { // (1)      private val testId = makeUnique("oapi") // (2)     private val files = listOf(         "debug.log",     )      override fun setup() { // (3)         runCustomPackage( // (4)             OpenAPISpecLoaderCfg( // (5)                 specUrl = "https://petstore3.swagger.io/api/v3/openapi.json",                 connectionUsage = "CREATE",                 connection = Connection.creator(client, testId, AtlanConnectorType.API).build(),             ),             OpenAPISpecLoader::main, // (6)         )     }      override fun teardown() { // (7)         removeConnection(testId, AtlanConnectorType.API) // (8)     }      @Test // (9)     fun connectionCreated() {         val results = Connection.findByName(testId, AtlanConnectorType.API)         assertNotNull(results)         assertEquals(1, results.size)         assertEquals(testId, results[0].name)     }      @Test // (10)     fun filesCreated() {         validateFilesExist(files)     }      @Test     fun errorFreeLog() { // (11)         validateErrorFreeLog()     } }  ``` |

1. Extend the built\-in `PackageTest` class to define a package test. Provide it a unique string to distinguish it from other integration tests.
2. Use the built\-in `makeUnique()` method to create a unique ID for the test\-run. This appends some randomly\-generated characters onto the string you provide to ensure each run of the test is unique.

    Use this generated ID for all objects your test creates

    To ensure your test is appropriately isolated from other tests (and possible later runs of the same test), use this generated ID in the naming of all of the objects your test creates. This will ensure it does not clobber, conflict or overlap with any other tests or test runs that might happen in parallel.
3. Override the `setup()` method to set up any necessary prerequisites for your integration test (such as creating any objects it will rely on when it runs).
4. Call the `runCustomPackage()` method to actually run your package, with a predefined set of inputs and configuration.
5. Pass the `runCustomPackage()` method a new configuration object specific to your package. This simulates the hand\-off from the UI for your package to your code.

    In this example, we create a new configuration for the `OpenAPISpecLoaderCfg` with the settings we want to test.
6. You also need to pass the `runCustomPackage()` method the entry point for your package (usually just its `main` method).
7. Any integration test that actually creates some objects in the tenant (whether as part of the prerequisites, or the actual running of the package), should override the `teardown()` method and implement any cleanup of created or side\-effected objects.

    Do this just after setup

    While this overridden `teardown()` method can technically be defined anywhere, it is a good practice to define it just after the `setup()`. This helps keep clear what has been created or side\-effected in the `setup()` with what needs to then be cleaned up in the `teardown()`.
8. You can use built\-in operations like `removeConnection()` to remove all assets that were created within (and including) a connection.
9. You can then use as many `@Test`\-annotated methods as you like to test various conditions of the result of running your package. These will only execute *after* the `@BeforeClass` method's work is all completed.
10. A common pattern is to include a method that calls the built\-in `validateFilesExist()` method to confirm that certain files are created by the package.
11. Another common pattern is to include a method that calls the built\-in `validateErrorFreeLog()` method to confirm there are no error\-level messages in the log file that is generated by the package.

(Optional) Writing tests for non\-toolkit based scripts[¶](#optional-writing-tests-for-non-toolkit-based-scripts "Permanent link")
----------------------------------------------------------------------------------------------------------------------------------

You can write integration tests for existing scripts in the [`marketplace-csa-scripts`](https://github.com/atlanhq/marketplace-csa-scripts) repository, even if they are not based on package toolkits. These tests help verify script behavior end\-to\-end in a real Atlan tenant.

We'll begin by performing minimal refactoring of the existing script, as it's necessary to enable writing integration tests.

### Step 1: Rename directory to `snake_case`[¶](#step-1-rename-directory-to-snake_case "Permanent link")

If the script is in `kebab-case` directory, convert it to `snake_case`.

Do this just after renaming

Update references in [`mkdocs.yml`](https://github.com/atlanhq/marketplace-csa-scripts/blob/main/mkdocs.yml), delete the old directory, and verify imports/links still work.

For example:

**Before:**
```
scripts/
└── designation-based-group-provisioning/
    ├── main.py
    ├── index.md
    └── tests/
        └── test_main.py

```

**After:**
```
scripts/
└── designation_based_group_provisioning/
    ├── main.py
    ├── index.md
    └── tests/
        └── test_main.py

```

### Step 2: Refactor `main.py`[¶](#step-2-refactor-mainpy "Permanent link")

**DO**

* Refactor the script without altering logic or flow.
* Wrap all logic inside functions.
* Create a single entry point: `main(args: argparse.Namespace)`
* Call helper functions from `main()` — each should receive only required `args` or `inputs`.

**DO NOT**

* Rename or restructure existing functions.
* Change the sequence or logic flow.
* Modify argument parsing.
* Add/remove logging unless required for debugging.

For example `main.py`:

```
def load_input_file(file: Any):
    pass

def do_something_with_file(client: AtlanClient, file: Any):
    pass

def main(args: argparse.Namespace):
    client = get_client(impersonate_user_id=args.user_id)
    client = set_package_headers(client)

    file = load_input_file(args.input_file)
    do_something_with_file(client, file)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--user-id", required=True)
    parser.add_argument("--input-file", required=True)
    args = parser.parse_args()
    main(args)

```

### Step 3: Add integration tests[¶](#step-3-add-integration-tests "Permanent link")

Before writing tests, make sure you've installed the test dependencies in your local environment. You can do that by running the following command:

```
pip install -e ".[test]"

```
Alternatively, you can explicitly install the required packages by creating a `requirements-test.txt` file and installing them using:

| requirements\-dev.txt | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` pytest coverage # pytest plugins (optional)  pytest-order pytest-sugar pytest-timer[termcolor]  ``` |

```
pip install -r requirements-test.txt

```

#### Test layout for `test_main.py`[¶](#test-layout-for-test_mainpy "Permanent link")

Create a `tests/` folder if not already present:

```
scripts/
└── my_script/
    ├── main.py
    └── tests/
        └── test_main.py

```

| Function | Purpose |  |  |  |
| --- | --- | --- | --- | --- |
| test\_main\_functions | Test small pure helper functions individually (useful for quick validation of logic) |  |  |  |
| test\_main | Run the `main()` function with a config to simulate full script execution (end\-to\-end) |  |  |  |
| test\_after\_main | *(optional)* Validate side effects after running the script, such as asset creation, retrieval, audit logs, etc. |  |  |  |

For example, you can refer to this real\-world
integration test for `designation_based_group_provisioning/main.py`:

### Recommended testing strategy for scripts[¶](#recommended-testing-strategy-for-scripts "Permanent link")

When writing **integration tests** for scripts in `marketplace-csa-scripts`, follow these practices to ensure reliable and production\-relevant test coverage:

#### Best practices[¶](#best-practices "Permanent link")

* Avoid using `mock`, `patch`, or mocking `pyatlan` clients or any Atlan interactions — unless absolutely necessary.
* Integration tests should interact with a **real Atlan tenant** to validate actual behavior.
* Use mocking or patching **only** (for example):

    + External/third\-party API calls
    + Database interactions not managed by Atlan
    + Non\-deterministic behavior (e.g: random data, time\-based logic)
* Use **environment variables** for all secrets and configuration values.
* Load them via `.env` files, CI/CD secrets, or shell configs — never hardcode.

#### Things to avoid[¶](#things-to-avoid "Permanent link")

* Hardcoding sensitive values such as API keys, user\-specific secrets, or test asset names.
* Instead, use environment variables and `pyatlan.test_utils` like `TestId.make_unique()` to generate unique asset names and avoid naming collisions. Ensure that test objects are generated in fixtures, which can be reused across different tests, and cleaned up safely after tests are complete.
* Using fake or placeholder data that doesn't reflect the actual structure or behavior of entities in Atlan. Always use data that closely mirrors production data for more meaningful tests.
* Mocking `pyatlan` client methods — integration tests must execute **real operations** against a live Atlan tenant to ensure validity and detect regressions. Mocking undermines the purpose of integration testing.

**Full example (expand for details)**

| test\_main.py | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 ``` | ```   import pytest   from types import SimpleNamespace   from pyatlan.pkg.utils import get_client, set_package_headers   import pandas as pd   from scripts.designation_based_group_provisioning.main import (       review_groups,       get_default_groups,       get_ungrouped_users,       map_users_by_designation,       main,   )   from pyatlan.model.group import AtlanGroup, CreateGroupResponse   from pyatlan.client.atlan import AtlanClient   from pyatlan.test_utils import TestId   from typing import Generator   import os   from pathlib import Path    TEST_PATH = Path(__file__).parent   TEST_GROUP_NAME = TestId.make_unique("csa-dbgp-test")     @pytest.fixture(scope="module")   def config() -> SimpleNamespace:       return SimpleNamespace(           user_id=os.environ.get("ATLAN_USER_ID"),           mapping_file=f"{TEST_PATH}/test_mapping.csv",           missing_groups_handler="SKIP",           remove_from_default_group="",           domain_name="mock-tenant.atlan.com",       )     @pytest.fixture(scope="module")   def client(config):       if config.user_id:           client = get_client(impersonate_user_id=config.user_id)       else:           client = AtlanClient()       client = set_package_headers(client)       return client     @pytest.fixture(scope="module")   def group(client: AtlanClient) -> Generator[CreateGroupResponse, None, None]:       to_create = AtlanGroup.create(TEST_GROUP_NAME)       g = client.group.create(group=to_create)       # Read the CSV file       df = pd.read_csv(f"{TEST_PATH}/mapping.csv")       # Replace values in the 'GROUP_NAME' column with the test group name       df["GROUP_NAME"] = df["GROUP_NAME"].replace(           "Data Engineers and Scientists", TEST_GROUP_NAME       )       # Save the updated test CSV       df.to_csv(f"{TEST_PATH}/test_mapping.csv", index=False)       assert os.path.exists(f"{TEST_PATH}/test_mapping.csv")       yield g       client.group.purge(g.group)       os.remove(f"{TEST_PATH}/test_mapping.csv")     def test_main_functions(       config: SimpleNamespace,       client: AtlanClient,       group: AtlanGroup,       caplog: pytest.LogCaptureFixture,   ):       # Test configuration validation       assert config.mapping_file.endswith(".csv")        # Test group review functionality       verified_groups = review_groups(           config.mapping_file, config.missing_groups_handler, client       )       assert caplog.records[0].levelname == "INFO"       assert "-> Source information procured." in caplog.records[0].message       assert isinstance(verified_groups, set)        default_groups = get_default_groups(client)       assert caplog.records[6].levelname == "INFO"       assert "DEFAULT groups found:" in caplog.records[6].message       assert isinstance(default_groups, list) and len(default_groups) > 0        groupless_users = get_ungrouped_users(default_groups=default_groups, client=client)       assert isinstance(groupless_users, list) and len(groupless_users) > 0        unmappable_users = map_users_by_designation(           user_list=groupless_users,           mapping_file=config.mapping_file,           verified_groups=verified_groups,           client=client,       )       assert isinstance(unmappable_users, list) and len(unmappable_users) > 0     def test_main(       config: SimpleNamespace,       client: AtlanClient,       group: AtlanGroup,       caplog: pytest.LogCaptureFixture,   ):       # Test end-to-end main function execution       main(config)        # Verify expected log messages       assert caplog.records[0].levelname == "INFO"       assert "SDK Client initialized for tenant" in caplog.records[0].message       assert "Input file path -" in caplog.records[1].message       assert "-> Source information procured." in caplog.records[2].message       assert "Total distinct groups in the input:" in caplog.records[3].message     @pytest.mark.order(after="test_main")   def test_after_main(client: AtlanClient, group: CreateGroupResponse):       result = client.group.get_by_name(TEST_GROUP_NAME)       assert result and len(result) == 1       test_group = result[0]       assert test_group.path       assert test_group.name       assert test_group.id == group.group       assert test_group.attributes       assert not test_group.attributes.description       # Make sure users are successfully assigned       # to the test group after running the workflow       assert test_group.user_count and test_group.user_count >= 1  ``` |

(Optional) Writing tests for non\-toolkit based scripts using Cursor AI code editor[¶](#optional-writing-tests-for-non-toolkit-based-scripts-using-cursor-ai-code-editor "Permanent link")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can leverage AI code editors like [Cursor](https://www.cursor.com) to help with refactoring existing scripts and generating integration tests for the [`marketplace-csa-scripts`](https://github.com/atlanhq/marketplace-csa-scripts) repository. However, it’s important to be aware of the potential issues and risks that may arise.

### Step 1: Setup Cursor rules[¶](#step-1-setup-cursor-rules "Permanent link")

To ensure the AI agent provides the desired results based on your prompts, you need to set up custom rules for your code editor.

1. Create a rules file:

    * Create the file `.cursor/rules/csa-scripts-tests.mdc` in your project directory.
        * You can start by copying the [`example rule`](https://pastebin.com/raw/NDGCaHf4) and modifying them to match your needs.
2. Refine rules over time:

    * As you use AI for refactoring and generating tests, you can refine the rules. By adding more context (e.g: multiple packages and varied test patterns), the AI will become more effective over time, improving its results.

### Step 2: Running the agent with the defined Rules[¶](#step-2-running-the-agent-with-the-defined-rules "Permanent link")

To run the AI agent with the defined rules, follow these steps:

1. Open the cursor chat:

    * Press `cmd + L` to open a new chat in the Cursor IDE.
        * Click on `Add Context`, then select `csa-scripts-tests.mdc` to load the rules you defined.
2. Provide a clear prompt:

    * After loading the rules, provide a clear prompt like the following to refactor your script and add integration tests:
        ```
        Refactor `scripts/asset-change-notification/main.py` using the latest Cursor rules and add integration tests in `scripts/asset_change_notification/tests/test_main.py` to ensure functionality and coverage.

    ```
3. Review results:

    * Once the AI completes the task, review the generated results carefully. You may need to accept or reject parts of the refactoring based on your preferences and quality standards.

#### Common Issues[¶](#common-issues "Permanent link")

* Low accuracy across models: 
 AI results can be highly inconsistent, even after experimenting with different combinations of rules and prompts. In many cases, only a small fraction of attempts yield satisfactory results.
* Inconsistent output: 
 Regardless of using detailed or minimal rules, and trying various AI models (`Claude 3.7, Sonnet 3.5, Gemini, OpenAI`), the output often lacks consistency, leading to unsatisfactory refactorings.

#### Risks in refactoring[¶](#risks-in-refactoring "Permanent link")

* Code deletion: 
 AI can unintentionally remove important parts of the original code during refactoring.
* Unnecessary code addition: 
 AI might add code that changes the behavior of the script, potentially introducing bugs.
* Flaky or insufficient tests: 
 Generated tests are often overly simplistic or unreliable. AI may also mock components that should not be mocked, leading to incomplete test coverage.

Live on a tenant[¶](#live-on-a-tenant "Permanent link")
-------------------------------------------------------

You should then test the package live on a tenant. This will confirm:

* The UI renders as you intend,
* any inputs provided by the user through the UI are properly handed\-off to your logic,
* and your bundled package is orchestrated successfully through Atlan's back\-end workflow engine (Argo).

### Deploy the package[¶](#deploy-the-package "Permanent link")

kubectl

GitHub

If you have `kubectl` access to your cluster, you can selectively deploy your package directly:

1. Ensure you are on your cluster:

    ```
    loft use vcluster <tenant-name> --project default # (1)!

    ```

    1. Replace `<tenant-name>` with the name of your tenant. (This assumes you are already logged in to Loft — naturally log in there first, if you are not already.)
2. (One\-off) Install `node`, if you do not already have `npm` available:

    ```
    brew install node

    ```
3. Install the latest version of `argopm`:

    ```
    npm i -g argopm

    ```
4. Deploy the package from its rendered output directory:

    ```
    argopm install . -n default -c --force # (1)!

    ```

    1. If you are not in the output directory where your package was rendered, replace the `.` with the directory path for the rendered output.

Package must first be generally available

To follow these steps, you must first make your package [generally available](../release/). (Generally available in this sense just means it is available to be deployed — it is not actually deployed to any tenant by default.)

If you do not have `kubectl` access to your cluster, you will need to selectively deploy the package through the [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages)  repository.

1. Clone [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages)  to your local machine (if you have not already):

    ```
    git clone git@github.com:atlanhq/marketplace-packages.git  # (1)!
    cd marketplace-packages

    ```

    1. This assumes you have configured your Git client with appropriate credentials. If this step fails, you'll need to setup `git` first.
2. Start from an up\-to\-date `master` branch (in particular if you already have the repository cloned locally):

    ```
    git checkout master
    git merge origin/master

    ```
3. Create a branch in the local repository:

    ```
    git branch JIRA-TASK-ID  # (1)!
    git checkout JIRA-TASK-ID

    ```

    1. Replace `JIRA-TASK-ID` with the unique ID of the task in Jira where you are tracking your work.
4. Create or edit the file `deployment/tenants/<tenant-name>.pkl` for the tenant where you want to deploy the package, with at least the following content:

    | deployment/tenants/\<tenant\-name\>.pkl | |
    | --- | --- |
    | ``` 1 2 3 4 5 ``` | ``` amends "../Deployment.pkl"  include {   ["@csa/openapi-spec-loader"] {} // (1)! }  ``` |

    1. Of course, use your own package's ID in place of `@csa/openapi-spec-loader`.
5. Stage your new (or modified) `.pkl` file:

    ```
    git add deployment/tenants/<tenant-name>.pkl  # (1)!

    ```

    1. Remember to replace `<tenant-name>` with your actual tenant name. (This tells `git` which files to include all together in your next commit.)
6. Commit your new (or modified) file to the branch:

    ```
    git commit -m 'Package deployment for ...'  # (1)!

    ```

    1. Provide a meaningful message for the new package you're deploying. (This tells `git` to take a (local) snapshot of all the changes you staged (above).)
7. Push your committed changes to the remote repository:

    ```
    git push --set-upstream origin JIRA-TASK-ID  # (1)!

    ```

    1. Remember that `JIRA-TASK-ID` is just a placeholder — replace with the name of your actual branch. (This tells `git` to push all the (local) commits you've made against this branch to the remote GitHub repository, so they're available to everyone there.)
8. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `master` on [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages) .
9. Once auto\-approved, you can self\-merge to `master`.[1](#fn:1)
10. Once the PR is merged, wait for the `atlan-update` script to run and complete on your tenant. By default it will run every 30 minutes, so could take up to 1 hour before it has completed on your tenant.[2](#fn:2)

### Test the package[¶](#test-the-package "Permanent link")

Now that the package is deployed on your tenant:

1. Hover over the **New** button in the upper\-right, and then click **New workflow**.
2. Select the pill that matches the name of the `category` you specified for your package. (If you did not specify one, it should be under **Custom**, by default.)
3. Select the tile for your package, and then click the **Setup Workflow** button in the upper\-right.
4. Fill in appropriate inputs to the UI to configure your package, click **Next** through each step (if more than one), and finally **Run** the package.

**Running example**

For our running example, this would produce the following UI:

[https://demo.arcade.software/FVPJYM3F8BiyWpizmVtL?embed&show_copy_link=true](https://demo.arcade.software/FVPJYM3F8BiyWpizmVtL?embed&show_copy_link=true)

Confirm:

- [x] The inputs shown in the UI are as you expect, in particular if you use any `rules` to limit what inputs are shown.
- [x] The values you provided in the inputs are picked up by your custom logic and influence how the package behaves.
- [x] Your package runs to completion when you provide valid inputs.
- [x] Your package fails with an error when you provide inputs it cannot use to run successfully.

---

1. If it fails, double\-check you have the correct filename, which *must* end in `.pkl`.[↩](#fnref:1 "Jump back to footnote 1 in the text")
2. It is also possible that synchronization has been disabled on your tenant, in which case `atlan-update` may not run at all. If that is the case, you will need to speak with whoever manages your tenant to see how you can test your package.[↩](#fnref:2 "Jump back to footnote 2 in the text")

---

2025\-03\-122025\-04\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/test/) to provide us with more information. 

Back to top

[Previous Develop your logic](../develop/) [Next Release (GA)](../release/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

