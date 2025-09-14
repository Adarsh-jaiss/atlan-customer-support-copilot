# Source URL
https://developer.atlan.com/toolkits/custom-package/widgets/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/widgets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Examples of the various widgets you can use for configuring your package's UI inputs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Examples of the various widgets you can use for configuring your package's UI inputs.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/widgets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Package widgets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/widgets/
meta-twitter:card: summary_large_image
meta-twitter:description: Examples of the various widgets you can use for configuring your package's UI inputs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/widgets.png
meta-twitter:title: Package widgets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Package widgets - Developer
-->

[Skip to content](#widgets-reference) Developer Package widgets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Widgets reference[¶](#widgets-reference "Permanent link")
=========================================================

There are a number of input widgets you can use when defining your inputs. For more details about the configurable options of each of these individual widgets, use hover\-over context help in your IDE when writing your package.

APITokenSelector[¶](#apitokenselector "Permanent link")
-------------------------------------------------------

[https://demo.arcade.software/IalYN6rx7L9XNKqYCEKj?embed&show_copy_link=true](https://demo.arcade.software/IalYN6rx7L9XNKqYCEKj?embed&show_copy_link=true)

| APITokenSelector | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_a"] = new APITokenSelector {     title = "API Token Selector (title)"     required = false     helpText = "Example for API token selector widget (helpText)."     showAll = true // (1)!   } }  ``` |

1. Controls whether to show all API tokens (true) or only the API tokens created by the user configuring the package (false).

BooleanInput[¶](#booleaninput "Permanent link")
-----------------------------------------------

[https://demo.arcade.software/S5ebfWWenkveMnwOsZfX?embed&show_copy_link=true](https://demo.arcade.software/S5ebfWWenkveMnwOsZfX?embed&show_copy_link=true)

| BooleanInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_b"] = new BooleanInput {     title = "Boolean Input (title)"     required = false     helpText = "Example for boolean input widget (helpText)."     defaultSelection = true   } }  ``` |

ConnectionCreator[¶](#connectioncreator "Permanent link")
---------------------------------------------------------

[https://demo.arcade.software/lV598fRT4keiXaosAEN5?embed&show_copy_link=true](https://demo.arcade.software/lV598fRT4keiXaosAEN5?embed&show_copy_link=true)

| ConnectionCreator | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_c"] = new ConnectionCreator {     title = "Connection Creator (title)"     required = false     helpText = "Example for connection creator widget (helpText)."     width = 8   } }  ``` |

ConnectionSelector[¶](#connectionselector "Permanent link")
-----------------------------------------------------------

[https://demo.arcade.software/KINpTCHa0XxzzxfpcFnh?embed&show_copy_link=true](https://demo.arcade.software/KINpTCHa0XxzzxfpcFnh?embed&show_copy_link=true)

| ConnectionSelector | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 ``` | ``` inputs {   ["var_name_d"] = new ConnectionSelector {     title = "Connection Selector single (title)"     required = false     helpText = "Example for connection selector widget (helpText)."     multiSelect = false     limitToConnectors = "snowflake" // (1)!   }   ["var_name_e"] = new ConnectionSelector {     title = "Connection Selector multi (title)"     required = false     helpText = "Example for connection selector widget (helpText)."     multiSelect = true     limitToConnectors = { "snowflake" "bigquery" }   } }  ``` |

1. Limits the connections listed to only those with the specified connector type, which can either be a single string or a list. (If this `limitToConnectors` is left out entirely, all connections will be included in the drop\-down.)

ConnectorTypeSelector[¶](#connectortypeselector "Permanent link")
-----------------------------------------------------------------

[https://demo.arcade.software/cAxUK5HjUPxY2BI3oY89?embed&show_copy_link=true](https://demo.arcade.software/cAxUK5HjUPxY2BI3oY89?embed&show_copy_link=true)

| ConnectorTypeSelector | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_f"] = new ConnectorTypeSelector {     title = "Connector Type Selector (title)"     required = false     helpText = "Example for connector type selector widget (helpText)."     width = 8   } }  ``` |

CredentialInput[¶](#credentialinput "Permanent link")
-----------------------------------------------------

[https://demo.arcade.software/fqYYpCeDZrLEY7uPCRLv?embed&show_copy_link=true](https://demo.arcade.software/fqYYpCeDZrLEY7uPCRLv?embed&show_copy_link=true)

| CredentialInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_g"] = new CredentialInput {     title = "Credential (title)"     credType = "atlan-connectors-snowflake" // (1)     helpText = "Example for connector type selector widget (helpText)."     allowTestAuthentication = true // (2)   } }  ``` |

1. The value used for `credType` *must* match an existing credential defined in `packages/atlan/connectors/configmaps/*.yaml`, whether pre\-existing or generated through the use of `credentialConfig` and placed there yourself.
2. You can remove the green `Test Authentication` button by setting `allowTestAuthentication` to `false`. (If left out entirely, it will default to `true`.)

DateInput[¶](#dateinput "Permanent link")
-----------------------------------------

[https://demo.arcade.software/Z1jGEEDDxBs4pNHXFm4r?embed&show_copy_link=true](https://demo.arcade.software/Z1jGEEDDxBs4pNHXFm4r?embed&show_copy_link=true)

| DateInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 ``` | ``` inputs {   ["var_name_h"] = new DateInput {     title = "Date Input (title)"     required = false     helpText = "Example for date input widget (helpText)."     past = -14 // (1)     future = 14 // (2)     defaultDay = -1 // (3)     width = 8   } }  ``` |

1. An offset from today (0\) that indicates how far back in the calendar can be selected (\-1 is yesterday, 1 is tomorrow, and so on).
2. An offset from today (0\) that indicates how far forward in the calendar can be selected (\-1 is yesterday, 1 is tomorrow, and so on).
3. An offset from today that indicates the default date that should be selected in the calendar (0 is today, \-1 is yesterday, 1 is tomorrow, and so on).

DropDown[¶](#dropdown "Permanent link")
---------------------------------------

[https://demo.arcade.software/DuBOV9C2mSpPiiWeUQVM?embed&show_copy_link=true](https://demo.arcade.software/DuBOV9C2mSpPiiWeUQVM?embed&show_copy_link=true)

| DropDown | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 ``` | ``` inputs {   ["var_name_i"] = new DropDown {     title = "Drop Down single (title)"     required = false     helpText = "Example for drop down widget (restricted to a single) (helpText)."     possibleValues {       ["ONE"] = "One"       ["TWO"] = "Two"       ["THREE"] = "Three"     }     multiSelect = false     width = 4   }   ["var_name_j"] = new DropDown {     title = "Drop Down multi (title)"     required = false     helpText = "Example for drop down widget (allowing multiple) (helpText)."     possibleValues {       ["ONE"] = "One"       ["TWO"] = "Two"       ["THREE"] = "Three"     }     multiSelect = true     width = 4   } }  ``` |

FileCopier[¶](#filecopier "Permanent link")
-------------------------------------------

[https://demo.arcade.software/nvcOjvkNyqL5BrxOQ97h?embed&show_copy_link=true](https://demo.arcade.software/nvcOjvkNyqL5BrxOQ97h?embed&show_copy_link=true)

| FileCopier | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 ``` | ``` inputs {   ["var_name_k"] = new FileCopier {     title = "File Copier (title)"     required = false     helpText = "Example for file copier widget (helpText)."     placeholderText = "path/file.csv (placeholderText)"     width = 8   } }  ``` |

FileUploader[¶](#fileuploader "Permanent link")
-----------------------------------------------

[https://demo.arcade.software/TwoSB7bB1qZtLsEVBjsW?embed&show_copy_link=true](https://demo.arcade.software/TwoSB7bB1qZtLsEVBjsW?embed&show_copy_link=true)

| FileUploader | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 ``` | ``` inputs {   ["var_name_l"] = new FileUploader {     title = "File Uploader (title)"     required = false     helpText = "Example for file uploader widget (helpText)."     placeholderText = "Sample CSV file (placeholderText)"     fileTypes { // (1)!       "text/csv"     }     width = 8   } }  ``` |

1. A list of the mime\-types that the upload widget will accept. If someone tries to upload a file of a different type, it will be rejected automatically by the UI itself.

KeygenInput[¶](#keygeninput "Permanent link")
---------------------------------------------

[https://demo.arcade.software/ACVM8J2KKk6L85GXe2k3?embed&show_copy_link=true](https://demo.arcade.software/ACVM8J2KKk6L85GXe2k3?embed&show_copy_link=true)

| KeygenInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_m"] = new KeygenInput {     title = "Keygen Input (title)"     required = false     helpText = "Example for keygen input widget (helpText)."     width = 8   } }  ``` |

MultipleGroups / SingleGroup[¶](#multiplegroups-singlegroup "Permanent link")
-----------------------------------------------------------------------------

[https://demo.arcade.software/4VFl1TQuFe9Yps1NttZa?embed&show_copy_link=true](https://demo.arcade.software/4VFl1TQuFe9Yps1NttZa?embed&show_copy_link=true)

| SingleGroup \| MultipleGroups | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 52 ``` | ``` inputs {   ["var_name_n"] = new SingleGroup {     title = "Single Group (title)"     required = false     helpText = "Example for single group widget (helpText)."     width = 4   }   ["var_name_o"] = new MultipleGroups {     title = "Multiple Groups (title)"     required = false     helpText = "Example for multiple groups widget (helpText)."     width = 4   } }  ``` |

MultipleUsers / SingleUser[¶](#multipleusers-singleuser "Permanent link")
-------------------------------------------------------------------------

[https://demo.arcade.software/EW9kIJBDudnTMCjDVw74?embed&show_copy_link=true](https://demo.arcade.software/EW9kIJBDudnTMCjDVw74?embed&show_copy_link=true)

| SingleUser \| MultipleUsers | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 52 ``` | ``` inputs {   ["var_name_p"] = new SingleUser {     title = "Single User (title)"     required = false     helpText = "Example for single user widget (helpText)."     width = 4   }   ["var_name_q"] = new MultipleUsers {     title = "Multiple Users (title)"     required = false     helpText = "Example for multiple users widget (helpText)."     width = 4   } }  ``` |

NumericInput[¶](#numericinput "Permanent link")
-----------------------------------------------

[https://demo.arcade.software/O9EYaAXQfkZsVtWRqvUn?embed&show_copy_link=true](https://demo.arcade.software/O9EYaAXQfkZsVtWRqvUn?embed&show_copy_link=true)

| NumericInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 ``` | ``` inputs {   ["var_name_r"] = new NumericInput {     title = "Numeric Input (title)"     required = false     helpText = "Example for numeric input widget (helpText)."     placeholderValue = 50     width = 8   } }  ``` |

PasswordInput[¶](#passwordinput "Permanent link")
-------------------------------------------------

[https://demo.arcade.software/ApgjxZGlJ7MDVKPmdkeC?embed&show_copy_link=true](https://demo.arcade.software/ApgjxZGlJ7MDVKPmdkeC?embed&show_copy_link=true)

| PasswordInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_s"] = new PasswordInput {     title = "Password Input (title)"     required = false     helpText = "Example for password input widget (helpText)."     width = 8   } }  ``` |

Radio[¶](#radio "Permanent link")
---------------------------------

[https://demo.arcade.software/HaxHRy8P420P1GvYwWZ6?embed&show_copy_link=true](https://demo.arcade.software/HaxHRy8P420P1GvYwWZ6?embed&show_copy_link=true)

| Radio | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 ``` | ``` inputs {   ["var_name_t"] = new Radio {     title = "Radio (title)"     required = false     helpText = "Example for radio widget (helpText)."     possibleValues {       ["ONE"] = "One (value)"       ["TWO"] = "Two (value)"       ["THREE"] = "Three (value)"     }     default = "TWO"   } }  ``` |

TextInput[¶](#textinput "Permanent link")
-----------------------------------------

[https://demo.arcade.software/ADmkueQQj0u9p7bDOyAR?embed&show_copy_link=true](https://demo.arcade.software/ADmkueQQj0u9p7bDOyAR?embed&show_copy_link=true)

| TextInput | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` inputs {   ["var_name_u"] = new TextInput {     title = "Text Input (title)"     required = false     helpText = "Example for text input widget (helpText)."     width = 8   } }  ``` |

---

2025\-03\-122025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/widgets/) to provide us with more information. 

Back to top

[Previous Release (GA)](../release/) [Next Typedef toolkit](../../typedef/) 

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

