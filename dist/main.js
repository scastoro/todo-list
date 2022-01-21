/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ","sourcesContent":["h1 {\n  color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allProjectsView.js":
/*!********************************!*\
  !*** ./src/allProjectsView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllProjectsView": () => (/* binding */ renderAllProjectsView),
/* harmony export */   "allProjectsTestObj": () => (/* binding */ allProjectsTestObj)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");



const renderAllProjectsView = (projects) => {
  const contentDiv = document.querySelector('#content');

  const allProjectsContainer = document.createElement('div');
  allProjectsContainer.classList.toggle('all-projects-container');;

  const newProjectDiv = document.createElement('div');
  newProjectDiv.classList.toggle('new-project-div');

  const projectsHeaderDiv = document.createElement('div');
  projectsHeaderDiv.classList.toggle('projects-header-container');

  const allProjectsHeader = document.createElement('h1');
  allProjectsHeader.classList.toggle('all-projects-header');
  allProjectsHeader.appendChild(document.createTextNode('Your Projects'));

  projectsHeaderDiv.appendChild(allProjectsHeader);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.id = 'new-project-btn';
  newProjectBtn.classList.toggle('btn');
  newProjectBtn.type = 'button';
  newProjectBtn.appendChild(document.createTextNode('Add Project'));

  const newProjectInput = document.createElement('input');
  newProjectInput.id = 'project-name-input';
  newProjectInput.type = 'text';
  newProjectInput.placeholder = 'Project Name';
  
  newProjectDiv.appendChild(newProjectInput);
  newProjectDiv.appendChild(newProjectBtn);
  projectsHeaderDiv.appendChild(newProjectDiv)

  const projectsDivContainer = document.createElement('div');
  projectsDivContainer.classList.toggle('projects-div-container')

  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.toggle('project-div');
    projectDiv.setAttribute('data-project-index', index);

    const projectHeader = document.createElement('h2');
    projectHeader.appendChild(document.createTextNode(project.name));

    projectDiv.appendChild(projectHeader);
    projectsDivContainer.appendChild(projectDiv);
  });

  allProjectsContainer.appendChild(projectsHeaderDiv);
  allProjectsContainer.appendChild(projectsDivContainer);
  contentDiv.appendChild(allProjectsContainer);

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('all projects view rendered');

}

// Initial page load
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('first page load', function(msg, data){
  renderAllProjectsView(data);
})
// Receive projects array from todoApp publish and generate all projects view
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('all projects returned', function(msg, data){
  renderAllProjectsView(data);
});
// Re-render projects when new project is added to the todoApp projects array
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('new project added', function(msg, data){
  renderAllProjectsView(data);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('all projects view rendered');
});

const allProjectsTestObj = [
  {
    name: 'Test Project Name'
  },
  {
    name: 'Test Project Name'
  },
  {
    name: 'Test Project Name'
  },
]



/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (name, todos) => {
  if(typeof todos === 'undefined'){
    todos = [];
  }
  // Methods to read, update and delete todos
  const getTodo = (index) => {
    return todos[index];
  }

  const getTodos = () => {
    return todos;
  }

  const addTodo = (todo) => {
    todos.push(todo);
  }

  const updateTodo = (index, updatedTodo) => {
    todos[index] = updatedTodo;
  }

  const deleteTodo = (index) => {
    todos.splice(index, 1);
  }


  return {name, getTodo, getTodos, addTodo, updateTodo, deleteTodo};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject); 

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTodo = (name, description, dueDate, priority, complete, project) => {
  return {name, description, dueDate, priority, complete, project};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");



const displayController = () => {
  // Helper function to clear current page view and allow for new view to be appended to content div
  const contentDiv = document.querySelector('#content');

  const clearView = (parent) => {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Create event listeners for specific views
  // Project View
  const createProjectListeners = () => {
    const addTodoBtn = document.querySelector('#add-todo-btn');
    const viewProjectsBtn = document.querySelector('#view-projects-btn');
    const todoListItem = document.querySelectorAll('.todo-li');
    const todoDeleteBtn = document.querySelectorAll('.delete-btn');
    const todoEditBtn = document.querySelectorAll('.edit-btn');

    addTodoBtn.addEventListener('click', function (event) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('add todo button clicked', event);
    });

    viewProjectsBtn.addEventListener('click', function (event) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('view projects button clicked', event);
    });

    todoListItem.forEach(item => {
      item.addEventListener('click', function (event) {
        const todoInfo = {};
        todoInfo.index = event.currentTarget.getAttribute('data-todo-index');
        todoInfo.name = event.currentTarget.getAttribute('data-project-name');
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo clicked', todoInfo);
      });
    });

    todoEditBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        const todoInfo = {};
        todoInfo.index = event.currentTarget.getAttribute('data-todo-index');
        todoInfo.name = event.currentTarget.getAttribute('data-project-name');
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo edit button clicked', todoInfo);
      });
    });

    todoDeleteBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo delete button clicked', event);
      });
    });
  };
  // All projects view event listeners
  const createAllProjectsListeners = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    const inputValue = document.querySelector('#project-name-input');
    const projectDivs = document.querySelectorAll('.project-div');

    projectDivs.forEach(project => {
      project.addEventListener('click', function(event){
        console.log(event.currentTarget);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project clicked', event.currentTarget.getAttribute('data-project-index'));
      })
    });

    newProjectBtn.addEventListener('click', function (event) {
      event.preventDefault();
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('new project button clicked', inputValue.value);
      inputValue.value = '';
      clearView(contentDiv);
    });
  }
  // New todo form event listeners
  const createTodoFormListeners = () => {
    const todoForm = document.querySelector('#todo-form');
    let todoFormBtn;
    if(todoForm.hasAttribute('data-todo-index')) {
      todoFormBtn = document.querySelector('#edit-todo-submit-btn');
    } else {
      todoFormBtn = document.querySelector('#new-todo-submit-btn');
    }
    const newTodoRadioBtn = document.querySelector('#todo-complete-yes');
    const projectHeader = document.querySelector('.project-header');
    const todoFormContainer = document.querySelector('.new-todo-form-container');

    const getFormInput = () => {
      const name = todoForm['todo-name'].value;
      const description = todoForm['todo-description'].value;
      const dueDate = todoForm['todo-dueDate'].value;
      const priority = todoForm['todo-priority'].value;
      let complete;
      if(newTodoRadioBtn.checked){
        complete = true;
      }else {
        complete = false;
      }
      const project = projectHeader.getAttribute('data-project-name');

      const newTodo = (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(name, description, dueDate, priority, complete, project);

      if(todoForm.hasAttribute('data-todo-index')){
        let newTodoInfo = {};
        newTodoInfo.index = todoForm.getAttribute('data-todo-index');
        newTodoInfo.todo = newTodo;
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('edit todo submitted', newTodoInfo);
      }else {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('new todo submitted', newTodo);
      }
      
    }

    todoFormBtn.addEventListener('click', function() {
      getFormInput()
      document.body.removeChild(todoFormContainer);
    }
    );
  }

  // Delete this when done
  function printData(data) {
    console.log(data);
  }

  // Pubsub event subscribers
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('todo clicked', function (msg, data) {
    printData(data);
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('all projects view rendered', function(msg, data){
    createAllProjectsListeners();
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('project view rendered', function(msg, data){
    createProjectListeners();
  })

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('new todo form rendered', function(msg, data){
    createTodoFormListeners();
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('edit todo form rendered', function(msg, data){
    createTodoFormListeners();;
  })
  
  // createProjectListeners();
  // createAllProjectsListeners();

  window.addEventListener('load', function(){
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('initial page load');
  }, {once: true});
}



/***/ }),

/***/ "./src/expandedTodo.js":
/*!*****************************!*\
  !*** ./src/expandedTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandedTodo": () => (/* binding */ expandedTodo),
/* harmony export */   "testObj": () => (/* binding */ testObj)
/* harmony export */ });
const expandedTodo = (obj, event) => {

  // Check event.target.getAttribute('data-todo-index') to get index of current todo
  // Pass this info into a pub sub subscribe call
  // This call should return the object at that index from the main todo module

  // const currentDiv = event.target
  const expandedContainer = document.createElement('div');
  expandedContainer.classList.toggle('todo-list-expanded');

  const attrList = document.createElement('ul');

  const description = document.createElement('li');
  description.appendChild(document.createTextNode(obj.description));

  const priority = document.createElement('li');
  priority.appendChild(document.createTextNode(obj.priority));

  const notes = document.createElement('li');
  notes.appendChild(document.createTextNode(obj.notes));

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.toggle('button-container');

  const inputDiv = document.createElement('div');
  inputDiv.classList.toggle('input-div');

  const complete = document.createElement('input');
  complete.type = 'Checkbox';
  complete.id = 'complete'
  complete.name = 'complete'
  if(complete) {
    complete.checked = 'yes';
  } 

  const completeLabel = document.createElement('label');
  completeLabel.for = 'complete';
  completeLabel.appendChild(document.createTextNode('Todo Complete'));

  const editBtn = document.createElement('button');
  editBtn.classList.toggle('todo-edit-btn');
  editBtn.appendChild(document.createTextNode('Edit todo'));

  inputDiv.appendChild(complete);
  inputDiv.appendChild(completeLabel);
  buttonContainer.appendChild(inputDiv);
  buttonContainer.appendChild(editBtn);

  attrList.appendChild(description);
  attrList.appendChild(priority);
  attrList.appendChild(notes);
  

  expandedContainer.appendChild(attrList);
  expandedContainer.appendChild(buttonContainer);

  document.body.firstElementChild.appendChild(expandedContainer);
}

const testObj = {
  description: 'This is a test Description',
  priority: 1,
  notes: 'Here are some notes',
  complete: true
}


/***/ }),

