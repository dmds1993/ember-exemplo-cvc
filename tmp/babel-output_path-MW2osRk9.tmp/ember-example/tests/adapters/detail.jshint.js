define('ember-example/tests/adapters/detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/detail.js should pass jshint.\nadapters/detail.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/detail.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/detail.js: line 6, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nadapters/detail.js: line 7, col 12, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\nadapters/detail.js: line 7, col 70, Missing semicolon.\n\n5 errors');
  });
});