define('ember-example/models/service', ['exports', 'ember-data'], function (exports, _emberData) {
    var attr = _emberData['default'].attr;
    var belongsTo = _emberData['default'].belongsTo;
    exports['default'] = _emberData['default'].Model.extend({
        hotelId: belongsTo('id'),
        description: attr('string'),
        priority: attr('string'),
        name: attr('string'),
        links: attr(),
        rooms: attr(),
        body: attr('string')
    });
});