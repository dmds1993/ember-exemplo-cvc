QUnit.module('JSHint | models/detail.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/detail.js should pass jshint.\nmodels/detail.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/detail.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/detail.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/detail.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
});
