define('ember-example/tests/models/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/service.js should pass jshint.\nmodels/service.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/service.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/service.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/service.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});