define('ember-example/tests/components/detail-hotel-selected.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/detail-hotel-selected.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/detail-hotel-selected.js should pass jshint.\ncomponents/detail-hotel-selected.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/detail-hotel-selected.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});