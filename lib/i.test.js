require('chai').should();

var i = require('./i');

describe('i', function () {
  describe('#wrapper', function () {
    it('should not modify objects references', function () {
      var a = { a: 1, b: 2 };

      var transform = i(function (obj) {
        obj.b = 3;
        return obj;
      });

      a.should.deep.equal({ a: 1, b: 2 });
      transform(a).should.deep.equal({ a: 1, b: 3 });
      a.should.deep.equal({ a: 1, b: 2 });
    });
  });
  describe('#property', function () {
    it('should not modify objects references', function () {
      var a = { a: 1, b: 2 };

      var transform = function (obj) {
        obj.b = 3;
        return obj;
      }.i;

      a.should.deep.equal({ a: 1, b: 2 });
      transform(a).should.deep.equal({ a: 1, b: 3 });
      a.should.deep.equal({ a: 1, b: 2 });
    });
  });
});
