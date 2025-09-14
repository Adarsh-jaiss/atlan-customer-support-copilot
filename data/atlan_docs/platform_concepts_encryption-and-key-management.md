# Source URL
https://docs.atlan.com/platform/concepts/encryption-and-key-management

================================================================================

<!--
canonical: https://docs.atlan.com/platform/concepts/encryption-and-key-management
link-alternate: https://docs.atlan.com/platform/concepts/encryption-and-key-management
meta-description: Learn about encryption and key management.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about encryption and key management.
meta-og-locale: en
meta-og-title: Encryption and key management | Atlan Documentation
meta-og-url: https://docs.atlan.com/platform/concepts/encryption-and-key-management
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Encryption and key management | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Encryption and key management
=============================

Atlan has adopted global industry standards in security practices and solutions. Amazon S3 server\-side encryption secures the S3 bucket launched by Atlan.

Atlan uses AES\-256 as the SSE algorithm in the S3 bucket. All the EBS (Elastic Block Storage) launched by Atlan is encrypted. Atlan uses encrypted storage classes to provision persistent volumes to the microservices running inside the Kubernetes cluster.

Key and credential management[â](#key-and-credential-management "Direct link to Key and credential management")
-----------------------------------------------------------------------------------------------------------------

Atlan uses [HashiCorp Vault](https://www.vaultproject.io) to manage the following:

* Keys \- Vault manages encryption keys to encrypt sensitive data at rest and in transit.
* SecretsÂ \- Vault encrypts and securely stores secrets such as API keys, tokens, and credentials.
* Passwords \- passwords are hashed and stored encrypted.

Data in transit[â](#data-in-transit "Direct link to Data in transit")
-----------------------------------------------------------------------

Atlan uses standard encryption to protect data in transit.

Atlan uses hypertext transfer protocol secure (HTTPS) for secure communication when data is in transit. This protocol is encrypted using Transport Layer Security (TLS).

Two\-factor authentication (2FA) is also supported for accessing resources.

Data at rest[â](#data-at-rest "Direct link to Data at rest")
--------------------------------------------------------------

Data\-At\-Rest Encryption (DARE) is the encryption of data stored in different storage components and not moving through networks.

### Cloud storage[â](#cloud-storage "Direct link to Cloud storage")

Atlan encrypts the data at rest in different cloud resources like volumes and cloud storage using cloud provider\-managed keys.

* Amazon S3 \- Atlan uses [server\-side encryption with Amazon S3 managed keys (SSE\-S3\)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) to encrypt the data at rest in Amazon S3\. This encryption uses 256\-bit Advanced Encryption Standard Galois/Counter Mode (AES\-GCM) to encrypt all uploaded objects.
* Azure Blob Storage \- Atlan uses [Microsoft\-managed keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption) to encrypt the data at rest in Azure Blob Storage. This encryption uses 256\-bit AES encryption and is FIPS 140\-2 compliant.
* Google Cloud Storage \- Atlan uses [Google\-managed keys](https://cloud.google.com/storage/docs/encryption/default-keys) to encrypt the data at rest in Google Cloud Storage. This encryption uses AES\-256 using Galois/Counter Mode (GCM) to encrypt all uploaded objects.

### Volumes[â](#volumes "Direct link to Volumes")

Volumes are used by the StatefulSet running in the tenants. These volumes are encrypted at rest by the cloud provider\-managed keys.

* Amazon Web Services (AWS) \- Atlan uses the default [Amazon Elastic Block Store (EBS) encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html) for encrypting the data at rest in all the volumes. Amazon EBS encrypts volume with a data key using industry\-standard AES\-256 data encryption.
* Microsoft Azure \- Atlan uses [Azure Storage encryption](https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption), which uses server\-side encryption (SSE), for encrypting the data at rest in all the volumes. Data in Azure managed disks is encrypted transparently using 256\-bit AES encryption, one of the strongest block ciphers available, and is FIPS 140\-2 compliant.
* Google Cloud Platform (GCP) \- Atlan uses Google\-managed encryption to encrypt the data at rest in all the volumes. This encryption uses the Advanced Encryption Standard (AES) algorithm, AES\-256\.

### Over the internet[â](#over-the-internet "Direct link to Over the internet")

Communication between the client and Atlan public endpoints is always conducted over hypertext transfer protocol secure (HTTPS). HTTPS is encrypted in order to increase the security of data transfer. Any user data transmitted over the internet is SSL\-encrypted over HTTPS.

**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousData and metadata persistence](/platform/concepts/data-and-metadata-persistence)[NextHigh availability and disaster recovery (HA/DR)](/platform/concepts/high-availability-and-disaster-recovery-ha-dr)

Copyright Â© 2025 Atlan Pte. Ltd.

