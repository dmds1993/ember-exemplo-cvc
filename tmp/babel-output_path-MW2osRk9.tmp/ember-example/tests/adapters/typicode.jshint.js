define('ember-example/tests/adapters/typicode.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/typicode.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/typicode.js should pass jshint.\nadapters/typicode.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/typicode.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});