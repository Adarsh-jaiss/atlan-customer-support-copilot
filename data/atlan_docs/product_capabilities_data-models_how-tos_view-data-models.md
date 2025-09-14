# Source URL
https://docs.atlan.com/product/capabilities/data-models/how-tos/view-data-models

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/data-models/how-tos/view-data-models
link-alternate: https://docs.atlan.com/product/capabilities/data-models/how-tos/view-data-models
meta-description: Once you have [ingested your ER model assets in Atlan](/product/capabilities/data-models/concepts/what-are-data-models), you can:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [ingested your ER model assets in Atlan](/product/capabilities/data-models/concepts/what-are-data-models), you can:.
meta-og-locale: en
meta-og-title: view data models | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/data-models/how-tos/view-data-models
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: view data models | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

view data models
================

Once you have [ingested your ER model assets in Atlan](/product/capabilities/data-models/concepts/what-are-data-models), you can:

* Search, discover, and filter models, entities, attributes, relationships, and mappings, cataloged as native assets in Atlan.
* Link ER entities at the conceptual, logical, or physical layer to your crawled data assets. Note that the Atlan UI is optimized for the following linking design: Conceptual entity â Logical entity â Physical entity â Database table or view.
* Trace the object lifecycle across various layers of abstraction or implementation:
    + Business glossary
    + ER models
    + Crawled data assets \- tables and views

Models[â](#models "Direct link to Models")
--------------------------------------------

To view an entityârelationship (ER) model:

1. From the left menu of any screen in Atlan, click **Assets**.
2. In the *Filters* menu on the left, click **Source**.
3. Click **Choose connection** to filter for assets in a *Data Model* connection.
4. Under the search bar on the *Assets* page, click the *Asset type* dropdown.
5. From the *Asset type* dropdown, select a **Model** to search by a specific asset type.
6. Select a model asset to view the asset sidebar or open the asset profile.

### Asset preview[â](#asset-preview "Direct link to Asset preview")

The model asset preview includes basic information about the asset, including technical name, [alias](/product/capabilities/discovery/how-tos/add-an-alias), model type, description, and total count of associated entities.

### Asset sidebar[â](#asset-sidebar "Direct link to Asset sidebar")

The sidebar to the right of the asset preview provides high\-level information about the asset. Here's what you can view specific to model assets:

* **Overview** offers a preview of the key characteristics of the asset, including model name, type, and description. You can add an [alias](/product/capabilities/discovery/how-tos/add-an-alias), enrich metadata, link domains to your data models, and more from the asset sidebar.
* **Entities** displays a list of entities in a model, along with entity type and description. This tab also provides you with a search bar to search and sort entities.

[https://demo.arcade.software/pqDN3im7JrWadPrfCXch?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/pqDN3im7JrWadPrfCXch?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

### Asset profile[â](#asset-profile "Direct link to Asset profile")

The model profile summarizes important details about the asset.

* **Overview** tab displays details such as technical name, [alias](/product/capabilities/discovery/how-tos/add-an-alias), entity count, model type, description, certification status, and owners. The *Entities* section offers a snapshot of all the entities in a model, listing the entity name and description.
* **Entities** tab allows you to update metadata such as tags and terms for your entities directly from the model profile.

[https://demo.arcade.software/fbh1cnYsBHzO0F69Rzuc?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/fbh1cnYsBHzO0F69Rzuc?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Entities[â](#entities "Direct link to Entities")
--------------------------------------------------

To view an entity:

1. From the left menu of any screen in Atlan, click **Assets**.
2. In the *Filters* menu on the left, click **Source**.
3. Click **Choose connection** to filter for assets in a *Data Model* connection.
4. Under the search bar on the *Assets* page, click the *Asset type* dropdown.
5. From the *Asset type* dropdown, select a **Entity** to search by a specific asset type.
6. Select an entity asset to view the asset sidebar or open the asset profile.

### Asset preview[â](#asset-preview-1 "Direct link to Asset preview")

The entity asset preview includes basic information about the asset, including technical name, [alias](/product/capabilities/discovery/how-tos/add-an-alias), entity type, description, and total count of associated attributes.

### Asset sidebar[â](#asset-sidebar-1 "Direct link to Asset sidebar")

The sidebar to the right of the asset preview provides high\-level information about the asset. Here's what you can view specific to entity assets:

* **Overview** offers a preview of the key characteristics of the asset, including entity name, type, and description. You can add an [alias](/product/capabilities/discovery/how-tos/add-an-alias), enrich metadata, link domains to your entities, and more from the asset sidebar.
* **Attributes** displays a list of attributes in an entity, along with data type, description, and primary key indicator, if any. This tab also provides you with a search bar to search and sort attributes.
* **Relations** shows a list of entity relationships:
    + **Associations** displays relation name, associated entity, and cardinality.
    + **Generalization** displays parent\-child relationships between entities.
* **Layers** organizes different levels of abstraction in a tree\-like representation: Conceptual entity â Logical entity â Physical entity â Database table or view.

### Asset profile[â](#asset-profile-1 "Direct link to Asset profile")

The entity profile displays important details about the asset.

* **Overview** tab summarizes details such as technical name, [alias](/product/capabilities/discovery/how-tos/add-an-alias), attribute count, entity type, associated model, description, certification status, and owners.
    + The **Layers** section organizes different levels of abstraction in a tree\-like representation: Conceptual entity â Logical entity â Physical entity â Database table or view. Click an entity name to view more details in the asset sidebar.
    + The **Attributes** section offers a snapshot of all the attributes of an entity, including the attribute name, primary key indicator, data type, nullability, and description.
* **Attributes** tab allows you to update metadata such as tags and terms for your attributes directly from the entity profile.
* **Entity Diagram** provides a [visual representation of entity relationships](/product/capabilities/data-models/how-tos/view-data-models).

[https://demo.arcade.software/KSTpGhfSGk0e92KniHbA?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/KSTpGhfSGk0e92KniHbA?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Entity diagram[â](#entity-diagram "Direct link to Entity diagram")
--------------------------------------------------------------------

An entity diagram is a visual representation of entity relationships. It also allows you to navigate to the next set of related entities as you explore the graph. Note that the entity diagram in Atlan is not a replacement for ER modeling tools, which are optimized for editing objects and displaying an entire model.

The entity diagram in Atlan:

* Is entity\-focused only
* Uses crowâs foot notation to represent one\-to\-many relationships
* Lists attributes that are part of an entity:
    + Attributes that form part of a relationship are shown at the top of the list. Clicking on one highlights the attribute in the related entity that forms the basis of the association.
    + The association itself can be highlighted and has a sidebar with detailed information.

[https://demo.arcade.software/YB6LjIQubd4kAYLIRD9C?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/YB6LjIQubd4kAYLIRD9C?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Layers[â](#layers "Direct link to Layers")
--------------------------------------------

The *Layers* section of an entity or database table helps you navigate across different abstraction layers of entities. A layer is a mechanism to have multiple abstractions for a model or an entity.

* Conceptual \- most abstract
* Logical \- more defined
* Physical \- well\-defined and conformant to a target database system
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [model](/tags/model)

[PreviousData Models](/product/capabilities/data-models)[NextWhat are data models?](/product/capabilities/data-models/concepts/what-are-data-models)

Copyright Â© 2025 Atlan Pte. Ltd.

