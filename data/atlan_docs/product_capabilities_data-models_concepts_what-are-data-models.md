# Source URL
https://docs.atlan.com/product/capabilities/data-models/concepts/what-are-data-models

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/data-models/concepts/what-are-data-models
link-alternate: https://docs.atlan.com/product/capabilities/data-models/concepts/what-are-data-models
meta-description: Data models provide a framework to describe how data is structured, organized, and related within a system. It acts as a blueprint for organizations to design their business applications and processes. Data models can be of different types: relational, hierarchical, entity relationship, and network.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Data models provide a framework to describe how data is structured, organized, and related within a system. It acts as a blueprint for organizations to design their business applications and processes. Data models can be of different types: relational, hierarchical, entity relationship, and network.
meta-og-locale: en
meta-og-title: Data Models | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/data-models/concepts/what-are-data-models
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Data Models | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Data Models
===========

Data models provide a framework to describe how data is structured, organized, and related within a system. It acts as a blueprint for organizations to design their business applications and processes. Data models can be of different types: relational, hierarchical, entity relationship, and network.

Atlan enables you to ingest your entityârelationship (ER) models and associate them with existing data assets in Atlan. Cataloging your ER model metadata in Atlan can help you:

* Foster collaboration \- business and technical users work best when they share a common understanding of the data landscape without tool boundaries.
* Handle change management through impact analysis \- data models enable visualization of an asset's lifecycle within an organization, helping users assess business impact due to technical changes with accuracy and vice versa.
* Implement data governance \- define access control mechanisms, data retention policies, and data governance rules spanning different systems by understanding relationships between data assets. When business\-approved data models are coupled with technical objects, trust and accountability are established between key stakeholders.

Ingest ER models[â](#ingest-er-models "Direct link to Ingest ER models")
--------------------------------------------------------------------------

You can ingest your ER models in Atlan using the following methods:

* [Data model ingestion](https://solutions.atlan.com/data-model-ingestion) \- Atlan recommends using this custom package to ingest your ER models via an Excel template.
* [Atlan SDK](https://developer.atlan.com/models/model/)
* [Atlan REST API](https://developer.atlan.com/snippets/advanced-examples/create/)

Entityârelationship models[â](#entityrelationship-models "Direct link to Entityârelationship models")
-----------------------------------------------------------------------------------------------------------

Entityârelationship (ER) models focus on entities (objects/concepts) and the attributes (characteristics) and relationships (associations) between those entities.

In the context of entityârelationship modeling, a model encompasses the entities, attributes, and relationships that define how data is organized and interactions between different elements within a specific domain.

Data models can be used to represent information at different levels of abstraction:

* Conceptual \- overall structure of content without specific details. This acts as a starting point for new data initiatives and is the most abstract form of the model.
* Logical \- implementation\-agnostic breakdown of data into specific objects and interactions between these objects.
* Physical \- a refined adaptation of data concepts conforming to a particular software application or data storage system. This level takes into account finer nuances like naming conventions, optimizations, partitioning, and more.

Entity\-relationship diagrams[â](#entity-relationship-diagrams "Direct link to Entity-relationship diagrams")
---------------------------------------------------------------------------------------------------------------

An entity\-relationship diagram (ERD) is a visual representation of data that illustrates the entities (objects or concepts) within a system, relationships between those entities, and their attributes.

* **Entity** \- in an ERD, an entity is a fundamental component that represents a real\-world object or concept within a database. For example, entities are typically nouns, such as `Customer`, `Order`, or `Product` and data can be stored about them.
* **Attribute** \- an entity has attributes, which are the properties or characteristics of the entity. For example, a `Customer` entity may have attributes like `CustomerID`, `Name`, `Email`, and `Phone Number`.
* **Relationship** \- a relationship determines how two entities interact with each other. For example, a `Customer` places an `Order`. A relationship encompasses several elements, like:
    + Cardinality \- defines the quantitative aspect of a relationship. For example, a `Quote` provides pricing for many related `Orders` (one\-to\-many).
    + Optionality \- defines whether a relationship is mandatory in an entity. For example, an `Order` must have an associated `Customer`.
    + Cardinality and optionality can be combined to define business rules. For example, in a `Library` system, a `Member` can borrow 0\-n book(s).
    + Types of relationships:
        - Association \- refers to a peer\-to\-peer relationship between two entities.
        - Generalization \- refers to a parent\-child relationship between two entities. For example, a `Loan` entity can be of type `Home Loan`, `Auto Loan`, `Business Loan`, and so on.
* **Model** \- in the context of ER modeling, a model encompasses the entities, attributes, and relationships that define how data is organized and how different elements interact within a specific domain.
    + Models can be of different types \- conceptual, logical, and physical.
    + Mapping \- entities within a model can be mapped to entities within another model of a different type. For example, a logical entity `Order` can be mapped to your assets in Atlan, such as an `Order` table in Snowflake.
**Tags:*** [data](/tags/data)
* [model](/tags/model)

[PreviousHow to view data models](/product/capabilities/data-models/how-tos/view-data-models)[NextTroubleshooting data models](/product/capabilities/data-models/troubleshooting/troubleshooting-data-models)

Copyright Â© 2025 Atlan Pte. Ltd.

