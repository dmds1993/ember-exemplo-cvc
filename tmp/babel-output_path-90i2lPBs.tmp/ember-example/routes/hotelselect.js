define('ember-example/routes/hotelselect', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var hotelId = params.id;
      var hotelsDaily = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev/hotels/';
      return new _ember['default'].RSVP.Promise(function (resolve) {
        _ember['default'].$.ajax(hotelsDaily, {
          success: function success(response) {
            var hotelSelected = response.hotels.filter(function (hotel) {
              return hotel.id === hotelId;
            });
            console.log(hotelSelected);
            resolve(hotelSelected);
          },
          error: function error(reason) {
            reject(reason);
          }
        });
      });
    }
  });
});