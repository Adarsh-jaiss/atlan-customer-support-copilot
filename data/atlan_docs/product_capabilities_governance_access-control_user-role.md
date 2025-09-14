# Source URL
https://docs.atlan.com/product/capabilities/governance/access-control/user-role

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/access-control/user-role
link-alternate: https://docs.atlan.com/product/capabilities/governance/access-control/user-role
meta-description: Complete configuration reference for the User Role Sync app properties and settings.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete configuration reference for the User Role Sync app properties and settings.
meta-og-locale: en
meta-og-title: User Role Sync | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/access-control/user-role
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: User Role Sync | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

User role sync App
==================

The User Role Sync app enables automated role and sub\-role assignment in Atlan by mapping user groups to roles like Admin, Member, or Guest. It supports both exact and pattern\-based matching and helps scale access control by reducing manual configuration.

This reference provides complete configuration details for the User Role Sync app. Use this page to look up specific property definitions, valid values, and configuration formats when setting up automated role assignments based on group memberships.

### Access[â](#access "Direct link to Access")

The User Role Sync app isn't enabled by default. To use this app, [**contact Atlan support**](/support/submit-request) and request it be added to your tenant.

### Credentials[â](#credentials "Direct link to Credentials")

This section defines the fields required for workflow authentication and identification.

#### Workflow name[â](#workflow-name "Direct link to Workflow name")

Specifies a unique and descriptive name to identify the workflow configuration in the Atlan interface. This name appears in the workflow list and helps distinguish it from other workflows, especially in environments with multiple automated role management setups.

*Example:*

```
atlan-prod-user-role-sync  

```

#### Atlan API token[â](#atlan-api-token "Direct link to Atlan API token")

Specifies the API token used to authenticate this workflow with your Atlan tenant. [Generate a personal API](/get-started/references/api-authentication) token from your user profile in Atlan. The token must belong to an admin user with permission to view groups and manage user roles. You can click **Test** authentication in the workflow UI to validate the token before proceeding.

#### Selection mode[â](#selection-mode "Direct link to Selection mode")

Determines how group names are matched to roles during role assignment. Use this setting to choose whether to provide exact group names or define a pattern that matches multiple group names.

The value selected here affects how group inputs are interpreted for all role and sub\-role mappings in the workflow.

* **List**: Use this option when you have a known set of group names. Each group must be entered explicitly.

    *Example:* To assign the admin role to the data\-admins and analytics\-leads groups, enter:

```
data-admins,analytics-leads  

```
* **Regex**: Use this option when group names follow a naming pattern. All groups matching the provided regular expression are included.

    *Example:* To assign the member role to all groups that start with `team-`, use:

```
^team-.*  

```
    *Example:* To target groups ending in `-admins` (for example, `data-admins`, `cloud-admins`, `security-admins`), use:

```
.*-admins$  

```
    *Example:* To include only groups with exactly three characters followed by `-ops` (for example, `eng-ops`, `dev-ops`), use:

```
^[a-z]{3}-ops$  

```

#### Role hierarchy[â](#role-hierarchy "Direct link to Role hierarchy")

Controls how role precedence is resolved when a user belongs to multiple groups that are mapped to different roles. The selected hierarchy determines which role is ultimately assigned based on predefined priority logic.

This setting is especially useful in large organizations where users may be part of multiple functional teams with overlapping access needs.

*Available options:*

