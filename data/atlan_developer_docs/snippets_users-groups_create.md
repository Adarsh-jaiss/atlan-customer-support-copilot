# Source URL
https://developer.atlan.com/snippets/users-groups/create/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to create users and groups in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to create users and groups in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Creating users and groups - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/create/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to create users and groups in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/create.png
meta-twitter:title: Creating users and groups - Developer
meta-viewport: width=device-width,initial-scale=1
title: Creating users and groups - Developer
-->

[Skip to content](#creating-users-and-groups) Developer Creating users and groups Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/groups (POST)](../../../endpoints/#tag:apiservicegroups-post)[/api/service/users (POST)](../../../endpoints/#tag:apiserviceusers-post)

Creating users and groups[¶](#creating-users-and-groups "Permanent link")
=========================================================================

Like other objects in the SDK, you can create users and groups using the builder pattern.

Create a group[¶](#create-a-group "Permanent link")
---------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to create a group:

Java

Python

Kotlin

Go

Raw REST API

| Create a group | |
| --- | --- |
| ``` 1 2 3 ``` | ``` AtlanGroup group = AtlanGroup.creator("Example Group") // (1)     .build(); // (2) String guid = group.create(client); // (3)  ``` |

1. When creating a group, you must specify at least its name.
2. Like other builder patterns, you build the object to make it ready for creation.
3. To actually create the group in Atlan, call the `create()` method on the built object. Note that it will return the GUID of the group that was created when successful. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a group | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.group import AtlanGroup from pyatlan.client.atlan import AtlanClient  client = AtlanClient() group = AtlanGroup.create(alias="Example Group")  # (1) guid = client.group.create(group).group  # (2)  ``` |

1. When creating a group, you must specify at least its name.
2. To actually create the group in Atlan, call the `group.create()` method with the built object. Note that it will return a minimal object that includes the GUID of the group that was created in the `group` property.

| Create a group | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val group = AtlanGroup.creator("Example Group") // (1)     .build() // (2) val guid = group.create(client) // (3)  ``` |

1. When creating a group, you must specify at least its name.
2. Like other builder patterns, you build the object to make it ready for creation.
3. To actually create the group in Atlan, call the `create()` method on the built object. Note that it will return the GUID of the group that was created when successful. Because this operation will persist the group in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Create a group | |
| --- | --- |
| ``` 1 2 3 ``` | ``` atlanGroup := assets.AtlanGroup{} group, _ := atlanGroup.Create("Example Group") // (1) response, atlanErr := ctx.GroupClient.Create(group, nil) // (2)  ``` |

1. When creating a group, you must specify at least its name.
2. To actually create the group in Atlan, call the `GroupClient.Create()` method with the built object. Note that it will return a minimal object that includes the GUID of the group that was created in the `group` property.

| POST /api/service/groups | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "group": { // (1)     "attributes": { // (2)       "alias": [ // (3)         "Example Group"       ],       "isDefault": [ // (4)         "false"       ]     },     "name": "example_group" // (5)   } }  ``` |

1. All the details for the group must be wrapped in a `group` object.
2. The details of the group are further nested within an `attributes` object.
3. Provide an alias for the group, which will be the name that appears in the UI. Note that it must be specified as an array, even though there is only a single value.
4. Specify whether the group should be applied to all new users (true) or not (false). Note that this must be specified as a string within an array.
5. Provide an internal name for the group.

    Must follow certain constraints

    The internal name for the group must be unique, all lowercase, and include only alphanumeric characters and the `_` (no spaces or special characters).

Create a user[¶](#create-a-user "Permanent link")
-------------------------------------------------

To create a user, what you're really doing is inviting them. The users will need to verify their email address to activate their account, and will be able to specify their own password as part of that process.

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To invite a user:

Java

Python

Kotlin

Go

Raw REST API

| Invite a user | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` AtlanUser user = AtlanUser.creator(         "someone@somewhere.org", // (1)         "$member") // (2)     .build(); // (3) user.create(client); // (4)  ``` |

1. When inviting a user, you must specify at least their email address...
2. ...and the workspace role you want to give that user (one of `$guest`, `$member`, or `$admin`).
3. Like other builder patterns, you build the object to make it ready for creation.
4. To actually invite the user to Atlan, call the `create()` method on the built object. Note that this does not return any information. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Invite a user | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.model.user import AtlanUser from pyatlan.client.atlan import AtlanClient  client = AtlanClient() users = [     AtlanUser.create(         email="someone@somewhere.org",  # (1)         role_name="$member"  # (2)     ) ] client.user.create(users, return_info=False)  # (3)  ``` |

1. When inviting a user, you must specify at least their email address...
2. ...and the workspace role you want to give that user (one of `$guest`, `$member`, or `$admin`).
3. To invite the user to Atlan, simply call the `user.create()` method with the built object.
Note that if `return_info` is set to `True`, this will return a list
containing details of the created users; otherwise, it will return `None`.

| Invite a user | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val user = AtlanUser.creator(         "someone@somewhere.org", // (1)         "\$member") // (2)     .build() // (3) user.create(client) // (4)  ``` |

1. When inviting a user, you must specify at least their email address...
2. ...and the workspace role you want to give that user (one of `\$guest`, `\$member`, or `\$admin`).
3. Like other builder patterns, you build the object to make it ready for creation.
4. To actually invite the user to Atlan, call the `create()` method on the built object. Note that this does not return any information. Because this operation will persist the user in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Invite a user | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` users := []assets.AtlanUser{     {         Email:         "someone@somewhere.org", // (1)         WorkspaceRole: "$member", // (2)     }, } ctx.UserClient.CreateUsers(users, false) // (3)  ``` |

1. When inviting a user, you must specify at least their email address...
2. ...and the workspace role you want to give that user (one of `$guest`, `$member`, or `$admin`).
3. To invite the user to Atlan, simply call the `UserClient.CreateUsers()` method with the built object.
Note that if `returnInfo` is set to `True`, this will return a list
containing details of the created users; otherwise, it will return `None`.

| POST /api/service/users | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "users": [ // (1)     {       "email": "someone@somewhere.org", // (2)       "roleName": "$member", // (3)       "roleId": "be5f0df7-dab8-4107-8bf0-56ce7131623a" // (4)     }   ] }  ``` |

1. All user details must be wrapped in a `users` array, where each object in the array defines a single user.
2. You must provide a valid email address for each user. Atlan will send an invitation to this email address.
3. You must specify the role for the user, one of: `$admin`, `$member`, or `$guest`.
4. You must also provide the unique ID (GUID) of the role.

    You probably need to look this up first

    When using the raw API, you will need to lookup the role GUID yourself. You can `GET /api/service/roles`, and the GUID will be the `id` field in the response for each role.

---

2022\-12\-282025\-01\-31

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/create/) to provide us with more information. 

Back to top

[Previous Users and groups introduction](../) [Next Retrieve users and groups](../read/) 

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

