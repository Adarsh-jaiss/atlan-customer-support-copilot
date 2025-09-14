# Source URL
https://developer.atlan.com/toolkits/custom-package/release/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/release/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to release your package for general availability.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to release your package for general availability.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/release.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Release (GA) the package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/release/
meta-twitter:card: summary_large_image
meta-twitter:description: How to release your package for general availability.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/release.png
meta-twitter:title: Release (GA) the package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Release (GA) the package - Developer
-->

[Skip to content](#release-ga-the-package) Developer Release (GA) the package Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Release (GA) the package [¶](#release-ga-the-package "Permanent link")
======================================================================

For your package to actually be usable by others, it needs to be committed to an internal Atlan repository.

Add to `atlanhq/marketplace-packages`[¶](#add-to-atlanhqmarketplace-packages "Permanent link")
----------------------------------------------------------------------------------------------

Commit the package's definition to the [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages)  repository.

1. Clone [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages)  to your local machine (if you have not already):

    ```
    git clone git@github.com:atlanhq/marketplace-packages.git  # (1)!
    cd marketplace-packages

    ```

    1. This assumes you have configured your Git client with appropriate credentials. If this step fails, you'll need to setup `git` first.
2. Start from an up\-to\-date `master` branch (in particular if you already have the repository cloned locally):

    ```
    git checkout master
    git merge origin/master

    ```
3. Create a branch in the local repository:

    ```
    git branch JIRA-TASK-ID  # (1)!
    git checkout JIRA-TASK-ID

    ```

    1. Replace `JIRA-TASK-ID` with the unique ID of the task in Jira where you are tracking your work.
4. Move your rendered package outputs to a new folder under `packages/csa`:

    ```
    mv .../build/package/csa-openapi-spec-loader \
        packages/csa/openapi-spec-loader  # (1)!

    ```

    1. Of course, use your own package's ID in place of `csa-openapi-spec-loader`.

    Remove the prefix portion of the name from the folder

    Also be careful to remove the `csa-` prefix portion of the folder when you move it across. Note in this example that the source folder of `csa-openapi-spec-loader` becomes just `openapi-spec-loader` in the target directory within the repository.
5. Ensure your new package's directory and your GitHub ID are added to the end of the `CODEOWNERS` file. This will allow you to self\-manage any changes to the package going forward (without forcing you to have PR reviews):

    CODEOWNERS
    ```
    ...
    /packages/csa/openapi-spec-loader/    @cmgrote

    ```
6. Stage your new (or modified) package files (and `CODEOWNERS`, if this is the first time you're committing the package):

    ```
    git add CODEOWNERS packages/csa/openapi-spec-loader  # (1)!

    ```

    1. Remember to replace `openapi-spec-loader` with your actual package's folder. (This tells `git` which files to include all together in your next commit.)
7. Commit your new (or modified) files to the branch:

    ```
    git commit -m 'feat: ...'  # (1)!

    ```

    1. Provide a meaningful message for the new package (`feat: ...`) or whatever changes you've made to it (`fix: ...`).
8. Push your committed changes to the remote repository:

    ```
    git push --set-upstream origin JIRA-TASK-ID  # (1)!

    ```

    1. Remember that `JIRA-TASK-ID` is just a placeholder — replace with the name of your actual branch. (This tells `git` to push all the (local) commits you've made against this branch to the remote GitHub repository, so they're available to everyone there.)
9. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `master` on [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages) .
10. Request someone review the PR by posting a simple message with a link to the PR on [\#collab\-marketplace](https://atlanhq.slack.com/archives/C04LU5Y80V8) .

    Only necessary the first time

    If you've followed the instructions above on adding yourself to `CODEOWNERS`, this initial PR should be the only one that needs to be reviewed and approved. Any future changes or updates you make to the package you should be able to merge yourself without any further PR reviews.

Deploy the package[¶](#deploy-the-package "Permanent link")
-----------------------------------------------------------

Once merged to `master` of [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages) , anyone who wants to use it can follow the steps for GitHub under [test your package, live on a tenant](../test/#live-on-a-tenant) to deploy it to their tenant.

---

2025\-03\-122025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/release/) to provide us with more information. 

Back to top

[Previous Test your logic](../test/) [Next Widget reference](../widgets/) 

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

