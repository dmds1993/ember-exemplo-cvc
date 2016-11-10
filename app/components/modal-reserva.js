import Ember from 'ember';

export default Ember.Component.extend({
  emailAddress: '',

  name: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/) || Ember.computed.notEmpty('name'),

  isDisabled: Ember.computed.not('isValid')

});
