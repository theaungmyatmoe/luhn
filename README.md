# Luhn Algorithm

![npm](https://img.shields.io/npm/dw/@amm834/luhn?style=plastic)

![npm (scoped)](https://img.shields.io/npm/v/@amm834/luhn?logo=npm&style=plastic)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@amm834/luhn?logo=npm&style=plastic)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/amm834/luhn?include_prereleases&style=plastic)
![NPM](https://img.shields.io/npm/l/@amm834/luhn?style=plastic)

[![@amm834/luhn](https://snyk.io/advisor/npm-package/@amm834/luhn/badge.svg)](https://snyk.io/advisor/npm-package/@amm834/luhn)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@amm834/luhn?style=plastic)
![Maintenance](https://img.shields.io/maintenance/yes/2021?style=plastic)

> Luhn algorithm that can validate the cc - Credit Card numbers is valid or not.

# Installations

```bash
npm install @amm834/luhn

# or

yarn add @amm834/luhn
```
# Usage

```js
import Luhn from '@amm834/luhn';
const card_number = 4895048712071025;
const result = Luhn.validate(card_number);
console.log(result); // => true
```

# API Documentation

[https://amm834.github.io/luhn/](https://amm834.github.io/luhn/)


# Instance Methods

#### Luhn.validate(cc)

# Validation

If cc is validated by **Luhn**,it will return `true`,if not it will be `false`;

```js
Luhn.validate()
```




