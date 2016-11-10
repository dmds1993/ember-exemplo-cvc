import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accomodation-options', 'Integration | Component | accomodation options', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accomodation-options}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accomodation-options}}
      template block text
    {{/accomodation-options}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
