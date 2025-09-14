# Source URL
https://developer.atlan.com/toolkits/typedef/test-model/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/test-model/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to test a model once you have produced the JSON outputs for Atlas.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to test a model once you have produced the JSON outputs for Atlas.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/test-model.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Test your model - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/test-model/
meta-twitter:card: summary_large_image
meta-twitter:description: How to test a model once you have produced the JSON outputs for Atlas.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/test-model.png
meta-twitter:title: Test your model - Developer
meta-viewport: width=device-width,initial-scale=1
title: Test your model - Developer
-->

[Skip to content](#test-your-model) Developer Test your model Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Test your model [¶](#test-your-model "Permanent link")
======================================================

Add to `atlanhq/models`[¶](#add-to-atlanhqmodels "Permanent link")
------------------------------------------------------------------

Once your model is rendered, you then need to add it to the [atlanhq/models](https://github.com/atlanhq/models)  repository:

1. Clone [atlanhq/models](https://github.com/atlanhq/models)  to your local machine (if you have not already):

    ```
    git clone git@github.com:atlanhq/models.git  # (1)!
    cd models

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
4. Move the generated model files to the cloned repository:

    ```
    mv .../tmp/models/* atlas/entityDefs/Referenceable/Asset/Catalog/.  # (1)!

    ```

    1. The first directory should be the path to wherever you generated the files from the `pkl` command when rendering your model. The second directory is the appropriate location within the `models` repository for the rendered JSON.

    In this example, since our top\-level supertype was `Catalog`, we place the files under `Referenceable/Asset/Catalog/.`.

    If you had instead directly extended `Asset`, you would move the files under `Referenceable/Asset/.`.
5. Stage your new model files:

    ```
    git add atlas/entityDefs/Referenceable/Asset/Catalog/  # (1)!

    ```

    1. As above, if the files you added are in a different path, stage them from that different path. (This tells `git` which files to include all together in your next commit.)
6. Commit your new model files to the branch:

    ```
    git commit -m 'New model for ...'  # (1)!

    ```

    1. Provide a meaningful message for the new model you're adding. (This tells `git` to take a (local) snapshot of all the changes you staged (above).)
7. Push your committed changes to the remote repository:

    ```
    git push --set-upstream origin JIRA-TASK-ID  # (1)!

    ```

    1. Remember that `JIRA-TASK-ID` is just a placeholder — replace with the name of your actual branch. (This tells `git` to push all the (local) commits you've made against this branch to the remote GitHub repository, so they're available to everyone there.)

Canary your model[¶](#canary-your-model "Permanent link")
---------------------------------------------------------

Development purposes only

These steps should *only* be applied to internal development tenants, where you can safely reset the tenant (erasing all metadata) to make changes.

kubectl

GitHub

If you have `kubectl` access to your cluster, you can "canary" your model directly:

1. Ensure you are on your cluster:

    ```
    loft use vcluster <tenant-name> --project default # (1)!

    ```

    1. Replace `<tenant-name>` with the name of your tenant. (This assumes you are already logged in to Loft — naturally log in there first, if you are not already.)
2. Modify the `modelsBranch` value in the `atlan-runtime-packages-config` configmap:

    ```
    EDITOR=vim \ # (1)!
    kubectl edit cm atlan-runtime-packages-config

    ```

    1. Set whatever editor you prefer, but be sure it blocks until you have completed editing the configmap.

    | atlan\-runtime\-packages\-config | |
    | --- | --- |
    | ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` # Please edit the object below. Lines beginning with a '#' will be ignored, # and an empty file will abort the edit. If an error occurs while saving this file will be # reopened with the relevant failures. # apiVersion: v1 data:   channel: master   marketplacePackagesBranch: master   marketplaceScriptsBranch: master   modelsBranch: JIRA-TASK-ID  # (1)!   packagesConfig: |     {}   version: latest kind: ConfigMap metadata:   ...  ``` |

    1. Set the value of `modelsBranch` to the name of the branch you pushed to [atlanhq/models](https://github.com/atlanhq/models) .
3. Quickly run the steps below to seed the development tenant. (A cron job may overwrite the value you just changed above back to `master` or whatever value is defined in the alternative approach described in the GitHub tab.)

If you do not have `kubectl` access to your cluster, you will need to "canary" the model through the [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages)  repository.

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
4. Create or edit the file `deployment/tenants/<tenant-name>.pkl` for the tenant where you want to canary the typedefs, with at least the following content:

    | deployment/tenants/\<tenant\-name\>.pkl | |
    | --- | --- |
    | ``` 1 2 3 ``` | ``` amends "../Deployment.pkl"  modelsBranch = "JIRA-TASK-ID"  ``` |
5. Stage your new (or modified) `.pkl` file:

    ```
    git add deployment/tenants/<tenant-name>.pkl  # (1)!

    ```

    1. Remember to replace `<tenant-name>` with your actual tenant name. (This tells `git` which files to include all together in your next commit.)
6. Commit your new (or modified) file to the branch:

    ```
    git commit -m 'Model canary for ...'  # (1)!

    ```

    1. Provide a meaningful message for the new model you're canarying. (This tells `git` to take a (local) snapshot of all the changes you staged (above).)
7. Push your committed changes to the remote repository:

    ```
    git push --set-upstream origin JIRA-TASK-ID  # (1)!

    ```

    1. Remember that `JIRA-TASK-ID` is just a placeholder — replace with the name of your actual branch. (This tells `git` to push all the (local) commits you've made against this branch to the remote GitHub repository, so they're available to everyone there.)
8. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `master` on [atlanhq/marketplace\-packages](https://github.com/atlanhq/marketplace-packages) .
9. As long as you did not make any mistakes in the filename or its contents, your PR will be automatically approved by a bot within a few minutes. You can then self\-merge it.
10. Once the PR is merged, wait for the `atlan-update` script to run and complete on your tenant. By default it will run every 30 minutes, so could take up to 1 hour before it has completed on your tenant.[1](#fn:1)

Seed development tenant[¶](#seed-development-tenant "Permanent link")
---------------------------------------------------------------------

Once the canary is set:

1. Log in to Argo on your tenant by going to [https://tenant\-name.atlan.com/api/orchestration](https://tenant-name.atlan.com/api/orchestration) and clicking the left\-most **Login** button.
2. Then open [https://tenant\-name.atlan.com/api/orchestration/cluster\-workflow\-templates/atlan\-typedef\-seeder](https://tenant-name.atlan.com/api/orchestration/cluster-workflow-templates/atlan-typedef-seeder) and click the **Submit** button in the upper\-right.
3. In the resulting dialog, click the **Submit** button.

Once this workflow completes (successfully), the typedefs will be available in that tenant.

---

1. It is also possible that synchronization has been disabled on your tenant, in which case `atlan-update` may not run at all. If that is the case, you will need to speak with whoever manages your tenant to see how you can test your typedefs.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2025\-03\-112025\-03\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/test-model/) to provide us with more information. 

Back to top

[Previous Render your model](../render/) [Next Bind the SDKs](../bind-sdks/) 

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

