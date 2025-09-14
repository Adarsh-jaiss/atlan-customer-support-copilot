# Source URL
https://developer.atlan.com/sdks/cli/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/cli/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: You can use Atlan's command-line interface (CLI) to manage metadata in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: You can use Atlan's command-line interface (CLI) to manage metadata in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/cli.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Atlan CLI - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/cli/
meta-twitter:card: summary_large_image
meta-twitter:description: You can use Atlan's command-line interface (CLI) to manage metadata in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/cli.png
meta-twitter:title: Atlan CLI - Developer
meta-viewport: width=device-width,initial-scale=1
title: Atlan CLI - Developer
-->

[Skip to content](#atlan-cli) Developer Atlan CLI Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Atlan CLI[¶](#atlan-cli "Permanent link")
=========================================

Limited functionality (so far)

You can use Atlan's command\-line interface (CLI) to manage some metadata in Atlan. Currently data contracts and metadata for a limited set of asset types can be managed through the CLI.

Obtain the CLI[¶](#obtain-the-cli "Permanent link")
---------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.0 "Minimum version")

For now, the CLI must be downloaded as a pre\-built binary:

Disclaimer — closed preview

This feature is in closed preview and therefore any download and installation from this link will be subject to the terms applicable to [Product Release Stages](https://ask.atlan.com/hc/en-us/articles/7354918064783-Product-release-stages#h_01HW5DQK658B49YE5FM11RQMZ4) . Contact your Atlan Customer Success Manager for your preview today.

If your organization is already part of the closed preview, your installation of the feature from this link shall become subject to the terms and scope of preview as agreed with your organization. Accordingly, any use of the feature outside the agreed scope may result in revocation of the closed preview for your organization. Please contact your system administrator before downloading.

Homebrew

MacOS (M1\)

MacOS (Intel)

Linux

Windows

Recommended

When installed via Homebrew, you can easily keep things up\-to\-date. If you do not use it already, see Homebrew's own installation documents for [setting up Homebrew itself](https://docs.brew.sh/Installation) .

```
brew tap atlanhq/atlan
brew install atlan

```

```
curl -o atlan.tgz -L https://github.com/atlanhq/atlan-cli-releases/releases/latest/download/atlan_Darwin_arm64.tar.gz
tar xf atlan.tgz

```

```
curl -o atlan.tgz -L https://github.com/atlanhq/atlan-cli-releases/releases/latest/download/atlan_Darwin_amd64.tar.gz
tar xf atlan.tgz

```

```
curl -o atlan.tgz -L https://github.com/atlanhq/atlan-cli-releases/releases/latest/download/atlan_Linux_amd64.tar.gz
tar -zxf atlan.tgz

```

```
curl -o atlan.zip -L https://github.com/atlanhq/atlan-cli-releases/releases/latest/download/atlan_Windows_amd64.zip
unzip atlan.zip

```

Configure the CLI[¶](#configure-the-cli "Permanent link")
---------------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.0 "Minimum version")

You can configure the CLI using a config file or in some cases environment variables, with the following minimum settings[1](#fn:1):

| .atlan/config.yaml | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` atlan_api_key: eyZid92...  # (1) atlan_base_url: https://tenant.atlan.com  # (2) log:   enabled: false  # (3)   level: info  # (4)  ``` |

1. An API token that has access to your assets.
2. The base URL of your tenant (including the `https://`).
3. (Optional) Enable logging to produce more details on what the CLI is doing.
4. When logging is enabled, specify the level of verbosity.

| Environment variables | |
| --- | --- |
| ``` 1 ``` | ``` ATLAN_API_KEY=eyZid92...  # (1)  ``` |

1. An API token that has access to your assets.

### Define data sources[¶](#define-data-sources "Permanent link")

You should also define data sources in the config file:

| .atlan/config.yaml | |
| --- | --- |
| ```  6  7  8  9 10 11 12 ``` | ``` data_source snowflake:  # (1)   type: snowflake  # (2)   connection:  # (3)     name: snowflake-prod  # (4)     qualified_name: "default/snowflake/1234567890"  # (5)   database: db  # (6)   schema: analytics  # (7)  ``` |

1. Each data source definition must start with `data_source`, followed by a space and a unique reference name for the data source (`snowflake` in this example).

    Reference name is your choice

    The reference name you give in the configuration file is only used here and as a reference in any data contracts you define. It need not match the name of the connection or data source in Atlan itself.
2. You must indicate the type of connector for the data source (see [connector types](../../models/connectortypes/) for options).
3. Details of the connection must also be provided.
4. You must provide the `name` of the connection, as it appears in Atlan.
5. You must provide the unique `qualified_name` of the connection in Atlan.
6. (Optional) You can also specify the database to use for this connection's assets by default, if none is specified in the data contract.
7. (Optional) You can also specify the schema to use for this connection's assets by default, if none is specified in the data contract.

These ensure the CLI can map the details you specify in your data contract to the appropriate corresponding asset in Atlan.

What's next?[¶](#whats-next "Permanent link")
---------------------------------------------

With the CLI, you can:

* [Manage data contracts](../../snippets/datacontract/)
* [Upload and download files](../../snippets/files/) from Atlan's backing object store
* [Sync metadata](../../snippets/datacontract/manage/#sync-metadata) to a limited set of asset types
* [Integrate data contracts with CI/CD](../../snippets/datacontract/manage/#managing-via-cicd) processing

---

1. When both are specified, environment variables will take precedence.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2024\-04\-252024\-09\-27

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/cli/) to provide us with more information. 

Back to top

[Previous Integration options](../) [Next dbt](../dbt/) 

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

