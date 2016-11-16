define('ember-example/tests/routes/services.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/services.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/services.js should pass jshint.\nroutes/services.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/services.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/services.js: line 4, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/services.js: line 5, col 45, Missing semicolon.\n\n4 errors');
  });
});