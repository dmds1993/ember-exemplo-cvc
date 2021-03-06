import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('services');
  this.route('hotelselect', { path: '/:id' });
  this.route('confirmation', { path: '/:id/rooms/:rateToken' });
});

export default Router;
