# Source URL
https://developer.atlan.com/toolkits/typedef/test-ux/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/test-ux/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to test the generated baseline user interface code.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to test the generated baseline user interface code.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/test-ux.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Test baseline UX - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/test-ux/
meta-twitter:card: summary_large_image
meta-twitter:description: How to test the generated baseline user interface code.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/test-ux.png
meta-twitter:title: Test baseline UX - Developer
meta-viewport: width=device-width,initial-scale=1
title: Test baseline UX - Developer
-->

[Skip to content](#test-the-baseline-ux) Developer Test baseline UX Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Test the baseline UX [¶](#test-the-baseline-ux "Permanent link")
================================================================

Add to `atlanhq/atlan-frontend`[¶](#add-to-atlanhqatlan-frontend "Permanent link")
----------------------------------------------------------------------------------

Once your model is rendered, you then need to add it to the [atlanhq/atlan\-frontend](https://github.com/atlanhq/atlan-frontend)  repository:

1. Clone [atlanhq/atlan\-frontend](https://github.com/atlanhq/atlan-frontend)  to your local machine (if you have not already):

    ```
    git clone git@github.com:atlanhq/atlan-frontend.git  # (1)!
    cd atlan-frontend

    ```

    1. This assumes you have configured your Git client with appropriate credentials. If this step fails, you'll need to setup `git` first.
2. Start from an up\-to\-date `main` branch (in particular if you already have the repository cloned locally):

    ```
    git checkout main
    git merge origin/main

    ```
3. Create a branch in the local repository:

    ```
    git branch JIRA-TASK-ID  # (1)!
    git checkout JIRA-TASK-ID

    ```

    1. Replace `JIRA-TASK-ID` with the unique ID of the task in Jira where you are tracking your work.
4. Move the generated front\-end files to the cloned repository.

    1. Move the generated typedef JSONs:

    ```
            mv .../tmp/frontend/src/api/schemas/metastore/atlas/entityDefs/* \
                src/api/schemas/metastore/atlas/entityDefs/Referenceable/Asset/Catalog/.  # (1)!

    ```

    1. The target directory is the appropriate location within the front\-end\-embedded model for the rendered JSON.

    In this example, since our top\-level supertype was `Catalog`, we place the files under `.../Referenceable/Asset/Catalog/.`.

    If you had instead directly extended `Asset`, you would move the files under `.../Referenceable/Asset/.`.
        2. Copy / move the connection icon file:

    ```
            cp .../somewhere/.../Custom.svg \  # (1)!
                src/assets/images/source/svg/Custom.svg

    ```

    1. The icon file itself is not part of the Pkl model. You will need to copy the icon image from wherever you are managing it locally to this appropriate location in the atlan\-frontend repository.
        3. (Optional) Copy / move any icon files (not necessary if you are only reusing existing icons):

    ```
            ls .../tmp/frontend/src/assets/images/icons/*  # (1)!
            cp .../somewhere/.../*.svg \
                src/assets/images/icons/.

    ```

    1. The icon files themselves are not part of the Pkl model. What you will see listed under the generated directory are filenames ending with `-PLACEHOLDER` indicating the names of icons that you referenced somewhere in your model.

    If these are *new* icons you want to add, you need to move them into the `src/assets/images/icons/` directory of the atlan\-frontend repository.
        4. (Optional) Merge icon snippets (not necessary if you are only reusing existing icons):

 **`.../tmp/frontend/src/components/common/icon/iconMap.ts-snippet`**

    src/components/common/icon/iconMap.ts
            ```
            import { defineAsyncComponent } from 'vue'

    // source list
            import Snowflake from '~/assets/images/source/svg/Snowflake.svg'
            ...
            // *** COPY / PASTE START *** (1)
            import DatabaseGray from '~/assets/images/icons/database-gray.svg',
            import Database from '~/assets/images/icons/database.svg',
            import TableGray from '~/assets/images/icons/table-gray.svg',
            import Table from '~/assets/images/icons/table.svg',
            import ColumnGray from '~/assets/images/icons/column-gray.svg',
            import Column from '~/assets/images/icons/column.svg',
            // *** END COPY / PASTE ***
            // Don't remove below comment used by plop
            // INSERT NEW ICON IMPORT HERE
            import Rule from '~/assets/images/icons/rule.svg'
            ...

    export default {
                // Don't remove below comment used by plop
                // INSERT RETURN HERE
                ...
                // *** COPY / PASTE START ***
                DatabaseGray,
                Database,
                TableGray,
                Table,
                ColumnGray,
                Column,
                // *** END COPY / PASTE ***
                ...
            }

    ```

    1. Only copy across the highlighted lines between the comments `*** COPY / PASTE START ***` and `*** END COPY / PASTE ***`

    Beware of duplicates

    Note that when you are *reusing* existing icons, you need to be careful not to introduce any duplicates into the target `iconMap.ts`.
        5. Move the generated type\-specific attributes, methods and layouts:

    ```
            mv .../tmp/frontend/src/constant/source/<type> \  # (1)!
                src/constant/source/.

    ```

    1. Replace `<type>` with the generated directory name that matches your specific typedef model.
        6. Merge index snippets:

 **`.../tmp/frontend/src/constant/source/index.ts-snippet`**

    src/constant/source/index.ts
            ```
            // *** COPY / PASTE START *** (1)
            import * as custom from './custom'
            // *** END COPY / PASTE ***

    import { assetTypeList as atlanNativeAssetTypes } from './atlanNative/assetTypes'
            import { assetTypeInterface } from '~/types/sourceConfigs/assetType.interface'
            import { TAGS_ASSET_TYPENAMES } from '~/constant/governance/classification'

    // Utils
            import { autoIncrementGroupOrder } from '~/utils/sourceConfig/groupOrder'
            import { getAssetTypes } from './bi/preset/getAssetTypes'
            // An array of all sources, including SQL, BI, SaaS, objectStore, API, ELT, and eventStore.
            export const SourceList = [
                ...Object.values(queryableSql).map((component) => component.default),
                ...Object.values(nonQueryableSql).map((component) => component.default),
            ...
            // *** COPY / PASTE START ***
                ...Object.values(custom).map((component) => component.default),
            // *** END COPY / PASTE ***
                api.default,
            ]

    ...

    export const SuperTypeNameEnum = {
                SQL: 'SQL',
                BI: 'BI',
                SaaS: 'SaaS',
            ...
            // *** COPY / PASTE START ***
                Custom: 'Custom',
            // *** END COPY / PASTE ***
            }

    ```

    1. Only copy across the highlighted lines between the comments `*** COPY / PASTE START ***` and `*** END COPY / PASTE ***`
        7. Merge projection snippets:

 **`.../tmp/frontend/src/constant/projection.ts-snippet`**

    src/constant/projection.ts
            ```
            import { PolicyAttributes } from '~/constant/_projection'
            import {
                CalculationViewMinimalAttributes,
                CalculationViewAdditionalAttributes,
            } from '~/constant/source/sql/common/attributes/calculationView'
            ...
            // *** COPY / PASTE START *** (1)
            import { CustomDatasetAttributes } from '~/constant/source/custom/attributes/customDataset'
            import { CustomTableAttributes } from '~/constant/source/custom/attributes/customTable'
            import { CustomFieldAttributes } from '~/constant/source/custom/attributes/customField'
            // *** END COPY / PASTE ***

    ...

    export const AssetAttributes = [
            // *** COPY / PASTE START ***
                ...CustomDatasetAttributes,
                ...CustomTableAttributes,
                ...CustomFieldAttributes,
            // *** END COPY / PASTE ***
            ]

    ```

    1. Only copy across the highlighted lines between the comments `*** COPY / PASTE START ***` and `*** END COPY / PASTE ***`
        8. Merge useBody snippets:

 **`.../tmp/frontend/src/composables/discovery/useBody.ts-snippet`**

    src/composables/discovery/useBody.ts
            ```
            ...
            export function applyFilters({
                facets,
                base,
                connectorName,
                state,
            }: {
                facets: Record<string, any>
                base: Bodybuilder
                connectorName?: string
                state: Ref<string>
            }) {
                const authStore = useAuthStore()

    // filters
                Object.keys(facets ?? {})?.forEach((mkey) => {
                    const filterObject = facets[mkey]
                    switch (mkey) {
                        ...
                        // *** COPY / PASTE START *** (1)
                        case 'customDatasetQualifiedName':
                        case 'customTableQualifiedName':
                        // *** END COPY / PASTE ***
                        case 'cubeQualifiedName':
                        case 'cubeDimensionQualifiedName':
                        case 'cubeParentFieldQualifiedName':
                        case 'cubeHierarchyQualifiedName': {
                            if (filterObject) {
                                base.filter('term', mkey, filterObject)
                            }
                            break
                        }
                        ...
                    }
                })
            }

    ```

    1. Only copy across the highlighted lines between the comments `*** COPY / PASTE START ***` and `*** END COPY / PASTE ***`
        9. Merge locale snippets:

 **`.../tmp/frontend/src/locales/en.json-snippet`**

    src/locales/en.json
            ```
            "Dataset": "Dataset"  // (1)!
            "Datasets": "Datasets"
            "Table": "Table"
            "Tables": "Tables"
            "Rating": "Rating"
            "Ratings": "Ratings"
            "Field": "Field"
            "Fields": "Fields"
            "Temperature": "Temperature"
            "Temperatures": "Temperatures"

    ```

    1. Copy across the name\-value pairs.

    Beware of duplicates

    Note that any of your labels could already exist in the file, so you should check for duplicates.
5. Stage your new and modified UX files:

    ```
    git add src/  # (1)!

    ```

    1. If you have made other changes locally that you do *not* want to stage, specify individual files instead of using this all\-encompassing stage.
6. Commit your revised UX files to the branch:

    ```
    git commit -m 'feat: new UX for ...'  # (1)!

    ```

    1. Provide a meaningful message for the new UX you're adding. (This tells `git` to take a (local) snapshot of all the changes you staged (above).)
7. Push your committed changes to the remote repository:

    ```
    git push --set-upstream origin JIRA-TASK-ID  # (1)!

    ```

    1. Remember that `JIRA-TASK-ID` is just a placeholder — replace with the name of your actual branch. (This tells `git` to push all the (local) commits you've made against this branch to the remote GitHub repository, so they're available to everyone there.)

Test UX locally[¶](#test-ux-locally "Permanent link")
-----------------------------------------------------

Prerequisites

You must first install `pnpm`.

1. Install the latest required front\-end modules:

    ```
    pnpm install

    ```
2. Generate the latest types based on the typedef files you copied into the repository:

    ```
    pnpm generate:api

    ```
3. Update your local development environment tenant:

    | .env.development | |
    | --- | --- |
    | ``` 1 2 3 4 5 6 7 8 ``` | ``` # Must configure tenant to allow localhost front-end (1) VITE_CLIENT_ID=atlan-frontend VITE_DEFAULT_REALM=default VITE_DEFAULT_REQUEST_TIMEOUT=30000 VITE_DEV_API_BASE_URL=https://tenant-name.atlan.com VITE_ENABLE_EVENTS_TRACKING=false VITE_SEGMENT_ANALYTICS_KEY=... VITE_LAUNCH_DARKLY_KEY=...  ``` |

    1. TODO: extra steps for configuring the tenant to allow a localhost front\-end
4. Run the UI on your localhost:

    ```
    pnpm dev

    ```

Once the command above completes, it will open your browser to <http://localhost:3333> running the Atlan UI with any changes you have locally against all the metadata available in the tenant you've configured it against.

Create assets of the new type and test

Create some new instances of assets of your new type(s) and test the UX behaves as you like.

---

2025\-03\-112025\-06\-09

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/test-ux/) to provide us with more information. 

Back to top

[Previous Write integration test](../integration-test/) [Next Release (GA)](../release/) 

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