/***/ "./src/projectView.js":
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectView": () => (/* binding */ renderProjectView),
/* harmony export */   "projectTestObj": () => (/* binding */ projectTestObj)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const renderProjectView = (project) => {
  const contentDiv = document.querySelector('#content');

  const projectContainer = document.createElement('div');
  projectContainer.classList.toggle('project-container');

  const headerDiv = document.createElement('div');
  headerDiv.classList.toggle('header-div');

  const headerDivLeft = document.createElement('div');
  headerDivLeft.classList.toggle('header-div-left');

  const projectHeader = document.createElement('h1');
  projectHeader.classList.toggle('project-header');
  projectHeader.appendChild(document.createTextNode(`${project.name}`));
  // Maybe add a Project name data attr somewhere so the new todos can access the value and pass it to the todoApp.js module
  projectHeader.setAttribute('data-project-name', project.name);

  headerDivLeft.appendChild(projectHeader);

  const addTodoBtn = document.createElement('button');
  addTodoBtn.id = 'add-todo-btn';
  addTodoBtn.classList.toggle('btn');
  addTodoBtn.type = 'button';
  addTodoBtn.appendChild(document.createTextNode('Add Todo'));

  headerDivLeft.appendChild(addTodoBtn);
  headerDiv.appendChild(headerDivLeft);

  const headerDivRight = document.createElement('div');
  headerDivRight.classList.toggle('header-div-right');

  const viewProjectsBtn = document.createElement('button');
  viewProjectsBtn.id = 'view-projects-btn';
  viewProjectsBtn.classList.toggle('btn');
  viewProjectsBtn.type = 'button';
  viewProjectsBtn.appendChild(document.createTextNode('View Projects'));

  headerDivRight.appendChild(viewProjectsBtn);
  headerDiv.appendChild(headerDivRight);

  const todoContainer = document.createElement('div');
  todoContainer.classList.toggle('todo-container');

  const todoHeader = document.createElement('h2');
  todoHeader.classList.toggle('todo-header');
  todoHeader.appendChild(document.createTextNode('Todos'));

  todoContainer.appendChild(todoHeader);

  const todoList = document.createElement('ul');
  todoList.classList.toggle('todo-list');

  // Probably need to add a data-attr for project
  // Allows for accessing project object key when selecting li
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.toggle('todo-li');
    todoItem.setAttribute('data-todo-index', index);
    todoItem.setAttribute('data-project-name', project.name);

    const todoDiv = document.createElement('div');
    todoDiv.classList.toggle('todo-div');

    const todoName = document.createElement('p');
    todoName.appendChild(document.createTextNode(todo.name));

    const todoDate = document.createElement('p');
    todoDate.appendChild(document.createTextNode(todo.date));

    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDate);
    todoItem.appendChild(todoDiv)

    const editBtn = document.createElement('button');
    editBtn.classList.toggle('btn');
    editBtn.classList.toggle('edit-btn');
    editBtn.type = 'button';
    editBtn.appendChild(document.createTextNode('Edit Todo'));

    todoItem.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.toggle('btn');
    deleteBtn.classList.toggle('delete-btn');
    deleteBtn.type = 'button';
    deleteBtn.appendChild(document.createTextNode('Delete Todo'));

    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });

  todoContainer.appendChild(todoList);

  projectContainer.appendChild(headerDiv);
  projectContainer.appendChild(todoContainer);
  contentDiv.appendChild(projectContainer);

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project view rendered', project);

  // Render page when project clicked on allProjects view
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('project returned', function(msg, data){
    renderProjectView(data);
  })
  // Render page when new todo added
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('new todo added', function(msg, data){
    renderProjectView(data);
  });
  // Re-render when todo updated
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('todo updated', function(msg, data){
    renderProjectView(data);
  });
}

const projectTestObj = {
  name: 'Default',
  todos: [
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
  ]
}




/***/ }),

/***/ "./src/todoApp.js":
/*!************************!*\
  !*** ./src/todoApp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoApp": () => (/* binding */ todoApp)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");




