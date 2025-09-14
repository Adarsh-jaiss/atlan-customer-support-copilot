# Source URL
https://developer.atlan.com/patterns/events/aws-lambda-webhooks/deploy/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/deploy/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/deploy.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Deploy your code - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/events/aws-lambda-webhooks/deploy/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/events/aws-lambda-webhooks/deploy.png
meta-twitter:title: Deploy your code - Developer
meta-viewport: width=device-width,initial-scale=1
title: Deploy your code - Developer
-->

[Skip to content](#deploying-your-code) Developer Deploy your code Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../../snippets/)
* [Asset\-specific](../../../)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Deploying your code[¶](#deploying-your-code "Permanent link")
=============================================================

You should now be in a position to deploy your code.

Package the code[¶](#package-the-code "Permanent link")
-------------------------------------------------------

Before uploading the code, first package it.

Java

Python

To ensure any of your logging statements reach the AWS CloudWatch logs, build your Java code to a jar file that includes log bindings for SLF4J. For example, you could use logback as follows in Gradle:

| build.gradle | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` plugins {     id 'java'     id "com.github.johnrengelman.shadow" version "7.1.2" }  shadowJar {     archiveClassifier = 'jar-with-dependencies'     dependencies {         include(dependency('ch.qos.logback:logback-classic:.*'))         include(dependency('ch.qos.logback:logback-core:.*'))     } }  task buildZip(type: Zip) {     from compileJava     from processResources     into('lib') {         from shadowJar     } }  ``` |

Then, by running `./gradlew buildZip` you will have a ready\-to\-upload zip file with your code under the `build/distributions` directory of your codebase.

Not necessary to include the Java SDK itself

Note that you do not need to bundle the Java SDK itself as part of your code package. The SDK will be used automatically via the AWS Lambda layer we created earlier.

We recommend just copying and pasting your code to the default `lambda_function.py` file set up for you when configuring the AWS Lambda function. Alternatively, when your code relies on other libraries (that you don't have other layers providing), you can review [AWS's own documentation for building an archive for Python code](https://docs.aws.amazon.com/lambda/latest/dg/python-package.html)  that will bundle all of those dependencies with your code.

Not necessary to include the Python SDK itself

Note that you do not need to bundle the Python SDK itself as part of your code package. The SDK will be used automatically via the AWS Lambda layer we created earlier.

Upload the code[¶](#upload-the-code "Permanent link")
-----------------------------------------------------

1. Navigate back to your [AWS Lambda functions console](https://console.aws.amazon.com/lambda/home#/functions) .
2. From the *Functions* list, click the function you want to deploy your code into.
3. On the **Code** tab:

    Java

    Python

    1. In the upper\-right of the *Code source* table, click **Upload from** and then **.zip or .jar file**.
        2. Use the **Upload** button to select the zip file containing your code.
        3. In the lower\-right of the dialog click the **Save** button to deploy your code.
        4. Scroll down to the *Runtime settings* table and in the upper\-right click the **Edit** button.
        5. Change the *Handler* to the canonical class name for the new class you wrote that extends `AbstractLambdaHandler` and implements `AtlanEventHandler`.
        6. In the lower\-right, click the **Save** button.

    1. In the *Code source* table you can either:

    * (Recommended) Copy / paste the code from your new module (file) into the editor window for **lambda\_function.py**.
                * In the upper\-right, click **Upload from** and choose the location of your code.
        2. Towards the middle of the *Code source* table, click the **Deploy** button to deploy your code.
        3. If you uploaded your own code:
            1. Scroll down to the *Runtime settings* table and in the upper\-right click the **Edit** button.
            2. Change the *Handler* to the module (file) name for the new module you wrote that extends `AtlanEventHandler` and implements the simple `lambda_handler(event, context)` function. The value should be: `<module_name>.lambda_handler`.
            3. In the lower\-right, click the **Save** button.

Unit test the code[¶](#unit-test-the-code "Permanent link")
-----------------------------------------------------------

Finally, to confirm your code is all set up to work as expected, you can run a quick test.

1. Change to the **Test** tab of your AWS Lambda function.
2. For *Event name* enter something like `webhook-validation`.
3. In the *Event JSON* code area, paste in the following payload:

| Event JSON | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 ``` | ``` {   "version": "2.0",   "routeKey": "$default",   "rawPath": "/",   "rawQueryString": "",   "headers": {     "content-length": "85",     "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",     "x-amzn-tls-version": "TLSv1.2",     "x-amzn-trace-id": "Root=1-64931f85-02856e0b115997577ed16d97",     "x-forwarded-proto": "https",     "host": "uo8rokyifhnhubgagp106xhrpvgmuqhx.lambda-url.us-east-1.on.aws",     "x-forwarded-port": "443",     "content-type": "text/plain; charset=utf-8",     "x-forwarded-for": "34.194.9.164",     "accept-encoding": "gzip",     "user-agent": "go-resty/1.12.0 (https://github.com/go-resty/resty)"   },   "requestContext": {     "accountId": "anonymous",     "apiId": "uo8rokyifhnhubgagp106xhrpvgmuqhx",     "domainName": "uo8rokyifhnhubgagp106xhrpvgmuqhx.lambda-url.us-east-1.on.aws",     "domainPrefix": "uo8rokyifhnhubgagp106xhrpvgmuqhx",     "http": {       "method": "POST",       "path": "/",       "protocol": "HTTP/1.1",       "sourceIp": "34.194.9.164",       "userAgent": "go-resty/1.12.0 (https://github.com/go-resty/resty)"     },     "requestId": "27539f31-d444-419e-b1ad-4382657b7e04",     "routeKey": "$default",     "stage": "$default",     "time": "21/Jun/2023:16:04:21 +0000",     "timeEpoch": 1687363461544   },   "body": "{\"atlan-webhook\": \"Hello, humans of data! It worked. Excited to see what you build!\"}",   "isBase64Encoded": false }  ``` |

1. In the upper\-right of the *Test event* table, click the **Test** button.
2. This first time the code runs it may take a number of seconds to complete.

When completed, you should see a dialog at the top of the **Test** tab similar to the following, indicating a successful run and including log output:

**Executing function: suceeded (logs )**

The area below shows the last 4 KB of the execution log.

```
null

```
**Summary**

* Code SHA\-256: hVSS2lGvNZii3XkecExrI3urKloxTSFgZfK670kKPOs\=
* Request ID: 5d1bb1ab\-0652\-4f8c\-8f57\-f3d9f7cb86e6
* Init duration: 6140\.29 ms
* Duration: 1\.61 ms
* Billed duration: 2 ms
* Resources configured: 128 MB
* Max memory used: 126 MB

**Log output**

The section below shows the logging calls in your code. Click here to view the corresponding CloudWatch log group.

```
START RequestId: 5d1bb1ab-0652-4f8c-8f57-f3d9f7cb86e6 Version: $LATEST # (1)
{'version': '2.0', 'routeKey': '$default', 'rawPath': '/', 'rawQueryString': '', 'headers': {'content-length': '85', 'x-amzn-tls-cipher-suite': 'ECDHE-RSA-AES128-GCM-SHA256', 'x-amzn-tls-version': 'TLSv1.2', 'x-amzn-trace-id': 'Root=1-64931f85-02856e0b115997577ed16d97', 'x-forwarded-proto': 'https', 'host': 'uo8rokyifhnhubgagp106xhrpvgmuqhx.lambda-url.us-east-1.on.aws', 'x-forwarded-port': '443', 'content-type': 'text/plain; charset=utf-8', 'x-forwarded-for': '34.194.9.164', 'accept-encoding': 'gzip', 'user-agent': 'go-resty/1.12.0 (https://github.com/go-resty/resty)'}, 'requestContext': {'accountId': 'anonymous', 'apiId': 'uo8rokyifhnhubgagp106xhrpvgmuqhx', 'domainName': 'uo8rokyifhnhubgagp106xhrpvgmuqhx.lambda-url.us-east-1.on.aws', 'domainPrefix': 'uo8rokyifhnhubgagp106xhrpvgmuqhx', 'http': {'method': 'POST', 'path': '/', 'protocol': 'HTTP/1.1', 'sourceIp': '34.194.9.164', 'userAgent': 'go-resty/1.12.0 (https://github.com/go-resty/resty)'}, 'requestId': '27539f31-d444-419e-b1ad-4382657b7e04', 'routeKey': '$default', 'stage': '$default', 'time': '21/Jun/2023:16:04:21 +0000', 'timeEpoch': 1687363461544}, 'body': '{"atlan-webhook": "Hello, humans of data! It worked. Excited to see what you build!"}', 'isBase64Encoded': False}
Matches a validation request - doing nothing and succeeding. # (2)
END RequestId: 5d1bb1ab-0652-4f8c-8f57-f3d9f7cb86e6 # (3)
REPORT RequestId: 5d1bb1ab-0652-4f8c-8f57-f3d9f7cb86e6  Duration: 1.61 ms   Billed Duration: 2 ms   Memory Size: 128 MB Max Memory Used: 126 MB Init Duration: 6140.29 ms

```
1. You should see an opening line indicating the unique ID (GUID) of the individual request representing the test run itself. (This may be followed by other logging output, depending on your code's logic.)
2. For this particular payload, you should see a message indicating that what was received was a validation request, and thus any custom code will not execute and will simply succeed.
3. You should see some closing lines, indicating the same unique ID (GUID) of the request and the duration of the processing.

---

2023\-06\-232024\-04\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/events/aws-lambda-webhooks/deploy/) to provide us with more information. 

Back to top

[Previous Code your logic](../coding/) [Next Set up webhook](../setup-webhook/) 

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

