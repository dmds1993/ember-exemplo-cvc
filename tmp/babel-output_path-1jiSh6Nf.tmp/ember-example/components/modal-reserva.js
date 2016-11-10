define('ember-example/components/modal-reserva', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    emailAddress: '',

    name: '',

    isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/) || _ember['default'].computed.notEmpty('name'),

    isDisabled: _ember['default'].computed.not('isValid')

  });
});