define('ember-example/serializers/detail', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { detail: payload.room };
      payload.detail.id = payload.detail.rates[0].rateToken;
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});