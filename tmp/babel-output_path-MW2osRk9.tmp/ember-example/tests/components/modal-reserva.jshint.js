define('ember-example/tests/components/modal-reserva.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/modal-reserva.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/modal-reserva.js should pass jshint.\ncomponents/modal-reserva.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/modal-reserva.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});