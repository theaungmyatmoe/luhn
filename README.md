# Luhn Algorithm

![npm](https://img.shields.io/npm/dm/@amm834/luhn?style=plastic)
[![Lint and test](https://github.com/amm834/luhn/actions/workflows/test.yml/badge.svg)](https://github.com/amm834/luhn/actions/workflows/test.yml)
![npm (scoped)](https://img.shields.io/npm/v/@amm834/luhn?logo=npm&style=plastic)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@amm834/luhn?logo=npm&style=plastic)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/amm834/luhn?include_prereleases&style=plastic)
![NPM](https://img.shields.io/npm/l/@amm834/luhn?style=plastic)

[![@amm834/luhn](https://snyk.io/advisor/npm-package/@amm834/luhn/badge.svg)](https://snyk.io/advisor/npm-package/@amm834/luhn)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@amm834/luhn?style=plastic)

Luhn is a validation library the can validate Credit Card numbers which are valid or not. 👀

## Installations

```bash
pnpm add @amm834/luhn
```

# Usage

You can use `validate` function to validate the credit card number.

```js
import {validate} from "@amm834/luhn";


const pan = "4895048712071025";

console.log(validate(pan)) //→ true
```

## CLI

`@amm834/luhn` support to use as CLI tool. You can use it as follows:

```bash
luhn validate 4895048712071025 #→ true
```

## API

```typescript 
/**
 *  @param {string} pan - The credit card number to validate.
 * @returns boolean - A boolean value indicating whether the credit card number is valid.
 */
declare const validate: (pan: string) => boolean;

```