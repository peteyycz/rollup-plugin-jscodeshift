[![version](https://img.shields.io/npm/v/rollup-plugin-jscodeshift.svg)]()  [![license](https://img.shields.io/github/license/peteyycz/rollup-plugin-jscodeshift.svg)]()

# 🔎 `rollup-plugin-jscodeshift`

Modify rollup output with advanced find / replace dynamically.

## Usage

```bash
yarn add rollup-plugin-jscodeshift -D
```

Run a jscodeshift transform function on any matching file.

```js
import modify from 'rollup-plugin-jscodeshift'

export default {
  plugins: [
    modify({
      transform: <jscodeshift transform function>, // https://github.com/facebook/jscodeshift#transform-module
      pattern: /(index.js)/
    })
  ]
}
```