* **Guest â Member â Admin** (default)  
Assigns the most restrictive role in cases of conflict. Recommended when security and access limitation are the primary concerns.  
*Example*: A user belongs to both `guests` (mapped to guest role) and `data-admins` (mapped to admin role). The assigned role is `guest`.
* **Guest â Admin â Member** 
Prioritizes the `guest` role first, followed by `admin`, then `member`. This ensures that users in temporary, external, or read\-only groups don't receive unintended contributor access.  
*Example*: A user belongs to `guests` (mapped to guest role), `data-admins` (mapped to admin role), and `reporting-team` (mapped to member role). The assigned role is `guest`.
* **Member â Guest â Admin** 
Assigns the `member` role over others. Use this when contributor\-level access must take priority, even if the user is also in limited\-access or admin groups.  
*Example*: A user belongs to `team-product` (mapped to member role) and `guests` (mapped to guest role). The assigned role is `member`.
* **Member â Admin â Guest** 
Prefers the `member` role first, then `admin`, followed by `guest`. This is useful when users who actively work with data must always retain contributor access, even if they're admins or in guest groups.  
*Example*: A user belongs to `finance-team` (mapped to member role), `data-admins` (mapped to admin role), and `contractors` (mapped to guest role). The assigned role is `member`.
* **Admin â Guest â Member** 
Assigns the `admin` role when present. Suitable for teams where users with admin responsibilities must retain their elevated access regardless of membership in guest or contributor groups.  
*Example*: A user belongs to `data-admins` (mapped to admin role), `guests` (mapped to guest role), and `team-marketing` (mapped to member role). The assigned role is `admin`.
* **Admin â Member â Guest** 
The most permissive hierarchy. Always assigns the `admin` role if available. Use this when users who have administrative responsibilities must never be downgraded, even if they belong to other groups.  
*Example*: A user belongs to `data-admins` (mapped to admin role), `team-analytics` (mapped to member role), and `viewers` (mapped to guest role). The assigned role is `admin`.

### Admin[â](#admin "Direct link to Admin")

This section defines how users are assigned the admin role in Atlan. The admin role is intended for users who require elevated privileges to manage system configurations, workflows, users, and platform\-level settings.

#### Admin group[â](#admin-group "Direct link to Admin group")

