import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050/dev'
});
