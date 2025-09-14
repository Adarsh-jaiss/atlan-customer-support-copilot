# Source URL
https://developer.atlan.com/snippets/users-groups/read/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/read/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to retrieve users and groups in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to retrieve users and groups in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/read.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Retrieving users and groups - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/read/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to retrieve users and groups in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/read.png
meta-twitter:title: Retrieving users and groups - Developer
meta-viewport: width=device-width,initial-scale=1
title: Retrieving users and groups - Developer
-->

[Skip to content](#retrieving-users-and-groups) Developer Retrieving users and groups Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/groups (GET)](../../../endpoints/#tag:apiservicegroups-get)[/api/service/groups/{guid}/members (GET)](../../../endpoints/#tag:apiservicegroupsguidmembers-get)[/api/service/users (GET)](../../../endpoints/#tag:apiserviceusers-get)[/api/service/users/{guid}/groups (GET)](../../../endpoints/#tag:apiserviceusersguidgroups-get)

Retrieving users and groups[¶](#retrieving-users-and-groups "Permanent link")
=============================================================================

You can retrieve users and groups through different helper methods.

Retrieve all groups[¶](#retrieve-all-groups "Permanent link")
-------------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to retrieve all groups in Atlan:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve all groups | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<AtlanGroup> groups = AtlanGroup.list(client); // (1) for (AtlanGroup group : groups) { // (2)     // Do something with the group... }  ``` |

1. You can retrieve all groups in Atlan using the `AtlanGroup.list()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the groups to do whatever you like with them.

| Retrieve all groups | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  groups = client.group.get_all( # (1)     limit=10,      offset=1,      sort="createdAt",      columns=["roles", "path"]) for group in groups:  # (2)     # Do something with the group...  ``` |

1. The `get_all()` method retrieves all groups defined in Atlan. Returns a GroupResponse object. Optional parameters include:

    * *(Optional)* **`limit`**: Specifies the maximum number of results to return. Defaults to `20`.
        * *(Optional)* **`offset`**: Indicates the starting point for the results when paging. Defaults to `0`.
        * *(Optional)* **`sort`**: Allows sorting by a specific property, such as `"createdAt"`.
        * *(Optional)* **`columns`**: Restricts the fields returned for each group, providing column projection support. Example: `["roles", "path"]`.
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Retrieve all groups | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val groups = AtlanGroup.list(client) // (1) for (group in groups) { // (2)     // Do something with the group... }  ``` |

1. You can retrieve all groups in Atlan using the `AtlanGroup.list()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the groups to do whatever you like with them.

| Retrieve all groups | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` groups, atlanErr := ctx.GroupClient.GetAll( // (1)     10,     1,     "createdAt", ) for _, group := range groups { // (2)     // Do Something with the group... }  ``` |

1. The `GetAll()` method retrieves all groups defined in Atlan. Optional parameters include:

    * *(Optional)* **`limit`**: Specifies the maximum number of results to return. Defaults to `20`.
        * *(Optional)* **`offset`**: Indicates the starting point for the results when paging. Defaults to `0`.
        * *(Optional)* **`sort`**: Allows sorting by a specific property, such as `"createdAt"`.
2. You can then iterate through the groups to do whatever you like with them.

| GET /api/service/v2/groups?sort\=createdAt\&imit\=10\&offset\=0\&columns\=path\&columns\=roles | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    Paging results

    Note that you have a `limit` to control page size, and an `offset` to control where to start a page.

Retrieve group by name[¶](#retrieve-group-by-name "Permanent link")
-------------------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a specific group in Atlan by its name:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve group by name | |
| --- | --- |
| ``` 1 2 ``` | ``` List<AtlanGroup> list = AtlanGroup.get(client, "Example"); // (1) AtlanGroup group = list.get(0); // (2)  ``` |

1. You can retrieve a specific group by its name using the `AtlanGroup.get()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Still returns a list

    Note that this still returns a list of groups, as it actually runs a `contains` search for the specified name. You could therefore use this same method to retrieve many groups that all follow the same naming convention, for example.
2. If you were expecting only a single group to match, however, you can still retrieve that from the list directly, of course.

| Retrieve group by name | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() groups = client.group.get_by_name("Example") # (1) group = groups.records[0] # (2)  ``` |

1. You can retrieve a specific group by its name using the `group.get_by_name()` method. Returns a GroupResponse object.

    Still returns a list

    Note that this still returns a list of groups, as it actually runs a `contains` search for the specified name. You could therefore use this same method to retrieve many groups that all follow the same naming convention, for example.
2. If you were expecting only a single group to match, however, you can still retrieve that from the list directly, of course.

| Retrieve group by name | |
| --- | --- |
| ``` 1 2 ``` | ``` val list = AtlanGroup.get(client, "Example") // (1) val group = list[0] // (2)  ``` |

1. You can retrieve a specific group by its name using the `AtlanGroup.get()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Still returns a list

    Note that this still returns a list of groups, as it actually runs a `contains` search for the specified name. You could therefore use this same method to retrieve many groups that all follow the same naming convention, for example.
2. If you were expecting only a single group to match, however, you can still retrieve that from the list directly, of course.

| Retrieve group by name | |
| --- | --- |
| ``` 1 2 ``` | ``` groups, atlanErr := ctx.GroupClient.GetByName("Example", 20, 0) // (1) group := groups[0] // (2)  ``` |

1. You can retrieve a specific group by its name using the `GroupClient.GetByName()` method. You can also set the limit (default is 20\) and offset (default is 0\).

    Still returns a list

    Note that this still returns a list of groups, as it actually runs a `contains` search for the specified name. You could therefore use this same method to retrieve many groups that all follow the same naming convention, for example.
2. If you were expecting only a single group to match, however, you can still retrieve that from the list directly, of course.

| GET /api/service/groups?filter\=%7B%22%24and%22%3A\[%7B%22alias%22%3A%7B%22%24ilike%22%3A%22%25Example%25%22%7D%7D]%7D | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it would be: `{"$and":[{"alias":{"$ilike":"%Example%"}}]}`

Retrieve all users[¶](#retrieve-all-users "Permanent link")
-----------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve all users in Atlan:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve all users | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<AtlanUser> users = AtlanUser.list(client); // (1) for (AtlanUser user : users) { // (2)     // Do something with the user... }  ``` |

1. You can retrieve all users in Atlan using the `AtlanUser.list()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the users to do whatever you like with them.

| Retrieve all users | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() users = client.user.get_all() # (1) for user in users: # (2)     # Do something with the user...  ``` |

1. You can retrieve all users in Atlan using the `get_all()` method under the `user` attribute of the AtlanClient instance. Returns a UserResponse object.
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Retrieve all users | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val users = AtlanUser.list(client) // (1) for (user in users) { // (2)     // Do something with the user... }  ``` |

1. You can retrieve all users in Atlan using the `AtlanUser.list()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the users to do whatever you like with them.

| Retrieve all users | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` users, atlanErr := ctx.UserClient.GetAll(20, 0, "") // (1) for _, user := range users { // (2)     // Do something with the user... }  ``` |

1. You can retrieve all users in Atlan using the `GetAll()` method under the `user` attribute of the AtlanClient instance. You can also set the limit (default is 20\), offset (default is 0\) and sort (default is by username).
2. You can then iterate through the users to do whatever you like with them.

| GET /api/service/users?sort\=username\&limit\=100\&offset\=0 | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    Paging results

    Note that you have a `limit` to control page size, and an `offset` to control where to start a page.

Retrieve user by username[¶](#retrieve-user-by-username "Permanent link")
-------------------------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a specific user in Atlan by their username:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve user by username | |
| --- | --- |
| ``` 1 ``` | ``` AtlanUser user = AtlanUser.getByUsername(client, "jdoe"); // (1)  ``` |

1. You can retrieve a specific user by their username using the `AtlanUser.getByUsername()` method. This runs an exact match for the provided username, so only returns a single user (if found). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve user by username | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() user = client.user.get_by_username("jdoe") # (1)  ``` |

1. You can retrieve a specific user by their username using the `user.get_by_username()` method. This runs an exact match for the provided username, so only returns a single user (if found).

| Retrieve user by username | |
| --- | --- |
| ``` 1 ``` | ``` val user = AtlanUser.getByUsername(client, "jdoe") // (1)  ``` |

1. You can retrieve a specific user by their username using the `AtlanUser.getByUsername()` method. This runs an exact match for the provided username, so only returns a single user (if found). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Retrieve user by username | |
| --- | --- |
| ``` 1 ``` | ``` users, atlanErr := ctx.UserClient.GetByUsername("jdoe") // (1)  ``` |

1. You can retrieve a specific user by their username using the `UserClient.GetByUsername()` method. This runs an exact match for the provided username, so only returns a single user (if found).

| GET /api/service/users?filter\=%7B%22username%22%3A%22jdoe%22%7D | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it would be: `{"username":"jdoe"}`

Retrieve user by email[¶](#retrieve-user-by-email "Permanent link")
-------------------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a specific user in Atlan by their email address:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve user by username | |
| --- | --- |
| ``` 1 2 ``` | ``` List<AtlanUser> users = AtlanUser.getByEmail(client, "@example.com"); // (1) AtlanUser user = users.get(0); // (2)  ``` |

1. You can retrieve a specific user by their email address using the `AtlanUser.getByEmail()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Still returns a list

    Note that this still returns a list of users, as it actually runs a `contains` search for the specified email address. You could therefore use this same method to retrieve many users that all have the same email domain, for example.
2. If you were expecting only a single user to match, however, you can still retrieve that from the list directly, of course.

| Retrieve user by username | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() users = client.user.get_by_email("@example.com") # (1) user = users.records[0] # (2)  ``` |

1. You can retrieve a specific user by their email address using the `user.get_by_email()` method. Returns a UserResponse object.

    Still returns a list

    Note that this still returns a list of users, as it actually runs a `contains` search for the specified email address. You could therefore use this same method to retrieve many users that all have the same email domain, for example.
2. If you were expecting only a single user to match, however, you can still retrieve that from the list directly, of course.

| Retrieve user by username | |
| --- | --- |
| ``` 1 2 ``` | ``` val users = AtlanUser.getByEmail(client, "@example.com") // (1) val user = users[0] // (2)  ``` |

1. You can retrieve a specific user by their email address using the `AtlanUser.getByEmail()` method. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Still returns a list

    Note that this still returns a list of users, as it actually runs a `contains` search for the specified email address. You could therefore use this same method to retrieve many users that all have the same email domain, for example.
2. If you were expecting only a single user to match, however, you can still retrieve that from the list directly, of course.

| Retrieve user by username | |
| --- | --- |
| ``` 1 2 ``` | ``` users, atlanErr := ctx.UserClient.GetByEmail("@example.com", 20, 0)  // (1) user := users[0] // (2)  ``` |

1. You can retrieve a specific user by their email address using the `UserClient.GetByEmail()` method.

    Still returns a list

    Note that this still returns a list of users, as it actually runs a `contains` search for the specified email address. You could therefore use this same method to retrieve many users that all have the same email domain, for example.
2. If you were expecting only a single user to match, however, you can still retrieve that from the list directly, of course.

| GET /api/service/users?filter\=%7B%22email%22%3A%7B%22%24ilike%22%3A%22%25%40example.com%25%22%7D%7D | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it would be: `{"email":{"$ilike":"%@example.com%"}}`

Retrieve multiple users[¶](#retrieve-multiple-users "Permanent link")
---------------------------------------------------------------------

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

### By usernames[¶](#by-usernames "Permanent link")

To retrieve multiple users in Atlan by their usernames:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve users by usernames | |
| --- | --- |
| ``` 1 2 3 ``` | ``` List<AtlanUser> users = client.users.getByUsernames(         List.of("john.doe", "jane.doe")     ); // (1)  ``` |

1. Retrieve users with specified usernames using the `users.getByUsernames()` method. This method performs an exact match for the provided username in the list.

| Retrieve users by usernames | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() users = client.user.get_by_usernames(['john.doe', 'jane.doe']) # (1) for user in users: # (2)     # Do something with the user...  ``` |

1. Retrieve users with specified usernames using the `user.get_by_usernames()` method.
This method performs an exact match for the provided username in the list. Returns a UserResponse object.
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Retrieve users by usernames | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val users = client.users.getByUsernames(         listOf("john.doe", "jane.doe")     ); // (1)  ``` |

1. Retrieve users with specified usernames using the `users.getByUsernames()` method. This method performs an exact match for the provided username in the list.

| Retrieve users by usernames | |
| --- | --- |
| ``` 1 ``` | ``` users, atlanErr := ctx.UserClient.GetByUsernames([]string{"john.doe", "jane.doe"}, 20, 0) // (1)  ``` |

1. Retrieve users with specified usernames using the `UserClient.GetByUsernames()` method.
This method performs an exact match for the provided username in the list.

| GET /api/service/users?filter\={%22username%22:{%22$in%22:\[%22john.doe%22,%22jane.doe%22]}} | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it
        would be: `{"username":{"$in":["john.doe","jane.doe"]}}`

### By emails[¶](#by-emails "Permanent link")

[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")

To retrieve multiple users in Atlan by their emails:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve users by emails | |
| --- | --- |
| ``` 1 2 3 ``` | ``` List<AtlanUser> users = client.users.getByEmails(         List.of("john@atlan.com", "jane@atlan.com")     ); // (1)  ``` |

1. Retrieve users with specified emails using the `users.getByEmails()` method. This method performs an exact match for the provided email in the list.

| Retrieve users by emails | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() users = client.user.get_by_emails(['john@atlan.com', 'jane@atlan.com']) # (1) for user in users: # (2)     # Do something with the user...  ``` |

1. Retrieve users with specified emails using the `user.get_by_emails()` method.
This method performs an exact match for the provided email in the list. Returns a UserResponse object.
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Retrieve users by emails | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val users = client.users.getByEmails(         listOf("john@atlan.com", "jane@atlan.com")     ); // (1)  ``` |

1. Retrieve users with specified emails using the `users.getByEmails()` method. This method performs an exact match for the provided email in the list.

| Retrieve users by emails | |
| --- | --- |
| ``` 1 ``` | ``` users, atlanErr := ctx.UserClient.GetByEmails([]string{"john@atlan.com", "jane@atlan.com"}, 20, 0) // (1)  ``` |

1. Retrieve users with specified emails using the `UserClient.GetByEmails()` method.
This method performs an exact match for the provided email in the list.

| GET /api/service/users?filter\={%22email%22:{%22$in%22:\[%22john@atlan.com%22,%20%22jane@atlan.com%22]}} | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it
        would be: `{"email":{"$in":["john@atlan.com","jane@atlan.com"]}}`

Retrieve user group membership[¶](#retrieve-user-group-membership "Permanent link")
-----------------------------------------------------------------------------------

### Retrieve groups for a user[¶](#retrieve-groups-for-a-user "Permanent link")

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[2\.0\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.0.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve the groups a user is a member of:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve groups for a user | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` GroupResponse response = user.fetchGroups(client); // (1) for (AtlanGroup group : response) { // (2)     // Do something with each group... }  ``` |

1. You can retrieve the groups the user is a member of using the `fetchGroups()` method, after you have an `AtlanUser` object (for example, by first retrieving it). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the groups the user is a member of.

| Retrieve groups for a user | |
| --- | --- |
| ```  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.user.get_groups(user.id) # (1) for group in response: # (2)     # Do something with each group...  ``` |

1. You can retrieve the groups the user is a member of using the `user.get_groups()` method, by providing the GUID of the user.
2. You can then iterate through the groups the user is a member of.

| Retrieve groups for a user | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` val response = user.fetchGroups(client) // (1) for (group in response) { // (2)     // Do something with each group... }  ``` |

1. You can retrieve the groups the user is a member of using the `fetchGroups()` method, after you have an `AtlanUser` object (for example, by first retrieving it). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the groups the user is a member of.

| Retrieve groups for a user | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` response, atlanErr := ctx.UserClient.GetGroups(user.ID, nil) // (1) for _, group := range response { // (2)     // Do something with each group... }  ``` |

1. You can retrieve the groups the user is a member of using the `UserClient.GetGroups()` method, by providing the GUID of the user.
2. You can then iterate through the groups the user is a member of.

| GET /api/service/users/f06122f4\-7279\-4e42\-b9e0\-46f9b470e659/groups | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    User ID in the URL

    Note that you must provide the unique ID (GUID) of the user to retrieve its associated groups.

### Retrieve users in a group[¶](#retrieve-users-in-a-group "Permanent link")

[0\.0\.13](https://github.com/atlanhq/atlan-go/releases/tag/0.0.13 "Minimum version")[2\.0\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.0.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve the users that are members of a group:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve users in a group | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` UserResponse response = group.fetchUsers(client); // (1) for (AtlanUser user : response) { // (2)     // Do something with each user... }  ``` |

1. You can retrieve the users a group has as members using the `fetchUsers()` method, after you have an `AtlanGroup` object (for example, by first retrieving it). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the users that are members of the group.

| Retrieve users in a group | |
| --- | --- |
| ```  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.group.get_members(group.id) # (1) for user in response: # (2)     # Do something with each user...  ``` |

1. You can retrieve the users a group has as members using the `group.get_members()` method, by providing the GUID of the group.
2. You can then iterate through the users that are members of the group.

| Retrieve users in a group | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` val response = group.fetchUsers(client) // (1) for (user in response) { // (2)     // Do something with each user... }  ``` |

1. You can retrieve the users a group has as members using the `fetchUsers()` method, after you have an `AtlanGroup` object (for example, by first retrieving it). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through the users that are members of the group.

| Retrieve users in a group | |
| --- | --- |
| ``` 3 4 5 6 ``` | ``` response, atlanErr := ctx.GroupClient.GetMembers(group.ID, nil) for _, user := range response {     // Do something with each user }  ``` |

1. You can retrieve the users a group has as members using the `GroupClient.GetMembers()` method, by providing the GUID of the group.
2. You can then iterate through the users that are members of the group.

| GET /api/service/groups/e79cb8eb\-2bb6\-4821\-914c\-f8dfd21fedc7/members | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    Group ID in the URL

    Note that you must provide the unique ID (GUID) of the group to retrieve its associated members.

---

2022\-12\-282025\-05\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/read/) to provide us with more information. 

Back to top

[Previous Create users and groups](../create/) [Next Update users and groups](../update/) 

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

