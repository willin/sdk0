# sdk0

Minimum viable sdk for all your projects.

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/sdk0.svg)](https://npmjs.org/package/sdk0) [![npm](https://img.shields.io/npm/dm/sdk0.svg)](https://npmjs.org/package/sdk0) [![npm](https://img.shields.io/npm/dt/sdk0.svg)](https://npmjs.org/package/sdk0) [![Build Status](https://travis-ci.org/willin/sdk0.svg?branch=master)](https://travis-ci.org/willin/sdk0)

## Install

```bash
npm install --save sdk0
# or
yarn add sdk0
```

## Usage

```js
const sdk0 = require('sdk0');

const client = sdk0({
  baseURL: 'https://api.xxxx.com',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

// Use just like axios:
client.get('/xxx').then();

client
  .post('/xxx', {
    // form body
  })
  .then();
```

## LICENSE

Apache-2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
