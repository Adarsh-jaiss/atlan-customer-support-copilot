# Source URL
https://developer.atlan.com/snippets/users-groups/update/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to update user and group properties in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to update user and group properties in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Updating users and groups - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/update/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to update user and group properties in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/update.png
meta-twitter:title: Updating users and groups - Developer
meta-viewport: width=device-width,initial-scale=1
title: Updating users and groups - Developer
-->

[Skip to content](#updating-users-and-groups) Developer Updating users and groups Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/groups/{guid} (POST)](../../../endpoints/#tag:apiservicegroupsguid-post)[/api/service/groups/{guid}/members/remove (POST)](../../../endpoints/#tag:apiservicegroupsguidmembersremove-post)[/api/service/users/{guid} (POST)](../../../endpoints/#tag:apiserviceusersguid-post)[/api/service/users/{guid}/groups (POST)](../../../endpoints/#tag:apiserviceusersguidgroups-post)[/api/service/users/{guid}/update (POST)](../../../endpoints/#tag:apiserviceusersguidupdate-post)

Updating users and groups[¶](#updating-users-and-groups "Permanent link")
=========================================================================

You can update basic properties of both users and groups, again using the builder pattern.

Update a group[¶](#update-a-group "Permanent link")
---------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to update a group:

Java

Python

Kotlin

Go

Raw REST API

| Update a group | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` AtlanGroup group = AtlanGroup.updater( // (1)         "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", // (2)         "/example_group") // (3)     .attributes(AtlanGroup.GroupAttributes.builder() // (4)         .description(List.of("Now with a description!")) // (5)         .build()) // (6)     .build(); // (7) group.update(client); // (8)  ``` |

1. To update a group, start a builder using the `updater()` method.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. You can then specify anything you want to update. In the case of a group, most of the properties are in an embedded `attributes` object that can be built\-up through its own builder.
5. For example, you can add or change the description of the group. (Note that all objects in the attributes of a group are lists, even when they only have a single value.)
6. Like other builder patterns, you need to build the attributes object.
7. Like other builder patterns, you need to build the updated group object itself.
8. Finally, you can call the `update()` method on the built\-up group object to actually update the group in Atlan. Note that this method does not return anything. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a group | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.model.group import AtlanGroup from pyatlan.client.atlan import AtlanClient  client = AtlanClient() group = AtlanGroup.create_for_modification( # (1)     guid="e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", # (2)     path="/example_group" # (3) ) group.attributes = AtlanGroup.Attributes( # (4)     description=["Now with a description!"] # (5) ) client.group.update(group) # (6)  ``` |

1. To update a group, you could start by retrieving the group. Alternatively, you can use `AtlanGroup.create_for_modification()` to start building a minimal update request.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. You can then specify anything you want to update. In the case of a group, most of the properties are in an embedded `Attributes` class that can be built\-up.
5. For example, you can add or change the description of the group. (Note that all objects in the attributes of a group are lists, even when they only have a single value.)
6. Finally, you can call the `group.update()` method with the built\-up group object to actually update the group in Atlan. Note that this method does not return anything.

| Update a group | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val group = AtlanGroup.updater( // (1)         "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7",  // (2)         "/example_group") // (3)     .attributes(AtlanGroup.GroupAttributes.builder() // (4)         .description(listOf("Now with a description!")) // (5)         .build()) // (6)     .build() // (7) group.update(client) // (8)  ``` |

1. To update a group, start a builder using the `updater()` method.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. You can then specify anything you want to update. In the case of a group, most of the properties are in an embedded `attributes` object that can be built\-up through its own builder.
5. For example, you can add or change the description of the group. (Note that all objects in the attributes of a group are lists, even when they only have a single value.)
6. Like other builder patterns, you need to build the attributes object.
7. Like other builder patterns, you need to build the updated group object itself.
8. Finally, you can call the `update()` method on the built\-up group object to actually update the group in Atlan. Note that this method does not return anything. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Update a group | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` AtlanGroup := assets.AtlanGroup{} group, atlanErr := AtlanGroup.Updater( // (1)     "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", // (2)     "/example_group", // (3) ) description := []string{"Now with a description!"} group.Attributes.Description = description // (4) ctx.GroupClient.Update(group) // (5)  ``` |

1. To update a group, you could start by retrieving the group. Alternatively, you can use `AtlanGroup.Updater()` to start building a minimal update request.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. You can then specify anything you want to update. In the case of a group, most of the properties are in an embedded `Attributes` class that can be built\-up. For example, you can add or change the description of the group. (Note that all objects in the attributes of a group are lists, even when they only have a single value.)
5. Finally, you can call the `GroupClient.Update()` method with the built\-up group object to actually update the group in Atlan. Note that this method does not return anything.

| POST /api/service/groups/e79cb8eb\-2bb6\-4821\-914c\-f8dfd21fedc7 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "id": "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", // (1)   "path": "/example_group", // (2)   "attributes": { // (3)     "description": [       "Now with a description!"     ],     "isDefault": [       "false"     ]   } }  ``` |

1. You must provide the GUID of the group within the request payload.
2. You must provide the internal name of the group, prefixed by `/`, as the `path`.
3. You can provide any attributes to update on the group in the `attributes` object.

    Values are all arrays of strings

    Note that every value for an attribute is an array of strings, even when there is only a single value.

### Remove users from group[¶](#remove-users-from-group "Permanent link")

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove one or more users from a group:

Java

Python

Kotlin

Go

Raw REST API

| Remove users from a group | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` AtlanGroup group = AtlanGroup.updater( // (1)         "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", // (2)         "/example_group") // (3)     .build(); // (4) group.removeUsers(client, List.of("da213751-95de-4f96-8bee-a2c73e2ef8c8")); // (5)  ``` |

1. To update group membership, start a builder using the `updater()` method.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. Like other builder patterns, you need to build the updated group object itself.
5. Use the `removeUsers()` method to remove one or more users from the group. Specify the GUID of each user you want to remove as a member of the group. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Remove users from a group | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.group.remove_users( # (1)     guid="e79cb8eb-2bb6-4821-914c-f8dfd21fedc7", # (2)     user_ids=["da213751-95de-4f96-8bee-a2c73e2ef8c8"] # (3) )  ``` |

1. Use the `group.remove_users()` method to remove one or more users from the group.
2. Specify the GUID of the group from which you want to remove users.
3. Specify the GUID of each user you want to remove as a member of the group.

| Remove users from a group | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val group = AtlanGroup.updater( // (1)         "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7",  // (2)         "/example_group") // (3)     .build() // (4) group.removeUsers(client, listOf("da213751-95de-4f96-8bee-a2c73e2ef8c8")) // (5)  ``` |

1. To update group membership, start a builder using the `updater()` method.
2. You must provide the GUID of the group...
3. ...and the `path` of the group you want to update. (Note that the path is different from the name — you're best retrieving a group first and then getting the path from that retrieved object if you are unsure.)
4. Like other builder patterns, you need to build the updated group object itself.
5. Use the `removeUsers()` method to remove one or more users from the group. Specify the GUID of each user you want to remove as a member of the group. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Remove users from a group | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` ctx.GroupClient.RemoveUsers( // (1)     "a99f50bc-46bf-4d08-a987-3411ef5cfc33", // (2)     []string{"b060a754-4d16-4e13-b5a8-ba42f10aee39"}, // (3) )  ``` |

1. Use the `GroupClient.RemoveUsers()` method to remove one or more users from the group.
2. Specify the GUID of the group from which you want to remove users.
3. Specify the GUID of each user you want to remove as a member of the group.

| POST /api/service/groups/e79cb8eb\-2bb6\-4821\-914c\-f8dfd21fedc7/members/remove | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {   "users": [ // (1)     "da213751-95de-4f96-8bee-a2c73e2ef8c8" // (2)   ] }  ``` |

1. You must provide the list of users to remove from the group in a `users` array.
2. Specify each user by its unique ID (GUID).

Update a user[¶](#update-a-user "Permanent link")
-------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To update a user, begin by building the minimal update object:

Java

Python

Kotlin

Go

Raw REST API

| Build the minimal update object | |
| --- | --- |
| ``` 1 2 3 ``` | ``` AtlanUser user = AtlanUser.updater( // (1)         "da213751-95de-4f96-8bee-a2c73e2ef8c8") // (2)     .build(); // (3)  ``` |

1. To update a user, start a builder using the `updater()` method.
2. You must provide the GUID of the user.
3. Like other builder patterns, you need to build the updated user object itself.

Specific operations below

The specific operations for updating a user are all listed below \- there is no update object to build in the Python SDK.

| Build the minimal update object | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val user = AtlanUser.updater( // (1)         "da213751-95de-4f96-8bee-a2c73e2ef8c8") // (2)     .build() // (3)  ``` |

1. To update a user, start a builder using the `updater()` method.
2. You must provide the GUID of the user.
3. Like other builder patterns, you need to build the updated user object itself.

Specific operations below

The specific operations for updating a user are all listed below \- there is no update object to build in the Go SDK.

Implicit in the API calls below

There is nothing specific to do for this step when using the raw APIs — constructing the object is simply what you place in the payload of the API calls in the steps below.

### Add user to groups[¶](#add-user-to-groups "Permanent link")

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Once you have the update object, to add a user to one or more groups:

Java

Python

Kotlin

Go

Raw REST API

| Add user to groups | |
| --- | --- |
| ``` 4 ``` | ``` user.addToGroups(client, List.of("e79cb8eb-2bb6-4821-914c-f8dfd21fedc7")); // (1)  ``` |

1. Use the `addToGroups()` method to add the user to one or more groups. Specify the GUID of each group you want to make the user a member of. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add user to groups | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.user.add_to_groups( # (1)     guid="da213751-95de-4f96-8bee-a2c73e2ef8c8", # (2)     group_ids=["e79cb8eb-2bb6-4821-914c-f8dfd21fedc7"] # (3) )  ``` |

1. Use the `user.add_to_groups()` method to add the user to one or more groups.
2. Specify the GUID of the user you want to add to one or more groups.
3. Specify the GUID of each group you want to make the user a member of.

| Add user to groups | |
| --- | --- |
| ``` 4 ``` | ``` user.addToGroups(client, listOf("e79cb8eb-2bb6-4821-914c-f8dfd21fedc7")) // (1)  ``` |

1. Use the `addToGroups()` method to add the user to one or more groups. Specify the GUID of each group you want to make the user a member of. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add user to groups | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` ctx.UserClient.AddUserToGroups( // (1)     "b060a754-4d16-4e13-b5a8-ba42f10aee39", // (2)     []string{"a99f50bc-46bf-4d08-a987-3411ef5cfc33"}, // (3) )  ``` |

1. Use the `UserClient.AddUserToGroups()` method to add the user to one or more groups.
2. Specify the GUID of the user you want to add to one or more groups.
3. Specify the GUID of each group you want to make the user a member of.

| POST /api/service/users/da213751\-95de\-4f96\-8bee\-a2c73e2ef8c8/groups | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {   "groups": [ // (1)     "e79cb8eb-2bb6-4821-914c-f8dfd21fedc7" // (2)   ] }  ``` |

1. You must provide the list of groups to remove the user from in a `groups` array.
2. Specify each group by its unique ID (GUID).

### Change role of user[¶](#change-role-of-user "Permanent link")

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Once you have the update object, to change the role of a user:

Java

Python

Kotlin

Go

Raw REST API

| Change role of user | |
| --- | --- |
| ``` 4 ``` | ``` user.changeRole(client, client.getRoleCache().getIdForName("$guest")); // (1)  ``` |

1. Use the `changeRole()` method to change the role of a user. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Use the `RoleCache` to find the right GUID

    The `changeRole()` method requires the GUID of the role you want to move the user to. In order to find that GUID, you can use the `RoleCache.getIdForName()` and provide the name of the role.

| Change role of user | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.user.change_role( # (1)     guid="da213751-95de-4f96-8bee-a2c73e2ef8c8", # (2)     role_id=client.role_cache.get_id_for_name("$guest") # (3) )  ``` |

1. Use the `user.change_role()` method to change the role of a user.
2. Specify the GUID of the user whose role you want to change.
3. Specify the GUID of the role you want to change the user to.

    Use the `RoleCache` to find the right GUID

    The `user.change_role()` method requires the GUID of the role you want to move the user to. In order to find that GUID, you can use the `RoleCache.get_id_for_name()` and provide the name of the role.

| Change role of user | |
| --- | --- |
| ``` 4 ``` | ``` user.changeRole(client, client.roleCache.getIdForName("\$guest")) // (1)  ``` |

1. Use the `changeRole()` method to change the role of a user. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Use the `RoleCache` to find the right GUID

    The `changeRole()` method requires the GUID of the role you want to move the user to. In order to find that GUID, you can use the `RoleCache.getIdForName()` and provide the name of the role.

| Change role of user | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` roleID, atlanErr := assets.GetRoleIDForRoleName("$guest") ctx.UserClient.ChangeUserRole( // (1)     "b060a754-4d16-4e13-b5a8-ba42f10aee39", // (2)     roleID, // (3) )  ``` |

1. Use the `UserClient.ChangeUserRole()` method to change the role of a user.
2. Specify the GUID of the user whose role you want to change.
3. Specify the GUID of the role you want to change the user to.

    Use the `RoleCache` to find the right GUID

    The `UserClient.ChangeUserRole()` method requires the GUID of the role you want to move the user to. In order to find that GUID, you can use the `assets.GetRoleIDForRoleName()` and provide the name of the role.

| POST /api/service/users/da213751\-95de\-4f96\-8bee\-a2c73e2ef8c8/update | |
| --- | --- |
| ``` 1 2 3 ``` | ``` {   "roleId": "0d1c39de-7323-4490-98d9-43240307eea7" // (1) }  ``` |

1. You must provide the unique ID (GUID) of the new role for the user.

    You probably need to look this up first

    When using the raw API, you will need to lookup the role GUID yourself. You can `GET /api/service/roles`, and the GUID will be the `id` field in the response for each role.

### Deactivate a user[¶](#deactivate-a-user "Permanent link")

This cannot be done programmatically

You can only deactivate users as an Admin user (via the UI), API tokens do not have access to deactivate users.

### Reactivate a user[¶](#reactivate-a-user "Permanent link")

This cannot be done programmatically

You can only reactivate users as an Admin user (via the UI), API tokens do not have access to reactivate users.

---

2022\-12\-282025\-04\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/update/) to provide us with more information. 

Back to top

[Previous Retrieve users and groups](../read/) [Next Delete users and groups](../delete/) 

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

