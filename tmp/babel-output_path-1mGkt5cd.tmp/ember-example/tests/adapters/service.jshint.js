define('ember-example/tests/adapters/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/service.js should pass jshint.\nadapters/service.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/service.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/service.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nadapters/service.js: line 6, col 20, Missing semicolon.\n\n4 errors');
  });
});