const todoApp = () => {
  const projects = [
    {
      name: 'default',
      todos: []
    }
  ];

  // Create project objects with empty todos array property
  const addProject = (projectName) => {
    projects.forEach(project => {
      if(project.name === projectName){
        console.log('Project name already used');
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('Project name already in use', projectName);
      }
    });
    projects.push((0,_createProject__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName));
    console.log(`${projectName} added!`);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project added', projects);
  }
  
  addProject('test');

  // Add todo by searching projects list and pushing todo argument to todos property
  const addTodo = (obj) => {
    projects.forEach(project => {
      if (project.name === obj.project) {
        project.addTodo(obj);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo added', project.getTodos());
        console.dir(project.getTodos());
      }
    });

  }

  addTodo({name: 'test todo', description: 'test description', project: 'test'});
  // Get project
  const getProject = (index) => {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project returned', projects[index]);
    console.log(projects[index]);
  }
  // Get all projects
  const getAllProjects = () => {
    return projects;
  }
  // Get todos
  const getAllTodos = (projectName) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    projects.forEach(project => {
      if (project.name === projectName) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todos returned', project.getTodos());
        console.dir(project.getTodos());
      } else {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('Project not found', projectName);
        console.log('Project not found');
      }
    });
  }

  // Get todo
  const getTodo = (obj) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    for (let i = 0; i < projects.length; i++) {
      if(projects[i].name === obj.name){
        console.log(projects[i].getTodo(obj.index));
        return projects[i].getTodo(obj.index);
      } else {
        console.log('todo not found');
        return 'todo not found.'
      }
    }
  }
  const testObject = {
    name: 'test',
    index: '0'
  }

  getTodo(testObject);
  getAllTodos('test');
  getProject('test');


  // Update todo
  const updateTodo = (obj) => {
    projects.forEach(project => {
      if (project.name === obj.todo.project) {
        project.updateTodo(obj.index, obj.todo)
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo updated', project.getTodos());
        console.log(project.getTodos());
      } else {
        console.log('todo not found');
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo not found', projectName);
      }
    });
  }
  const testObject2 = {
    projectName: 'test',
    index: 0,
    todo: 'updated todo'
  }
  // Update Project

  // Delete Project
  const deleteProject = (projectName) => {
    projects.forEach((project, index) => {
      if(project.name === projectName){
        projects.splice(index, 1);
        console.log(`${project} deleted`);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project deleted', projects)
      } else {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('project not found', projectName);
        console.log('Project not found');
      }
    });
  }
  // Delete Todo
  const deleteTodo = (obj) => {
    projects.forEach(project => {
      if(project.name === obj.projectName){
        console.log(`${project.getTodo(obj.index)} deleted`);
        project.deleteTodo(obj.index);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo deleted', project.todos)
      } else {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo not found', obj);
        console.log('todo not found');
      }
    });
  }
  // addProject('Default');
  // const testProjectObj = {
  //   name: 'Default',
  //   todo: 
  //     {
  //       description: 'This is a test Description',
  //       priority: 1,
  //       notes: 'Here are some notes',
  //       complete: true
  //     }
    
  // };
  // addTodo(testProjectObj);

  // Add subscribe events from PubSub module
  // Need to listen to corresponding click events from the displayController
  // These click events need to be from the submit buttons on the forms that are generated by the displayController
  // To subscribe to an event with pubsub you need to use a subscriber function: function(msg, data){ pass callback here }

  // Display all projects view on first page load
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('initial page load', function(msg, data){
    console.log('first page load');
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('first page load', getAllProjects());
  })
  // Add new project with name from new project name form
  // Then publish new array for allProjects.js to subscribe to
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('new project button clicked', function(msg, data){
    addProject(data);
    console.log(getAllProjects());
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('new project added', getAllProjects());
  })
  // Subscribe to view projects button click then publish all projects returned with projects array as data
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('view projects button clicked', function(msg, data){
    console.log('all projects returned');
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('all projects returned', getAllProjects())
  });
  // Add new todo
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('new todo submitted', function(msg, data){
    addTodo(data);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('new todo added', getAllTodos());
  });
  // Return todo when clicked
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('todo clicked', function(msg, data){
    console.log('todo returned');
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo returned', getTodo(data));
  });
  // Also return todo when edit btn clicked
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('todo edit button clicked', function(msg, data){
    console.log('edit todo returned');
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('edit todo returned', getTodo(data));
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('edit todo submitted', function(msg, data){
    updateTodo(data);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('todo updated')
  });
  // Return project data when project clicked
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('project clicked', function(msg, data){
    getProject(data);
  })
}


/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodoForm": () => (/* binding */ renderTodoForm)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


// Form to be rendered when todo button is clicked
const renderTodoForm = (obj) => {
  const formContainer = document.createElement('div');
  formContainer.classList.toggle('new-todo-form-container');

  const formDiv = document.createElement('div');
  formDiv.classList.toggle('todo-form-div');

  const todoHeader = document.createElement('h3');
  todoHeader.id = 'new-todo-header';
  todoHeader.appendChild(document.createTextNode('Add New Todo'));

  formDiv.appendChild(todoHeader);

  const todoForm = document.createElement('form');
  todoForm.id = 'todo-form'
  if(obj){
    todoForm.setAttribute('data-todo-index', obj.index)
  }

  const nameInput = document.createElement('input');
  nameInput.id = 'todo-name';
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  nameInput.name = 'todo-name';
  if(obj){
    nameInput.value = obj.name
  }

  todoForm.appendChild(nameInput);
  
  const descriptionInput = document.createElement('input');
  descriptionInput.id = 'todo-description';
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Description';
  descriptionInput.description = 'todo-description';
  if(obj){
    descriptionInput.value = obj.description
  }

  todoForm.appendChild(descriptionInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'todo-dueDate';
  dueDateInput.type = 'text';
  dueDateInput.placeholder = 'Due date';
  dueDateInput.dueDate = 'todo-dueDate';
  if(obj){
    dueDateInput.value = obj.dueDate
  }

  todoForm.appendChild(dueDateInput);

  const priorityInput = document.createElement('input');
  priorityInput.id = 'todo-priority';
  priorityInput.type = 'text';
  priorityInput.placeholder = 'priority';
  priorityInput.priority = 'todo-priority';
  if(obj){
    priorityInput.value = obj.priority
  }

  todoForm.appendChild(priorityInput);

  const completePara = document.createElement('p');
  completePara.appendChild(document.createTextNode('Todo Complete?'))

  todoForm.appendChild(completePara);

  const completeYesInput = document.createElement('input');
  completeYesInput.id = 'todo-complete-yes';
  completeYesInput.type = 'radio';
  completeYesInput.value = 'Yes';
  completeYesInput.name = 'todo-complete';
  if(obj){
    if(obj.complete){
      completeYesInput.checked = true;
    }
  }

  todoForm.appendChild(completeYesInput);

  const completeYesLabel = document.createElement('label');
  completeYesLabel.for = 'Yes';
  completeYesLabel.appendChild(document.createTextNode('Yes'));

  todoForm.appendChild(completeYesLabel);

  const completeNoInput = document.createElement('input');
  completeNoInput.id = 'todo-complete-no';
  completeNoInput.type = 'radio';
  completeNoInput.value = 'No';
  completeNoInput.name = 'todo-complete';
  if(obj){
    if(!obj.complete){
      completeNoInput.checked = true;
    }
  }

  todoForm.appendChild(completeNoInput);

  const completeNoLabel = document.createElement('label');
  completeNoLabel.for = 'No';
  completeNoLabel.appendChild(document.createTextNode('No'));

  todoForm.appendChild(completeNoLabel);

  const todoSubmitBtn = document.createElement('input');
  todoSubmitBtn.type = 'button';

  if(obj){
    todoSubmitBtn.value = 'Edit todo';
    todoSubmitBtn.id ='edit-todo-submit-btn';
  } else {
    todoSubmitBtn.value = 'Add todo';
    todoSubmitBtn.id ='new-todo-submit-btn';
  }

  todoForm.appendChild(todoSubmitBtn);

  formDiv.appendChild(todoForm);
  formContainer.appendChild(formDiv);
  document.body.appendChild(formContainer);

  if(obj){
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('edit todo form rendered');
  }else {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('new todo form rendered')
  }
  
  // Subscribe to when add todo button is clicked
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('add todo button clicked', function(msg, data){
    renderTodoForm();
  });
  // Subscribe to when edit todo data is returned
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('edit todo returned', function(msg, data){
    renderTodoForm(data);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _expandedTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expandedTodo */ "./src/expandedTodo.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");
/* harmony import */ var _allProjectsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allProjectsView */ "./src/allProjectsView.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _todoApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoApp */ "./src/todoApp.js");
/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoForm */ "./src/todoForm.js");








console.log('Hello there!')

let str = document.createTextNode('More Testing');

let header = document.createElement('h1');

// header.appendChild(str);

// expandedTodo(testObj);

// renderProjectView(projectTestObj);

// renderAllProjectsView();

// renderTodoForm();

(0,_displayController__WEBPACK_IMPORTED_MODULE_4__.displayController)();

// todoApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCLEdBQUc7QUFDSCxJQUFJLHdEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWdCO0FBQ2xCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSwwREFBZ0I7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQzVJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKOEI7QUFDdUI7QUFDVztBQUNZO0FBQ3RCO0FBQ3BCO0FBQ1E7O0FBRTFDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFFQUFpQjs7QUFFakIsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbFByb2plY3RzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V4cGFuZGVkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9BcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Gb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxIHtcXG4gIGNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RWaWV3IH0gZnJvbSBcIi4vcHJvamVjdFZpZXdcIjtcblxuY29uc3QgcmVuZGVyQWxsUHJvamVjdHNWaWV3ID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsbFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FsbC1wcm9qZWN0cy1jb250YWluZXInKTs7XG5cbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC50b2dnbGUoJ25ldy1wcm9qZWN0LWRpdicpO1xuXG4gIGNvbnN0IHByb2plY3RzSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzSGVhZGVyRGl2LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3RzLWhlYWRlci1jb250YWluZXInKTtcblxuICBjb25zdCBhbGxQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGFsbFByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FsbC1wcm9qZWN0cy1oZWFkZXInKTtcbiAgYWxsUHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1lvdXIgUHJvamVjdHMnKSk7XG5cbiAgcHJvamVjdHNIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNIZWFkZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdEJ0bi5pZCA9ICduZXctcHJvamVjdC1idG4nO1xuICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bicpO1xuICBuZXdQcm9qZWN0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgbmV3UHJvamVjdEJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkIFByb2plY3QnKSk7XG5cbiAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmV3UHJvamVjdElucHV0LmlkID0gJ3Byb2plY3QtbmFtZS1pbnB1dCc7XG4gIG5ld1Byb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xuICBuZXdQcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcbiAgXG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcbiAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbiAgcHJvamVjdHNIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdilcblxuICBjb25zdCBwcm9qZWN0c0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0c0RpdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qZWN0cy1kaXYtY29udGFpbmVyJylcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3QtZGl2Jyk7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsIGluZGV4KTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvamVjdC5uYW1lKSk7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIHByb2plY3RzRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9KTtcblxuICBhbGxQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlckRpdik7XG4gIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2Q29udGFpbmVyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgUHViU3ViLnB1Ymxpc2goJ2FsbCBwcm9qZWN0cyB2aWV3IHJlbmRlcmVkJyk7XG5cbn1cblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcblB1YlN1Yi5zdWJzY3JpYmUoJ2ZpcnN0IHBhZ2UgbG9hZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gIHJlbmRlckFsbFByb2plY3RzVmlldyhkYXRhKTtcbn0pXG4vLyBSZWNlaXZlIHByb2plY3RzIGFycmF5IGZyb20gdG9kb0FwcCBwdWJsaXNoIGFuZCBnZW5lcmF0ZSBhbGwgcHJvamVjdHMgdmlld1xuUHViU3ViLnN1YnNjcmliZSgnYWxsIHByb2plY3RzIHJldHVybmVkJywgZnVuY3Rpb24obXNnLCBkYXRhKXtcbiAgcmVuZGVyQWxsUHJvamVjdHNWaWV3KGRhdGEpO1xufSk7XG4vLyBSZS1yZW5kZXIgcHJvamVjdHMgd2hlbiBuZXcgcHJvamVjdCBpcyBhZGRlZCB0byB0aGUgdG9kb0FwcCBwcm9qZWN0cyBhcnJheVxuUHViU3ViLnN1YnNjcmliZSgnbmV3IHByb2plY3QgYWRkZWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICByZW5kZXJBbGxQcm9qZWN0c1ZpZXcoZGF0YSk7XG4gIFB1YlN1Yi5wdWJsaXNoKCdhbGwgcHJvamVjdHMgdmlldyByZW5kZXJlZCcpO1xufSk7XG5cbmNvbnN0IGFsbFByb2plY3RzVGVzdE9iaiA9IFtcbiAge1xuICAgIG5hbWU6ICdUZXN0IFByb2plY3QgTmFtZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZXN0IFByb2plY3QgTmFtZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZXN0IFByb2plY3QgTmFtZSdcbiAgfSxcbl1cblxuZXhwb3J0IHtyZW5kZXJBbGxQcm9qZWN0c1ZpZXcsIGFsbFByb2plY3RzVGVzdE9ian07IiwiY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCB0b2RvcykgPT4ge1xuICBpZih0eXBlb2YgdG9kb3MgPT09ICd1bmRlZmluZWQnKXtcbiAgICB0b2RvcyA9IFtdO1xuICB9XG4gIC8vIE1ldGhvZHMgdG8gcmVhZCwgdXBkYXRlIGFuZCBkZWxldGUgdG9kb3NcbiAgY29uc3QgZ2V0VG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHJldHVybiB0b2Rvc1tpbmRleF07XG4gIH1cblxuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb3M7XG4gIH1cblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9IChpbmRleCwgdXBkYXRlZFRvZG8pID0+IHtcbiAgICB0b2Rvc1tpbmRleF0gPSB1cGRhdGVkVG9kbztcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cblxuICByZXR1cm4ge25hbWUsIGdldFRvZG8sIGdldFRvZG9zLCBhZGRUb2RvLCB1cGRhdGVUb2RvLCBkZWxldGVUb2RvfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsgIiwiY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBwcm9qZWN0KSA9PiB7XG4gIHJldHVybiB7bmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgcHJvamVjdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG87IiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGVUb2RvXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2xlYXIgY3VycmVudCBwYWdlIHZpZXcgYW5kIGFsbG93IGZvciBuZXcgdmlldyB0byBiZSBhcHBlbmRlZCB0byBjb250ZW50IGRpdlxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBjbGVhclZpZXcgPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGV2ZW50IGxpc3RlbmVycyBmb3Igc3BlY2lmaWMgdmlld3NcbiAgLy8gUHJvamVjdCBWaWV3XG4gIGNvbnN0IGNyZWF0ZVByb2plY3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kby1idG4nKTtcbiAgICBjb25zdCB2aWV3UHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1wcm9qZWN0cy1idG4nKTtcbiAgICBjb25zdCB0b2RvTGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1saScpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWJ0bicpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnRuJyk7XG5cbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnYWRkIHRvZG8gYnV0dG9uIGNsaWNrZWQnLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICB2aWV3UHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCd2aWV3IHByb2plY3RzIGJ1dHRvbiBjbGlja2VkJywgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdG9kb0xpc3RJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZG9JbmZvID0ge307XG4gICAgICAgIHRvZG9JbmZvLmluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbmRleCcpO1xuICAgICAgICB0b2RvSW5mby5uYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvIGNsaWNrZWQnLCB0b2RvSW5mbyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRvZG9FZGl0QnRuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZG9JbmZvID0ge307XG4gICAgICAgIHRvZG9JbmZvLmluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbmRleCcpO1xuICAgICAgICB0b2RvSW5mby5uYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvIGVkaXQgYnV0dG9uIGNsaWNrZWQnLCB0b2RvSW5mbyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRvZG9EZWxldGVCdG4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ3RvZG8gZGVsZXRlIGJ1dHRvbiBjbGlja2VkJywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIC8vIEFsbCBwcm9qZWN0cyB2aWV3IGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcblxuICAgIHByb2plY3REaXZzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ3Byb2plY3QgY2xpY2tlZCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaW5kZXgnKSk7XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCduZXcgcHJvamVjdCBidXR0b24gY2xpY2tlZCcsIGlucHV0VmFsdWUudmFsdWUpO1xuICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgY2xlYXJWaWV3KGNvbnRlbnREaXYpO1xuICAgIH0pO1xuICB9XG4gIC8vIE5ldyB0b2RvIGZvcm0gZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IGNyZWF0ZVRvZG9Gb3JtTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xuICAgIGxldCB0b2RvRm9ybUJ0bjtcbiAgICBpZih0b2RvRm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbmRleCcpKSB7XG4gICAgICB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRvZG8tc3VibWl0LWJ0bicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kby1zdWJtaXQtYnRuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld1RvZG9SYWRpb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNvbXBsZXRlLXllcycpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHRvZG9Gb3JtWyd0b2RvLW5hbWUnXS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb0Zvcm1bJ3RvZG8tZGVzY3JpcHRpb24nXS52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSB0b2RvRm9ybVsndG9kby1kdWVEYXRlJ10udmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IHRvZG9Gb3JtWyd0b2RvLXByaW9yaXR5J10udmFsdWU7XG4gICAgICBsZXQgY29tcGxldGU7XG4gICAgICBpZihuZXdUb2RvUmFkaW9CdG4uY2hlY2tlZCl7XG4gICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SGVhZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKTtcblxuICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgcHJvamVjdCk7XG5cbiAgICAgIGlmKHRvZG9Gb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2RvLWluZGV4Jykpe1xuICAgICAgICBsZXQgbmV3VG9kb0luZm8gPSB7fTtcbiAgICAgICAgbmV3VG9kb0luZm8uaW5kZXggPSB0b2RvRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbmRleCcpO1xuICAgICAgICBuZXdUb2RvSW5mby50b2RvID0gbmV3VG9kbztcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ2VkaXQgdG9kbyBzdWJtaXR0ZWQnLCBuZXdUb2RvSW5mbyk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCduZXcgdG9kbyBzdWJtaXR0ZWQnLCBuZXdUb2RvKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIHRvZG9Gb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBnZXRGb3JtSW5wdXQoKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvRm9ybUNvbnRhaW5lcik7XG4gICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBEZWxldGUgdGhpcyB3aGVuIGRvbmVcbiAgZnVuY3Rpb24gcHJpbnREYXRhKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIC8vIFB1YnN1YiBldmVudCBzdWJzY3JpYmVyc1xuICBQdWJTdWIuc3Vic2NyaWJlKCd0b2RvIGNsaWNrZWQnLCBmdW5jdGlvbiAobXNnLCBkYXRhKSB7XG4gICAgcHJpbnREYXRhKGRhdGEpO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKCdhbGwgcHJvamVjdHMgdmlldyByZW5kZXJlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZSgncHJvamVjdCB2aWV3IHJlbmRlcmVkJywgZnVuY3Rpb24obXNnLCBkYXRhKXtcbiAgICBjcmVhdGVQcm9qZWN0TGlzdGVuZXJzKCk7XG4gIH0pXG5cbiAgUHViU3ViLnN1YnNjcmliZSgnbmV3IHRvZG8gZm9ybSByZW5kZXJlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgY3JlYXRlVG9kb0Zvcm1MaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZSgnZWRpdCB0b2RvIGZvcm0gcmVuZGVyZWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICAgIGNyZWF0ZVRvZG9Gb3JtTGlzdGVuZXJzKCk7O1xuICB9KVxuICBcbiAgLy8gY3JlYXRlUHJvamVjdExpc3RlbmVycygpO1xuICAvLyBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycygpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICBQdWJTdWIucHVibGlzaCgnaW5pdGlhbCBwYWdlIGxvYWQnKTtcbiAgfSwge29uY2U6IHRydWV9KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfTsiLCJleHBvcnQgY29uc3QgZXhwYW5kZWRUb2RvID0gKG9iaiwgZXZlbnQpID0+IHtcblxuICAvLyBDaGVjayBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnKSB0byBnZXQgaW5kZXggb2YgY3VycmVudCB0b2RvXG4gIC8vIFBhc3MgdGhpcyBpbmZvIGludG8gYSBwdWIgc3ViIHN1YnNjcmliZSBjYWxsXG4gIC8vIFRoaXMgY2FsbCBzaG91bGQgcmV0dXJuIHRoZSBvYmplY3QgYXQgdGhhdCBpbmRleCBmcm9tIHRoZSBtYWluIHRvZG8gbW9kdWxlXG5cbiAgLy8gY29uc3QgY3VycmVudERpdiA9IGV2ZW50LnRhcmdldFxuICBjb25zdCBleHBhbmRlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmRlZENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWxpc3QtZXhwYW5kZWQnKTtcblxuICBjb25zdCBhdHRyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouZGVzY3JpcHRpb24pKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9iai5wcmlvcml0eSkpO1xuXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbm90ZXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLm5vdGVzKSk7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXREaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQtZGl2Jyk7XG5cbiAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb21wbGV0ZS50eXBlID0gJ0NoZWNrYm94JztcbiAgY29tcGxldGUuaWQgPSAnY29tcGxldGUnXG4gIGNvbXBsZXRlLm5hbWUgPSAnY29tcGxldGUnXG4gIGlmKGNvbXBsZXRlKSB7XG4gICAgY29tcGxldGUuY2hlY2tlZCA9ICd5ZXMnO1xuICB9IFxuXG4gIGNvbnN0IGNvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb21wbGV0ZUxhYmVsLmZvciA9ICdjb21wbGV0ZSc7XG4gIGNvbXBsZXRlTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RvZG8gQ29tcGxldGUnKSk7XG5cbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8tZWRpdC1idG4nKTtcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRWRpdCB0b2RvJykpO1xuXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVMYWJlbCk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICBhdHRyTGlzdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGF0dHJMaXN0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgYXR0ckxpc3QuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICBcblxuICBleHBhbmRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChhdHRyTGlzdCk7XG4gIGV4cGFuZGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChleHBhbmRlZENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0T2JqID0ge1xuICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSB0ZXN0IERlc2NyaXB0aW9uJyxcbiAgcHJpb3JpdHk6IDEsXG4gIG5vdGVzOiAnSGVyZSBhcmUgc29tZSBub3RlcycsXG4gIGNvbXBsZXRlOiB0cnVlXG59XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcblxuY29uc3QgcmVuZGVyUHJvamVjdFZpZXcgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdC1jb250YWluZXInKTtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci1kaXYnKTtcblxuICBjb25zdCBoZWFkZXJEaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckRpdkxlZnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLWRpdi1sZWZ0Jyk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdC1oZWFkZXInKTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtwcm9qZWN0Lm5hbWV9YCkpO1xuICAvLyBNYXliZSBhZGQgYSBQcm9qZWN0IG5hbWUgZGF0YSBhdHRyIHNvbWV3aGVyZSBzbyB0aGUgbmV3IHRvZG9zIGNhbiBhY2Nlc3MgdGhlIHZhbHVlIGFuZCBwYXNzIGl0IHRvIHRoZSB0b2RvQXBwLmpzIG1vZHVsZVxuICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCBwcm9qZWN0Lm5hbWUpO1xuXG4gIGhlYWRlckRpdkxlZnQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUb2RvQnRuLmlkID0gJ2FkZC10b2RvLWJ0bic7XG4gIGFkZFRvZG9CdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuJyk7XG4gIGFkZFRvZG9CdG4udHlwZSA9ICdidXR0b24nO1xuICBhZGRUb2RvQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGQgVG9kbycpKTtcblxuICBoZWFkZXJEaXZMZWZ0LmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2TGVmdCk7XG5cbiAgY29uc3QgaGVhZGVyRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2UmlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLWRpdi1yaWdodCcpO1xuXG4gIGNvbnN0IHZpZXdQcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2aWV3UHJvamVjdHNCdG4uaWQgPSAndmlldy1wcm9qZWN0cy1idG4nO1xuICB2aWV3UHJvamVjdHNCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuJyk7XG4gIHZpZXdQcm9qZWN0c0J0bi50eXBlID0gJ2J1dHRvbic7XG4gIHZpZXdQcm9qZWN0c0J0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVmlldyBQcm9qZWN0cycpKTtcblxuICBoZWFkZXJEaXZSaWdodC5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdHNCdG4pO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2UmlnaHQpO1xuXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0b2RvSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8taGVhZGVyJyk7XG4gIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RvZG9zJykpO1xuXG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0b2RvTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWxpc3QnKTtcblxuICAvLyBQcm9iYWJseSBuZWVkIHRvIGFkZCBhIGRhdGEtYXR0ciBmb3IgcHJvamVjdFxuICAvLyBBbGxvd3MgZm9yIGFjY2Vzc2luZyBwcm9qZWN0IG9iamVjdCBrZXkgd2hlbiBzZWxlY3RpbmcgbGlcbiAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWxpJyk7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnLCBpbmRleCk7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3QubmFtZSk7XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWRpdicpO1xuXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb05hbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9kby5uYW1lKSk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGF0ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2RvLmRhdGUpKTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9EaXYpXG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidG4nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQtYnRuJyk7XG4gICAgZWRpdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRWRpdCBUb2RvJykpO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGVsZXRlIFRvZG8nKSk7XG5cbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICB9KTtcblxuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgUHViU3ViLnB1Ymxpc2goJ3Byb2plY3QgdmlldyByZW5kZXJlZCcsIHByb2plY3QpO1xuXG4gIC8vIFJlbmRlciBwYWdlIHdoZW4gcHJvamVjdCBjbGlja2VkIG9uIGFsbFByb2plY3RzIHZpZXdcbiAgUHViU3ViLnN1YnNjcmliZSgncHJvamVjdCByZXR1cm5lZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgcmVuZGVyUHJvamVjdFZpZXcoZGF0YSk7XG4gIH0pXG4gIC8vIFJlbmRlciBwYWdlIHdoZW4gbmV3IHRvZG8gYWRkZWRcbiAgUHViU3ViLnN1YnNjcmliZSgnbmV3IHRvZG8gYWRkZWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICAgIHJlbmRlclByb2plY3RWaWV3KGRhdGEpO1xuICB9KTtcbiAgLy8gUmUtcmVuZGVyIHdoZW4gdG9kbyB1cGRhdGVkXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG8gdXBkYXRlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgcmVuZGVyUHJvamVjdFZpZXcoZGF0YSk7XG4gIH0pO1xufVxuXG5jb25zdCBwcm9qZWN0VGVzdE9iaiA9IHtcbiAgbmFtZTogJ0RlZmF1bHQnLFxuICB0b2RvczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCdXkgR3JvY2VyaWVzJyxcbiAgICAgIGRhdGU6ICdKYW4gMm5kJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0J1eSBHcm9jZXJpZXMnLFxuICAgICAgZGF0ZTogJ0phbiAybmQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQnV5IEdyb2NlcmllcycsXG4gICAgICBkYXRlOiAnSmFuIDJuZCdcbiAgICB9LFxuICBdXG59XG5cblxuZXhwb3J0IHtyZW5kZXJQcm9qZWN0VmlldywgcHJvamVjdFRlc3RPYmp9OyIsImltcG9ydCBQdWJTdWIsIHsgcHVibGlzaCB9IGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL2NyZWF0ZVRvZG9cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IHRvZG9BcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHRvZG9zOiBbXVxuICAgIH1cbiAgXTtcblxuICAvLyBDcmVhdGUgcHJvamVjdCBvYmplY3RzIHdpdGggZW1wdHkgdG9kb3MgYXJyYXkgcHJvcGVydHlcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3QgbmFtZSBhbHJlYWR5IHVzZWQnKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGluIHVzZScsIHByb2plY3ROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0TmFtZX0gYWRkZWQhYCk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3Byb2plY3QgYWRkZWQnLCBwcm9qZWN0cyk7XG4gIH1cbiAgXG4gIGFkZFByb2plY3QoJ3Rlc3QnKTtcblxuICAvLyBBZGQgdG9kbyBieSBzZWFyY2hpbmcgcHJvamVjdHMgbGlzdCBhbmQgcHVzaGluZyB0b2RvIGFyZ3VtZW50IHRvIHRvZG9zIHByb3BlcnR5XG4gIGNvbnN0IGFkZFRvZG8gPSAob2JqKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IG9iai5wcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyhvYmopO1xuICAgICAgICBQdWJTdWIucHVibGlzaCgndG9kbyBhZGRlZCcsIHByb2plY3QuZ2V0VG9kb3MoKSk7XG4gICAgICAgIGNvbnNvbGUuZGlyKHByb2plY3QuZ2V0VG9kb3MoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZFRvZG8oe25hbWU6ICd0ZXN0IHRvZG8nLCBkZXNjcmlwdGlvbjogJ3Rlc3QgZGVzY3JpcHRpb24nLCBwcm9qZWN0OiAndGVzdCd9KTtcbiAgLy8gR2V0IHByb2plY3RcbiAgY29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0IHJldHVybmVkJywgcHJvamVjdHNbaW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF0pO1xuICB9XG4gIC8vIEdldCBhbGwgcHJvamVjdHNcbiAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG4gIC8vIEdldCB0b2Rvc1xuICBjb25zdCBnZXRBbGxUb2RvcyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcm9qZWN0cyBhbmQgZmluZCBpZiBuYW1lIGlzIHByZXNlbnQgdGhlbiBjaGVjayBpZiB0b2RvIGlzIHByZXNlbnQgYXQgaW5kZXggYXJndW1lbnRcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ3RvZG9zIHJldHVybmVkJywgcHJvamVjdC5nZXRUb2RvcygpKTtcbiAgICAgICAgY29uc29sZS5kaXIocHJvamVjdC5nZXRUb2RvcygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdQcm9qZWN0IG5vdCBmb3VuZCcsIHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3Qgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBHZXQgdG9kb1xuICBjb25zdCBnZXRUb2RvID0gKG9iaikgPT4ge1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcm9qZWN0cyBhbmQgZmluZCBpZiBuYW1lIGlzIHByZXNlbnQgdGhlbiBjaGVjayBpZiB0b2RvIGlzIHByZXNlbnQgYXQgaW5kZXggYXJndW1lbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihwcm9qZWN0c1tpXS5uYW1lID09PSBvYmoubmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLmdldFRvZG8ob2JqLmluZGV4KSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tpXS5nZXRUb2RvKG9iai5pbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBub3QgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuICd0b2RvIG5vdCBmb3VuZC4nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHRlc3RPYmplY3QgPSB7XG4gICAgbmFtZTogJ3Rlc3QnLFxuICAgIGluZGV4OiAnMCdcbiAgfVxuXG4gIGdldFRvZG8odGVzdE9iamVjdCk7XG4gIGdldEFsbFRvZG9zKCd0ZXN0Jyk7XG4gIGdldFByb2plY3QoJ3Rlc3QnKTtcblxuXG4gIC8vIFVwZGF0ZSB0b2RvXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAob2JqKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IG9iai50b2RvLnByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC51cGRhdGVUb2RvKG9iai5pbmRleCwgb2JqLnRvZG8pXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvIHVwZGF0ZWQnLCBwcm9qZWN0LmdldFRvZG9zKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRvZG9zKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gbm90IGZvdW5kJyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvIG5vdCBmb3VuZCcsIHByb2plY3ROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCB0ZXN0T2JqZWN0MiA9IHtcbiAgICBwcm9qZWN0TmFtZTogJ3Rlc3QnLFxuICAgIGluZGV4OiAwLFxuICAgIHRvZG86ICd1cGRhdGVkIHRvZG8nXG4gIH1cbiAgLy8gVXBkYXRlIFByb2plY3RcblxuICAvLyBEZWxldGUgUHJvamVjdFxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmKHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0fSBkZWxldGVkYCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0IGRlbGV0ZWQnLCBwcm9qZWN0cylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0IG5vdCBmb3VuZCcsIHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3Qgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gRGVsZXRlIFRvZG9cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChvYmopID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYocHJvamVjdC5uYW1lID09PSBvYmoucHJvamVjdE5hbWUpe1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0LmdldFRvZG8ob2JqLmluZGV4KX0gZGVsZXRlZGApO1xuICAgICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8ob2JqLmluZGV4KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ3RvZG8gZGVsZXRlZCcsIHByb2plY3QudG9kb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQdWJTdWIucHVibGlzaCgndG9kbyBub3QgZm91bmQnLCBvYmopO1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBhZGRQcm9qZWN0KCdEZWZhdWx0Jyk7XG4gIC8vIGNvbnN0IHRlc3RQcm9qZWN0T2JqID0ge1xuICAvLyAgIG5hbWU6ICdEZWZhdWx0JyxcbiAgLy8gICB0b2RvOiBcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgdGVzdCBEZXNjcmlwdGlvbicsXG4gIC8vICAgICAgIHByaW9yaXR5OiAxLFxuICAvLyAgICAgICBub3RlczogJ0hlcmUgYXJlIHNvbWUgbm90ZXMnLFxuICAvLyAgICAgICBjb21wbGV0ZTogdHJ1ZVxuICAvLyAgICAgfVxuICAgIFxuICAvLyB9O1xuICAvLyBhZGRUb2RvKHRlc3RQcm9qZWN0T2JqKTtcblxuICAvLyBBZGQgc3Vic2NyaWJlIGV2ZW50cyBmcm9tIFB1YlN1YiBtb2R1bGVcbiAgLy8gTmVlZCB0byBsaXN0ZW4gdG8gY29ycmVzcG9uZGluZyBjbGljayBldmVudHMgZnJvbSB0aGUgZGlzcGxheUNvbnRyb2xsZXJcbiAgLy8gVGhlc2UgY2xpY2sgZXZlbnRzIG5lZWQgdG8gYmUgZnJvbSB0aGUgc3VibWl0IGJ1dHRvbnMgb24gdGhlIGZvcm1zIHRoYXQgYXJlIGdlbmVyYXRlZCBieSB0aGUgZGlzcGxheUNvbnRyb2xsZXJcbiAgLy8gVG8gc3Vic2NyaWJlIHRvIGFuIGV2ZW50IHdpdGggcHVic3ViIHlvdSBuZWVkIHRvIHVzZSBhIHN1YnNjcmliZXIgZnVuY3Rpb246IGZ1bmN0aW9uKG1zZywgZGF0YSl7IHBhc3MgY2FsbGJhY2sgaGVyZSB9XG5cbiAgLy8gRGlzcGxheSBhbGwgcHJvamVjdHMgdmlldyBvbiBmaXJzdCBwYWdlIGxvYWRcbiAgUHViU3ViLnN1YnNjcmliZSgnaW5pdGlhbCBwYWdlIGxvYWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCdmaXJzdCBwYWdlIGxvYWQnKTtcbiAgICBQdWJTdWIucHVibGlzaCgnZmlyc3QgcGFnZSBsb2FkJywgZ2V0QWxsUHJvamVjdHMoKSk7XG4gIH0pXG4gIC8vIEFkZCBuZXcgcHJvamVjdCB3aXRoIG5hbWUgZnJvbSBuZXcgcHJvamVjdCBuYW1lIGZvcm1cbiAgLy8gVGhlbiBwdWJsaXNoIG5ldyBhcnJheSBmb3IgYWxsUHJvamVjdHMuanMgdG8gc3Vic2NyaWJlIHRvXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ25ldyBwcm9qZWN0IGJ1dHRvbiBjbGlja2VkJywgZnVuY3Rpb24obXNnLCBkYXRhKXtcbiAgICBhZGRQcm9qZWN0KGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGdldEFsbFByb2plY3RzKCkpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCduZXcgcHJvamVjdCBhZGRlZCcsIGdldEFsbFByb2plY3RzKCkpO1xuICB9KVxuICAvLyBTdWJzY3JpYmUgdG8gdmlldyBwcm9qZWN0cyBidXR0b24gY2xpY2sgdGhlbiBwdWJsaXNoIGFsbCBwcm9qZWN0cyByZXR1cm5lZCB3aXRoIHByb2plY3RzIGFycmF5IGFzIGRhdGFcbiAgUHViU3ViLnN1YnNjcmliZSgndmlldyBwcm9qZWN0cyBidXR0b24gY2xpY2tlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgY29uc29sZS5sb2coJ2FsbCBwcm9qZWN0cyByZXR1cm5lZCcpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdhbGwgcHJvamVjdHMgcmV0dXJuZWQnLCBnZXRBbGxQcm9qZWN0cygpKVxuICB9KTtcbiAgLy8gQWRkIG5ldyB0b2RvXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ25ldyB0b2RvIHN1Ym1pdHRlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgYWRkVG9kbyhkYXRhKTtcbiAgICBQdWJTdWIucHVibGlzaCgnbmV3IHRvZG8gYWRkZWQnLCBnZXRBbGxUb2RvcygpKTtcbiAgfSk7XG4gIC8vIFJldHVybiB0b2RvIHdoZW4gY2xpY2tlZFxuICBQdWJTdWIuc3Vic2NyaWJlKCd0b2RvIGNsaWNrZWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCd0b2RvIHJldHVybmVkJyk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3RvZG8gcmV0dXJuZWQnLCBnZXRUb2RvKGRhdGEpKTtcbiAgfSk7XG4gIC8vIEFsc28gcmV0dXJuIHRvZG8gd2hlbiBlZGl0IGJ0biBjbGlja2VkXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG8gZWRpdCBidXR0b24gY2xpY2tlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgY29uc29sZS5sb2coJ2VkaXQgdG9kbyByZXR1cm5lZCcpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdlZGl0IHRvZG8gcmV0dXJuZWQnLCBnZXRUb2RvKGRhdGEpKTtcbiAgfSk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ2VkaXQgdG9kbyBzdWJtaXR0ZWQnLCBmdW5jdGlvbihtc2csIGRhdGEpe1xuICAgIHVwZGF0ZVRvZG8oZGF0YSk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3RvZG8gdXBkYXRlZCcpXG4gIH0pO1xuICAvLyBSZXR1cm4gcHJvamVjdCBkYXRhIHdoZW4gcHJvamVjdCBjbGlja2VkXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QgY2xpY2tlZCcsIGZ1bmN0aW9uKG1zZywgZGF0YSl7XG4gICAgZ2V0UHJvamVjdChkYXRhKTtcbiAgfSlcbn1cbiIsImltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuXG4vLyBGb3JtIHRvIGJlIHJlbmRlcmVkIHdoZW4gdG9kbyBidXR0b24gaXMgY2xpY2tlZFxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZG9Gb3JtID0gKG9iaikgPT4ge1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbmV3LXRvZG8tZm9ybS1jb250YWluZXInKTtcblxuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1EaXYuY2xhc3NMaXN0LnRvZ2dsZSgndG9kby1mb3JtLWRpdicpO1xuXG4gIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0b2RvSGVhZGVyLmlkID0gJ25ldy10b2RvLWhlYWRlcic7XG4gIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZCBOZXcgVG9kbycpKTtcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuXG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICB0b2RvRm9ybS5pZCA9ICd0b2RvLWZvcm0nXG4gIGlmKG9iail7XG4gICAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnLCBvYmouaW5kZXgpXG4gIH1cblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuaWQgPSAndG9kby1uYW1lJztcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lJztcbiAgbmFtZUlucHV0Lm5hbWUgPSAndG9kby1uYW1lJztcbiAgaWYob2JqKXtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBvYmoubmFtZVxuICB9XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3RvZG8tZGVzY3JpcHRpb24nO1xuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICBkZXNjcmlwdGlvbklucHV0LmRlc2NyaXB0aW9uID0gJ3RvZG8tZGVzY3JpcHRpb24nO1xuICBpZihvYmope1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBvYmouZGVzY3JpcHRpb25cbiAgfVxuXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGVJbnB1dC5pZCA9ICd0b2RvLWR1ZURhdGUnO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gJ0R1ZSBkYXRlJztcbiAgZHVlRGF0ZUlucHV0LmR1ZURhdGUgPSAndG9kby1kdWVEYXRlJztcbiAgaWYob2JqKXtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBvYmouZHVlRGF0ZVxuICB9XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICd0b2RvLXByaW9yaXR5JztcbiAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ3RleHQnO1xuICBwcmlvcml0eUlucHV0LnBsYWNlaG9sZGVyID0gJ3ByaW9yaXR5JztcbiAgcHJpb3JpdHlJbnB1dC5wcmlvcml0eSA9ICd0b2RvLXByaW9yaXR5JztcbiAgaWYob2JqKXtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gb2JqLnByaW9yaXR5XG4gIH1cblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICBjb25zdCBjb21wbGV0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbXBsZXRlUGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVG9kbyBDb21wbGV0ZT8nKSlcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjb21wbGV0ZVBhcmEpO1xuXG4gIGNvbnN0IGNvbXBsZXRlWWVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb21wbGV0ZVllc0lucHV0LmlkID0gJ3RvZG8tY29tcGxldGUteWVzJztcbiAgY29tcGxldGVZZXNJbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgY29tcGxldGVZZXNJbnB1dC52YWx1ZSA9ICdZZXMnO1xuICBjb21wbGV0ZVllc0lucHV0Lm5hbWUgPSAndG9kby1jb21wbGV0ZSc7XG4gIGlmKG9iail7XG4gICAgaWYob2JqLmNvbXBsZXRlKXtcbiAgICAgIGNvbXBsZXRlWWVzSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY29tcGxldGVZZXNJbnB1dCk7XG5cbiAgY29uc3QgY29tcGxldGVZZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbXBsZXRlWWVzTGFiZWwuZm9yID0gJ1llcyc7XG4gIGNvbXBsZXRlWWVzTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1llcycpKTtcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjb21wbGV0ZVllc0xhYmVsKTtcblxuICBjb25zdCBjb21wbGV0ZU5vSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb21wbGV0ZU5vSW5wdXQuaWQgPSAndG9kby1jb21wbGV0ZS1ubyc7XG4gIGNvbXBsZXRlTm9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgY29tcGxldGVOb0lucHV0LnZhbHVlID0gJ05vJztcbiAgY29tcGxldGVOb0lucHV0Lm5hbWUgPSAndG9kby1jb21wbGV0ZSc7XG4gIGlmKG9iail7XG4gICAgaWYoIW9iai5jb21wbGV0ZSl7XG4gICAgICBjb21wbGV0ZU5vSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY29tcGxldGVOb0lucHV0KTtcblxuICBjb25zdCBjb21wbGV0ZU5vTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb21wbGV0ZU5vTGFiZWwuZm9yID0gJ05vJztcbiAgY29tcGxldGVOb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdObycpKTtcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjb21wbGV0ZU5vTGFiZWwpO1xuXG4gIGNvbnN0IHRvZG9TdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvU3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcblxuICBpZihvYmope1xuICAgIHRvZG9TdWJtaXRCdG4udmFsdWUgPSAnRWRpdCB0b2RvJztcbiAgICB0b2RvU3VibWl0QnRuLmlkID0nZWRpdC10b2RvLXN1Ym1pdC1idG4nO1xuICB9IGVsc2Uge1xuICAgIHRvZG9TdWJtaXRCdG4udmFsdWUgPSAnQWRkIHRvZG8nO1xuICAgIHRvZG9TdWJtaXRCdG4uaWQgPSduZXctdG9kby1zdWJtaXQtYnRuJztcbiAgfVxuXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9TdWJtaXRCdG4pO1xuXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gIGlmKG9iail7XG4gICAgUHViU3ViLnB1Ymxpc2goJ2VkaXQgdG9kbyBmb3JtIHJlbmRlcmVkJyk7XG4gIH1lbHNlIHtcbiAgICBQdWJTdWIucHVibGlzaCgnbmV3IHRvZG8gZm9ybSByZW5kZXJlZCcpXG4gIH1cbiAgXG4gIC8vIFN1YnNjcmliZSB0byB3aGVuIGFkZCB0b2RvIGJ1dHRvbiBpcyBjbGlja2VkXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ2FkZCB0b2RvIGJ1dHRvbiBjbGlja2VkJywgZnVuY3Rpb24obXNnLCBkYXRhKXtcbiAgICByZW5kZXJUb2RvRm9ybSgpO1xuICB9KTtcbiAgLy8gU3Vic2NyaWJlIHRvIHdoZW4gZWRpdCB0b2RvIGRhdGEgaXMgcmV0dXJuZWRcbiAgUHViU3ViLnN1YnNjcmliZSgnZWRpdCB0b2RvIHJldHVybmVkJywgZnVuY3Rpb24obXNnLCBkYXRhKXtcbiAgICByZW5kZXJUb2RvRm9ybShkYXRhKTtcbiAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtleHBhbmRlZFRvZG8sIHRlc3RPYmp9IGZyb20gJy4vZXhwYW5kZWRUb2RvJztcbmltcG9ydCB7cmVuZGVyUHJvamVjdFZpZXcsIHByb2plY3RUZXN0T2JqfSBmcm9tICcuL3Byb2plY3RWaWV3JztcbmltcG9ydCB7cmVuZGVyQWxsUHJvamVjdHNWaWV3LCBhbGxQcm9qZWN0c1Rlc3RPYmp9IGZyb20gJy4vYWxsUHJvamVjdHNWaWV3JztcbmltcG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IHt0b2RvQXBwfSBmcm9tICcuL3RvZG9BcHAnO1xuaW1wb3J0IHtyZW5kZXJUb2RvRm9ybX0gZnJvbSAnLi90b2RvRm9ybSc7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyB0aGVyZSEnKVxuXG5sZXQgc3RyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01vcmUgVGVzdGluZycpO1xuXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuLy8gaGVhZGVyLmFwcGVuZENoaWxkKHN0cik7XG5cbi8vIGV4cGFuZGVkVG9kbyh0ZXN0T2JqKTtcblxuLy8gcmVuZGVyUHJvamVjdFZpZXcocHJvamVjdFRlc3RPYmopO1xuXG4vLyByZW5kZXJBbGxQcm9qZWN0c1ZpZXcoKTtcblxuLy8gcmVuZGVyVG9kb0Zvcm0oKTtcblxuZGlzcGxheUNvbnRyb2xsZXIoKTtcblxuLy8gdG9kb0FwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==