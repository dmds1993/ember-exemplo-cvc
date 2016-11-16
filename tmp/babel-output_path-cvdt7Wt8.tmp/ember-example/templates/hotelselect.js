define("ember-example/templates/hotelselect", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "ember-example/templates/hotelselect.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "well");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "col-md-12");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createElement("a");
          var el6 = dom.createTextNode("Tabela de Preços  Grupo ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "list-group");
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5, "class", "=\"list-group-item\"");
          var el6 = dom.createElement("h4");
          var el7 = dom.createTextNode("Preço por dia com imposto R$ ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5, "class", "=\"list-group-item\"");
          var el6 = dom.createElement("h4");
          var el7 = dom.createTextNode("Preço por dia sem imposto R$ ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5, "class", "=\"list-group-item\"");
          var el6 = dom.createElement("h4");
          var el7 = dom.createTextNode("Preço com imposto R$ ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5, "class", "=\"list-group-item\"");
          var el6 = dom.createElement("h4");
          var el7 = dom.createTextNode("Preço sem imposto R$ ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "text-right");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "type", "button");
          dom.setAttribute(el3, "class", "btn btn btn-success");
          dom.setAttribute(el3, "data-toggle", "modal");
          dom.setAttribute(el3, "data-target", "#exampleModal");
          dom.setAttribute(el3, "data-whatever", "@mdo");
          var el4 = dom.createTextNode("Faça sua reserva");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2, 1, 1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 0]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [1, 0]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [3, 0]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [5, 0]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [7, 0]), 1, 1);
          morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["inline", "detail-hotel-selected", [], ["address", "ENDEREÇO", "quantityAvailable", "Quantidade de vagas", "accomodation", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 96], [2, 101]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 0], [2, 103]]], 0, 0], ["content", "model.rates.0.packageGroup", ["loc", [null, [6, 43], [6, 75]]], 0, 0, 0, 0], ["content", "model.rates.0.pricePerDayWithTax", ["loc", [null, [8, 76], [8, 114]]], 0, 0, 0, 0], ["content", "model.rates.0.pricePerDayWithoutTax", ["loc", [null, [9, 76], [9, 117]]], 0, 0, 0, 0], ["content", "model.rates.0.priceWithTax", ["loc", [null, [10, 68], [10, 100]]], 0, 0, 0, 0], ["content", "model.rates.0.priceWithoutTax", ["loc", [null, [11, 68], [11, 103]]], 0, 0, 0, 0], ["inline", "modal-reserva", [], ["hotel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [19, 24], [19, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [19, 2], [19, 31]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "ember-example/templates/hotelselect.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "spinner-airplane", ["loc", [null, [21, 2], [21, 22]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "ember-example/templates/hotelselect.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model", ["loc", [null, [1, 6], [1, 11]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});