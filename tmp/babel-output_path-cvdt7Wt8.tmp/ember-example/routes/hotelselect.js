define('ember-example/routes/hotelselect', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.queryRecord('detail', params);
    }
  });
});