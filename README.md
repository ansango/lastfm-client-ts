# lastfm-client-ts

[![NPM Version](https://img.shields.io/npm/v/lastfm-client-ts-client.svg?branch=main)](https://www.npmjs.com/package/lastfm-client-ts)
[![Downloads Per Week](https://img.shields.io/npm/dw/lastfm-client-ts.svg?color=blue)](https://www.npmjs.com/package/lastfm-client-ts)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ba3b73c24e06433fabe0efed8b43d026)](https://www.codacy.com/gh/mannuelf/lastfm-client-ts/dashboard?utm_source=github.com&utm_medium=referral&utm_content=mannuelf/lastfm-client-ts&utm_campaign=Badge_Grade)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [lastfm-client-ts](#lastfm-client-ts)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Installing](#installing)
    - [Usage](#usage)

## About <a name = "about"></a>

Last.fm API client for Node.js

## Getting Started <a name = "getting_started"></a>

### Installing

```bash
npm install lastfm-client-ts
```

### Usage

```typescript
import { lastFmClient } from "lastfm-client-ts";

const {
  userApiMethods,
  albumApiMethods,
  artistApiMethods,
  chartApiMethods,
  geoApiMethods,
  libraryApiMethods,
  tagApiMethods,
  trackApiMethods,
} = lastFmClient();

export default async function handler() {
  const response = userApiMethods.getInfo({
    user: "ansango",
  });
  return {
    response,
  };
}
```
