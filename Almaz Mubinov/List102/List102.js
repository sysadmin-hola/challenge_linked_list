// Generated by CoffeeScript 1.9.3

/*
    class List102
    30/06/2015
    Almaz Mubinov, almaz@mubinov.com
 */

(function() {
  var List102;

  List102 = (function() {
    function List102() {
      var _func, new_code, next_key, prev_key, source;
      next_key = "'" + this.generateKey() + "'";
      prev_key = "'" + this.generateKey() + "'";
      for (_func in this) {
        if (typeof this[_func] === 'function' && _func !== 'generateKey') {
          source = this[_func] + "";
          new_code = source.replace(/next_key/g, next_key).replace(/prev_key/g, prev_key);
          if (new_code !== source) {
            eval('this.' + _func + '=' + new_code);
          }
        }
      }
    }

    List102.prototype.generateKey = function() {
      var key;
      if (global._list_102_keys == null) {
        global._list_102_keys = [];
      }
      while (true) {
        key = Math.random().toString(36);
        if (global._list_102_keys.indexOf(key) === -1) {
          return key;
        }
      }
    };

    List102.prototype.init = function(list) {
      list[next_key] = list;
      return list[prev_key] = list;
    };

    List102.prototype.peek = function(list) {
      if (list[prev_key] === list) {
        return null;
      } else {
        return list[prev_key];
      }
    };

    List102.prototype.shift = function(list) {
      var first;
      first = list[prev_key];
      this.remove(first);
      return first;
    };

    List102.prototype.remove = function(item) {
      if (item[next_key]) {
        item[next_key][prev_key] = item[prev_key];
      }
      if (item[prev_key]) {
        item[prev_key][next_key] = item[next_key];
      }
      item[next_key] = null;
      return item[prev_key] = null;
    };

    List102.prototype.append = function(list, item) {
      this.remove(item);
      item[next_key] = list[next_key];
      list[next_key][prev_key] = item;
      item[prev_key] = list;
      return list[next_key] = item;
    };

    List102.prototype.isEmpty = function(list) {
      return list[next_key] === list;
    };

    return List102;

  })();

  module.exports = List102;

}).call(this);
