define('ember-example/tests/routes/hotelselect.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/hotelselect.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/hotelselect.js should pass jshint.\nroutes/hotelselect.js: line 5, col 30, Missing semicolon.\nroutes/hotelselect.js: line 10, col 86, Missing semicolon.\nroutes/hotelselect.js: line 17, col 7, Missing semicolon.\nroutes/hotelselect.js: line 14, col 11, \'reject\' is not defined.\n\n4 errors');
  });
});