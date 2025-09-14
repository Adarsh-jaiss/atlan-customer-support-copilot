# Source URL
https://docs.atlan.com/platform/references/cloud-logging-and-monitoring

================================================================================

<!--
canonical: https://docs.atlan.com/platform/references/cloud-logging-and-monitoring
link-alternate: https://docs.atlan.com/platform/references/cloud-logging-and-monitoring
meta-description: Learn about Atlan's Cloud logging and monitoring exported in OpenTelemetry Protocol (OTLP) format for SIEM integration and security monitoring.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about Atlan's Cloud logging and monitoring exported in OpenTelemetry Protocol (OTLP) format for SIEM integration and security monitoring.
meta-og-locale: en
meta-og-title: Cloud logging and monitoring | Atlan Documentation
meta-og-url: https://docs.atlan.com/platform/references/cloud-logging-and-monitoring
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Cloud logging and monitoring | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Cloud logging and monitoring
============================

Atlan exports IAM service event logs in the OpenTelemetry Protocol (OTLP) specification and securely delivers them to the Amazon S3 or Google Cloud Storage (GCS) bucket of your organization. This enables you to monitor login events and integrate logs with security information and event management (SIEM) systems for real\-time security monitoring and alerts.

Key aspects[â](#key-aspects "Direct link to Key aspects")
-----------------------------------------------------------

* Log format and structure: The OTLP format ensures seamless integration with SIEM systems, and logs are organized by date and event type. Logs are stored in a compressed format in your organization's preferred object storage (S3 or GCS). Once uncompressed, the logs will be available in a JSON file format containing multiple log entries.

* Each file is saved for an hour in the following folder structure in gzip:

```
/year=YYYY/month=MM/day=DD/hour=HH/logs_<rnd-9-digit-int>.json.gz  

```
* The JSON file structure is as follows:

```
{  
    "resourceLogs": [  
        {  
            "resource": {  
                "attributes": [ // k8s metadata  
                ]  
            },  
            "scopeLogs": [  
                {  
                    "scope": {},  
                    "logRecords": [  
                        {  
                            "timeUnixNano": "1725861538220747913",  
                            "observedTimeUnixNano": "1726071786185095727",  
                            "body": {  
                                "stringValue": "//redacted logline"  
                            },  
                            "traceId": "",  
                            "spanId": ""  
                        }  
                    ]  
                },  
                {...},  
            ]  
        },  
        {  
            "resource": {...},  
            "scopeLogs": [...]  
        }  
    ]  
}  

```

* Secure delivery\- Logs are encrypted in transit and at rest, with mechanisms to validate data integrity.
* Customer access: Logs are easily accessible through S3 or GCS, allowing for a flexible monitoring and alerting setup.

Enabling event logs in AWS[â](#enabling-event-logs-in-aws "Direct link to Enabling event logs in AWS")
--------------------------------------------------------------------------------------------------------

### Prerequisites[â](#prerequisites "Direct link to Prerequisites")

* Enable bucket versioning. Both source and destination buckets must have versioning enabled. See [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-requirements.html).
* Customer\-provided bucket details: account ID, bucket name, and region.
* Atlan will use these details to create an IAM role on the Atlan side and then provide you with the bucket policy to be attached.
* Once you have confirmed that the bucket policy has been attached, Atlan will complete the final step of setting up log replication. Atlan support will complete the configuration on the Atlan side.

You will need to attach the following policy to your destination bucket:

```
{  
    "Version": "2012-10-17",  
    "Id": "",  
    "Statement": [  
        {  
            "Sid": "Set-permissions-for-objects",  
            "Effect": "Allow",  
            "Principal": {  
                "AWS": "<Atlan Role ARN>"  
            },  
            "Action": [  
                "s3:ReplicateObject",  
                "s3:ReplicateDelete",  
                "s3:GetBucketVersioning",  
                "s3:PutBucketVersioning"  
            ],  
            "Resource": [  
                "arn:aws:s3:::<Customer S3 Bucket Name>/*",  
                "arn:aws:s3:::<Customer S3 Bucket Name>"  
            ]  
        }  
    ]  
}  

```

### Continuous replication to S3 bucket[â](#continuous-replication-to-s3-bucket "Direct link to Continuous replication to S3 bucket")

Application audit logs are streamed to Atlan's S3 bucket in near real time â within 10 seconds of being generated. This is a continuous process. Once the logs are available in Atlan's bucket, the logs will be replicated to your organization's S3 bucket within 15 minutes. The replication is ongoing and occurs without delays. This ensures that logs are continuously transferred as they are generated, with no waiting period between replications.

Enabling event logs in GCP[â](#enabling-event-logs-in-gcp "Direct link to Enabling event logs in GCP")
--------------------------------------------------------------------------------------------------------

For Google Cloud Platform (GCP), Atlan utilizes [Logs Router](https://cloud.google.com/logging/docs/export/configure_export_v2) to transfer logs from the GCS bucket of your Atlan tenant to a destination bucket of your choice. The destination must be supported by the Logs Router.

* The organization must provide details of the destination where the logs should be synced. This destination must be supported by the Logs Router.
* Atlan will create a Log Router sink and provide you with a service account.
* Depending on the selected destination, you will need to configure the necessary permissions for the service account as outlined in [Google documentation](https://cloud.google.com/logging/docs/export/configure_export_v2#dest-auth).
* Once you have configured the permissions, the logs will begin syncing to your preferred destination.

New sinks to Cloud Storage buckets may take several hours to start routing log entries. Sinks to Cloud Storage are processed hourly while other destination types are processed in real time.

**Tags:*** [security](/tags/security)
* [monitoring](/tags/monitoring)
* [logs](/tags/logs)
* [compliance](/tags/compliance)
* [siem](/tags/siem)
* [opentelemetry](/tags/opentelemetry)
* [otlp](/tags/otlp)

[PreviousHigh availability and disaster recovery (HA/DR)](/platform/concepts/high-availability-and-disaster-recovery-ha-dr)[NextGenerate HAR files and console logs](/platform/how-tos/generate-har-files-and-console-logs)

Copyright Â© 2025 Atlan Pte. Ltd.

