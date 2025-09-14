# Source URL
https://docs.atlan.com/product/capabilities/data-models/troubleshooting/troubleshooting-data-models

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/data-models/troubleshooting/troubleshooting-data-models
link-alternate: https://docs.atlan.com/product/capabilities/data-models/troubleshooting/troubleshooting-data-models
meta-description: What are the known limitations of data models in Atlan?
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: What are the known limitations of data models in Atlan?
meta-og-locale: en
meta-og-title: Troubleshooting data models | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/data-models/troubleshooting/troubleshooting-data-models
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting data models | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting data models
===========================

#### What are the known limitations of data models in Atlan?[â](#what-are-the-known-limitations-of-data-models-in-atlan "Direct link to What are the known limitations of data models in Atlan?")

Following are the known limitations of data models in Atlan:

* Generalizations are not part of the entity diagram. These types of relationships are shown in a separate section of the *Relations* tab in the entity sidebar in a tree\-like representation.
* Although attributes can be mapped to other attributes or columns, these mappings are currently not displayed on the Atlan UI. Atlan currently only displays entity mappings in the *Layers* section of the entity profile and sidebar.
* There is no asset filter or indicator on lineage graphs to help you identify crawled database assets linked to ER assets.
* Atlan does not distinguish between the optionality ends of an association. For example, an `Account` can place multiple `Orders`Â (one\-to\-many). Atlan stores this information and visually represents it in the entity diagram. However, the below two variations that depict more details about the relationship are currently not supported:
    + An `Account` should place at least one `Order`.
    + An `Account` may or may not place an `Order`.
* Inverse relationships need to be defined independently and are shown distinctly in the entity diagram. For example, a `Customer` (entity) places (relationship) an `Order` (entity). The inverse of the relationship is `Order` (entity) is placed by a `Customer` (entity). The entity diagram currently represents these two relationships distinctively and does not club them in a unified way.

#### Can a single model contain entities of different types?[â](#can-a-single-model-contain-entities-of-different-types "Direct link to Can a single model contain entities of different types?")

No, the entity type (conceptual, logical, or physical) is defined for a model and all associated objects such as entities and attributes within the model inherit the same type. You can create two different models with the same name but with different types and use them to populate entities.

#### Can fine\-grain mapping between two layers be done at an attribute level?[â](#can-fine-grain-mapping-between-two-layers-be-done-at-an-attribute-level "Direct link to Can fine-grain mapping between two layers be done at an attribute level?")

The backend supports attribute\-level mapping and information can be stored via the [Data Model Ingestion package](https://solutions.atlan.com/data-model-ingestion/) as well as retrieved via API/SDK. However, attribute\-to\-attribute mapping is currently not displayed on the Atlan UI.

#### What is the relation between a data model connection in Atlan and data models present elsewhere?[â](#what-is-the-relation-between-a-data-model-connection-in-atlan-and-data-models-present-elsewhere "Direct link to What is the relation between a data model connection in Atlan and data models present elsewhere?")

There are no strict rules on how many data models or if a subset of a data model should form part of a single Atlan Data Model connection. For example, you may choose to include ER models belonging to the same domain/business function to be part of a single connection.

Atlan functionalities like access control, asset deletion, and more operate at the connection level. These factors need to be taken into consideration when deciding what to ingest.

Some guidelines:

* Corresponding models representing different levels of abstraction are clubbed into one connection.
* Change frequency and refresh requirement (schedules) can drive this decision, too.

#### What is the difference between mapping and relation?[â](#what-is-the-difference-between-mapping-and-relation "Direct link to What is the difference between mapping and relation?")

While entities can be related to each other in two ways, mapping and relation, there is a fundamental difference between the two:

* Entity mapping \- ties an entity across different layers of abstraction. For example, `Customer` logical entity can be mapped to `CUST_DETAILS` physical entity.
* Entity relations \- representation of a peer\-to\-peer relationship between entities. For example, `Order` generates `Invoice`.
    + Related entities are of the same type (physical/logical/conceptual).
    + Generally materialized as a primary key\-foreign key relationship at the database level.

#### What ER modeling tools does Atlan support?[â](#what-er-modeling-tools-does-atlan-support "Direct link to What ER modeling tools does Atlan support?")

Atlan currently does not support native integration with any specific ER modeling tool. Object information from an ER modeling tool can be exported to and transformed with the [Data Model Ingestion package](https://solutions.atlan.com/data-model-ingestion/) and then ingested into Atlan.

#### What ER assets can be linked to database assets crawled by Atlan?[â](#what-er-assets-can-be-linked-to-database-assets-crawled-by-atlan "Direct link to What ER assets can be linked to database assets crawled by Atlan?")

Entities can currently be linked to database tables or views. Although not required, entities of the physical type are generally mapped to database assets.

#### Is it mandatory to create and map all three types of entities?[â](#is-it-mandatory-to-create-and-map-all-three-types-of-entities "Direct link to Is it mandatory to create and map all three types of entities?")

No, you can choose to create assets of any one, two, or all three types. The Atlan UI is optimized for entity mapping in the following order:

* Conceptual to logical entity
* Logical to physical entity
* Physical entity to database assets

You can skip a certain level of abstraction, as needed.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [model](/tags/model)

[PreviousWhat are data models?](/product/capabilities/data-models/concepts/what-are-data-models)

Copyright Â© 2025 Atlan Pte. Ltd.

