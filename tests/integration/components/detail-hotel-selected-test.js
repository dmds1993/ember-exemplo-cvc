import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-hotel-selected', 'Integration | Component | detail hotel selected', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{detail-hotel-selected}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#detail-hotel-selected}}
      template block text
    {{/detail-hotel-selected}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
