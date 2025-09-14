# Source URL
https://docs.atlan.com/product/integrations/automation/browser-extension/concepts/atlan-browser-extension-security

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/automation/browser-extension/concepts/atlan-browser-extension-security
link-alternate: https://docs.atlan.com/product/integrations/automation/browser-extension/concepts/atlan-browser-extension-security
meta-description: Learn about atlan browser extension security.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about atlan browser extension security.
meta-og-locale: en
meta-og-title: Atlan browser extension security | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/automation/browser-extension/concepts/atlan-browser-extension-security
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Atlan browser extension security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Atlan browser extension security
================================

Atlan adheres to strict security standards for the [browser extension](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension). Atlan mandates security throughout the extension coding lifecycle:

* Hardening configurations through content security policies,
* Validating all inputs,
* Requiring least privileges,
* Employing defense\-in\-depth techniques like code obfuscation to frustrate reverse engineering,
* Accessing customer resources over secure HTTPS channels after SSL certificate verification to prevent tampering.

Atlan follows proven CI/CD methodologies used for our SaaS application, enabling rapid and frequent updates to Atlan's Chrome extension. This allows:

* Patching identified vulnerabilities faster through new releases while simultaneously upholding stability.
* Mandatory code reviews specifically focused on analyzing security to help with identifying issues before these can impact customers.

Once ready, both static and dynamic scanning tools rigorously test the extension codebase for any weaknesses before distribution. Atlan is committed to transparency. If any post\-deployment points of concern arise, Atlan will notify impacted customers promptly and address their concerns responsibly.

By incorporating security into each phase \- secure architecture, peer reviews, robust testing, and responsible disclosure \- Atlan strives to build browser extensions with both user needs and enterprise risks top of mind. [Reach out to Atlan support](/support/submit-request) for any questions.

Permissions[â](#permissions "Direct link to Permissions")
-----------------------------------------------------------

When using Atlan's browser extension in a [supported tool](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension#supported-tools), Atlan will read:

* the URL of your browser tab
* Document Object Model (DOM) elements such as asset title, hierarchy information, text, `data-test-id` attributes, and more to locate an asset in a [supported source tool](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension). This list may vary depending on the source tool.

If you're using Atlan's browser extension on any [website](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension), it will only read the favicon, page title, and URL of your browser tab.

Atlan uses the following permissions for the browser extension to work in a supported tool:

* `activeTab` \- the [activeTab permission](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) allows the browser extension to temporarily access the content of the active tab as you interact with the extension. This enables Atlan to display the Atlan badge and read the URL and DOM elements to locate the asset for displaying asset metadata in the sidebar.
* `storage` \- the [storage permission](https://developer.chrome.com/docs/extensions/references/api/storage#permissions) allows Atlan to store information about the locally domains configured. This enables the browser extension to remember the sites that you want to use it on, even when you close and reopen your browser.
* `cookies` \- the [cookies permission](https://developer.chrome.com/docs/extensions/references/api/cookies#permissions) allows Atlan to manage cookies for maintaining session states or user preferences for a supported tool. These login cookies are only shared between your Atlan tenant and the browser extension.
* `contextMenus` \- the [contextMenus permission](https://developer.chrome.com/docs/extensions/references/api/contextMenus#permissions) allows Atlan to add context menu options (for example, right\-click menus) to help you interact with the extension's features, namely [search in Atlan](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension), directly from any website.
* `host_permissions` \- the [host permissions](https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions#host-permissions) allow the browser extension to work specifically with Atlan tenants, which is the host in this case. For example, `https://atlan.com/*`, `https://atlan.dev/*`.
* `"content_scripts": [ { "matches": ["http://*/*", "https://*/*"]` \- the [content\_scripts key](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts#functionality) allows Atlan to inject Atlan's content script to any website you visit. Although this content script will be injected into all webpages, it will neither be executed nor any DOM elements captured if the webpage is not a supported tool.
**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousEnable embedded metadata in Tableau](/product/integrations/automation/browser-extension/how-tos/enable-embedded-metadata-in-tableau)[NextTroubleshooting Atlan browser extension](/product/integrations/automation/browser-extension/troubleshooting/troubleshooting-atlan-browser-extension)

Copyright Â© 2025 Atlan Pte. Ltd.

