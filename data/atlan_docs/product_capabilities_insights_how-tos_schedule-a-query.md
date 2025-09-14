# Source URL
https://docs.atlan.com/product/capabilities/insights/how-tos/schedule-a-query

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/insights/how-tos/schedule-a-query
link-alternate: https://docs.atlan.com/product/capabilities/insights/how-tos/schedule-a-query
meta-description: You must [save your query](/product/capabilities/insights/how-tos/save-and-share-queries) before you can schedule it. Your [SMTP configuration](/product/integrations/communication/smtp-and-announcements/how-tos/configure-smtp) must also be in a working state to send results to recipients.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You must [save your query](/product/capabilities/insights/how-tos/save-and-share-queries) before you can schedule it. Your [SMTP configuration](/product/integrations/communication/smtp-and-announcements/how-tos/configure-smtp) must also be in a working state to send results to recipients.
meta-og-locale: en
meta-og-title: Schedule a query | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/insights/how-tos/schedule-a-query
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Schedule a query | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Schedule a query
================

Who can do this?Before scheduling a query, you will need your Atlan administrator to [enable scheduled queries](/product/administration/labs/how-tos/enable-scheduled-queries).

You might want to schedule a query to run repeatedly. For example:

* If you want to fetch data for the same query at different times.
* If you want to share data with business teams on a consistent basis, for example, weekly.
* If a data analyst is out of office but wants the data to be shared with users periodically.

dangerYou must [save your query](/product/capabilities/insights/how-tos/save-and-share-queries) before you can schedule it. Your [SMTP configuration](/product/integrations/communication/smtp-and-announcements/how-tos/configure-smtp) must also be in a working state to send results to recipients.

Schedule a query[â](#schedule-a-query "Direct link to Schedule a query")
--------------------------------------------------------------------------

To schedule a query:

1. Open *Insights*.
2. In the upper left, click the **papers\-in\-a\-box** icon to open your query collections.
3. Choose the query collection where the query you want to schedule is saved.
4. Hover over the saved query you want to schedule, click the **three dots** to its right, and then click **Schedule**.
5. In the *New Schedule Query* dialog, enter the scheduling details:Â
    1. For *Name*, enter a meaningful name for the scheduled query.
    2. For *Runs every*, choose how often the query should run:
        * For *Hour* and *Day*, you can go down to the minute for hourly and daily runs.
        * For *Week*, you can select multiple days for a weekly run.
        * For *Month*, you can select multiple dates for a monthly run.
        * For *Custom cron*, write your own custom cron.
    3. For *Timezone*, select a relevant option or keep the default one.
    4. For *Share Results*, select the user(s) to whom you want to send the results from each run.
    5. (Optional) If there are any existing schedules for your query, from the top right, click the existing schedule link to view more details in a sidebar.
    6. At the bottom right of the dialog, click **Done**.
6. (Optional) Under *Query successfully scheduled*, click the **Run Now** link if you want to test the scheduled query.
7. At the bottom right of the dialog, click **Finish**.

Your query will now run on the defined schedule and the results will be sent out automatically! ð

Note that the download link for the results is only valid for **6** hours.Â

**Did you know?**If a scheduled query fails, you'll receive an email notification with the name of the query, so you can troubleshoot and get it running in no time.

[https://demo.arcade.software/iBjWVqrwbu8GNq09u5fW?embed](https://demo.arcade.software/iBjWVqrwbu8GNq09u5fW?embed)

[https://demo.arcade.software/qSd0aGAo9TqNnkaNEqXp?embed](https://demo.arcade.software/qSd0aGAo9TqNnkaNEqXp?embed)

[https://demo.arcade.software/HNpt9x3xU4JfJfScTGFa?embed](https://demo.arcade.software/HNpt9x3xU4JfJfScTGFa?embed)

Change a scheduled query[â](#change-a-scheduled-query "Direct link to Change a scheduled query")
--------------------------------------------------------------------------------------------------

To change the schedule for a query:

1. Open *Insights*.
2. In the upper left, click the repeating\-arrow icon to open your scheduled queries.
3. Hover over the scheduled query you want to change, click the **three dots** to its right, and then:
    1. (Optional)Â Click **Run now** to run the scheduled query immediately.
    2. (Optional) Click **Pause** to pause the scheduled query.
    3. Click **Edit** to update the scheduled query.
4. In the *Update Schedule Query* dialog box, make any desired changes to the schedule or recipients.
5. At the bottom right of the dialog box, click **Update** to save the changes.
6. (Optional) Under *Query successfully updated*, click the **Run Now** link if you want to test the scheduled query.
7. At the bottom right of the dialog, click **Finish**.

Your query will now run on the changed schedule and the results will be sent out automatically! ð

Remove a scheduled query[â](#remove-a-scheduled-query "Direct link to Remove a scheduled query")
--------------------------------------------------------------------------------------------------

To remove a scheduled query:

1. Open *Insights*.
2. In the upper left, click the repeating\-arrow icon to open your scheduled queries.
3. Hover over the scheduled query you want to stop, click the **three dots** to its right, and then click **Delete**.
4. In the *Delete Schedule* dialog box, click **Delete**.

Your query will no longer run automatically.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [configuration](/tags/configuration)

[PreviousMake a query interactive](/product/capabilities/insights/how-tos/make-a-query-interactive)[NextHow to query without shared credentials](/product/capabilities/insights/how-tos/query-without-shared-credentials)

Copyright Â© 2025 Atlan Pte. Ltd.

