var deepcopy = require('deepcopy');

function _clone(object) {
  return deepcopy(object);
}

Object.defineProperty(
  Function.prototype,
  'i',
  {
    get: function () {
      return function () {
        return this.apply(
          null,
          Array.prototype.slice
            .call(arguments)
            .map(_clone)
        );
      }.bind(this);
    }
  }
);

module.exports = function (fn) {
  return function () {
    return fn.apply(
      null,
      Array.prototype.slice
        .call(arguments)
        .map(_clone)
    );
  }
};
