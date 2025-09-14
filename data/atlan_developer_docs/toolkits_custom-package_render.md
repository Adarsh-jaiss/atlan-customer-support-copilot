# Source URL
https://developer.atlan.com/toolkits/custom-package/render/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/render/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to render a package defined via the toolkit's template into YAML files needed by Argo.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to render a package defined via the toolkit's template into YAML files needed by Argo.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/render.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Render your package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/render/
meta-twitter:card: summary_large_image
meta-twitter:description: How to render a package defined via the toolkit's template into YAML files needed by Argo.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/render.png
meta-twitter:title: Render your package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Render your package - Developer
-->

[Skip to content](#render-your-package) Developer Render your package Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Render your package[¶](#render-your-package "Permanent link")
=============================================================

**Full example (expand for details)**

Following is the complete package file for the running example, without any comments, in case you want to try it yourself as a sort of "hello world" example:

| MyCustomPackage.pkl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 ``` | ``` amends "package://developer.atlan.com/toolkits/custom-package/config@5.0.3#/Framework.pkl"  import "pkl:semver" import "package://developer.atlan.com/toolkits/custom-package/config@5.0.3#/Connectors.pkl"  packageId = "@csa/openapi-spec-loader" packageName = "OpenAPI Spec Loader" version = semver.Version("1.0.0") description = "Loads API specs and paths from an OpenAPI (v3) definition." iconUrl = "http://assets.atlan.com/assets/apispec.png" docsUrl = "https://developer.atlan.com/samples/loaders/openapi/" implementationLanguage = "Kotlin" containerImage = "ghcr.io/atlanhq/atlan-kotlin-samples:\(version)" containerCommand {   "/dumb-init"   "--"   "java"   "OpenAPISpecLoaderKt" } outputs {   files {     ["debug-logs"] = "/tmp/debug.log"   } } keywords {   "kotlin"   "crawler"   "openapi" } preview = true connectorType = Connectors.API  uiConfig {   tasks {     ["Configuration"] {       description = "OpenAPI spec configuration"       inputs {         ["spec_url"] = new TextInput {           title = "Specification URL"           required = true           helpText = "Full URL to the JSON form of the OpenAPI specification."           placeholderText = "https://petstore3.swagger.io/api/v3/openapi.json"         }       }     }     ["Connection"] {       description = "Connection details"       inputs {         ["connection_usage"] = new Radio {           title = "Connection"           required = true           possibleValues {             ["CREATE"] = "Create"             ["REUSE"] = "Reuse"           }           default = "REUSE"           fallback = default           helpText = "Whether to create a new connection to hold these API assets, or reuse an existing connection."         }         ["connection"] = new ConnectionCreator {           title = "Connection"           required = true           helpText = "Enter details for a new connection to be created."         }         ["connection_qualified_name"] = new ConnectionSelector {           title = "Connection"           required = true           helpText = "Select an existing connection to load assets into."         }       }     }   }   rules {     new UIRule {       whenInputs { ["connection_usage"] = "REUSE" }       required { "connection_qualified_name" }     }     new UIRule {       whenInputs { ["connection_usage"] = "CREATE" }       required { "connection" }     }   } }  ``` |

Render through `pkl`[¶](#render-through-pkl "Permanent link")
-------------------------------------------------------------

Once your package is defined, you can then "render" it into the files Atlan needs using the `pkl` CLI:

```
pkl eval MyCustomPackage.pkl -m .

```
This will generate multiple YAML files representing the package, in the folder structure required by Atlan, ready to be submitted in a PR.

Output produced[¶](#output-produced "Permanent link")
-----------------------------------------------------

Rendering the package will create various files and subdirectories under the output directory you specify (the location you specify for `-m`), depending on the `implementationLanguage` you defined in your package:

Python

Kotlin

```
├── requirements.txt                            # (1)
├── requirements-dev.txt                        # (2)
├── version.txt                                 # (3)
├── Dockerfile                                  # (4)
├── {{package_name}}/
│   ├── __init__.py                             # (5)
│   ├── logging.conf                            # (6)
│   ├── main.py.example                         # (7)
│   └── {{package_name}}_cfg.py                 # (8)
│
└── build/                                      # (9)
    └── package/
        └── {{package-name}}/
            ├── package.json                    # (10)
            ├── index.js                        # (11)
            ├── configmaps/
            │   └── default.yaml                # (12)
            │
            └── templates/
                └── default.yaml                # (13)

```
1. Minimal dependencies for a Python\-based package (you can of course extend this with other dependencies if your package requires them).
2. Minimal dependencies for testing a Python\-based package (you can of course extend this with other dependencies if your package requires them).
3. Version of the Python package.
4. Default container image file for a Python package.
5. Empty init file for Python.
6. Default logging configuration for Python to separate info and debug\-level logging.
7. Skeletal starting point for a main program using the runtime toolkit.
8. A strongly\-typed class capturing all the configuration details a user could provide, which we can use with the package's runtime toolkit.
9. The `build` subdirectory will contain the artifacts needed by Argo to deploy your package.
10. The `package.json` contains descriptive metadata about your package, such as its name, description, icon, and documentation links.
11. The `index.js` is a placeholder file, which should be left as\-is.
12. Your package's UI configuration is bundled into this `configmaps/default.yaml` file.
13. Your package's orchestration is bundled into this `templates/default.yaml` file.

```
├── src/
│   └── main/
│       └── kotlin/
│           └── {{PackageName}}Cfg.kt           # (1)
│
└── build/                                      # (2)
    └── package/
        └── {{package-name}}/
            ├── package.json                    # (3)
            ├── index.js                        # (4)
            ├── configmaps/
            │   └── default.yaml                # (5)
            │
            └── templates/
                └── default.yaml                # (6)

```
1. The `src` subdirectory will contain a generated Kotlin class for transferring the UI\-based inputs to your code (if the you have configured your package's `implementationLanguage` as `Kotlin`).
2. The `build` subdirectory will contain the artifacts needed by Argo to deploy your package.
3. The `package.json` contains descriptive metadata about your package, such as its name, description, icon, and documentation links.
4. The `index.js` is a placeholder file, which should be left as\-is.
5. Your package's UI configuration is bundled into this `configmaps/default.yaml` file.
6. Your package's orchestration is bundled into this `templates/default.yaml` file.

**Output produced**

For our running example (since the `implementationLanguage` is `Kotlin`), this would produce:

```
├── src/
│   └── main/
│       └── kotlin/
│           └── OpenAPISpecLoaderCfg.kt
│
└── build/
    └── package/
        └── csa-openapi-spec-loader/
            ├── package.json
            ├── index.js
            ├── configmaps/
            │   └── default.yaml
            │
            └── templates/
                └── default.yaml

```

---

2025\-03\-122025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/render/) to provide us with more information. 

Back to top

[Previous Define via template](../define/) [Next Develop your logic](../develop/) 

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

