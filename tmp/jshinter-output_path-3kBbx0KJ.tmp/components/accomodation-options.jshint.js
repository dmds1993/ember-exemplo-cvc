QUnit.module('JSHint | components/accomodation-options.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/accomodation-options.js should pass jshint.\ncomponents/accomodation-options.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/accomodation-options.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
