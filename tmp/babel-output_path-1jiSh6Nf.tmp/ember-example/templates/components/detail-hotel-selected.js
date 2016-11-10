define("ember-example/templates/components/detail-hotel-selected", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "ember-example/templates/components/detail-hotel-selected.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "thumbnail titulo-hotel-selecionado");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "class", "img-responsive");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "caption-full");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4, "class", "pull-right");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "target", "_blank");
        dom.setAttribute(el5, "href", "");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(".");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4, "class", "category-hotel");
        var el5 = dom.createElement("a");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" horas.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("small");
        dom.setAttribute(el4, "class", "quantityAvailable");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(": ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element2, [5]);
        var element4 = dom.childAt(element2, [17]);
        var morphs = new Array(11);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3, 0]), 0, 0);
        morphs[2] = dom.createMorphAt(element3, 0, 0);
        morphs[3] = dom.createMorphAt(element3, 2, 2);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [7]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [9, 0]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [11]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [13]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(element2, [15]), 0, 0);
        morphs[9] = dom.createMorphAt(element4, 0, 0);
        morphs[10] = dom.createMorphAt(element4, 2, 2);
        return morphs;
      },
      statements: [["attribute", "src", ["get", "accomodation.0.links.thumbnailImage.href", ["loc", [null, [3, 38], [3, 80]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "accomodation.0.name", ["loc", [null, [6, 24], [6, 49]]], 0, 0, 0, 0], ["content", "address", ["loc", [null, [8, 9], [8, 20]]], 0, 0, 0, 0], ["content", "accomodation.0.location.address", ["loc", [null, [8, 21], [8, 58]]], 0, 0, 0, 0], ["content", "accomodation.0.description", ["loc", [null, [9, 9], [9, 41]]], 0, 0, 0, 0], ["content", "accomodation.0.rooms.0.category", ["loc", [null, [10, 36], [10, 75]]], 0, 0, 0, 0], ["content", "accomodation.0.rooms.0.group", ["loc", [null, [11, 9], [11, 45]]], 0, 0, 0, 0], ["content", "accomodation.0.rooms.0.mealPlan", ["loc", [null, [12, 9], [12, 48]]], 0, 0, 0, 0], ["content", "accomodation.0.rooms.0.rates.0.contents.0.items.0.description", ["loc", [null, [13, 9], [13, 84]]], 0, 0, 0, 0], ["content", "quantityAvailable", ["loc", [null, [14, 39], [14, 60]]], 0, 0, 0, 0], ["content", "accomodation.0.rooms.0.quantityAvailable", ["loc", [null, [14, 62], [14, 110]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});