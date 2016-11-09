import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const hotels = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev/hotels';
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve(fetch(hotels)
        .then((response) => {
          return response.json()
        }))
      });
    });
  },
  actions: {
    selectHotel(hotel) {
      console.log('Hotel clicado', hotel);
    }
  }
});
