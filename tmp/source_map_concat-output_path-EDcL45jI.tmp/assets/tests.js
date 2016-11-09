define('ember-example/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-example/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-example/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-example/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-example/tests/helpers/start-app', 'ember-example/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberExampleTestsHelpersStartApp, _emberExampleTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberExampleTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberExampleTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-example/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-example/tests/helpers/resolver', ['exports', 'ember-example/resolver', 'ember-example/config/environment'], function (exports, _emberExampleResolver, _emberExampleConfigEnvironment) {

  var resolver = _emberExampleResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberExampleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberExampleConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-example/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-example/tests/helpers/start-app', ['exports', 'ember', 'ember-example/app', 'ember-example/config/environment'], function (exports, _ember, _emberExampleApp, _emberExampleConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberExampleConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberExampleApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-example/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-example/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-example/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-example/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('ember-example/tests/routes/hotel-select.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/hotel-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/hotel-select.js should pass jshint.');
  });
});
define('ember-example/tests/routes/hotelselect.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/hotelselect.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/hotelselect.js should pass jshint.\nroutes/hotelselect.js: line 5, col 30, Missing semicolon.\nroutes/hotelselect.js: line 10, col 86, Missing semicolon.\nroutes/hotelselect.js: line 11, col 37, Missing semicolon.\nroutes/hotelselect.js: line 18, col 7, Missing semicolon.\nroutes/hotelselect.js: line 15, col 11, \'reject\' is not defined.\n\n5 errors');
  });
});
define('ember-example/tests/routes/services.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/services.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/services.js should pass jshint.\nroutes/services.js: line 10, col 33, Missing semicolon.\nroutes/services.js: line 11, col 12, Missing semicolon.\n\n2 errors');
  });
});
define('ember-example/tests/test-helper', ['exports', 'ember-example/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberExampleTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberExampleTestsHelpersResolver['default']);
});
define('ember-example/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-example/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-example/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('ember-example/tests/unit/routes/hotel-select-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:hotel-select', 'Unit | Route | hotel select', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-example/tests/unit/routes/hotel-select-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/hotel-select-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/hotel-select-test.js should pass jshint.');
  });
});
define('ember-example/tests/unit/routes/hotelselect-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:hotelselect', 'Unit | Route | hotelselect', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-example/tests/unit/routes/hotelselect-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/hotelselect-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/hotelselect-test.js should pass jshint.');
  });
});
define('ember-example/tests/unit/routes/services-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:services', 'Unit | Route | services', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-example/tests/unit/routes/services-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/services-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/services-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-example/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
