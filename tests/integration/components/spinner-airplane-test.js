import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spinner-airplane', 'Integration | Component | spinner airplane', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spinner-airplane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#spinner-airplane}}
      template block text
    {{/spinner-airplane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
