# Complementary color

Just add a color and you will get a object with the complementary color in the provided format and a hexref with the hex format of the complementary color (for display purpaces).

## Install
```
$ npm install complementary-color
```
## Usage

```javascript
const complementaryColor = require('complementary-color');

var cmykComplementary = new complementaryColor('c: 0, m: 53, y: 60, k: 60')
// { c: 60, m: 7, y: 0, k: 60 }, hexref: '295F66' }

var htmlComplementary = new complementaryColor('red')
// { color: 'Aqua', hexref: '00FFFF' }

var rgbComplementary = new complementaryColor('r 10 g 50 b 18')
// { r: 50, g: 10, b: 42 }, hexref: '320A2A' }

var ralComplementary = new complementaryColor('RAL 1016')
// { r: 50, g: 10, b: 42 }, hexref: '320A2A' }

```