# Source URL
https://developer.atlan.com/toolkits/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Additional frameworks you can use to tap more directly into Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Additional frameworks you can use to tap more directly into Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Toolkits - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/
meta-twitter:card: summary_large_image
meta-twitter:description: Additional frameworks you can use to tap more directly into Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/index.png
meta-twitter:title: Toolkits - Developer
meta-viewport: width=device-width,initial-scale=1
title: Toolkits - Developer
-->

[Skip to content](#toolkits) Developer Toolkits Initializing search 

* 
* [Overview](..)
* [Getting started](../getting-started/)
* [Common tasks](../snippets/)
* [Asset\-specific](../patterns/)
* [Governance structures](../governance/)
* [Reference](../reference/)

Toolkits [¶](#toolkits "Permanent link")
========================================

Writing code is great, but there additional frameworks you can use to tap more directly into Atlan.

In this **Toolkits** section you will find details about these frameworks.

Internal use only

For now, these toolkits are only available for Atlanians 

How they work[¶](#how-they-work "Permanent link")
-------------------------------------------------

Our toolkits are mostly built on [Pkl](https://pkl-lang.org/index.html) , a configuration language developed by Apple.

This allows you to develop your idea:

* Safely, based on a guard\-railed set of options
* Independently from any specific programming language
* Offline from a running Atlan tenant

We can then automatically translate that into the necessary bindings for Atlan's:

* UI widgets
* Data model
* Orchestration plane

Get started[¶](#get-started "Permanent link")
---------------------------------------------

To get started, you'll need to install `pkl` and configure its plugin in your favorite IDE.

### Install `pkl`[¶](#install-pkl "Permanent link")

Start by [installing the `pkl` CLI](https://pkl-lang.org/main/current/pkl-cli/index.html#installation) :

MacOS

Linux (aarch64\)

Linux (amd64\)

Alpine (amd64\)

Windows

```
brew install pkl

```

```
curl -L -o pkl https://github.com/apple/pkl/releases/download/0.28.1/pkl-linux-aarch64
chmod +x pkl

```

```
curl -L -o pkl https://github.com/apple/pkl/releases/download/0.28.1/pkl-linux-amd64
chmod +x pkl

```

```
curl -L -o pkl https://github.com/apple/pkl/releases/download/0.28.1/pkl-alpine-linux-amd64
chmod +x pkl

```

```
curl -L -o jpkl https://repo1.maven.org/maven2/org/pkl-lang/pkl-cli-java/0.28.1/jpkl
chmod +x jpkl

```
Note the CLI command is `jpkl`

On Windows (or any other platform using the Java executable), the command is `jpkl` rather than `pkl`.

### Configure in an IDE[¶](#configure-in-an-ide "Permanent link")

Then configure `pkl` in your favorite IDE:

JetBrains

VS Code

Neovim

[https://demo.arcade.software/SOzVuITIAw0HJRGhlqu5?embed&show_copy_link=true](https://demo.arcade.software/SOzVuITIAw0HJRGhlqu5?embed&show_copy_link=true)

For now you'll have to rely on [Pkl's own instructions](https://pkl-lang.org/vscode/current/index.html) .

For now you'll have to rely on [Pkl's own instructions](https://pkl-lang.org/neovim/current/index.html) .

---

2024\-03\-142025\-04\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/) to provide us with more information. 

Back to top

[Next Package toolkit](custom-package/) 

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

