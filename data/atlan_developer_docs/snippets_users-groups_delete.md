# Source URL
https://developer.atlan.com/snippets/users-groups/delete/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to delete users and groups in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to delete users and groups in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Deleting users and groups - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to delete users and groups in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/delete.png
meta-twitter:title: Deleting users and groups - Developer
meta-viewport: width=device-width,initial-scale=1
title: Deleting users and groups - Developer
-->

[Skip to content](#deleting-users-and-groups) Developer Deleting users and groups Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/groups/{guid}/delete (POST)](../../../endpoints/#tag:apiservicegroupsguiddelete-post)

Deleting users and groups[¶](#deleting-users-and-groups "Permanent link")
=========================================================================

Deleting users and groups uses a similar pattern to the retrieval operations. For this you can use static methods provided by the `AtlanUser` and `AtlanGroup` classes.

All delete operations are permanent

All delete operations on users and groups are permanent, hard\-deletes. There is no way to archive (soft\-delete) users and groups.

Delete a group[¶](#delete-a-group "Permanent link")
---------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to delete a group:

Java

Python

Kotlin

Go

Raw REST API

| Delete a group | |
| --- | --- |
| ``` 1 ``` | ``` AtlanGroup.delete(client, "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7"); // (1)  ``` |

1. To delete a group, you must specify its GUID and can simply call the `AtlanGroup.delete()` method. Because this operation will remove the group from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a group | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.group.purge("e79cb8eb-2bb6-4821-914c-f8dfd21fedc7") # (1)  ``` |

1. To delete a group, you must specify its GUID and can simply call the `group.purge()` method.

| Delete a group | |
| --- | --- |
| ``` 1 ``` | ``` AtlanGroup.delete(client, "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7") // (1)  ``` |

1. To delete a group, you must specify its GUID and can simply call the `AtlanGroup.delete()` method. Because this operation will remove the group from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a group | |
| --- | --- |
| ``` 1 ``` | ``` ctx.GroupClient.Purge("a99f50bc-46bf-4d08-a987-3411ef5cfc33") // (1)  ``` |

1. To delete a group, you must specify its GUID and can simply call the `GroupClient.Purge()` method.

| POST /api/service/groups/e79cb8eb\-2bb6\-4821\-914c\-f8dfd21fedc7/delete | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    Group ID in the URL

    Note that you must provide the unique ID (GUID) of the group to delete it.

Delete a user[¶](#delete-a-user "Permanent link")
-------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")

Irreversible operation that requires admin user's bearer token

Deleting a user is irreversible — be certain you want to fully remove the user and all references to the user (their ownership of assets, workflows, and so on) before running this operation. This operation can only be done using an admin user's bearer token, not an API token.

Go

| Delete a user | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` response, atlanErr := ctx.UserClient.RemoveUser(     "test-user-1",      "test-user-2",      "test-user-3", ) // (1) if atlanErr != nil {     logger.Log.Errorf("Error deleting user: %v", atlanErr) // (2) }  ``` |

1. Call the `ctx.UserClient.RemoveUser()` method with the following parameters :

    * **userName**: The username of the user to be removed (`"test-user-1"` in this example).
        * **transferToUserName**: The username of the user to whom the assets should be transferred (`"test-user-2"` in this example).
        * **wfCreatorUserName (optional)**: The username of the workflow creator (`"test-user-3"` in this example). If `nil`, it defaults to `transferToUserName`.
2. If an error occurs during the deletion, it will be logged.

> **Note:** A user can only be removed if they have fewer permissions than an admin. An admin cannot remove another admin.

---

2022\-12\-282025\-02\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/delete/) to provide us with more information. 

Back to top

[Previous Update users and groups](../update/) [Next Manage SSO group mapping](../sso-group-mapping/) 

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

