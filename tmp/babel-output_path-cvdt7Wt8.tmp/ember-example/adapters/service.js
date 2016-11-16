define('ember-example/adapters/service', ['exports', 'ember-example/adapters/typicode'], function (exports, _emberExampleAdaptersTypicode) {
  exports['default'] = _emberExampleAdaptersTypicode['default'].extend({
    // namespace: api/v1/users/
    pathForType: function pathForType() {
      return 'hotels';
    }
  });
});