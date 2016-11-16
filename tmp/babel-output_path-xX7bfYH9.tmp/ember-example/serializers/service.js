define('ember-example/serializers/service', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { service: payload.hotels };
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});