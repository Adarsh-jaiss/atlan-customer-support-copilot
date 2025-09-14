# Source URL
https://developer.atlan.com/toolkits/custom-package/develop/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/develop/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to build the logic for your package.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to build the logic for your package.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/develop.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Develop your logic - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/develop/
meta-twitter:card: summary_large_image
meta-twitter:description: How to build the logic for your package.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/develop.png
meta-twitter:title: Develop your logic - Developer
meta-viewport: width=device-width,initial-scale=1
title: Develop your logic - Developer
-->

[Skip to content](#develop-your-packages-logic) Developer Develop your logic Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Develop your package's logic[¶](#develop-your-packages-logic "Permanent link")
==============================================================================

Manage dependencies[¶](#manage-dependencies "Permanent link")
-------------------------------------------------------------

To start implementing your custom logic, we highly recommend using one of our SDKs:

Python

Kotlin

In Python, a `requirements.txt` was rendered for you with the bare minimal set of dependencies (the Python SDK):

| requirements.txt | |
| --- | --- |
| ``` 1 ``` | ``` pyatlan  # (1)!  ``` |

1. You can of course add other lines to this file to include other third party dependencies and libraries, or to restrict to the use of a specific version of even `pyatlan`.

In Kotlin, we recommend using the [Gradle](https://gradle.org/) build tool:

| build.gradle.kts | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 ``` | ``` plugins {     kotlin("jvm") version "1.9.24" // (1)     id("jvm-test-suite")     id("com.adarshr.test-logger") version "4.0.0"     id("org.pkl-lang") version "0.25.3"     id("com.diffplug.spotless") version "6.21.0"     id("com.github.johnrengelman.shadow") version "7.1.2" // (2) }  dependencies {     implementation("com.atlan:atlan-java:+") // (3)     implementation("com.atlan:package-toolkit-runtime:+")     implementation("com.atlan:package-toolkit-config:+")     implementation("io.github.microutils:kotlin-logging-jvm:3.0.5")     testImplementation("com.atlan:package-toolkit-testing:+")     testImplementation("org.jetbrains.kotlin:kotlin-test:1.9.24")     runtimeOnly("org.apache.logging.log4j:log4j-core:2.23.0") // (4)     runtimeOnly("org.apache.logging.log4j:log4j-slf4j2-impl:2.23.0")     implementation("io.swagger.parser.v3:swagger-parser:2.1.20") // (5) }  tasks {     shadowJar { // (6)         isZip64 = true         dependencies { // (7)             include(dependency("io.swagger.parser.v3:swagger-parser:.*"))             include(dependency("io.swagger.core.v3:swagger-models:.*"))             include(dependency("io.swagger.core.v3:swagger-core:.*"))             include(dependency("io.swagger.parser.v3:swagger-parser-core:.*"))             include(dependency("io.swagger.parser.v3:swagger-parser-v3:.*"))             include(dependency("io.swagger.parser.v3:swagger-parser-safe-url-resolver:.*"))             include(dependency("io.swagger.core.v3:swagger-annotations:.*"))             include(dependency("com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:.*"))             include(dependency("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:.*"))             include(dependency("org.yaml:snakeyaml:.*"))             include(dependency("org.apache.commons:commons-lang3:.*"))         }         mergeServiceFiles()     }     jar { // (8)         actions = listOf()         doLast { shadowJar }     } }  ``` |

1. These plugins are the minimum necessary to develop a Kotlin\-based package.
2. The shadow plugin is necessary when you want to bundle additional dependencies for your code that are not part of the out\-of\-the\-box Java SDK or runtime toolkit.
3. These dependencies are the minimum necessary to develop a Kotlin\-based package using the SDK and package toolkits.
4. You must provide some binding for slf4j logging. This example shows how to bind `log4j2`, but you could replace this with some other log binding if you prefer.
5. You can of course add other lines to this file to include other third party dependencies and libraries, or to restrict to the use of a specific version of even the Java SDK.

    In this example, we are using a third party library for parsing the OpenAPI specification, from Swagger.
6. When using external dependencies, use the `shadowJar` task to define all the dependencies that should be bundled together into your `.jar` file.
7. List the dependencies themselves in the inner `dependencies` section.
8. Override the default `jar` task so that you get the shadowed jar (with all the dependencies) as the only jar output.

Implement custom logic[¶](#implement-custom-logic "Permanent link")
-------------------------------------------------------------------

Naturally your custom logic will depend on your use case. However, there is a standard pattern to help you get started — in particular, to use the "runtime" portion of the package toolkit. This will handle common things like:

* Receiving input values from what the user has entered in the UI (strongly\-typed in your code)
* Setting up standard logging
* etc

Delegate publishing where possible

You can now [delegate publishing](../define/#delegate-publishing) of assets to another package to simplify the logic of your own package. If you use this delegation, remember your package only needs to produce the CSV output — it does not need to create or save any assets directly in Atlan.

Python

Kotlin

| main.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from open_api_spec_loader.open_api_spec_loader_cfg import RuntimeConfig  # (1) import logging  LOGGER = logging.getLogger(__name__)  # (2)  def main():  # (3)     runtime_config = RuntimeConfig()  # (4)     custom_config = runtime_config.custom_config  # (5)     spec_url = custom_config.spec_url      # Further parameter retrieval and / or custom logic     LOGGER.info("Doing some further custom logic...")  # (6)   if __name__ == "__main__":     main()  ``` |

1. You will always use these imports for setting up the runtime portion of the package toolkit.

    Replace the import according to your package

    Of course, keep in mind that the specific name of the module and class within it will vary based on the name of your package.
2. You should initialize a logger for your package.
3. You need an executable file in Python.
4. Use the `RuntimeConfig()` method to retrieve all the runtime information, including inputs provided in the UI by a user.
5. From the runtime configuration, you can retrieve the `custom_config` (the inputs provided in the UI by a user).

    Strongly\-types inputs

    This returns an object of the type of the class generated for you when you render your package. This class strongly\-types all of the inputs a user provides into things like numbers, booleans, strings, lists, and even full `Connection` objects. (Without it you're left to parse all of that yourself.)
6. When you log information, the following apply:

    * `info` level and above (`warn`, `error`, etc) are all output to the console. Only these will appear when a user clicks the overall "logs" button for a package's run.

    Use `info` for user\-targeted messages

    For this reason, we recommend using `info`\-level logging for tracking overall progress of your package's logic. Keep it simple and not overly verbose to avoid overwhelming users of the package.
        * `debug` level is not printed out to the console, but captured in a file. To allow users to download this debug log, you must define an output file mapped to `/tmp/debug.log` (like in line 22 of [define overall metadata](../define/#define-overall-metadata)).

    Use `debug` for troubleshooting details

    With this separation, you can capture details that would be useful for troubleshooting in `debug`\-level — without overwhelming users with that information.

| OpenAPISpecLoader.kt | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` import com.atlan.pkg.Utils // (1) import mu.KotlinLogging  object OpenAPISpecLoader { // (2)     private val logger = Utils.getLogger(this.javaClass.name) // (3)      @JvmStatic     fun main(args: Array<String>) { // (4)         val config = Utils.initializeContext<OpenAPISpecLoaderCfg>().use { ctx -> // (5)             val specUrl = ctx.config.specUrl // (6)              // Further parameter retrieval and / or custom logic             logger.info { "Doing some further custom logic..." } // (7)         }     } }  ``` |

1. You will always use these imports for setting up the runtime portion of the package toolkit.
2. You need an executable object in Kotlin. What you name it here will need to match your `containerCommand` when you [define overall metadata](../define/#define-overall-metadata) of your package.
3. You should initialize a logger for your package.

    Use this method to initialize your logger

    Use this `Utils.getLogger()` method to ensure your logger is initialized and set up for use with OpenTelemetry. This will ensure all of the logging for your package run is tracked and traceable for troubleshooting purposes.
4. You must implement a `@JvmStatic` `main` method, with this precise signature.

 **More details**

    You don't actually need to parse or use the command\-line arguments, everything will be passed as an environment variable, but you still need to have this method signature.)
5. Use the `Utils.initializeContext<>()` reified method to retrieve *all* of the inputs provided in the UI by a user.

    Strongly\-types inputs

    This returns an object of the type within the `<>`, which is the class generated for you when you render your package. This class strongly\-types all of the inputs a user provides into things like numbers, booleans, strings, lists, and even full `Connection` objects. (Without it you're left to parse all of that yourself.)
6. When you have defined `fallback` values in your config, you will have strongly\-typed, non\-null values for every input (minimally the value for `fallback` you specified in the config, if a user has not selected anything in the UI). Alternatively, you can also use the `Utils.getOrDefault(ctx.config._, "")` method to give you a default value.

    Empty inputs are `null` by default

    If the input in the UI is optional, and you have not specified any `fallback` in your Pkl config, you will by default receive a `null` if the user did not enter any value into it, so `Utils.getOrDefault()` allows you to force things into non\-null values. A common practice is to set the `fallback` configuration value to the same value you show in `placeholderText` or have defined as the `default`, and then you do not need to use `Utils.getOrDefault()` to ensure you have a non\-null value.
7. When you log information, the following apply:

    * `info` level and above (`warn`, `error`, etc) are all output to the console. Only these will appear when a user clicks the overall "logs" button for a package's run.

    Use `info` for user\-targeted messages

    For this reason, we recommend using `info`\-level logging for tracking overall progress of your package's logic. Keep it simple and not overly verbose to avoid overwhelming users of the package.
        * `debug` level is not printed out to the console, but captured in a file. To allow users to download this debug log, you must define an output file mapped to `/tmp/debug.log` (like in line 22 of [define overall metadata](../define/#define-overall-metadata)).

    Use `debug` for troubleshooting details

    With this separation, you can capture details that would be useful for troubleshooting in `debug`\-level — without overwhelming users with that information.

Bundle into a container[¶](#bundle-into-a-container "Permanent link")
---------------------------------------------------------------------

Packages run as workflows using [Argo](https://argoproj.github.io/workflows/). So before you can run your package in an Atlan tenant, it must be built into a self\-contained container image — which Argo can then orchestrate.

To bundle your package into a container image:

Python

Kotlin

1. Ensure you first [render your package](../render/). This will output a `Dockerfile` you can at least use as a starting point.
2. Build your container image from the `Dockerfile` (must be run in the same directory as the `Dockerfile`):

    ```
    podman build . -t openapi-spec-loader:latest

    ```
3. Publish your container image to a registry from which it can then be pulled by a tenant:

    ```
    podman push ghcr.io/atlanhq/openapi-spec-loader:latest # (1)!

    ```

    1. You will likely need to first authenticate with the remote registry, which is beyond the scope of this document to explain.

**Automate the build and publish via CI/CD**

We highly recommend automating the container image build and publication via CI/CD. For example, a GitHub Action like the following should do this:

| publish.yml | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` name: "Publish"  on:   push:     branches: [main]  jobs:   custom-package-image:  # (1)     runs-on: ubuntu-latest     name: "Publish container"     steps:       - uses: actions/checkout@v4       - uses: docker/setup-buildx-action@v2  # (2)       - name: Log in to container registry         uses: docker/login-action@v2         with:           registry: ghcr.io           username: ${{ github.actor }}           password: ${{ secrets.GITHUB_TOKEN }}       - name: Set image tag from file  # (3)         id: set-image-tag         run: |           TAG=$(cat ./pkg/version.txt)           echo "IMAGE_TAG=$TAG" >> $GITHUB_ENV       - name: Build and publish container image         uses: docker/build-push-action@v4         with:           build-args: |             VERSION=${{ env.IMAGE_TAG }}           push: true  # (4)           tags: ghcr.io/atlanhq/open_api_spec_loader:${{ env.IMAGE_TAG }}, ghcr.io/atlanhq/open_api_spec_loader:latest           context: "./pkg"  # (5)           platforms: linux/amd64  ``` |

1. You can run a single job to both build and publish the container image.
2. Use Docker's own GitHub Actions to set up the ability to build container images, login to the private GitHub registry, etc.
3. Set the version number for your package from the `version.txt` file.
4. To ensure your image is published, not only built, you must set `push: true`.
5. The context in which you run the container build must include the `Dockerfile` you constructed earlier (in this example, that `Dockerfile` resides in the GitHub repository at this location: `./pkg`, so the earlier `actions/checkout@v4` action ensures it exists here).

1. Build your package `.jar` file (assuming you followed the Gradle approach outlined in [manage dependencies](./#manage-dependencies)):

    ```
    ./gradlew assemble shadowJar

    ```
2. Create a `Dockerfile` that builds on the `ghcr.io/atlanhq/atlan-java` base image:

    | Dockerfile | |
    | --- | --- |
    | ``` 1 2 3 ``` | ``` ARG VERSION FROM ghcr.io/atlanhq/atlan-java:$VERSION COPY assembly /opt/jars  ``` |
3. Create a sub\-directory called `assembly` under the directory where you created the `Dockerfile`, and copy over the `.jar` file you built to this `assembly` sub\-directory:

    ```
    mkdir assembly
    cp .../openapi-spec-loader-*.jar assembly/.

    ```
4. Build your container image from the `Dockerfile` (must be run in the same directory as the `Dockerfile`):

    ```
    podman build . -t openapi-spec-loader:latest

    ```
5. Publish your container image to a registry from which it can then be pulled by a tenant:

    ```
    podman push ghcr.io/atlanhq/openapi-spec-loader:latest # (1)!

    ```

    1. You will likely need to first authenticate with the remote registry, which is beyond the scope of this document to explain.

**Automate the build and publish via CI/CD**

We highly recommend automating the container image build and publication via CI/CD. For example, a GitHub Action like the following should do this:

| publish.yml | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 ``` | ``` name: "Publish"  on:   push:     branches: [main]  jobs:   merge-build:  # (1)     runs-on: ubuntu-latest     name: "Build"     steps:       - uses: actions/checkout@v4       - uses: actions/setup-java@v4         with:           java-version: 17           distribution: temurin       - name: Check formatting         run: ./gradlew check       - name: Build artifacts         run: ./gradlew assemble shadowJar         env:           GH_USERNAME: ${{ github.actor }}           GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}       - uses: actions/upload-artifact@v4  # (2)         with:           name: openapi-spec-loader           path: jars/openapi-spec-loader-*.jar    custom-package-image:  # (3)     runs-on: ubuntu-latest     name: "Publish container"     needs:       - merge-build  # (4)     steps:       - uses: actions/checkout@v4       - uses: docker/setup-buildx-action@v2  # (5)       - name: Log in to container registry         uses: docker/login-action@v2         with:           registry: ghcr.io           username: ${{ github.actor }}           password: ${{ secrets.GITHUB_TOKEN }}       - name: Create assembly area  # (6)         run: |           mkdir -p ./containers/custom-package/assembly       - uses: actions/download-artifact@v4  # (7)         with:           name: "openapi-spec-loader"           path: ./containers/custom-package/assembly       - name: Build and publish container image         uses: docker/build-push-action@v4  # (8)         with:           build-args: |             VERSION=1.13.0  # (9)           push: true  # (10)           tags: ghcr.io/atlanhq/openapi-spec-loader:1.13.0, ghcr.io/atlanhq/openapi-spec-loader:latest           context: ./containers/custom-package  # (11)           platforms: linux/amd64  ``` |

1. We recommend separating the code compilation job (here) from the container image build and publish (next job).
2. At the end of the code compilation job, you can upload the artifact (`.jar` file) that it produces to GitHub itself.
3. Then you can run the separate container image build and publish job.
4. Ensure the container image build and publish job depends on the code already being successfully compiled and `.jar` file being uploaded.
5. Use Docker's own GitHub Actions to set up the ability to build container images, login to the private GitHub registry, etc.
6. We recommend creating a directory where you can assemble all the pieces of the container image.
7. You can then download the `.jar` file produced by the first job into this assembly directory.
8. You can then build the container image from this assembly directory.
9. You probably want this version to come from some variable or input.
10. To ensure your image is published, not only built, you must set `push: true`.
11. The context in which you run the container build must include the `Dockerfile` you constructed earlier (in this example, that `Dockerfile` resides in the GitHub repository at this location: `./containers/custom-package`, so the earlier `actions/checkout@v4` action ensures it exists here).

---

2025\-03\-122025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/develop/) to provide us with more information. 

Back to top

[Previous Render your package](../render/) [Next Test your logic](../test/) 

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

