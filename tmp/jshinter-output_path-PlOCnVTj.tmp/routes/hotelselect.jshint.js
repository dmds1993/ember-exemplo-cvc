QUnit.module('JSHint | routes/hotelselect.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/hotelselect.js should pass jshint.\nroutes/hotelselect.js: line 5, col 30, Missing semicolon.\nroutes/hotelselect.js: line 10, col 86, Missing semicolon.\nroutes/hotelselect.js: line 11, col 37, Missing semicolon.\nroutes/hotelselect.js: line 18, col 7, Missing semicolon.\nroutes/hotelselect.js: line 15, col 11, \'reject\' is not defined.\n\n5 errors');
});
