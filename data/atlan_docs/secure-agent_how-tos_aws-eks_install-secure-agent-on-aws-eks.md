# Source URL
https://docs.atlan.com/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks
link-alternate: https://docs.atlan.com/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks
meta-description: This guide provides step-by-step instructions to install the Secure Agent on an Amazon Elastic Kubernetes Service (AWS EKS) cluster.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This guide provides step-by-step instructions to install the Secure Agent on an Amazon Elastic Kubernetes Service (AWS EKS) cluster.
meta-og-locale: en
meta-og-title: Install on AWS EKS | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Install on AWS EKS | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Install on AWS EKS
==================

This guide provides step\-by\-step instructions to install the Secure Agent on an Amazon Elastic Kubernetes Service (AWS EKS) cluster.

System requirements[â](#system-requirements "Direct link to System requirements")
-----------------------------------------------------------------------------------

To deploy the Secure Agent on AWS EKS, ensure the following system requirements are met:

1. Configure network access between your Secure Agent and Atlan tenant. For more information, see [Whitelisting Secure Agent](/secure-agent/references/security#whitelisting).
2. You need Kubernetes version 1\.19 or higher.
3. You need to install Helm and kubectl on the machine you're using to connect to the AWS EKS cluster.
4. You need at least 1 node for base services with a disk space of 20 GB and instance configuration as below:

    | Environment | Minimum instance type | Recommended instance type |
    | --- | --- | --- |
    | Production | t3\.large | Custom based on workload |
    | Non\-production | t3\.large | t3\.xlarge |

    info ðª **Did you know?** For optimal autoscaling, scale nodes based on the number of concurrent workflows.

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

Before installing the Secure Agent, make sure the following permissions are in place:

### Permissions for the Installer[â](#permissions-for-the-installer "Direct link to Permissions for the Installer")

The user, service or system account performing the installation needs access to the EKS cluster and permissions to manage Custom Resource Definitions (CRDs).

1. Ensure the kubeconfig is correctly configured for your target EKS cluster. If needed, use the following command to configure or update your kubeconfig file.

    ```
    aws eks update-kubeconfig --region ``<region>`` --name ``<cluster-name>``

    ```

    * Replace `<region>` with your AWS region (for example, us\-east\-1\) and `<cluster-name>` with the name of your EKS cluster.
2. The installer needs permission to create, update, and delete Custom Resource Definitions (CRDs). If not using the cluster\-admin role, grant the following:

* Create a file named `agent-crd-permissions.yaml` on your machine.
* Copy the following content into the file:

```
apiVersion: rbac.authorization.k8s.io/v1  
kind: ClusterRole  
metadata:  
  # Use a descriptive name  
  name: helm-crd-installer-role  
rules:  
- apiGroups: ["apiextensions.k8s.io"]  
  resources: ["customresourcedefinitions"]  
  # Recommended verbs for Helm CRD management  
  verbs: ["create", "get", "list", "watch", "update", "patch", "delete"]  
---  
apiVersion: rbac.authorization.k8s.io/v1  
kind: ClusterRoleBinding  
metadata:  
  # Use a descriptive name  
  name: helm-crd-installer-binding  
subjects:  
# *** IMPORTANT: Modify this section based on who is running Helm *** 
# Choose ONE of the following options and replace placeholders.  
# Option 1: Bind to a specific User  
- kind: User  
  name: "your-kubernetes-username" # Replace with the installing user's K8s username recognized by the cluster  
  apiGroup: rbac.authorization.k8s.io  
# Option 2: Bind to a specific Group  
# - kind: Group  
#   name: "your-kubernetes-groupname" # Replace with the installing user's K8s group name  
#   apiGroup: rbac.authorization.k8s.io  
# Option 3: Bind to a Service Account (e.g., for CI/CD pipelines)  
# - kind: ServiceAccount  
#   name: "installer-sa-name" # Replace with the installer SA's name  
#   namespace: "installer-sa-namespace" # Replace with the installer SA's namespace  
roleRef:  
  # This refers to the ClusterRole created above  
  kind: ClusterRole  
  name: helm-crd-installer-role  
  apiGroup: rbac.authorization.k8s.io  

```
    Follow the comments in the file to replace the placeholders. In the above file:

    + Resource: `customresourcedefinitions` \- needed for managing CRDs in the cluster.
    + API Group: `apiextensions.k8s.io` \- required to work with CRDs.
    + Verbs: create, get, list, update, delete \- necessary for installing, inspecting, updating, and cleaning up CRDs using Helm.
    + ClusterRoleBinding: needed to assign the role to the user or group performing the installation.
    + Once youâve updated the placeholders, use the below `kubectl` command to apply the configuration:

4. Once youâve updated the placeholders, use the below kubectl command to apply the configuration:

    ```
    kubectl apply -f agent-crd-permissions.yaml

    ```

### Permissions for the Secure Agent Pod (Runtime)[â](#permissions-for-the-secure-agent-pod-runtime "Direct link to Permissions for the Secure Agent Pod (Runtime)")

The Secure Agent runs as pods in your EKS cluster and requires permissions to interact with AWS services like S3\. These permissions are granted through IAM Roles for Service Accounts (IRSA).

1. Create a new IAM role for the Secure Agent pod.
2. Configure the trust policy to enable the Secure Agentâs Kubernetes service account to assume the role. Make sure the argo\-workflow service account exists in the same namespace where you plan to install the agent. For more information, see the AWS documentation on [IAM roles for service accounts (IRSA)](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html).

    * Example: Trust policy for the argo\-workflow service account:

    ```
        "Condition": {  
          "StringEquals": {  
            ":sub": "system:serviceaccount::argo-workflow"  
          }  
        }

    ```
            Replace `<namespace>` with the namespace where you plan to install agent.
        * Create an S3 bucket (or use an existing one), and attach the following permissions to the IAM role used by the Secure Agent:

    + `s3:PutObject`: Needed to write logs and artifacts
            + `s3:GetObject`: Needed to read logs and artifacts.
            + `s3:ListBucket`: Needed by Argo artifact repository for listing objects.

**Did you know?**The Helm chart automatically configures the necessary Kubernetes RBAC for Argo Workflows, which the Secure Agent uses. No additional configuration is required for the Secure Agent pod..

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before proceeding, complete the following setup steps to prepare your Atlan tenant and AWS EKS cluster.

### Configure Atlan tenant[â](#configure-atlan-tenant "Direct link to Configure Atlan tenant")

In your Atlan tenant:

1. Sign in as an Atlan admin.
2. Go to **Admin** from the left menu.
3. Under **Workspace**, click **Labs**.
4. Navigate to **Workflow Center**.
5. Enable the **Crawl assets using Secure Agent** toggle.

### Configure Secure Agent settings[â](#configure-secure-agent-settings "Direct link to Configure Secure Agent settings")

The `agent_config_values.yaml` file is used to configure the Secure Agent, Argo Workflows, and storage for the AWS EKS cluster. Follow these instructions on the machine where you're performing the installation.

1. Create a file named `agent_config_values.yaml` file.
2. Copy the configuration below into the file:

    ```
    # -----------------------------------------------------------------------------------------  
    # Agent core settings   -  Follow the comments to update:  
    # 1. Image registry settings - To be updated only if you are using a private image registry  
    # 2. Atlan connection settings - To be updated only if you want agent to use the S3 bucket  
    # 3. Argo Private repository settings - To be updated only if you are using private repository for Argo workflows  
    # 4. Kubernetes Pod Annotation settings - To be updated only if you want to customize the Kubernetes podâs metadata  
    # 5. Argo Private repository settings - To be updated only if you are using private repository for Argo workflows  
    # 6. S3 storage settings - To be updated with S3 bucket details.  
    # -----------------------------------------------------------------------------------------  
    agent:  
      enabled: true    
      enableStorageProxy: false    
      ca:  
        crt: ""    
      #Provide a base64-encoded string of a JSON object, e.g., {"client_id": 123, "client_secret": 1243}.  
      #Set this only if you need to include custom headers in API calls made by the agent.  
      restAPIHeaders: ""   
      versions:  
        k3s: ""  
        k8s: ""  
        helm: ""  
      # 1. Image Registry Settings  
      image:  
      # Only update if you're using a private image registry  
        registry: "public.ecr.aws"    
        repository: "atlanhq"    
        # Only update if you're using custom images  
        restImageName: "rest-2"  
        restImageTag: "1.0"  
        # Only update if you're using custom images  
        jdbcImageName: "jdbc-metadata-extractor-with-jars"  
        jdbcImageTag: "1.0"  
        # Only update if you're using custom images  
        credentialImageName: "connector-auth"  
        credentialImageTag: "1.0"  
        # Only update if you're using custom images  
        csaScriptsImageName: "marketplace-csa-scripts"  
        csaScriptsImageTag: "1.0"  
        # Marketplace scripts image details - keep these values as is unless using custom images  
        marketplaceScriptsImageName: "marketplace-scripts-agent"  
        marketplaceScriptsImageTag: "1.0"  
        pullPolicy: IfNotPresent  
        pullSecrets: []  # Add pull secrets if using private registry  
      annotations: {}    
      labels: {}   
      serviceAccountName: ""  
      automountServiceAccountToken: true   
      resources: {}  
      # 2. Atlan connection settings - Only update if you want to agent to use the S3 bucket  
      atlan:  
        argoToken: ""    
        vaultEnvEnabled: false    
        # Set to true only if the agent should store metadata  
        # in your bucket instead of sending it to Atlan via presigned URL.  
        useAgentBucket: false   
        metadataBucket: ""    
      persistentVolume:   
        scripts:    
          enabled: false  
        data:   
          enabled: false  
    minio:  
      enabled: false    
    argo-workflows:  
      images:  
        pullPolicy: IfNotPresent  
        pullSecrets: []  
      crds:  
        install: true  
        keep: true  
        annotations: {}  
      singleNamespace: true    
      workflow:  
        serviceAccount:  
          create: true  
        rbac:  
          create: true  
      controller:  
        # 3. Argo Private repository settings - Only update if you are using a private image repository for Argo  
        image:  
          # update the private image repository details  
          registry: quay.io    
          repository: argoproj/workflow-controller   
          tag: ""   
        parallelism: 10   
        resourceRateLimit:  
          limit: 10  
          burst: 5  
        rbac:  
          create: true  
          secretWhitelist: []  
          accessAllSecrets: false  
          writeConfigMaps: false  
        configMap:  
          create: true  
          name: ""  
        namespaceParallelism: 10    
        workflowDefaults:  
          # 4. Kubernetes Pod Annotation settings - Only update if you want to customize the Pod metadata.  
          ## For example, the annotation might be used by external systems such as proxies, or monitoring tools, and more.  
          spec:  
            podMetadata:  
              annotations:  
                argo.workflow/agent-type: "atlan-agent-service"    
              labels:  
                app.kubernetes.io/name: "atlan-agent"    
            podGC:  
              strategy: OnPodSuccess    
            serviceAccountName: argo-workflow    
            automountServiceAccountToken: true        
            ttlStrategy:  
              secondsAfterCompletion: 84600   
            templateDefaults:  
              container:  
                securityContext:  
                  allowPrivilegeEscalation: false            
                resources: {}     
                env:  
                  - name: CA_CERT  
                    valueFrom:  
                      configMapKeyRef:  
                        name: cert-config  
                        key: ca.crt  
                        optional: true  
                  - name: REST_API_HEADERS  
                    valueFrom:  
                      configMapKeyRef:  
                        name: agent-registry-settings  
                        key: restAPIHeaders  
                        optional: true  
        serviceAccount:  
          create: true  
        name: workflow-controller  
        workflowNamespaces:  
          - default   
        replicas: 1    
        revisionHistoryLimit: 10    
        nodeEvents:  
          enabled: false   
      server:  
        enabled: true    
      # 5. Argo Private repository settings - Only update if you are using a private image repository for Argo    
        image:  
          registry: quay.io    
          repository: argoproj/argocli    
          tag: ""      
        rbac:  
          create: true  
        serviceAccount:  
          create: true  
        replicas: 1    
        autoscaling:  
          enabled: false  
        ingress:  
          enabled: false    
          annotations:  
            ingress.kubernetes.io/ssl-redirect: "false"  
        resources: {}  
      executor:  
        securityContext: {}  
        resources: {}  
      artifactRepository:  
        archiveLogs: true    
        useStaticCredentials: false   
        # 6. S3 bucket settings - needed by the secure agent to store logs and artifacts  
        s3:  
          # S3 bucket name - Update with the bucket name you created in the Permissions required section.  
          bucket: "atlan--bucket"   
          # S3 endpoint  
          endpoint: "s3.us-east-2.amazonaws.com"    
          # AWS region - Update with the region where you created bucket in the Permissions required section.  
          region: "us-east-2"    
          # Artifact path format  
          keyFormat: "argo-artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}"    
           # Whether to use insecure connections  
          insecure: false   
          # Use AWS SDK credentials (IAM role)  
          useSDKCreds: true

    ```
3. In the configuration file, follow the comments to replace the necessary attributes. You may want to update the below configurations if:

    * *You are using a private image registry (Image registry settings)*
        * *You want the agent to use an S3 bucket (Atlan connection settings)*
        * *You are using a private repository for Argo workflows (Argo Private repository settings)*
        * *You want to customize the Kubernetes pod's metadata (Kubernetes Pod Annotation settings)*
        * *You need specific S3 storage configuration (S3 storage settings)*

Install using Helm chart[â](#install-using-helm-chart "Direct link to Install using Helm chart")
--------------------------------------------------------------------------------------------------

Follow these steps to install the Secure Agent and its dependencies into your AWS EKS cluster using Helm charts.

1. Install the Argo Custom Resource Definitions (CRDs) required by the Secure Agent. This step installs only the CRDs. The Secure Agent is installed in the subsequent step using a Helm upgrade.

    ```
    helm install <helm-app-name> oci://registry-1.docker.io/atlanhq/workflow-offline-agent \  
      --version 0.1.0 \  
      -n <namespace> \  
      --create-namespace -f <path/to/agent_config_values.yaml> \  
      --set agent.name="<secure-agent-name>" \  
      --set agent.atlan.domain="<atlan-tenant-domain>" \  
      --set agent.atlan.token="<atlan-api-token>" \  
      --set argo-workflows.controller.workflowNamespaces={<namespace>} \  
      --set IsUpgrade=false

    ```
        Replace the placeholders:

    * `<namespace>`: The Kubernetes namespace where you want to deploy the Secure Agent.
        * `<path/to/agent_config_values.yaml>`: The path to the YAML config file.
        * `<secure-agent-name>`: Unique name, like agent\-us\-east\-cdw.
        * `<helm-app-name>`: Unique Helm release name, like atlan\-agent\-v1\.
        * `<atlan-tenant-domain>`: Your Atlan domain, e.g., mycompany.atlan.com.
        * `<atlan-api-token>`: Token used for authentication. See [Create a bearer token](/get-started/references/api-authentication).
2. Use the following kubectl command to associate the IAM role with the service account. This enables the Secure Agent to access the S3 bucket securely using IAM Roles for Service Accounts (IRSA). Make sure the IAM roleâs trust policy enables the argo\-workflow service account to assume the role.

    ```
    kubectl annotate serviceaccount argo-workflow \  
      -n  \  
      eks.amazonaws.com/role-arn=arn:aws:iam:::role/

    ```
        Replace the placeholders:

    * `<namespace`: The Kubernetes namespace where you want to deploy the Secure Agent.
        * `<AWS_ACCOUNT_ID>`: Your AWS Account ID.
        * `<YourAgentIAMRoleName>`: The IAM role name you created for the Secure Agent using IRSA.
3. Install the Secure Agent by upgrading the Helm release. This step performs the actual Secure Agent installation after CRDs are in place.

    ```
    helm upgrade <helm-app-name> oci://registry-1.docker.io/atlanhq/workflow-offline-agent \  
      --version 0.1.0 \  
      -n <namespace> \  
      --create-namespace -f <path/to/agent_config_values.yaml> \  
      --set agent.name="<secure-agent-name>" \  
      --set agent.atlan.domain="<atlan-tenant-domain>" \  
      --set agent.atlan.token="<atlan-api-token>" \  
      --set argo-workflows.controller.workflowNamespaces={<namespace>} \  
      --set IsUpgrade=true

    ```
        Replace the placeholders:

    * `<namespace>`: The Kubernetes namespace where you want to deploy the Secure Agent.
        * `<path/to/agent_config_values.yaml>`: The path to the YAML config file.
        * `<secure-agent-name>`: Unique name, like agent\-us\-east\-cdw.
        * `<helm-app-name>`: Unique Helm release name, like atlan\-agent\-v1\.
        * `<atlan-tenant-domain>`: Your Atlan domain, e.g., mycompany.atlan.com.
        * `<atlan-api-token>`: Token used for authentication. See [Create a bearer token](/get-started/references/api-authentication).
4. While the installation is in progress, you can run the following command to verify the progress:

    ```
    kubectl get pods -n <namespace>

    ```
        Replace `<namespace>` with the Kubernetes namespace used for deployment.

Verify installation[â](#verify-installation "Direct link to Verify installation")
-----------------------------------------------------------------------------------

To confirm successful installation:

1. Sign in to your Atlan tenant as an admin. For example, `https://<tenant>.atlan.com`.
2. Navigate to the **Agent** tab.
3. Search for your Secure Agent name.
4. If the agent appears in the list and is marked **Active**, installation is complete.
**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousInstall on Virtual Machine (K3s)](/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s)[NextConfigure workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution)

Copyright Â© 2025 Atlan Pte. Ltd.

