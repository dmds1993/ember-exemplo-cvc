define('ember-example/routes/services', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var hotels = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev/hotels';
      return new _ember['default'].RSVP.Promise(function (resolve) {
        _ember['default'].run.later(function () {
          resolve(fetch(hotels).then(function (response) {
            return response.json();
          }));
        });
      });
    }
  });
});