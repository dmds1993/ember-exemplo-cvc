import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const hotelId = params.id
    const hotelsDaily = `http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev/hotels/`;
    return new Ember.RSVP.Promise((resolve) => {
      Ember.$.ajax(hotelsDaily, {
        success: (response) => {
          let hotelSelected = response.hotels.filter((hotel) => hotel.id === hotelId)
          resolve(hotelSelected);
        },
        error: (reason) => {
          reject(reason);
        }
      });
    })
  },

  actions: {

  }
});
