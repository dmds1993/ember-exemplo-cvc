define('ember-example/tests/components/message-confirmation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/message-confirmation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/message-confirmation.js should pass jshint.\ncomponents/message-confirmation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/message-confirmation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});