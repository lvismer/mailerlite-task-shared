"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_SubscriberFieldsView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/stores */ "./resources/js/stores/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SubscriberFieldsView',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var fieldsStore = (0,_stores__WEBPACK_IMPORTED_MODULE_0__.useFieldsStore)();
    var subscribersStore = (0,_stores__WEBPACK_IMPORTED_MODULE_0__.useSubscribersStore)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRoute)();

    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs)(fieldsStore),
        fields = _storeToRefs.fields;

    var _storeToRefs2 = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs)(subscribersStore),
        subscriber = _storeToRefs2.subscriber;

    fieldsStore.fetchAll();
    subscribersStore.fetch(route.params.id);

    var deleteSubscriberField = function deleteSubscriberField(field) {
      subscribersStore.deleteField(field.id);
    };

    var addSubscriberField = function addSubscriberField(field) {
      subscribersStore.addField(field);
    };

    var __returned__ = {
      fieldsStore: fieldsStore,
      subscribersStore: subscribersStore,
      route: route,
      fields: fields,
      subscriber: subscriber,
      deleteSubscriberField: deleteSubscriberField,
      addSubscriberField: addSubscriberField,
      useRoute: vue_router__WEBPACK_IMPORTED_MODULE_1__.useRoute,
      storeToRefs: pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs,
      useFieldsStore: _stores__WEBPACK_IMPORTED_MODULE_0__.useFieldsStore,
      useSubscribersStore: _stores__WEBPACK_IMPORTED_MODULE_0__.useSubscribersStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto max-w-2xl"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"sm:flex sm:items-center\"><div class=\"sm:flex-auto\"><h1 class=\"text-xl font-semibold text-gray-900\">Fields</h1><p class=\"mt-2 text-sm text-gray-700\">Manage the fields linked to the subscriber.</p></div><div class=\"mt-4 sm:mt-0 sm:ml-16 sm:flex-none\"><button type=\"button\" class=\"inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto\">Add a field</button></div></div>", 1);

var _hoisted_3 = {
  key: 0,
  "class": "-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
};
var _hoisted_4 = {
  "class": "min-w-full divide-y divide-gray-300 transition"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
}, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "relative py-3.5 pl-3 pr-4 sm:pr-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Link field")])])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "divide-y divide-gray-200 bg-white"
};
var _hoisted_7 = {
  "class": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"
};
var _hoisted_8 = {
  "class": "px-3 py-4 text-sm text-gray-500"
};
var _hoisted_9 = {
  "class": "py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
};
var _hoisted_10 = ["onClick"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Unlink field");

var _hoisted_12 = {
  "class": "sr-only"
};
var _hoisted_13 = ["onClick"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Link field");

var _hoisted_15 = {
  "class": "sr-only"
};
var _hoisted_16 = {
  key: 1,
  "class": "font-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, $setup.fields.length && $setup.subscriber.fields ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.fields, function (field) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: field.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.type), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [$setup.subscriber.fields.find(function (item) {
      return item.id === field.id;
    }) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      onClick: function onClick($event) {
        return $setup.deleteSubscriberField(field);
      },
      "class": "text-red-600 hover:text-red-900"
    }, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_10)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      onClick: function onClick($event) {
        return $setup.addSubscriberField(field);
      }
    }, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_13))])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.fields.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, "Loading fields ...")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/views/SubscriberFieldsView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/SubscriberFieldsView.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriberFieldsView_vue_vue_type_template_id_73c5a3b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6 */ "./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6");
/* harmony import */ var _SubscriberFieldsView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_leonv_Cloud_Code_mailerlite_task_shared_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_leonv_Cloud_Code_mailerlite_task_shared_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubscriberFieldsView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubscriberFieldsView_vue_vue_type_template_id_73c5a3b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/SubscriberFieldsView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SubscriberFieldsView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SubscriberFieldsView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SubscriberFieldsView_vue_vue_type_template_id_73c5a3b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SubscriberFieldsView_vue_vue_type_template_id_73c5a3b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/SubscriberFieldsView.vue?vue&type=template&id=73c5a3b6");


/***/ })

}]);