Specifies the groups whose members are assigned the `admin` role in Atlan. The values for this field depend on the selection made in [**Selection mode**](#selection-mode).

* If **List** mode is selected: Provide exact, comma\-separated names of Atlan groups.

    *Example*:

```
data-admins,analytics-leads  

```
* If **Regex** mode is selected: Provide a valid regular expression to match group names dynamically.

    *Example*:

```
.*admins  

```

Users who belong to any of the specified groups are assigned the `admin` role, subject to the logic defined in the [**Role hierarchy**](#role-hierarchy) setting.

#### Admin sub\-role option[â](#admin-sub-role-option "Direct link to Admin sub-role option")

Determines how sub\-roles under the `admin` role are assigned to users. This property supports two modes:

* **Static**: Choose this when sub\-roles and their corresponding groups are predefined and don't change often.

    You can configure fixed sub\-roles such as `workflow-admin` or `governance-admin` and assign them to specific groups. Use the **Admin sub\-role hierarchy** field to define precedence.
* **Dynamic**: Use this mode when sub\-roles are more varied or need to be configured on a per\-workflow basis. You can define up to five sub\-roles and map each one to one or more groups.

    The order in which the sub\-roles are configured determines their precedence (first \= highest). Choose the mode that best aligns with your organization's administrative structure.

#### Workflow admin (sub\-role) group[â](#workflow-admin-sub-role-group "Direct link to Workflow admin (sub-role) group")

Defines the Atlan groups whose members can be assigned the `workflow-admin` sub\-role. This field is available only when **Static** is selected under the **Admin Sub Role** option.

The expected input depends on the configured [**Selection mode**](#selection-mode):

* If **List** mode is selected: Enter one or more exact group names, separated by commas.

:   *Example:*

```
engineering-admins,project-ops-leads  

```

* If **Regex** mode is selected: Provide a valid regular expression pattern to match group names dynamically.

:   *Example:*

```
.*workflow-admins  

```

#### Governance admin (sub role) group[â](#governance-admin-sub-role-group "Direct link to Governance admin (sub role) group")

Specifies the groups whose members can be assigned the governance\-admin sub\-role. This field appears only when **Static** is selected for the **Admin sub\-role** option.

* If **List** mode is selected: Enter one or more exact group names, separated by commas.

:   *Example:*

```
data-governance-leads,compliance-admins  

```

* If **Regex** mode is selected: Enter a regular expression to dynamically match group names.

:   *Example:*

```
governance-.*  

```

#### Admin sub role hierarchy[â](#admin-sub-role-hierarchy "Direct link to Admin sub role hierarchy")

Sets the precedence between admin sub\-roles when users are mapped to multiple sub\-role groups. This field is displayed only when **Static** is selected for the **Admin sub\-role** option.

List the sub\-role names in the desired order of priority. The first sub\-role listed is considered the highest in precedence.

#### Admin sub\-role 1\-5[â](#admin-sub-role-1-5 "Direct link to Admin sub-role 1-5")

Available only when Dynamic is selected for the Admin sub\-role option. These fields enable you to define up to five custom admin sub\-roles and map them to corresponding Atlan user groups.

Each sub\-role entry contains:

* **Sub\-role name**: A unique label to identify the custom admin sub\-role (for example, `data-platform-admin`).
* **Groups**: One or more group names to which this sub\-role are applied.

Sub\-role precedence is determined by the order in which the sub\-roles are configured. The first sub\-role listed is considered the highest in priority.

*Examples:*

* Sub\-role 1:

:   * **Sub\-role name:** `data-governance-lead`
* **Groups**: `governance-team`, `data-leads`

* Sub\-role 2:

:   * **Sub\-role name:** `platform-admin`
* **Groups**: `infra-core`, `platform-eng`

### Member[â](#member "Direct link to Member")

This section defines how users are assigned the member role in Atlan. The member role is intended for users who contribute to data work, such as exploring metadata, managing glossaries, or running queries, without requiring administrative privileges.

#### Member group[â](#member-group "Direct link to Member group")

Defines the group or groups whose members can be assigned the member role in Atlan. Depending on the [**Selection mode**](#selection-mode), group names can be matched directly or via pattern.

* In **List** mode: Enter exact, comma\-separated group names.

:   *Example:*

```
data-analysts,reporting-team  

```

* In **Regex** mode: Enter a valid regular expression to match one or more group names dynamically.

:   *Example:*

```
.*-members   

```

If a user belongs to multiple groups with different role assignments, the final role is determined based on the [Role hierarchy](/product/capabilities/governance/access-control/user-role#role-hierarchy) setting.

### Guest[â](#guest "Direct link to Guest")

This section defines how users are assigned the guest role in Atlan. The guest role is suited for individuals who require read\-only access or limited interaction with metadata, such as external users, contractors, or stakeholders.

#### Guest role[â](#guest-role "Direct link to Guest role")

Specifies the group or groups whose members can be assigned the guest role in Atlan. The input format depends on the [**Selection mode**](#selection-mode):

* In **List** mode: Provide exact, comma\-separated group names.

:   *Example:*

```
viewers,contractors  

```

* In **Regex** mode: Provide a valid regular expression to dynamically match group names.

:   *Example:*

```
.*-guests   

```

If users belong to multiple groups, the final assigned role depends on the configuration in the Role hierarchy property.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Automatically assign roles based on group names](/product/capabilities/governance/access-control/auto-assign-roles-by-group)
* [Create groups](/product/capabilities/governance/users-and-groups/how-tos/create-groups)
**Tags:*** [access control](/tags/access-control)
* [roles](/tags/roles)
* [user groups](/tags/user-groups)
* [automation](/tags/automation)
* [app](/tags/app)
* [governance](/tags/governance)
* [reference](/tags/reference)

[PreviousWhat are the sidebar tabs?](/product/capabilities/governance/access-control/concepts/what-are-the-sidebar-tabs)

Copyright Â© 2025 Atlan Pte. Ltd.

