/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./images/stars.jpg */ \"./src/images/stars.jpg\"));\n// Module\nexports.push([module.i, \"html, body {\\n    padding: 0;\\n    margin: 0;\\n    height: 100%;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: white;\\n    background-color: rgb(37, 37, 37);\\n}\\n\\n.header {\\n    height: 120px;\\n    padding: 6px;\\n    background: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n\\n.menu {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.navlink {\\n    cursor: pointer;\\n}\\n\\n.navlink:hover {\\n    text-decoration: underline;;\\n}\\n\\n.blogposts {\\n    width: 600px;\\n    margin: 0 auto;\\n}\\n\\n.login, .signup {\\n    width: 300px; \\n}\\n\\n.blogpost {\\n    margin: 4px;\\n    padding: 0 4px;\\n    border: 1px solid white;\\n}\\n\\n\\n.new-blogpost {\\n    width: 600px;\\n    margin: 0 auto;\\n}\\n\\ninput, textarea, button {\\n    box-sizing: border-box;\\n    display: block;\\n    width: 100%;\\n    margin: 3px;\\n    font-size: 1.2em;\\n}\\n\\ntextarea {\\n    border-width: 0px;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/stars.jpg":
/*!******************************!*\
  !*** ./src/images/stars.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/stars.jpg\";\n\n//# sourceURL=webpack:///./src/images/stars.jpg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst mainObj = document.getElementById('main');\nconst navCreatePostObj = document.getElementById('navCreatePost');\nconst navLoadArticleObj = document.getElementById('navLoadArticle');\nconst navPipeObj = document.getElementById('navPipe');\nconst navLogoutObj = document.getElementById('navLogout');\nconst navLoginObj = document.getElementById('navLogin');\nconst navSignupObj = document.getElementById('navSignup');\nconst navPipeSignupObj = document.getElementById('navPipeSignup');\n\nconst loadBlogPosts = async () => {\n\n    const result = await fetch('http://localhost:3000/blogposts');\n    const blogpostsArray = await result.json();\n    \n    let blogposts = `<div class=\"blogposts\">`;\n    \n    for(let i=0; i<blogpostsArray.length; i++) {\n        blogposts += `<div class=\"blogpost\">\n        <h2 class=\"blog-header\">${blogpostsArray[i].title}</h2>\n        <div class=\"blog-body\">${blogpostsArray[i].content}\n        </div>\n        </div>`;\n    }\n    blogposts += `</div>`;\n    mainObj.innerHTML = blogposts;\n}\n\nconst loadCreateBlogPost = () => {\n    const createblogpost = `<div class=\"new-blogpost\">\n    <input type=\"text\" placeholder=\"Blog-Titel eingeben\" id=\"title\" />\n    <textarea rows=\"10\" id=\"content\"></textarea>\n    <button id=\"btnCreateArticle\">Artikel erstellen</button>\n    </div>`;\n    \n    mainObj.innerHTML = createblogpost;\n    const btnCreateArticleObj = document.getElementById('btnCreateArticle');\n    btnCreateArticleObj.onclick = createPost;\n}\n\nconst createPost = async () => {\n    const title = document.getElementById('title').value;\n    const content = document.getElementById('content').value;\n    \n    if(!(title.length > 0 && content.length > 0)) {\n        alert('Bitte Titel und Content eingeben!');\n        return;\n    }\n    \n    try {\n        const response = await fetch('http://localhost:3000/blogpost',\n        {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            credentials: 'include',\n            body: JSON.stringify({\n                title: title,\n                content: content\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseJson = await response.json();\n            // 3. als string darstellen\n            const responseStr = JSON.stringify(responseJson);\n            loadBlogPosts();\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }     \n}\n\nconst loadLogin = () => {\n    const loginHtml = `\n    <div class=\"blogposts login\">\n    <input type=\"text\" placeholder=\"email\" id=\"email\" />\n    <input type=\"password\" placeholder=\"password\" id=\"password\" />\n    <button id=\"btnLogin\">Login</button>\n    </div>`;\n    \n    mainObj.innerHTML = loginHtml;\n    const btnLoginObj = document.getElementById('btnLogin');\n    btnLoginObj.onclick = login;\n}\n\nconst loadSignup = () => {\n    const signupHtml = `\n    <div class=\"blogposts signup\">\n    <input type=\"text\" placeholder=\"email\" id=\"emailSignup\" />\n    <input type=\"password\" placeholder=\"password\" id=\"passwordSignup\" />\n    <input type=\"password\" placeholder=\"password repeat\" id=\"passwordRepeat\" />\n    <button id=\"btnSignup\">Jetzt registrieren</button>\n    </div>`;\n    \n    mainObj.innerHTML = signupHtml;\n    const btnSignupObj = document.getElementById('btnSignup');\n    btnSignupObj.onclick = signup;\n}\n\nconst login = async () => {\n    const emailObj = document.getElementById('email');\n    const passwordObj = document.getElementById('password');\n    \n    try {\n        const response = await fetch('http://localhost:3000/login',\n        {\n            method: 'POST',\n            credentials: 'include',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                email: emailObj.value,\n                password: passwordObj.value\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Login failed!');\n                \n                emailObj.value = '';\n                passwordObj.value = '';\n                return;\n            }\n            \n            showLoggedIn(); // baue frontend um für eingeloggten user\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }  \n}\n\nconst signup = async () => {\n    const emailObj = document.getElementById('emailSignup');\n    const passwordObj = document.getElementById('passwordSignup');\n    const passwordRepeatObj = document.getElementById('passwordRepeat');\n    \n    if(passwordObj.value !== passwordRepeatObj.value) {\n        alert('Passwörter müssen übereinstimmen!');\n        return;\n    }\n    \n    try {\n        const response = await fetch('http://localhost:3000/signup',\n        {\n            method: 'POST',\n            credentials: 'include',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                email: emailObj.value,\n                password: passwordObj.value\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Signup failed!');\n                \n                emailObj.value = '';\n                passwordObj.value = '';\n                passwordRepeatObj.value = '';\n                return;\n            }\n            \n            const thanksForSignup = `\n            <h2 class=\"thanks\">Danke für Ihre Registrierung. In Kürze wird eine Email an ${emailObj.value} geschickt!</h2>\n            `;\n            \n            mainObj.innerHTML = thanksForSignup;\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }  \n    \n}\n\nconst showLoggedIn = () => {\n    localStorage.setItem('loggedIn', '1');\n    navCreatePostObj.style.display = 'inline-block';\n    navPipeObj.style.display = 'inline-block';\n    navLoginObj.style.display = 'none';\n    navLogoutObj.style.display = 'inline-block';\n    navSignupObj.style.display = 'none';\n    navPipeSignupObj.style.display = 'none';\n    loadBlogPosts();\n}\n\nconst showLoggedOut = () => {\n    localStorage.setItem('loggedIn', '0');\n    navCreatePostObj.style.display = 'none';\n    navPipeObj.style.display = 'none';\n    navLoginObj.style.display = 'inline-block';\n    navSignupObj.style.display = 'inline-block';\n    navLogoutObj.style.display = 'none';\n    navPipeSignupObj.style.display = 'inline-block';\n    loadBlogPosts();    \n}\n\nconst logout = async () => {\n    try {\n        const response = await fetch('http://localhost:3000/logout',\n        {\n            method: 'POST',\n            credentials: 'include',\n            headers: { 'Content-Type': 'application/json' }\n        });\n        if(response.ok) {\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Logout failed!');\n                return;\n            }\n            \n            showLoggedOut();\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }      \n}\n\nnavLoginObj.onclick = loadLogin;\nnavSignupObj.onclick = loadSignup;\nnavLogoutObj.onclick = logout;\n\nnavLoadArticleObj.onclick = loadBlogPosts;\nnavCreatePostObj.onclick = loadCreateBlogPost;\n\n\n// query parameter auslesen\nconst urlParams = new URLSearchParams(window.location.search);\nconst activated = urlParams.get('activated');\n\nif(activated && activated.length > 0) {\n    localStorage.setItem('loggedIn', '1');\n}\n\n// beim laden schaue ich, ob user eingeloggt ist\nconst loggedIn = localStorage.getItem('loggedIn');\n// beim ersten seitenaufruf, kann ich nicht eingeloggt sein,\n// dann wird der eintrag im localstorage gesetzt\nif(loggedIn === null) {\n    localStorage.setItem('loggedIn', '0');\n    showLoggedOut();\n}\nelse {\n    if(loggedIn == '1') {\n        showLoggedIn();\n    }\n    else { // '0', 'null'\n        showLoggedOut();\n    }\n}\n\nlet timerId = null;\n\nconst restartTimer = () => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => {\n        console.log('inaktiv - session wird ausgeloggt')\n        showLoggedOut()\n    }, \n    // 1000*60*5); // 5 minuten\n    1000*31);    \n}\n\naddEventListener('click', () => {\n    console.log('click passiert! - timer wird neugestartet');\n    restartTimer();    \n});\n\naddEventListener('keydown', () => {\n    console.log('keydown passiert! - timer wird neugestartet');\n    restartTimer();    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });