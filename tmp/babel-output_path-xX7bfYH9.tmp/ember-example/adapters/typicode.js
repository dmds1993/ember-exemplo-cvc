define('ember-example/adapters/typicode', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev'
  });
});