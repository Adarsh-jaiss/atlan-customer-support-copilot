# Source URL
https://developer.atlan.com/snippets/files/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/files/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage files in Atlan's tenant object store using presigned URLs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage files in Atlan's tenant object store using presigned URLs.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/files/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage files in Atlan's tenant object store - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/files/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage files in Atlan's tenant object store using presigned URLs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/files/index.png
meta-twitter:title: Manage files in Atlan's tenant object store - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage files in Atlan's tenant object store - Developer
-->

[Skip to content](#manage-files-in-tenant-object-store) Developer Manage files in Atlan's tenant object store Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/service/files/presignedUrl (POST)](../../endpoints/#tag:apiservicefilespresignedurl-post)

Manage files in tenant object store[¶](#manage-files-in-tenant-object-store "Permanent link")
=============================================================================================

You can use the SDK's `FileClient` to manage your files
within Atlan's tenant object store by leveraging presigned URLs.

Upload a file to the object store[¶](#upload-a-file-to-the-object-store "Permanent link")
-----------------------------------------------------------------------------------------

[0\.0\.4](https://github.com/atlanhq/atlan-go/releases/tag/0.0.4 "Minimum version")[2\.1\.7](https://github.com/atlanhq/atlan-python/releases/tag/2.1.7 "Minimum version")[0\.1\.3](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.3 "Minimum version")

To upload a file to the tenant object store:

Atlan CLI

Java

Python

Kotlin

Go

Raw REST API

| Upload a file to the tenant object store | |
| --- | --- |
| ``` 1 ``` | ``` atlan upload -f user/some-folder/my-file.txt -r atlan/object/store/file.txt # (1)  ``` |

1. To upload the file to the object store, you must specify the following flags:

    * `-f or --file`: path to the file to be uploaded to the object store.
        * `--r or --remote`: actual object name where you want to upload the file (e.g: `prefix/object_name`).

CLI must be configured

Make sure you have the [CLI configured before](../../sdks/cli/#configure-the-cli) running the above command.

Coming soon

| Upload a file to the tenant object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.file import PresignedURLRequest  client = AtlanClient()  presigned_url = client.files.generate_presigned_url(     request=PresignedURLRequest( # (1)         key="my-folder/my-file.txt",         expiry="30s",         method=PresignedURLRequest.Method.PUT,     ) )  client.files.upload_file( # (2)     presigned_url=presigned_url,     file_path="user/some-folder/upload-file.txt" )  ``` |

1. Begin by generating a presigned URL for the object store. You need to specify:

    * actual object name where you want to upload the file (e.g: `prefix/object_name`).
        * expiration time interval for the presigned URL.
        * presigned URL method (`PUT` for upload).
2. Finally, upload the file to the object store by providing:

    * any valid presigned URL.
        * path to the file to be uploaded to the object store.

Coming soon

| Upload a file to the tenant object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` package main  import (     "fmt"      "github.com/atlanhq/atlan-go/atlan/assets"     "github.com/atlanhq/atlan-go/atlan/model" )  func main() {     ctx := assets.NewContext()     client := assets.NewFileClient(ctx)      presignedUrl, err := client.GeneratePresignedURL(         &model.PresignedURLRequest{ // (1)             Key:    "my-folder/my-file.txt",             Expiry: "30s",             Method: model.PUT,         },     )     if err != nil {         fmt.Println("Error while generating url:", err)     }      uploadFilePath := "user/some-folder/upload-file.txt"     err = client.UploadFile(presignedUrl, uploadFilePath) // (2)     if err != nil {         fmt.Println("Error while uploading file:", err)     } }  ``` |

1. Begin by generating a presigned URL for the object store. You need to specify:

    * actual object name where you want to upload the file (e.g: `prefix/object_name`).
        * expiration time interval for the presigned URL.
        * presigned URL method (`PUT` for upload).
2. Finally, upload the file to the object store by providing:

    * any valid presigned URL.
        * path to the file to be uploaded to the object store.

| POST /api/service/files/presignedUrl | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {    "method": "PUT", // (1)    "key": "my-folder/my-file.txt", // (2)    "expiry": "30s" // (3) }  ``` |

1. The presigned URL method (`PUT` for upload).
2. The actual object name where you want to upload the file (e.g: `prefix/object_name`).
3. An expiration time interval for the presigned URL.

Download a file from the object store[¶](#download-a-file-from-the-object-store "Permanent link")
-------------------------------------------------------------------------------------------------

[0\.0\.4](https://github.com/atlanhq/atlan-go/releases/tag/0.0.4 "Minimum version")[2\.1\.7](https://github.com/atlanhq/atlan-python/releases/tag/2.1.7 "Minimum version")[0\.1\.3](https://github.com/atlanhq/atlan-cli/releases/tag/v0.1.3 "Minimum version")

To download a file from the tenant object store:

Atlan CLI

Java

Python

Kotlin

Go

Raw REST API

| Download a file to the tenant object store | |
| --- | --- |
| ``` 1 ``` | ``` atlan download -r atlan/object/store/file.txt -o user/some-folder/my_file.txt  # (1)  ``` |

1. To download the file from the object store, you must specify the following flags:

    * `-r or --remote`: actual object name you want to download (e.g: `prefix/object_name`).
        * `--o or --output`: path to the location where you want to save the downloaded file.

CLI must be configured

Make sure you have the [CLI configured before](../../sdks/cli/#configure-the-cli) running the above command.

Coming soon

| Download a file from the tenant object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.file import PresignedURLRequest  client = AtlanClient()  presigned_url = client.files.generate_presigned_url(     request=PresignedURLRequest( # (1)         key="my-folder/my-file.txt",         expiry="30s",         method=PresignedURLRequest.Method.GET,     ) )  client.files.download_file( # (2)     presigned_url=presigned_url,     file_path="user/some-folder/download-file.txt" )  ``` |

1. Begin by generating a presigned URL for the object store. You need to specify:

    * actual object name you want to download (e.g: `prefix/object_name`).
        * expiration time interval for the presigned URL.
        * presigned URL method (`GET` for download).
2. Finally, download the file from the object store by providing:

    * any valid presigned URL.
        * path to the location where you want to save the downloaded file.

Coming soon

| Download a file from the tenant object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` package main  import (     "fmt"      "github.com/atlanhq/atlan-go/atlan/assets"     "github.com/atlanhq/atlan-go/atlan/model" )  func main() {     ctx := assets.NewContext()     client := assets.NewFileClient(ctx)      presignedUrl, err := client.GeneratePresignedURL(         &model.PresignedURLRequest{ // (1)             Key:    "my-folder/my-file.txt",             Expiry: "30s",             Method: model.GET,         },     )     if err != nil {         fmt.Println("Error while generating url:", err)     }      downloadFilePath := "user/some-folder/download-file.txt"     err = client.DownloadFile(presignedUrl, downloadFilePath) // (2)     if err != nil {         fmt.Println("Error while downloading file:", err)     } }  ``` |

1. Begin by generating a presigned URL for the object store. You need to specify:

    * actual object name you want to download (e.g: `prefix/object_name`).
        * expiration time interval for the presigned URL.
        * presigned URL method (`GET` for download).
2. Finally, download the file from the object store by providing:

    * any valid presigned URL.
        * path to the location where you want to save the downloaded file.

| POST /api/service/files/presignedUrl | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {    "method": "GET", // (1)    "key": "my-folder/my-file.txt", // (2)    "expiry": "30s" // (3) }  ``` |

1. The presigned URL method (`GET` for download).
2. The actual object name you want to download (e.g: `prefix/object_name`).
3. An expiration time interval for the presigned URL.

---

2024\-04\-292024\-07\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/files/) to provide us with more information. 

Back to top

[Previous Tableau assets](../workflows/packages/tableau-assets/) [Next Full reference material](../../reference/) 

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

