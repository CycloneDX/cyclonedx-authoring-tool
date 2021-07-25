[![Build Status](https://github.com/CycloneDX/cyclonedx-authoring-tool/workflows/Node%20CI/badge.svg)](https://github.com/CycloneDX/cyclonedx-authoring-tool/actions?workflow=Node+CI)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)][License]
[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Slack Invite](https://img.shields.io/badge/Slack-Join-blue?logo=slack&labelColor=393939)](https://cyclonedx.org/slack/invite)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)

# CycloneDX Authoring Tool

The CycloneDX Authoring Tool (CAT) is an experimental user interface for manually creating, editing, and viewing CycloneDX SBOMs.
The project is built with:

* Vue 2.x / CLI 3.x
* Bootstrap Vue
* CoreUI

## Build Setup

``` bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run serve

# Build for production with minification
npm run build

# Run linter
npm run lint

# Generates a CycloneDX software bill-of-materials
npm run bom
```

## Internationalization (i18n)

This project supports internationalization. Currently only English language is supported. Pull requests to support additional languages are encouraged.

Note to developers: Textual labels are defined in `src/i18n/messages.json`. Ensure that all labels are defined here and that components use i18n, not textual labels directly.

## Copyright & License

CycloneDX Authoring Tool is Copyright (c) OWASP Foundation. All Rights Reserved.

Permission to modify and redistribute is granted under the terms of the MIT license. See the [LICENSE] file for the full license.

[License]: https://github.com/CycloneDX/cyclonedx-authoring-tool/blob/master/LICENSE
