# Source URL
https://docs.atlan.com/product/capabilities/governance/access-control/auto-assign-roles-by-group

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/access-control/auto-assign-roles-by-group
link-alternate: https://docs.atlan.com/product/capabilities/governance/access-control/auto-assign-roles-by-group
meta-description: Learn how to automatically assign roles and sub-roles to users in Atlan based on their group memberships using the group-role sync app.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn how to automatically assign roles and sub-roles to users in Atlan based on their group memberships using the group-role sync app.
meta-og-locale: en
meta-og-title: Automatically assign roles based on group names | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/access-control/auto-assign-roles-by-group
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Automatically assign roles based on group names | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Automatically assign roles based on group names App
===================================================

You can automatically assign roles in Atlan based on user group memberships. This helps streamline onboarding, enforce consistent access control, and reduce manual effort by mapping groups to roles such as Admin, Member, or Guest.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Access to the User Role Sync app. If you don't have access, [contact Atlan support](/support/submit-request) or your Atlan customer team to request it.
* Admin permissions in Atlan to configure workflows and assign roles. Learn more about [admin roles](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles).
* A [personal API token](/get-started/references/api-authentication) generated from your Atlan profile for workflow authentication.
* All required user groups created and available in Atlan, as described in [Create groups](/product/capabilities/governance/users-and-groups/how-tos/create-groups).

Setup workflow[â](#setup-workflow "Direct link to Setup workflow")
--------------------------------------------------------------------

1. In your Atlan workspace, go to the homepage and click **New workflow** in the top navigation bar.
2. Search for **User Role Sync**, and then select **Set up workflow**.
3. In the **Workflow name** field, enter a descriptive name that clearly identifies the purpose of this workflow.
4. In the **Authentication** section, provide your [API token](/get-started/references/api-authentication). This token is required for the workflow to authenticate with Atlan and perform user role updates.

Define role mapping rules[â](#define-role-mapping-rules "Direct link to Define role mapping rules")
-----------------------------------------------------------------------------------------------------

After authentication is configured and tested, set up how group memberships correspond to specific roles in Atlan. This configuration also determines the order of priority when a user belongs to multiple groups and can optionally include sub\-role assignments for more granular control.

1. In the **Selection** mode, select **List** to define a fixed set of Atlan group names that are explicitly mapped to roles, such as assigning the admin role to `data-admins` and `data-leads` (both part of the existing Atlan groups in your workspace).

    If you need to match multiple groups that follow a naming pattern, such as all groups ending in `-admins`, use **Regex** mode instead. For more details, see [Selection mode](/product/capabilities/governance/access-control/user-role#selection-mode).
2. In the **Role hierarchy**, choose how Atlan resolves conflicts when a user belongs to multiple groups mapped to different roles. You can select the default **Guest â Member â Admin**, which prioritizes the most restrictive role.

    If a user belongs to both the `guests` and `data-admins` groups, the `guest` role is assigned. To view other hierarchy options, see [Role hierarchy options](/product/capabilities/governance/access-control/user-role#role-hierarchy).
3. In the **Admin group** field, enter a comma\-separated list of group names whose members are assigned the `admin` role. Use names that are identical to the display names of the groups in Atlan.

    ```
    data-admins,data-leads

    ```
        To match group names using patterns, see [Regex matching](/product/capabilities/governance/access-control/user-role#admin-group).
4. To assign more granular responsibilities under the admin role, select **Static** under the **Admin Sub Role** Option. This assigns fixed sub\-roles such as `workflow-admin` and `governance-admin` to specific groups and sets their order of precedence.
5. In the **Workflow Admin (sub\-role) Group** field, enter the group names whose members receive the `workflow-admin` sub\-role. Use comma\-separated values, such as `engineering-ops-admins`.
6. In the **Governance Admin (sub\-role) Group** field, enter the group names whose members receive the `governance-admin` sub\-role. Use comma\-separated values, such as `data-governance-leads`.
7. In the **Admin Sub Role** hierarchy field, define the order of precedence between `sub-roles`. If a user qualifies for multiple sub\-roles, the one listed first is assigned.

    ```
    workflow-admin,governance-admin

    ```
        If you need to define flexible, custom admin sub\-roles instead of fixed ones, see [Configure dynamic sub\-roles](/product/capabilities/governance/access-control/user-role#admin-sub-role-option).
8. In the **Member group** field, add group names to assign the `member` role for users who work with metadata, glossaries, or queries but donât need admin access.
9. In the **Guest group** field, enter group names for users who only need limited or read\-only access to Atlan, such as `viewers` or `contractors`.
10. **Schedule and run** the workflow. Run the workflow manually or set a recurring schedule to keep role assignments up to date.

Need help?[â](#need-help "Direct link to Need help?")
-------------------------------------------------------

If you have any issues related to configuring the app, contact [Atlan support](https://docs.atlan.com/support/submit-request).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [User Role Sync: Reference](/product/capabilities/governance/access-control/user-role): Detailed explanation of each configuration property, including valid values, examples, and behavior.
**Tags:*** [access control](/tags/access-control)
* [roles](/tags/roles)
* [user groups](/tags/user-groups)
* [automation](/tags/automation)
* [app](/tags/app)
* [governance](/tags/governance)

[PreviousDelegate administration](/product/capabilities/governance/users-and-groups/how-tos/delegate-administration)[NextWhat are personas?](/product/capabilities/governance/access-control/concepts/what-are-personas)

Copyright Â© 2025 Atlan Pte. Ltd.

