import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
    hotelId: belongsTo('id'),
    description: attr('string'),
    priority: attr('string'),
    name: attr('string'),
    links: attr(),
    rooms: attr(),
    body: attr('string')
});
