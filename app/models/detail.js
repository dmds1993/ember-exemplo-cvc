import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
    room: belongsTo('rateToken'),
    category: attr('string'),
    isAvailable: attr(),
    mealPlan: attr('string'),
    minPax: attr(),
    name: attr(),
    quantityAvailable: attr('string'),
    rates: attr()
});
