// Generated by CoffeeScript 1.8.0
(function() {
  var assert;

  assert = require('assert');

  module.exports = function(LinkedList) {
    var A, B, C, D, list, other_list, x;
    list = new LinkedList;
    A = {
      name: 'A'
    };
    B = {
      name: 'B'
    };
    C = {
      name: 'C'
    };
    D = {
      name: 'D'
    };
    assert.ok(list.isEmpty());
    assert.equal(null, list.peek());
    list.append(A);
    assert.equal(A, list.peek());
    list.append(B);
    assert.equal(A, list.peek());
    list.append(C);
    assert.equal(A, list.peek());
    list.append(D);
    assert.equal(A, list.peek());
    x = list.shift();
    assert.equal(A, x);
    assert.equal(B, list.peek());
    x = list.shift();
    assert.equal(B, x);
    assert.equal(C, list.peek());
    list.remove(B);
    assert.equal(C, list.peek());
    list.append(B);
    assert.equal(C, list.peek());
    list.remove(C);
    assert.equal(D, list.peek());
    list.remove(B);
    assert.equal(D, list.peek());
    list.remove(D);
    assert.equal(null, list.peek());
    assert.ok(list.isEmpty());
    list.append(D);
    assert.equal(D, list.peek());
    list.append(C);
    list.append(B);
    list.append(A);
    list.append(C);
    assert.equal(D, list.shift());
    assert.equal(B.name, list.peek().name);
    assert.equal(B, list.shift());
    assert.equal(A, list.peek());
    assert.equal(A, list.shift());
    assert.equal(C, list.peek());
    assert.equal(C, list.shift());
    assert.ok(list.isEmpty());
    other_list = new LinkedList;
    list.append(A);
    other_list.append(A);
    assert.equal(A, list.peek());
    assert.equal(A, other_list.peek());
    list.remove(A);
    assert.equal(null, list.peek());
    return assert.equal(A, other_list.peek());
  };

}).call(this);
