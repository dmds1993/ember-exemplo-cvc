import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {detail: payload.room};
    payload.detail.id = payload.detail.rates[0].rateToken;
    return this._super(store, primaryModelClass, payload, id, requestType);
}
});
