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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst mainObj = document.getElementById('main');\nconst navCreatePostObj = document.getElementById('navCreatePost');\nconst navPipeObj = document.getElementById('navPipe');\nconst navLogoutObj = document.getElementById('navLogout');\nconst navLoginObj = document.getElementById('navLogin');\nconst navSignupObj = document.getElementById('navSignup');\nconst navPipeSignupObj = document.getElementById('navPipeSignup');\n\nconst loadBlogPosts = async () => {\n\n    const result = await fetch('http://localhost:3000/blogposts');\n    const blogpostsArray = await result.json();\n    \n    let blogposts = `<div class=\"blogposts\">`;\n    \n    for(let i=0; i<blogpostsArray.length; i++) {\n        blogposts += `<div class=\"blogpost\">\n        <h2 class=\"blog-header\">${blogpostsArray[i].title}</h2>\n        <div class=\"blog-body\">${blogpostsArray[i].content}\n        </div>\n        </div>`;\n    }\n    blogposts += `</div>`;\n    mainObj.innerHTML = blogposts;\n}\n\nconst loadCreateBlogPost = () => {\n    const createblogpost = `<div class=\"new-blogpost\">\n    <input type=\"text\" placeholder=\"Blog-Titel eingeben\" id=\"title\" />\n    <textarea rows=\"10\" id=\"content\"></textarea>\n    <button onclick=\"createPost()\">Artikel erstellen</button>\n    </div>`;\n    \n    mainObj.innerHTML = createblogpost;\n}\n\nconst createPost = async () => {\n    const title = document.getElementById('title').value;\n    const content = document.getElementById('content').value;\n    \n    if(!(title.length > 0 && content.length > 0)) {\n        alert('Bitte Titel und Content eingeben!');\n        return;\n    }\n    \n    try {\n        const response = await fetch('http://localhost:3000/blogpost',\n        {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                title: title,\n                content: content\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseJson = await response.json();\n            // 3. als string darstellen\n            const responseStr = JSON.stringify(responseJson);\n            loadBlogPosts();\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }     \n}\n\nconst loadLogin = () => {\n    const login = `\n    <div class=\"blogposts login\">\n    <input type=\"text\" placeholder=\"email\" id=\"email\" />\n    <input type=\"password\" placeholder=\"password\" id=\"password\" />\n    <button id=\"btnLogin\" onclick=\"login()\">Login</button>\n    </div>`;\n    \n    mainObj.innerHTML = login;\n}\n\nconst loadSignup = () => {\n    const signup = `\n    <div class=\"blogposts signup\">\n    <input type=\"text\" placeholder=\"email\" id=\"emailSignup\" />\n    <input type=\"password\" placeholder=\"password\" id=\"passwordSignup\" />\n    <input type=\"password\" placeholder=\"password repeat\" id=\"passwordRepeat\" />\n    <button id=\"btnSignup\" onclick=\"signup()\">Jetzt registrieren</button>\n    </div>`;\n    \n    mainObj.innerHTML = signup;\n}\n\nconst login = async () => {\n    const emailObj = document.getElementById('email');\n    const passwordObj = document.getElementById('password');\n    \n    try {\n        const response = await fetch('http://localhost:3000/login',\n        {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                email: emailObj.value,\n                password: passwordObj.value\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Login failed!');\n                \n                emailObj.value = '';\n                passwordObj.value = '';\n                return;\n            }\n            \n            showLoggedIn(); // baue frontend um für eingeloggten user\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }  \n}\n\nconst signup = async () => {\n    const emailObj = document.getElementById('emailSignup');\n    const passwordObj = document.getElementById('passwordSignup');\n    const passwordRepeatObj = document.getElementById('passwordRepeat');\n    \n    if(passwordObj.value !== passwordRepeatObj.value) {\n        alert('Passwörter müssen übereinstimmen!');\n        return;\n    }\n\n    try {\n        const response = await fetch('http://localhost:3000/signup',\n        {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                email: emailObj.value,\n                password: passwordObj.value\n            })\n        });\n        // falls http-antwort 200 oder 304 war \n        if(response.ok) {\n            // 2. das objekt als json interpretieren -> wir bekommen ein objekt\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Signup failed!');\n                \n                emailObj.value = '';\n                passwordObj.value = '';\n                passwordRepeatObj.value = '';\n                return;\n            }\n            \n            const thanksForSignup = `\n                <h2 class=\"thanks\">Danke für Ihre Registrierung. In Kürze wird eine Email an ${emailObj.value} geschickt!</h2>\n            `;\n\n            mainObj.innerHTML = thanksForSignup;\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }  \n\n}\n\nconst showLoggedIn = () => {\n    localStorage.setItem('loggedIn', '1');\n    navCreatePostObj.style.display = 'inline-block';\n    navPipeObj.style.display = 'inline-block';\n    navLoginObj.style.display = 'none';\n    navLogoutObj.style.display = 'inline-block';\n    navSignupObj.style.display = 'none';\n    navPipeSignupObj.style.display = 'none';\n    loadBlogPosts();\n}\n\nconst showLoggedOut = () => {\n    localStorage.setItem('loggedIn', '0');\n    navCreatePostObj.style.display = 'none';\n    navPipeObj.style.display = 'none';\n    navLoginObj.style.display = 'inline-block';\n    navSignupObj.style.display = 'inline-block';\n    navLogoutObj.style.display = 'none';\n    navPipeSignupObj.style.display = 'inline-block';\n    loadBlogPosts();    \n}\n\nconst logout = async () => {\n    try {\n        const response = await fetch('http://localhost:3000/logout',\n        {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' }\n        });\n        if(response.ok) {\n            const responseObj = await response.json();\n            if(responseObj.error != 0) {\n                alert('Logout failed!');\n                return;\n            }\n            \n            showLoggedOut();\n        }\n    }\n    catch (e) {\n        console.log('Error: ' + e); \n    }      \n}\n\n\n\n\n// beim laden schaue ich, ob user eingeloggt ist\nconst loggedIn = localStorage.getItem('loggedIn');\n// beim ersten seitenaufruf, kann ich nicht eingeloggt sein,\n// dann wird der eintrag im localstorage gesetzt\nif(loggedIn === null) {\n    localStorage.setItem('loggedIn', '0');\n    showLoggedOut();\n}\nelse {\n    if(loggedIn == '1') {\n        showLoggedIn();\n    }\n    else { // '0', 'null'\n        showLoggedOut();\n    }\n}\n\nlet timerId = null;\n\nconst restartTimer = () => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => {\n        console.log('inaktiv - session wird ausgeloggt')\n        showLoggedOut()\n    }, \n    // 1000*60*5); // 5 minuten\n    1000*31);    \n}\n\naddEventListener('click', () => {\n    console.log('click passiert! - timer wird neugestartet');\n    restartTimer();    \n});\n\naddEventListener('keydown', () => {\n    console.log('keydown passiert! - timer wird neugestartet');\n    restartTimer();    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });