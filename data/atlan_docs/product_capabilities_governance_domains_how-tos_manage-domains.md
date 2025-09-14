# Source URL
https://docs.atlan.com/product/capabilities/governance/domains/how-tos/manage-domains

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/manage-domains
link-alternate: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/manage-domains
meta-description: Most importantly, domains help promote shared ownership and domain-level governance in your organization.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Most importantly, domains help promote shared ownership and domain-level governance in your organization.
meta-og-locale: en
meta-og-title: Manage domains | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/manage-domains
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage domains | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage domains
==============

â**Available via the Data Marketplace package**

Who can do this?You must be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) in Atlan to create and manage domains. Any non\-guest users must be granted the [update metadata permission](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) to be able to add assets to a domain. [Domain policies](/product/capabilities/data-products/how-tos/create-domain-policies) currently don't have any impact outside the [products module](/product/capabilities/data-products/concepts/what-are-data-products).

Domains provide a logical way of mapping and organizing assets within a specific domain or business entity. For example, you can create domains for the following:

* Functions such as finance, sales, and human resources
* Business units or brands for different products and services
* Geographic regions of operation
* Environments such as development and production

Most importantly, domains help promote shared ownership and domain\-level governance in your organization.

To create a domain, complete the following steps.

[https://demo.arcade.software/W90otOHZMb7bpwudrQoa?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/W90otOHZMb7bpwudrQoa?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Add a domain[â](#add-a-domain "Direct link to Add a domain")
--------------------------------------------------------------

To add a domain:

1. From the left menu of any screen in Atlan, click **Governance**.
2. Under the *Governance* heading of the *Governance center*, click **Domains**. If you have [enabled the products module](/product/capabilities/data-products/concepts/what-are-data-products), refer to [How to create data domains](/product/capabilities/data-products/how-tos/create-data-domains) instead.
3. On the *Domains* page, under *All domains*, click **Create domain**.
4. For *Overview*, enter basic details for your domain:
    1. (Optional) For *Cover*, click the **Change** button to select an image from the gallery or upload an image of your own. Click **Reposition** to drag and reposition the cover image and then click **Save position** to save your preferences.
    2. (Optional) For *Theme*, choose from the available color options to add a theme to your domain.
    3. For *Name*, enter a meaningful name for your domain \- for example, `Product Operations`.
    4. (Optional) Click the domain icon to change the icon for your domain.
    5. (Optional) For *Description*, enter a description for your domain.
    6. For *Owners*, assign additional users or groups as domain owner(s).
5. In the top right of the screen, click the **Create** button to complete setup.

Congrats on creating a domain in Atlan! ð

Your users can now [add assets to your domain](/product/capabilities/governance/domains/how-tos/organize-assets).

(Optional) Add a subdomain[â](#optional-add-a-subdomain "Direct link to (Optional) Add a subdomain")
------------------------------------------------------------------------------------------------------

dangerYou will first need to create a domain before you can add subdomains.

Subdomains help you logically segment your domains according to business needs.

To add a subdomain:

1. From the left menu of any screen in Atlan, click **Governance**.
2. Under the *Governance* heading of the *Governance center*, click **Domains**. If you have [enabled the products module](/product/capabilities/data-products/concepts/what-are-data-products), refer to [How to create data domains](/product/capabilities/data-products/how-tos/create-data-domains) instead.
3. OnÂ the *Domains* page, under *All domains*, select a domain or subdomain to add a subdomain.
4. From the upper right of your domain page, click the **\+ Add** button and then click **New sub\-domain**.
5. For *Overview*, enter basic details for your subdomain:
    1. (Optional) For *Cover*, click the **Change** button to select an image from the gallery or upload an image of your own. Click **Reposition** to drag and reposition the cover image and then click **Save position** to save your preferences.
    2. (Optional) For *Theme*, choose from the available color options to add a theme to your subdomain.
    3. For *Name*, enter a meaningful name for your subdomain \- for example, `Analytics`.
    4. (Optional) Click the domain icon to change the icon for your subdomain.
    5. (Optional) For *Description*, enter a description for your subdomain.
    6. For *Owners*, assign additional users or groups as subdomain owner(s).
6. In the top right of the screen, click the **Create** button to complete setup.

Congrats on creating a subdomain in Atlan! ð

Manage a domain[â](#manage-a-domain "Direct link to Manage a domain")
-----------------------------------------------------------------------

The domain profile includes essential details about the domain. You can also curate what your domain users will be able to view.

To manage a domain:

1. From the left menu of any screen in Atlan, click **Governance**.
2. Under the *Governance* heading of the *Governance center*, click **Domains**. If you have [enabled the products module](/product/capabilities/data-products/concepts/what-are-data-products), refer to [How to create data domains](/product/capabilities/data-products/how-tos/create-data-domains) instead.
3. OnÂ the *Domains* page, under *All domains*, hover over a domain or subdomain to:
    * View domain owners in the *Owners* column.
    * Click **\+ Add personas** to [add a persona](/product/capabilities/governance/access-control/how-tos/create-a-persona) for governing assets within a domain or subdomain.
    
    danger Any non\-guest users must be granted the [update metadata permission](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) to be able to add assets to a domain.
    * Click the star button to [star your domain](/product/capabilities/discovery/how-tos/star-assets) and bookmark it for easy access.
    * For subdomains only, to the right of the subdomain name, click the 3\-dot icon and then:
    
    
        + Click **Move to** to move a subdomain to a different parent domain. In the *Move to* dialog, select a relevant parent domain within the same or a different domain and then click **Move** to confirm the changes.
        + Click **Convert to domain** to convert a subdomain into a parent domain. In the *Convert to domain* dialog, click **Convert to domain** to confirm your changes.
4. Click a domain or subdomain to navigate to the domain or subdomain profile, respectively.
5. On your domain page, the *Overview* tab displays important details about the domain. (Optional) From the top right, click the **\+ Add** button and then click **New sub\-domain** to add data subdomains.
6. Under *Summary*, view a total count of assets in your domain and the domain description:
    * (Optional) Click **\+ Add stakeholder** to [add stakeholders](/product/capabilities/data-products/how-tos/add-stakeholders).
    * (Optional) Click the **Description** field to update the description.
    * (Optional) For *Owners*, click the pencil icon to add or remove [owners](/product/capabilities/discovery/how-tos/add-owners).
    * (Optional) If [custom metadata properties](/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures) are available, you can add [custom metadata](/product/capabilities/discovery/how-tos/add-custom-metadata) to your domain.
    * (Optional) Click **\+ Add resource** to [add a resource](/product/capabilities/discovery/how-tos/add-a-resource) to your domain.
7. Under *Readme*, click **\+ Add** to [add a README](/product/integrations) to your data domain or [use Atlan AI for documentation](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-documentation).
8. Â From the top right of the domain profile:
    * Click the user avatars to view a list of recently visited users, total views on your domain, total number of unique visitors, and total views by user.
        + Use the days filter to filter domain views and user activity in the last 7, 30, and 90 days.
        + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
    * Click the star button to [star your domain](/product/capabilities/discovery/how-tos/star-assets) and bookmark it for easy access.
    * Click the **Slack** or **Teams** icon to post on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
    * Click the **3\-dot** icon to configure the following:
        + Click **Add announcement** to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) to your domain.
        + Click **Add a resource** to [add resources](/product/capabilities/discovery/how-tos/add-a-resource) to your domain.
        + Click **Archive** to archive your domain \- ensure that your domain is empty before you archive it.
9. Change to the **Assets** tab to view assetsÂ within your domain.
10. Change to the **Statistics** tab to [monitor domain usage](/product/capabilities/data-products/how-tos/monitor-data-domains).
11. If you have [enabled the products module](/product/capabilities/data-products/concepts/what-are-data-products), change to the **Lineage** tab to view [business lineage for your domain](/product/capabilities/data-products/concepts/what-is-business-lineage).

**Did you know?**You can [set up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks) to bulk add assets to your domains and subdomains or remove them.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousDomains](/product/capabilities/governance/domains)[NextHow to organize assets](/product/capabilities/governance/domains/how-tos/organize-assets)

Copyright Â© 2025 Atlan Pte. Ltd.

