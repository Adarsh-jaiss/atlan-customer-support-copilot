# Source URL
https://docs.atlan.com/secure-agent/2.0/how-tos/verify-container-images

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/2.0/how-tos/verify-container-images
link-alternate: https://docs.atlan.com/secure-agent/2.0/how-tos/verify-container-images
meta-description: Verify the authenticity and integrity of Secure Agent container images with Cosign
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Verify the authenticity and integrity of Secure Agent container images with Cosign
meta-og-locale: en
meta-og-title: Verify container images | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/2.0/how-tos/verify-container-images
meta-robots: noindex, nofollow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Verify container images | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Verify container images
=======================

Container image verification prevents malicious or modified images from entering your environment. Before you deploy a Secure Agent container, verify its signature so you can be confident the image was built by Atlanâs official CI/CD pipeline, hasn't been modified since signing, and is traceable to a specific GitHub workflow. This guide provides step\-by\-step instructions to verify images using **Cosign**.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

* **Cosign** is installed on your system. If not, follow the [official Cosign installation guide](https://docs.sigstore.dev/cosign/installation/).
* You can access the container image you want to verify.
* You know the image name and tag (for example: `public.ecr.aws/atlanhq/redshift-app:2.0`).

Verify container image[â](#verify-container-image "Direct link to Verify container image")
--------------------------------------------------------------------------------------------

1. **Run the verification command**: Run the following command, replacing `<image-name>` and `<full-image-path>` with your values. For example, `public.ecr.aws/atlanhq/redshift-app:2.0`:

    ```
    COSIGN_EXPERIMENTAL=1 cosign verify \  
        --allow-insecure-registry \  
        --certificate-identity="https://github.com/atlanhq/<image-name>/.github/workflows/test-image-sign.yaml@refs/heads/image-signing-test" \  
        --certificate-oidc-issuer="https://token.actions.githubusercontent.com" \  
        <full-image-path>

    ```
 ****Example: verify Redshift connector image****

    ```
    COSIGN_EXPERIMENTAL=1 cosign verify \  
        --allow-insecure-registry \  
        --certificate-identity="https://github.com/atlanhq/connector-auth/.github/workflows/test-image-sign.yaml@refs/heads/image-signing-test" \  
        --certificate-oidc-issuer="https://token.actions.githubusercontent.com" \  
        public.ecr.aws/atlanhq/redshift-app:2.0

    ```
2. **Interpret the results**: Verify the results produced by the command:

    * If the verification is **successful**, Cosign returns a verified signature along with signer details.

 ****Example: verification successful****

    ```
          Verification successful!  
          - Image Digest (SHA256): abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890  
          - Signed by: atlanhq/<image-name>/.github/workflows/image-sign.yaml  
          - OIDC Issuer: https://token.actions.githubusercontent.com

    ```
        * If the verification **fails**, it means the image is either unsigned or has been modified. Don't proceed with deployment until you obtain a valid signed image.

 ****Example: verification failed****

    ```
          Verification failed!  
          - Error: Signature verification failed  
          - Reason: The signature doesn't match the expected digest.  
          - Suggested Action: Check the image signature and ensure it was signed correctly.

    ```

Troubleshooting[â](#troubleshooting "Direct link to Troubleshooting")
-----------------------------------------------------------------------

If verification fails:

1. Make sure you are using the correct **image path and tag**.
2. Verify the **certificate identity** (the `--certificate-identity` value) matches the repository/workflow that signed the image.
3. Confirm network connectivity to Sigstore (Cosign uses transparency and registry services).

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you are still facing issues and need help, contact [**\[email protected]**](/cdn-cgi/l/email-protection#a0d3c5c3d5d2c9d4d9e0c1d4ccc1ce8ec3cfcd) for assistance.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Security](/secure-agent/2.0/references/security): Security architecture, authentication, encryption, and compliance controls for Secure Agent 2\.0\.
* [Configure network security](/secure-agent/2.0/how-tos/configure-network-security): Set firewall rules, proxies, and Kubernetes policies to control agent traffic.
**Tags:*** [secure\-agent](/tags/secure-agent)
* [security](/tags/security)
* [container\-images](/tags/container-images)

[PreviousSecurity](/secure-agent/2.0/references/security)[NextConfigure network security](/secure-agent/2.0/how-tos/configure-network-security)

Copyright Â© 2025 Atlan Pte. Ltd.

