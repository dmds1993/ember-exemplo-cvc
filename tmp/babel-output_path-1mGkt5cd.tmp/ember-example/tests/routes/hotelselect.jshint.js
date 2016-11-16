define('ember-example/tests/routes/hotelselect.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/hotelselect.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/hotelselect.js should pass jshint.\nroutes/hotelselect.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/hotelselect.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/hotelselect.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/hotelselect.js: line 5, col 52, Missing semicolon.\n\n4 errors');
  });
});