define('ember-example/tests/serializers/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/service.js should pass jshint.\nserializers/service.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nserializers/service.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nserializers/service.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});