# Source URL
https://developer.atlan.com/snippets/access/events/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/access/events/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to retrieve and filter access-related events.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to retrieve and filter access-related events.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/access/events/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Retrieve access events - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/access/events/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to retrieve and filter access-related events.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/access/events/index.png
meta-twitter:title: Retrieve access events - Developer
meta-viewport: width=device-width,initial-scale=1
title: Retrieve access events - Developer
-->

[Skip to content](#retrieve-access-events) Developer Retrieve access events Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/service/events/login (GET)](../../../endpoints/#tag:apiserviceeventslogin-get)[/api/service/events/main (GET)](../../../endpoints/#tag:apiserviceeventsmain-get)

Retrieve access events[¶](#retrieve-access-events "Permanent link")
===================================================================

All events[¶](#all-events "Permanent link")
-------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can retrieve and filter all access\-related events using:

Java

Python

Kotlin

Raw REST API

| Filter all events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` client // (1)     .logs // (2)     .getEvents(KeycloakEventRequest.builder() // (3)         .dateFrom("2023-01-01") // (4)         .dateTo("2023-01-31") // (5)         .type(KeycloakEventType.LOGIN) // (6)         .type(KeycloakEventType.LOGOUT)         .build())     .stream() // (7)     .limit(1000) // (8)     .forEach(event -> { // (9)         // Do something with each event     });  ``` |

1. From a client...
2. ... access the `logs` endpoints.
3. The `getEvents()` method allows you to filter across all access events that are logged.
4. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
5. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
6. (Optional) You can filter by one or more types of events, for example focusing only on logins and logouts.
7. Like other paginated resources, you can iterate or stream the results. The access events will be lazily\-fetched from Atlan.
8. When streaming, you can apply any additional constraints such as limiting or further filtering.
9. And of course, you can then actually do something with each event.

| Filter all events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.model.enums import KeycloakEventType from pyatlan.model.keycloak_events import KeycloakEventRequest from pyatlan.client.atlan import AtlanClient  request = KeycloakEventRequest( # (1)     date_from="2023-01-01", # (2)     date_to="2023-01-31", # (3)     types=[KeycloakEventType.LOGIN, KeycloakEventType.LOGOUT] # (4) ) client = AtlanClient() events = client.admin.get_keycloak_events(request) # (5) for event in events: # (6)     # Do something with each event  ``` |

1. Begin by defining your filter criteria in a `KeycloakEventRequest`.
2. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
3. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
4. (Optional) You can filter by one or more types of events, for example focusing only on logins and logouts.
5. From a client, call the `admin.get_keycloak_events()` method with your requested filters.
6. Like other paginated resources, you can iterate directly through the results. The access events will be lazily\-fetched from Atlan.

| Filter all events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` client // (1)     .logs // (2)     .getEvents(KeycloakEventRequest.builder() // (3)         .dateFrom("2023-01-01") // (4)         .dateTo("2023-01-31") // (5)         .type(KeycloakEventType.LOGIN) // (6)         .type(KeycloakEventType.LOGOUT)         .build())     .stream() // (7)     .limit(1000) // (8)     .forEach { // (9)         // Do something with each event     }  ``` |

1. From a client...
2. ... access the `logs` endpoints.
3. The `getEvents()` method allows you to filter across all access events that are logged.
4. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
5. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
6. (Optional) You can filter by one or more types of events, for example focusing only on logins and logouts.
7. Like other paginated resources, you can iterate or stream the results. The access events will be lazily\-fetched from Atlan.
8. When streaming, you can apply any additional constraints such as limiting or further filtering.
9. And of course, you can then actually do something with each event.

| GET /api/service/events/login?dateFrom\=2023\-01\-01\&dateTo\=2023\-01\-31\&type\=LOGIN\&type\=LOGOUT | |
| --- | --- |
| ``` 1 ``` | ``` // (1)!  ``` |

1. All parameters for filtering the logs are query parameters sent in the URL itself.

**Common event types**

Some of the common event types you might want to filter on include:

| Type | Meaning |
| --- | --- |
| `LOGIN` | User has logged in. |
| `LOGOUT` | User has logged out. |
| `REGISTER` | User has registered. |
| `UPDATE_EMAIL` | Email address for an account has changed. |
| `UPDATE_PASSWORD` | Password for an account has changed. |
| `SEND_VERIFY_EMAIL` | Verification email has been sent. |
| `VERIFY_EMAIL` | Email address for an account has been verified. |
| `SEND_RESET_PASSWORD` | Password reset email has been sent. |
| `RESET_PASSWORD` | Password for the account has been reset. |
| `CODE_TO_TOKEN` | Application / client has exchanged a code for a token. |
| `REFRESH_TOKEN` | Application / client has refreshed a token. |

Admin events[¶](#admin-events "Permanent link")
-----------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can retrieve and filter administrative events using:

Java

Python

Kotlin

Raw REST API

| Filter admin events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` client // (1)     .logs // (2)     .getAdminEvents(AdminEventRequest.builder() // (3)         .dateFrom("2023-01-01") // (4)         .dateTo("2023-01-31") // (5)         .operationType(AdminOperationType.CREATE) // (6)         .operationType(AdminOperationType.UPDATE)         .resourceType(AdminResourceType.REALM_ROLE) // (7)         .resourceType(AdminResourceType.REALM_ROLE_MAPPING)         .resourcePath("roles/connection_admins_e71551e0-7f59-44bb-989c-e434f2e5bcae") // (8)         .build())     .stream() // (9)     .limit(1000) // (10)     .forEach(event -> { // (11)         // Do something with each event     });  ``` |

1. From a client...
2. ... access the `logs` endpoints.
3. The `getAdminEvents()` method allows you to filter across all admin events that are logged.
4. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
5. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
6. (Optional) You can filter by one or more operations, for example focusing only on creation and updates.
7. (Optional) You can filter by one or more resource types, for example only new roles or mappings to roles.
8. (Optional) You can filter by a specific resource, such as the role associated with all admins for a specific connection in Atlan.
9. Like other paginated resources, you can iterate or stream the results. The access events will be lazily\-fetched from Atlan.
10. When streaming, you can apply any additional constraints such as limiting or further filtering.
11. And of course, you can then actually do something with each event.

| Filter admin events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.model.enums import AdminOperationType, AdminResourceType from pyatlan.model.keycloak_events import AdminEventRequest from pyatlan.client.atlan import AtlanClient  request = AdminEventRequest( # (1)     date_from="2023-01-01", # (2)     date_to="2023-01-31", # (3)     operation_types=[AdminOperationType.CREATE, AdminOperationType.UPDATE], # (4)     resource_types=[AdminResourceType.REALM_ROLE, AdminResourceType.REALM_ROLE_MAPPING], # (5)     resource_path="roles/connection_admins_e71551e0-7f59-44bb-989c-e434f2e5bcae" # (6) ) client = AtlanClient() events = client.admin.get_admin_events(request) # (7) for event in events: # (8)     # Do something with each event  ``` |

1. Begin by defining your filter criteria in a `AdminEventRequest`.
2. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
3. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
4. (Optional) You can filter by one or more operations, for example focusing only on creation and updates.
5. (Optional) You can filter by one or more resource types, for example only new roles or mappings to roles.
6. (Optional) You can filter by a specific resource, such as the role associated with all admins for a specific connection in Atlan.
7. From a client, call the `admin.get_admin_events()` method with your requested filters.
8. Like other paginated resources, you can iterate directly through the results. The access events will be lazily\-fetched from Atlan.

| Filter admin events | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` client // (1)     .logs // (2)     .getAdminEvents(AdminEventRequest.builder() // (3)         .dateFrom("2023-01-01") // (4)         .dateTo("2023-01-31") // (5)         .operationType(AdminOperationType.CREATE) // (6)         .operationType(AdminOperationType.UPDATE)         .resourceType(AdminResourceType.REALM_ROLE) // (7)         .resourceType(AdminResourceType.REALM_ROLE_MAPPING)         .resourcePath("roles/connection_admins_e71551e0-7f59-44bb-989c-e434f2e5bcae") // (8)         .build())     .stream() // (9)     .limit(1000) // (10)     .forEach { // (11)         // Do something with each event     }  ``` |

1. From a client...
2. ... access the `logs` endpoints.
3. The `getAdminEvents()` method allows you to filter across all admin events that are logged.
4. (Optional) You can filter by events only back to a particular point in time (using the format `yyyy-MM-dd`).
5. (Optional) You can filter by events only up to a particular point in time (using the format `yyyy-MM-dd`).
6. (Optional) You can filter by one or more operations, for example focusing only on creation and updates.
7. (Optional) You can filter by one or more resource types, for example only new roles or mappings to roles.
8. (Optional) You can filter by a specific resource, such as the role associated with all admins for a specific connection in Atlan.
9. Like other paginated resources, you can iterate or stream the results. The access events will be lazily\-fetched from Atlan.
10. When streaming, you can apply any additional constraints such as limiting or further filtering.
11. And of course, you can then actually do something with each event.

| GET /api/service/events/main?dateFrom\=2023\-01\-01\&dateTo\=2023\-01\-31\&operationTypes\=CREATE\&operationTypes\=UPDATE\&resourceTypes\=REALM\_ROLE\&resourceTypes\=REALM\_ROLE\_MAPPING\&resourcePath\=roles%2Fconnection\_admins\_e71551e0\-7f59\-44bb\-989c\-e434f2e5bcae | |
| --- | --- |
| ``` 1 ``` | ``` // (1)!  ``` |

1. All parameters for filtering the logs are query parameters sent in the URL itself. (Note that the values should be URL\-encoded.)

**Common resource types**

Some of the common resource types you might want to filter on include:

| Type | Meaning |
| --- | --- |
| `USER` | An individual user. |
| `GROUP` | Mechanism to cluster together multiple users. |
| `GROUP_MEMBERSHIP` | Association between a user and a group. |
| `REALM_ROLE` | Object that controls access to potentially multiple resources. |
| `REALM_ROLE_MAPPING` | Mapping between user(s) and access control objects (roles). |

---

2023\-07\-142025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/access/events/) to provide us with more information. 

Back to top

[Previous Manage policies](../policies/) [Next API token management](../tokens/) 

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

