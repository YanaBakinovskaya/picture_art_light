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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/modal-hide.js":
/*!************************************!*\
  !*** ./src/js/parts/modal-hide.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hideModal(overlay, popup) {
  //overlay.style.display = 'none';
  overlay.classList.remove('show-modal');
  document.body.classList.remove('show');
  popup.classList.remove('headShake','animated');
}
module.exports = hideModal;

/***/ }),

/***/ "./src/js/parts/modal-popup-consultation.js":
/*!**************************************************!*\
  !*** ./src/js/parts/modal-popup-consultation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function modalPopupConsltation() {
  let btns = document.querySelectorAll('.button-consultation'),
      overlay = document.querySelector('.popup-consultation'),
      popup = document.querySelector('.popup-consultation .popup-content'),
      popupClose = document.querySelector('.popup-consultation .popup-close'),
      showModal = __webpack_require__(/*! ./modal-show.js */ "./src/js/parts/modal-show.js"),
      hideModal = __webpack_require__(/*! ./modal-hide.js */ "./src/js/parts/modal-hide.js");

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      showModal(overlay,popup);
    });

    popupClose.addEventListener('click', () => {
      hideModal(overlay,popup);
    });
  });
}

module.exports = modalPopupConsltation;

/***/ }),

/***/ "./src/js/parts/modal-popup-design.js":
/*!********************************************!*\
  !*** ./src/js/parts/modal-popup-design.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function modalPopupDesign() {
  let btns = document.querySelectorAll('.button-design'),
      overlay = document.querySelector('.popup-design'),
      popup = document.querySelector('.popup-design .popup-content'),
      popupClose = document.querySelector('.popup-design .popup-close'),
      showModal = __webpack_require__(/*! ./modal-show.js */ "./src/js/parts/modal-show.js"),
      hideModal = __webpack_require__(/*! ./modal-hide.js */ "./src/js/parts/modal-hide.js");

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      showModal(overlay,popup);
    });

    popupClose.addEventListener('click', () => {
      hideModal(overlay,popup);
    });
  });
}

module.exports = modalPopupDesign;

/***/ }),

/***/ "./src/js/parts/modal-popup-gift.js":
/*!******************************************!*\
  !*** ./src/js/parts/modal-popup-gift.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function modalPopupGift() {
  let btn = document.querySelector('.fixed-gift'),
      overlay = document.querySelector('.popup-gift'),
      popup = document.querySelector('.popup-gift .popup-content'),
      popupClose = document.querySelector('.popup-gift .popup-close'),
      showModal = __webpack_require__(/*! ./modal-show.js */ "./src/js/parts/modal-show.js"),
      hideModal = __webpack_require__(/*! ./modal-hide.js */ "./src/js/parts/modal-hide.js");

  btn.classList.add('animated');
  
  btn.addEventListener('click', () => {
    showModal(overlay,popup);
  });

  popupClose.addEventListener('click', () => {
    hideModal(overlay,popup);
  });

}

module.exports = modalPopupGift;

/***/ }),

/***/ "./src/js/parts/modal-show.js":
/*!************************************!*\
  !*** ./src/js/parts/modal-show.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showModal(overlay, popup) {
  overlay.classList.add('show-modal');
  document.body.classList.add('show');
  popup.classList.add('headShake','animated');
}
module.exports = showModal;


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let modalPopupDesign = __webpack_require__(/*! ./parts/modal-popup-design.js */ "./src/js/parts/modal-popup-design.js"),
      modalPopupConsltation = __webpack_require__(/*! ./parts/modal-popup-consultation.js */ "./src/js/parts/modal-popup-consultation.js"),
      modalPopupGift = __webpack_require__(/*! ./parts/modal-popup-gift.js */ "./src/js/parts/modal-popup-gift.js");



  modalPopupDesign();
  modalPopupConsltation();
  modalPopupGift();

  let wow = document.querySelectorAll('.wow');
  wow.forEach((item) => {
    item.classList.add('animated');
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map