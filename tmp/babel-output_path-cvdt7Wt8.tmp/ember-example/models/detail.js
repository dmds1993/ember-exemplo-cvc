define('ember-example/models/detail', ['exports', 'ember-data'], function (exports, _emberData) {
    var attr = _emberData['default'].attr;
    var belongsTo = _emberData['default'].belongsTo;
    exports['default'] = _emberData['default'].Model.extend({
        room: belongsTo('rateToken'),
        category: attr('string'),
        isAvailable: attr(),
        mealPlan: attr('string'),
        minPax: attr(),
        name: attr(),
        quantityAvailable: attr('string'),
        rates: attr()
    });
});