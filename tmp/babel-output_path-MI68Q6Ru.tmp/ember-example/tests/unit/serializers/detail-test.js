define('ember-example/tests/unit/serializers/detail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('detail', 'Unit | Serializer | detail', {
    // Specify the other units that are required for this test.
    needs: ['serializer:detail']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});