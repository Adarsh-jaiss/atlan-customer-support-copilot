# Source URL
https://developer.atlan.com/snippets/users-groups/sso-group-mapping/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/sso-group-mapping/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage SSO group mapping in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage SSO group mapping in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/sso-group-mapping.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage SSO group mapping - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/sso-group-mapping/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage SSO group mapping in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/sso-group-mapping.png
meta-twitter:title: Manage SSO group mapping - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage SSO group mapping - Developer
-->

[Skip to content](#manage-sso-group-mapping) Developer Manage SSO group mapping Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/idp/{sso\_alias}/mappers (GET)](../../../endpoints/#tag:apiserviceidpsso_aliasmappers-get)[/api/service/idp/{sso\_alias}/mappers (POST)](../../../endpoints/#tag:apiserviceidpsso_aliasmappers-post)[/api/service/idp/{sso\_alias}/mappers/{group\_map\_id} (GET)](../../../endpoints/#tag:apiserviceidpsso_aliasmappersgroup_map_id-get)[/api/service/idp/{sso\_alias}/mappers/{group\_map\_id} (POST)](../../../endpoints/#tag:apiserviceidpsso_aliasmappersgroup_map_id-post)[/api/service/idp/{sso\_alias}/mappers/{group\_map\_id}/delete (POST)](../../../endpoints/#tag:apiserviceidpsso_aliasmappersgroup_map_iddelete-post)

Manage SSO group mapping[¶](#manage-sso-group-mapping "Permanent link")
=======================================================================

You can use the SDK's SSO client to manage your SSO group mapping in Atlan.

Create a new group mapping[¶](#create-a-new-group-mapping "Permanent link")
---------------------------------------------------------------------------

[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")

To create a new SSO group mapping:

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a new SSO group mapping | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanSSO  client = AtlanClient()  atlan_group = client.group.get_by_name("atlan-group") # (1) atlan_group = atlan_group.records[0]  response = client.sso.create_group_mapping( # (2)     sso_alias=AtlanSSO.AZURE_AD,     atlan_group=atlan_group,     sso_group_name="sso_group_name", )  ``` |

1. Begin by retrieving the Atlan group for which you wish to create a group mapping.
In this example, we retrieve an existing Atlan group by its name.
2. To create a new group mapping, provide the following:

    * name of the SSO provider.
        * existing Atlan group.
        * name of the existing SSO group.

Coming soon

| POST /api/service/idp/azure/mappers | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {    "identityProviderAlias": "azure", // (1)    "identityProviderMapper": "saml-group-idp-mapper",    "name": "0d9b0028-513c-4536-af90-d594ef2d549c--1713772147406",  // (2)    "config": {        "syncMode": "FORCE",        "attributes": "[]",        "are.attribute.values.regex": "",        "attribute.name": "memberOf",        "group": "atlan_group_name",  // (3)        "attribute.value": "sso_group_name"  // (4)    } }  ``` |

1. Specify the SSO provider; here, we create group mapping for `Azure AD` SSO.
2. Set the group mapping name in the format `<atlan_group_id>--<epoch_timestamp>`.
3. Provide the name of the existing Atlan group.
4. Provide the name of the existing SSO group.

Retrieve group mapping[¶](#retrieve-group-mapping "Permanent link")
-------------------------------------------------------------------

[2\.1\.6](https://github.com/atlanhq/atlan-python/releases/tag/2.1.6 "Minimum version")

### Retrieve group mapping by ID[¶](#retrieve-group-mapping-by-id "Permanent link")

To retrieve an existing SSO group mapping:

Java

Python

Kotlin

Raw REST API

Coming soon

| Retrieve an existing SSO group mapping | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanSSO  client = AtlanClient()  response = client.sso.get_group_mapping( # (1)     sso_alias=AtlanSSO.AZURE_AD,     group_map_id="0637576a-5419-40d7-b6cb-fe5841b1da4b", )  ``` |

1. To retrieve an existing group mapping, provide the following:

    * name of the SSO provider.
        * existing SSO group map identifier.

Coming soon

| GET /api/service/idp/azure/mappers/0637576a\-5419\-40d7\-b6cb\-fe5841b1da4b | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

All details are present the URL itself

Note that you need to specify the SSO alias and map identifier
directly in the URL. For this example, we're retrieving a group mapping for `Azure AD` SSO.

### Retrieve all group mappings[¶](#retrieve-all-group-mappings "Permanent link")

To retrieve all existing SSO group mappings:

Java

Python

Kotlin

Raw REST API

Coming soon

| Retrieve all existing SSO group mappings | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanSSO  client = AtlanClient()  response = client.sso.get_all_group_mappings(sso_alias=AtlanSSO.AZURE_AD) # (1)  ``` |

1. To retrieve all existing group mappings,
you need to provide the name of the SSO provider.
Here, we're retrieving all group mappings for `Azure AD` SSO.

Coming soon

| GET /api/service/idp/azure/mappers | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

All details are present the URL itself

Note that you need to specify the SSO alias directly in the URL. 
For this example, we're retrieving all group mappings for `Azure AD` SSO.

Update an existing group mapping[¶](#update-an-existing-group-mapping "Permanent link")
---------------------------------------------------------------------------------------

[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")

To update an existing SSO group mapping:

Java

Python

Kotlin

Raw REST API

Coming soon

| Update an existing SSO group mapping | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanSSO  client = AtlanClient()  atlan_group = client.group.get_by_name("atlan-group") # (1) atlan_group = atlan_group.records[0]  response = client.sso.update_group_mapping( # (2)     sso_alias=AtlanSSO.AZURE_AD,     atlan_group=atlan_group,     group_map_id="0637576a-5419-40d7-b6cb-fe5841b1da4b",     sso_group_name="sso_group_name_updated", )  ``` |

1. Begin by retrieving the Atlan group for which you wish to update a group mapping.
In this example, we retrieve an existing Atlan group by its name.
2. To update an existing group mapping, provide the following:

    * name of the SSO provider.
        * existing Atlan group.
        * existing SSO group map identifier.
        * updated name of the existing SSO group.

Coming soon

| POST /api/service/idp/azure/mappers/0637576a\-5419\-40d7\-b6cb\-fe5841b1da4b | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {    "identityProviderAlias": "azure", // (1)    "identityProviderMapper": "saml-group-idp-mapper",    "id": "0637576a-5419-40d7-b6cb-fe5841b1da4b", // (2)    "name": "0d9b0028-513c-4536-af90-d594ef2d549c--1713772147406",  // (3)    "config": {        "syncMode": "FORCE",        "attributes": "[]",        "are.attribute.values.regex": "",        "attribute.name": "memberOf",        "group": "atlan_group_name",  // (4)        "attribute.value": "sso_group_name_updated"  // (5)    } }  ``` |

1. Specify the SSO provider; here, we update group mapping for `Azure AD` SSO.
2. Specify the existing SSO group map identifier.
3. Specify the name of the existing SSO group map.
4. Provide the name of the existing Atlan group.
5. Provide the updated name of the existing SSO group.

### Delete a group mapping[¶](#delete-a-group-mapping "Permanent link")

To delete an existing SSO group mapping:

Java

Python

Kotlin

Raw REST API

Coming soon

| Delete an existing SSO group mapping | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanSSO  client = AtlanClient()  response = client.sso.delete_group_mapping( # (1)     sso_alias=AtlanSSO.AZURE_AD,     group_map_id="0637576a-5419-40d7-b6cb-fe5841b1da4b" )  ``` |

1. To delete an existing group mapping,
you need to provide the SSO alias and map identifier.
Here, we're deleting the group mapping for `Azure AD` SSO.

Coming soon

| POST /api/service/idp/azure/mappers/0637576a\-5419\-40d7\-b6cb\-fe5841b1da4b/delete | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

All details are present the URL itself

Note that you need to specify the SSO alias and map identifier
directly in the URL. For this example, we're deleting a group mapping for `Azure AD` SSO.

---

2024\-04\-222025\-08\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/sso-group-mapping/) to provide us with more information. 

Back to top

[Previous Delete users and groups](../delete/) [Next Packages and workflows introduction](../../workflows/) 

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

