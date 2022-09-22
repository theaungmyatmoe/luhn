# Luhn Algorithm

![npm](https://img.shields.io/npm/dm/@amm834/luhn?style=plastic)
[![Lint and test](https://github.com/amm834/luhn/actions/workflows/test.yml/badge.svg)](https://github.com/amm834/luhn/actions/workflows/test.yml)
![npm (scoped)](https://img.shields.io/npm/v/@amm834/luhn?logo=npm&style=plastic)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@amm834/luhn?logo=npm&style=plastic)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/amm834/luhn?include_prereleases&style=plastic)
![NPM](https://img.shields.io/npm/l/@amm834/luhn?style=plastic)

[![@amm834/luhn](https://snyk.io/advisor/npm-package/@amm834/luhn/badge.svg)](https://snyk.io/advisor/npm-package/@amm834/luhn)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@amm834/luhn?style=plastic)
![Maintenance](https://img.shields.io/maintenance/yes/2022?style=plastic)

Luhn is a validation library the can validate Credit Card numbers which are valid or not. 👀

# Installations

> I would like you to use `pnpm` to save your time.

**pnpm**

```bash
pnpm add @amm834/luhn
```

**yarn**

```bash
yarn add @amm834/luhn
```

**npm**

```bash
npm install  @amm834/luhn 
```

# Usage

How easy it is?

```js
import createLuhn from '@amm834/luhn';

const {validate} = createLuhn();

const pan = 4895048712071025; // Credit Card Numbers

const isValid = validate(pan);

console.log(isValid); // true
```

## Browser

```html

<html>
<head>
    <!--   es6 module -->
    <script src="./path/to/luhn.js" type="module"></script>
</head>
<body>
Open the devtools 👇
<script>
    import createLuhn from "../dist/luhn.js";

    const {validate} = createLuhn();

    const pan = 4895048712071025;

    console.log(validate(pan)) //→ true
</script>
</body>
</html>
```

# API

```ts
export default function createLuhn(): {
    validate: (pan: string) => boolean;
};
```
