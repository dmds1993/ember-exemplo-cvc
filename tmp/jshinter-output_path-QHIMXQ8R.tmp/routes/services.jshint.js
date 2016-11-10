QUnit.module('JSHint | routes/services.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/services.js should pass jshint.\nroutes/services.js: line 10, col 33, Missing semicolon.\nroutes/services.js: line 11, col 12, Missing semicolon.\n\n2 errors');
});
