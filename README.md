# I

A (very) simple library to expose only clones of referenced objects in function arguments.

## Installation

```npm install MD4/i```

## Usage

### Require

```javascript
var I = require('I);
// or simply
require('I');
```

### Example

```javascript
var a = { a: 1, b: 2 };

var transform = (obj => {
  obj.b = 3;
  return obj;
}).I;

// or

transform = I(obj => {
  obj.b = 3;
  return obj;
});

// or

transform = I(function(obj) {
  obj.b = 3;
  return obj;
});

// or

transform = function(obj) {
  obj.b = 3;
  return obj;
}.I;

console.log(a);
console.log(transform(a));
console.log(a);
```

## test
```npm test```