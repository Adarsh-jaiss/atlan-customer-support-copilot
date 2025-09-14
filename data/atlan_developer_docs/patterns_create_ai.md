# Source URL
https://developer.atlan.com/patterns/create/ai/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/ai/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on AI assets (AI models, AI applications).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on AI assets (AI models, AI applications).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/ai.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage AI assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/ai/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on AI assets (AI models, AI applications).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/ai.png
meta-twitter:title: Manage AI assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage AI assets - Developer
-->

[Skip to content](#manage-ai-assets) Developer Manage AI assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage AI assets[¶](#manage-ai-assets "Permanent link")
=======================================================

### AI model[¶](#ai-model "Permanent link")

[7\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/7.1.4 "Minimum version")

Creating an AI model is a **2\-step process**:

1. **Step 1**: Create the minimal AI model with basic information
2. **Step 2**: Create processes to link the AI model with datasets used for training, testing, inference, validation, and output

An AI model requires a `name` and `ai_model_status`. The model can be associated with training and output datasets through processes.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create an AI model | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AIModel from pyatlan.model.enums import AIDatasetType, AIModelStatus from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.assets import Asset  client = AtlanClient()  # Step 1: Create the minimal AI model model = AIModel.creator( # (1)     name="test-ai-model", # (2)     ai_model_status=AIModelStatus.ACTIVE # (3) ) response = client.asset.save(model) # (4) ai_model = response.mutated_entities.CREATE[0] # (5)  # Step 2: Create processes to link with datasets query = (     FluentSearch()     .where(Asset.TYPE_NAME.eq("View"))     .include_on_results(Asset.NAME)     .include_on_results(Asset.GUID)     .include_on_results(Asset.TYPE_NAME) ).to_request()  list_training = [] for results in client.asset.search(query):     list_training.append(results)  query = (     FluentSearch()     .where(Asset.TYPE_NAME.eq("Table"))     .include_on_results(Asset.NAME)     .include_on_results(Asset.GUID)     .include_on_results(Asset.TYPE_NAME) ).to_request()  list_output = [] for results in client.asset.search(query):     list_output.append(results)  dataset_dict = {     AIDatasetType.TRAINING: list_training,     AIDatasetType.OUTPUT: list_output } process = AIModel.processes_creator(ai_model, dataset_dict) # (6) response = AIModel.processes_batch_save(client, process) # (7)  ``` |

1. Build up the minimum request to create an AI model.
2. Provide a human\-readable name for your AI model, such as `gpt-4-model` or `bert-classifier`.
3. Set the status of the AI model.
4. Actually call Atlan to create the AI model.
5. Retrieve the AI model response object to be used in the next step.
6. Create a process to link the AI model with its associated datasets.
7. Save the processes in batches of 20 to map the relationships between the AI model and the datasets.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AIModel", // (2)       "attributes": {         "name": "test-ai-model", // (3)         "qualifiedName": "default/ai/aiapplication/testAiModel", // (4)         "connectorName": "ai", // (5)         "aiModelStatus": "ACTIVE", // (6)         "aiModelVersion": "", // (7)         "ownerGroups": [], // (8)         "ownerUsers": [], // (9)         "assetCoverImage": "/assets/default-product-cover-DeQonY47.webp" // (10)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. Specify the entity type as `AIModel` to create an AI model asset.
3. Provide a human\-readable name for your AI model, such as `gpt-4-model` or `bert-classifier`.
4. Set the unique qualified name for the AI model in the format `default/ai/aiapplication/{name}` where `{name}` should be in camelCase.
5. Specify the connector name as `ai` for AI assets.
6. Set the status of the AI model (e.g., `ACTIVE`, `INACTIVE`).
7. (optional) Specify the version of the AI model (e.g., "1\.2", "2\.0").
8. (optional) Assign owner groups of this AI model.
9. (optional) Assign owner users of this AI model.
10. Set the cover image for the AI model asset.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Process", // (2)       "attributes": {         "name": "asset-name -> ai-model", // (3)         "qualifiedName": "default/ai/dataset/937c19beebb3f99fb02e59f14702d86d47623cd519c3f8aec44136cfc574dd18", // (4)         "aiDatasetType": "TRAINING", // (5)         "inputs": [ // (6)           {             "typeName": "Table",             "guid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb"           }         ],         "outputs": [ // (7)           {             "typeName": "AIModel",             "guid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb"           }         ],         "__state": "ACTIVE" // (8)       }     },     {       "typeName": "Process",       "attributes": {         "name": "ai-model -> asset-name",         "qualifiedName": "default/ai/dataset/4578fd36d3956f38b3123555bc5fac951e76ea7b3517e7b988e71b8191f36f3e",         "aiDatasetType": "OUTPUT",         "inputs": [           {             "typeName": "AIModel",             "guid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb"           }         ],         "outputs": [           {             "typeName": "Table",             "guid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb"           }         ],         "__state": "ACTIVE"       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. Specify the entity type as `Process` to create relationships between datasets and AI models.
3. Provide a descriptive name for the process showing the relationship (e.g., "asset\-name \-\> model").
4. Set the unique qualified name for the process in the format `default/ai/dataset/{hash}`. The MD5 hash is generated internally by the SDK based on process attributes.
5. Specify the dataset type (e.g., `TRAINING`, `TESTING`, `INFERENCE`, `VALIDATION`, `OUTPUT`).
6. Define the input datasets that feed into the AI model.
7. Define the output AI model that receives the data.
8. Set the process state to `ACTIVE` to enable the relationship.

### AI application[¶](#ai-application "Permanent link")

[7\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/7.1.4 "Minimum version")

An AI application requires a `name`, `ai_application_version`, and `ai_application_development_stage`.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create an AI application | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AIApplication from pyatlan.model.enums import AIApplicationDevelopmentStage  client = AtlanClient()  ai_application = AIApplication.creator( # (1)     name="ai-app", # (2)     ai_application_version="1.1", # (3)     ai_application_development_stage=AIApplicationDevelopmentStage.PRODUCTION # (4) ) response = client.asset.save(ai_application) # (5)  ``` |

1. Build up the minimum request to create an AI application.
2. Provide a human\-readable name for your AI application, such as `chatbot-app` or `recommendation-engine`.
3. Specify the version of the AI application (e.g., "1\.1", "2\.12").
4. Set the development stage of the application.
5. Actually call Atlan to create the AI application.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AIApplication", // (2)       "attributes": {         "name": "test-ai-application", // (3)         "qualifiedName": "default/ai/aiapplication/testAiApplication", // (4)         "aiApplicationVersion": "1.1", // (5)         "aiApplicationDevelopmentStage": "PRODUCTION", // (6)         "certificateStatus": "DRAFT", // (7)         "ownerGroups": [], // (8)         "ownerUsers": [], // (9)         "assetCoverImage": "/assets/default-product-cover-DeQonY47.webp" // (10)       },       "relationshipAttributes": {         "models": [] // (11)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. Specify the entity type as `AIApplication` to create an AI application asset.
3. Provide a human\-readable name for your AI application, such as `chatbot-app` or `recommendation-engine`.
4. Set the unique qualified name for the AI application in the format `default/ai/aiapplication/{name}` where `{name}` should be in camelCase.
5. Specify the version of the AI application (e.g., "1\.1", "2\.12").
6. Set the development stage of the application (e.g., `PROPOSAL`, `DEVELOPMENT`, `PRODUCTION`).
7. Set the certificate status.
8. (optional) Assign owner groups of this AI application.
9. (optional) Assign owner users of this AI application.
10. Set the cover image for the AI application asset.
11. (optional) Provide the AI models objects to be used by this application.

Next Step[¶](#next-step "Permanent link")
-----------------------------------------

* [Learn about managing AI assets](../../../snippets/common-examples/) — common operations like adding descriptions, owners, and tags
* [Search for AI assets](../../../snippets/advanced-examples/search/) — find specific AI models or applications
* [Update AI assets](../../../snippets/advanced-examples/update/) — modify existing AI assets
* [Delete AI assets](../../../snippets/advanced-examples/delete/) — remove AI assets when no longer needed

---

1. For more details on the order of operations, see the [creating assets overview](../).[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2025\-07\-292025\-07\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/ai/) to provide us with more information. 

Back to top

[Previous Manage App assets](../app/) [Next Manage Insights assets](../insight/) 

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

