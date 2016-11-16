define('ember-example/adapters/detail', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev',

    urlForQueryRecord: function urlForQueryRecord(query, modelName) {
      return this.host + '/hotels/' + query.id + '/rooms/' + query.rateToken;
    }
  });
});