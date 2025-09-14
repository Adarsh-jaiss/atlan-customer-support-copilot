# Source URL
https://docs.atlan.com/product/capabilities/playbooks/how-tos/manage-playbooks

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/playbooks/how-tos/manage-playbooks
link-alternate: https://docs.atlan.com/product/capabilities/playbooks/how-tos/manage-playbooks
meta-description: Once you've [created a playbook](/product/capabilities/playbooks/how-tos/set-up-playbooks), you can monitor, modify, or delete it at any time. You can also [enable notifications](/product/capabilities/playbooks/how-tos/manage-playbooks) to monitor your playbook runs directly in Slack or Microsoft Teams.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've [created a playbook](/product/capabilities/playbooks/how-tos/set-up-playbooks), you can monitor, modify, or delete it at any time. You can also [enable notifications](/product/capabilities/playbooks/how-tos/manage-playbooks) to monitor your playbook runs directly in Slack or Microsoft Teams.
meta-og-locale: en
meta-og-title: Manage playbooks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/playbooks/how-tos/manage-playbooks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage playbooks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage playbooks
================

Once you've [created a playbook](/product/capabilities/playbooks/how-tos/set-up-playbooks), you can monitor, modify, or delete it at any time. You can also [enable notifications](/product/capabilities/playbooks/how-tos/manage-playbooks) to monitor your playbook runs directly in Slack or Microsoft Teams.

Monitor a playbook[â](#monitor-a-playbook "Direct link to Monitor a playbook")
--------------------------------------------------------------------------------

To monitor your playbooks runs:

* When running a playbook immediately, you will be redirected to the monitoring page within 5 seconds.
* At any other moment:
    1. From the left menu of any screen in Atlan, click **Governance**.
    2. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
    3. In the playbooks manager, select **the playbook** you'd like to view.
    4. In the *Overview* section of your playbook, you'll be able to monitor:
        + A summary of the rules, actions, and updated assets.
        + An activity log for recent runs and updates over time.

**Did you know?**The activity log in the playbooks manager can help you keep track of playbook runs, ranging from 24 hours to 30 days. Select any of the entries to navigate to the corresponding playbook.

[https://demo.arcade.software/WIE1UupeFl5uQ5gM0mYO?embed](https://demo.arcade.software/WIE1UupeFl5uQ5gM0mYO?embed)

[https://demo.arcade.software/33YLLp5EwaYvXt7gWvTk?embed](https://demo.arcade.software/33YLLp5EwaYvXt7gWvTk?embed)

[https://demo.arcade.software/o0lAlvWV7LMC8X0tKo6l?embed](https://demo.arcade.software/o0lAlvWV7LMC8X0tKo6l?embed)

Modify a playbook[â](#modify-a-playbook "Direct link to Modify a playbook")
-----------------------------------------------------------------------------

To modify an existing playbook:

1. From the left menu of any screen in Atlan, click **Governance.**
2. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
3. In the playbooks manager, click the playbook you'd like to modify.
4. On your playbook page:
    * To edit the name and description of your playbook, hover over your playbook and click **Edit**.
    * To modify the rules of your playbook, click **Rules** to make your changes and then click **Update** to save them.
        + (Optional) To add a new rule to an existing playbook, in the left menu for playbook rules, click **\+ Add new Rule**.Â
    * To turn off a playbook filter, to the right of any filter, click the three horizontal dots and then click **Disable**. Click **Enable** to turn on any disabled filters.
    * To modify the schedule for your playbook, in the upper right of your screen:
        + Click **Run Now** to run it immediately.
        + Click the **pencil icon** to modify or remove the schedule.

[https://demo.arcade.software/8BxgZBcHpdqUU7Az55R3?embed&show_copy_link=true](https://demo.arcade.software/8BxgZBcHpdqUU7Az55R3?embed&show_copy_link=true)

Delete a playbook[â](#delete-a-playbook "Direct link to Delete a playbook")
-----------------------------------------------------------------------------

To delete an existing playbook:

1. From the left menu of any screen in Atlan, click **Governance.**
2. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
3. In the playbooks manager, hover over the playbook you'd like to delete and click **Delete Playbook**.
4. Click **Delete** to confirm.

Enable playbook notifications[â](#enable-playbook-notifications "Direct link to Enable playbook notifications")
-----------------------------------------------------------------------------------------------------------------

You can set up Slack or Microsoft Teams alerts for your playbook runs in Atlan. This can help you monitor your playbooks directly in Slack or Microsoft Teams. You can also choose to receive alerts for failed playbook runs only.

Before you can enable notifications for playbooks, you will need to either:

* [Integrate Slack and Atlan](/product/integrations/collaboration/slack/how-tos/integrate-slack)
* [Integrate Microsoft Teams and Atlan](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams)

To enable notifications for playbook runs:

1. From the left menu of any screen in Atlan, click **Governance**.
2. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
3. In the upper\-right of the playbooks manager, under *Activity*, click the bell icon.
4. In the *Enable notifications* popup:
    * Click **Setup now** to integrate [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).
    * If you have already integrated Slack or Microsoft Teams, click **Enable**.
5. In the notifications setup dialog, configure the following:
    1. For *Notifications channel*, you can either:
        * If you have already configured a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel to receive workflow alerts, that channel will be preselected. You can use the same channel to receive both workflow and playbook run alerts and skip to the next step.
        * If you have not configured a workflow alerts channel or want to add a different one, enter the channel name to receive notifications for playbook runs. This channel will be displayed as the *Playbooks alert channel*Â in yourÂ[Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) integration.
    2. To select the type of notifications you want to receive, you can either:
        1. Click **Both success and failure alerts** to receive notifications for both successful and failed playbook runs.
        2. Click **Failure alerts only** to limit notifications to failed playbook runs only.
    3. Click **Save** to save your notification preferences.
6. (Optional) To disable notifications, from the notifications setup dialog, remove the playbook alerts channel configured for [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).

You will now receive [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) notifications for all your playbook runs in Atlan! ð

The Atlan bot will share playbook run alerts, including details like run status, start time, run time, trigger type, last three runs, and more.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousSet up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks)[NextAutomate data profiling](/product/capabilities/playbooks/how-tos/automate-data-profiling)

Copyright Â© 2025 Atlan Pte. Ltd.

