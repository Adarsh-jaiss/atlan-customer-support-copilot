# Source URL
https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk
link-alternate: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk
meta-description: Learn about set up amazon msk.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up amazon msk.
meta-og-locale: en
meta-og-title: Set up Amazon MSK | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Amazon MSK | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Amazon MSK
=================

warning**ð¤ Who can do this?** You will need your Amazon MSK administrator to run these commands \- you may not have access yourself.

Atlan supports IAM role authentication for fetching metadata from Amazon Managed Streaming for Apache Kafka (Amazon MSK). This method uses an AWS role ARN and region to fetch metadata.

For IAM role authentication, Atlan supports TLS encryption to ensure secure and encrypted communication between Atlan and your Amazon MSK cluster.

Additionally, Atlan currently only supports the following:

* Apache Kafka 2\.7\.1 or higher for Amazon MSK
* Provisioned deployment

Create IAM policy[â](#create-iam-policy "Direct link to Create IAM policy")
-----------------------------------------------------------------------------

To create an IAM policy with the necessary permissions, follow [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Create the policy using the following JSON:

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Effect": "Allow",  
            "Action": [  
                "kafka-cluster:Connect"  
                "kafka-cluster:DescribeCluster",  
                "kafka-cluster:DescribeGroup",  
                "kafka-cluster:DescribeTopic",  
                "kafka-cluster:DescribeTopicDynamicConfiguration",  
                "kafka-cluster:DescribeClusterDynamicConfiguration"  
            ],  
            "Resource": [  
                "arn:aws:kafka:<region>:<account_id>:cluster/<cluster_name>/<cluster_uuid>",  
                "arn:aws:kafka:<region>:<account_id>:group/<cluster_name>/<cluster_uuid>/*",  
                "arn:aws:kafka:<region>:<account_id>:topic/<cluster_name>/<cluster_uuid>/*"  
            ],  
        }  
    ]  
}  

```
* Replace `<region>` with the AWS region of your Amazon MSK cluster.
* Replace `<account_id>` with your AWS account ID.
* Replace `<cluster_name>` with the name of your Amazon MSK cluster.
* Replace `<cluster_uuid>` with the universally unique identifier (UUID) of your Amazon MSK cluster.

IAM permissions[â](#iam-permissions "Direct link to IAM permissions")
-----------------------------------------------------------------------

Atlan requires the following permissions:

* `kafka-cluster:Connect` \- grants permission to connect to the Amazon MSK cluster as a Kafka client, allowing the user or service to interact with Kafka brokers for producing and consuming messages.
* `kafka-cluster:DescribeCluster` \- grants permission to extract metadata about the Amazon MSK cluster, such as its configuration, status, and associated brokers.
* `kafka-cluster:DescribeGroup` \- grants permission to describe consumer groups in the Kafka cluster. This includes metadata such as consumer group, members, and their assigned partitions.
* `kafka-cluster:DescribeTopic` \- grants permission to describe Kafka topics, including metadata such as partitions and replication factor for a topic.
* `kafka-cluster:DescribeTopicDynamicConfiguration` \- allows access to view the dynamic configurations of Kafka topics. This includes topic\-level overrides for configurations like retention periods, which can be changed without requiring a cluster restart.
* `kafka-cluster:DescribeClusterDynamicConfiguration` \- allows access to view the dynamic configuration settings of a Kafka cluster. These configurations can change without restarting the cluster and include parameters like replication settings, broker properties, and more.

Role delegation\-based authentication[â](#role-delegation-based-authentication "Direct link to Role delegation-based authentication")
---------------------------------------------------------------------------------------------------------------------------------------

Using the policy created above, configure IAM role delegation\-based authentication.

To configure role delegation\-based authentication:

1. [Raise a support ticket](/support/submit-request) to get the ARN of the *Node Instance Role* for your Atlan EKS cluster.
2. Create a new role in your AWS account by following [the steps in the AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).

    1. When prompted for policies, attach the policy created in the previous step to this role.
        2. When prompted, create a trust relationship for the role using the following trust policy. (Replace `<atlan_nodeinstance_role_arn>` with the ARN received from Atlan support.)

    ```
            {  
              "Version": "2012-10-17",  
              "Statement": [  
                {  
                  "Effect": "Allow",  
                  "Principal": {  
                    "AWS": "<atlan_nodeinstance_role_arn>"  
                  },  
                  "Action": "sts:AssumeRole",  
                  "Condition": {}  
                }  
              ]  
            }

    ```
        3. Now, [reach out to Atlan support](/support/submit-request) with:

    * The name of the role you created above.
                * The ID of the AWS account where the role was created.
    danger Wait until the support team confirms the account is allowlisted to assume the role before running the crawler.
**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousAmazon MSK](/apps/connectors/messaging/amazon-msk)[NextSet up a private network link to Amazon MSK](/apps/connectors/messaging/amazon-msk/how-tos/set-up-a-private-network-link-to-amazon-msk)

Copyright Â© 2025 Atlan Pte. Ltd.

