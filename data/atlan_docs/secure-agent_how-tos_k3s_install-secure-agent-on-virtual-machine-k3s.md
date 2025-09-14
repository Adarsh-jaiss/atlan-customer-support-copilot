# Source URL
https://docs.atlan.com/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s
link-alternate: https://docs.atlan.com/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s
meta-description: This page provides instructions for installing the Secure Agent on a virtual machine (VM) by deploying [K3s in a rootless execution mode](https://docs.k3s.io/advanced#running-rootless-servers-experimental:~:text=to%20take%20effect.-,Running%20Rootless%20Servers,-\(Experimental\)%E2%80%8B).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This page provides instructions for installing the Secure Agent on a virtual machine (VM) by deploying [K3s in a rootless execution mode](https://docs.k3s.io/advanced#running-rootless-servers-experimental:~:text=to%20take%20effect.-,Running%20Rootless%20Servers,-\(Experimental\)%E2%80%8B).
meta-og-locale: en
meta-og-title: Install on Virtual Machine (K3s) | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Install on Virtual Machine (K3s) | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Install on Virtual Machine (K3s)
================================

**Did you know?**Secure Agent installation can be done by a non\-root user. Root access is **only** needed for setting up system prerequisites before installation.

This page provides instructions for installing the Secure Agent on a virtual machine (VM) by deploying [K3s in a rootless execution mode](https://docs.k3s.io/advanced#running-rootless-servers-experimental:~:text=to%20take%20effect.-,Running%20Rootless%20Servers,-(Experimental)%E2%80%8B).

System requirements[â](#system-requirements "Direct link to System requirements")
-----------------------------------------------------------------------------------

Before installing the Secure Agent, ensure that the virtual machine (VM) meets the following requirements:

* At least 80GB of available disk space.
* A Linux\-based OS running on an amd64 (x86\_64\) architecture with `systemd` enabled.
* The Secure Agent requires the following ports for internal services. Ensure these ports are open and accessible:
    + Kubernetes API: `6443`
    + Internal K3s proxy: `10443`, `10080`
    + MinIO storage: `9000`, `32075`
    + MinIO console: `9001`, `30614`
    + Traefik ingress: `31037`, `32547`

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before installing the Secure Agent, complete the following setup steps to prepare your Atlan tenant and virtual machine.

### Configure Atlan tenant[â](#configure-atlan-tenant "Direct link to Configure Atlan tenant")

In Atlan, complete the following steps to configure the tenant:

1. Sign in to your tenant as an Atlan admin.
2. From the left menu of any screen, click **Admin**.
3. Under *Workspace* click **Labs**.
4. Navigate to *Workflow Center*.
5. Enable the **Crawl assets using Secure Agent** toggle.

### Configure virtual machine[â](#configure-virtual-machine "Direct link to Configure virtual machine")

On the virtual machine, complete the following steps to configure it:

1. Log in as a root user.
2. Create the required directory to configure cgroup delegation with:

    ```
    sudo mkdir -p /etc/systemd/system/[[email protected]](/cdn-cgi/l/email-protection)

    ```
3. Use the below `cat` command to create the delegation file with required configuration:

    ```
    cat <<EOF | sudo tee /etc/systemd/system/[[email protected]](/cdn-cgi/l/email-protection)/delegate.conf  
    [Service]  
    Delegate=cpu cpuset io memory pids  
    EOF

    ```
4. Use the below command to reload systemd:

    ```
    sudo systemctl daemon-reload && sudo reboot

    ```
5. To keep the Secure Agent running after logout, the root user must enable service persistence for the user installing it by running the following command:

    ```
    sudo loginctl enable-linger ``<user_installing_secure_agent>``

    ```

    * Replace `<user_installing_secure_agent>` with the actual username of the user installing the Secure Agent.
6. Run the following commands to enable IP forwarding so Secure Agent can communicate with other Secure Agent instances and make network requests to the Atlan tenant.

    * IPv4 forwarding:

    ```
        sudo sysctl -w net.ipv4.ip_forward=1

    ```
        * IPv6 forwarding:

    ```
        sudo sysctl -w net.ipv6.conf.all.forwarding=1

    ```
7. To manage containerized workloads, install fuse\-overlayfs with:

    ```
    sudo yum install fuse-overlayfs

    ```
8. The VM must have access to the source systemâs secret manager to retrieve secrets. For more information, see how to provide access for some popular secret managers listed below:

    * **AWS:** [Configure access for AWS Secrets Manager.](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_iam-policies.html)
        * **Azure:** [Configure access for Azure Key Vault.](https://learn.microsoft.com/en-us/azure/frontdoor/managed-identity)
        * **GCP:** [Configure access for GCP Secret Manager.](https://cloud.google.com/secret-manager/docs/access-control)

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

Before installing the Secure Agent, the user must have the following permissions:

* Create and modify directories in the userâs home directory: `~/.config/systemd/user`, `~/bin`, `~/.local/bin`, and `~/.rancher`.
* Create and write log files.
* Execute standard Linux commands: `mkdir`, `chmod`, `tar`, and `sed`.

Download Agent packages[â](#download-agent-packages "Direct link to Download Agent packages")
-----------------------------------------------------------------------------------------------

Follow these steps to download the necessary packages for setting up the Secure Agent.

**Did you know?**The steps require Internet access to download files. In case the VM has no Internet connectivity, one can download them separately and copy the files to the VM.

Install Secure Agent[â](#install-secure-agent "Direct link to Install Secure Agent")
--------------------------------------------------------------------------------------

Follow these steps to install and configure the Secure Agent on the virtual machine.

**Did you know?**The installation can be performed by both root (administrative) and non\-root (standard) users.

* Navigate to the deployment folder (if not already):

```
cd atlan-secure-agent  

```
* Run the following command to extract the Secure Agent install package:

```
tar -xvf atlan_install_config_main.tar.gz  

```
* The `rootless-install` folder is extracted from the Secure Agent install package. Run the following command to create an environment file using the `env.sample` file located in the `rootless-install` folder:

```
cp ./rootless-install/.env.sample .env  

```
* Open the `.env` file and update these variables:

```
VAR_ATLAN_SECURE_AGENT_NAME=prod-atlan-agent-vm  
VAR_ATLAN_DOMAIN=tenant.atlan.com  
VAR_ATLAN_TOKEN=<atlan-api-token>  
VAR_ATLAN_DATA_PATH=</absolute/path/to/atlan-secure-agent>  

```
* Replace the environment variable values:

    + `VAR_ATLAN_SECURE_AGENT_NAME:` Specify a meaningful and unique name for the Secure Agent. For example, `prod-atlan-agent-vm`.
    + `VAR_ATLAN_DOMAIN:` Enter your Atlan tenant domain. For example, `tenant.atlan.com`.
    + `VAR_ATLAN_TOKEN:` Provide the API key (Bearer token). For more information on generating an API key, see *Create a bearer token*.
    + `VAR_ATLAN_DATA_PATH:` Specify the path where the `atlan-secure-agent` directory is located.
* Run the following command to grant execution permission for the setup script:

```
chmod +x rootless-install/setup.sh  

```
* The extracted `setup.sh` file installs the Secure Agent and K3s. Run the following command to execute the installer:

```
./rootless-install/setup.sh .env  

```
* While the installation is in progress, you can run the following command to verify the progress:

```
kubectl get pods -A  

```

Verify installation[â](#verify-installation "Direct link to Verify installation")
-----------------------------------------------------------------------------------

After installing the Secure Agent, verify that it's running correctly. You can check its status through the Atlan UI or by accessing the Agent UI on K3s.

1. Log in as an Atlan admin or a similar role to access your tenant. For example: `https://<tenant>.atlan.com`.
2. Navigate to the **Agent** tab.
3. In the *Secure Agents* list, use the *Search for agents* box to enter your Secure Agent name.
4. If the agent appears in the list and is marked **Active**, installation is complete.

Troubleshooting[â](#troubleshooting "Direct link to Troubleshooting")
-----------------------------------------------------------------------

If you encounter issues during installation, follow these steps:

* Check the logs using the following command for detailed error messages that may indicate the root cause:

```
tail -f logs/k3s.log  

```
* For K3s rootless mode issues, follow the [K3s official documentation](https://rancher.com/docs/k3s/latest/en/advanced/#rootless) for troubleshooting rootless issues.

If you continue to face issues, contact Atlan support by [creating a ticket](/support/submit-request).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousSecure Agent](/secure-agent)[NextInstall on AWS EKS](/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks)

Copyright Â© 2025 Atlan Pte. Ltd.

