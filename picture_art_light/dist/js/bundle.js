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

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
  let tab = document.querySelectorAll('.accordion-heading'),
      tabContent = document.querySelectorAll('.accordion-block');


  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('ui-accordion-content-active');
    }
    for (let j = a; j < tab.length; j++) {
      tab[j].classList.remove('ui-accordion-header-active');
    }
  }
  function showTabContent(b) {
    if (!tabContent[b].classList.contains('ui-accordion-content-active')) {
      tabContent[b].classList.add('ui-accordion-content-active');
      tab[b].classList.add('ui-accordion-header-active');
    }
  }
 
  tab.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (tab[i].classList.contains('ui-accordion-header-active')) {
        tabContent[i].classList.remove('ui-accordion-content-active');
        tab[i].classList.remove('ui-accordion-header-active');
      } else {
        hideTabContent(0);
        showTabContent(i);
      }
    });
  });
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/filtration.js":
/*!************************************!*\
  !*** ./src/js/parts/filtration.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filtration() {
  let portfolioBlock = document.querySelectorAll('.portfolio-block'),
      portfolioMenu = document.querySelector('.portfolio-menu'),
      portfolioMenuLink = document.querySelectorAll('.portfolio-menu li'),
      portfolioNo = document.querySelector('.portfolio-no');

  portfolioMenu.addEventListener('click', (e) => {
    let target = e.target;

    for (let i = 0; i < portfolioMenuLink.length; i++) {
      portfolioMenuLink[i].classList.remove('active');

      if (target && target == portfolioMenuLink[0]) {
        portfolioMenuLink[0].classList.add('active');
        portfolioBlock.forEach((box) => {
          box.classList.remove('hide');
          box.classList.add('show');
        });
      } else if (target && target == portfolioMenuLink[i] && i != 0) {
        portfolioMenuLink[i].classList.add('active');
        let reg = portfolioMenuLink[i].className,
            count = 0;
        reg = reg.replace('active', '');

        for (let j = 0; j < portfolioBlock.length; j++) {
          portfolioBlock[j].classList.add('show');
          let str = String(portfolioBlock[j].className);

          if (portfolioBlock[j] && str.search(reg) == -1) {
            portfolioBlock[j].classList.add('hide');
            portfolioBlock[j].classList.remove('show');
            count = count + 1;
            if (count == portfolioBlock.length) {
              portfolioNo.classList.add('show');
            } else {
              portfolioNo.classList.remove('show');
            }
          }
        }
      }
    }
  });
}

module.exports = filtration;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  let message = {
    loading: 'Идет отправка...',
    //loading: '<img src="img/ajax-loader.gif" alt="">',
    success: 'Отправлено',
    //success: '<img src="img/headphones.svg" alt="">',
    failure: 'Ошибка'
  };
  let formDesign = document.querySelectorAll('.popup-content form')[1],
      formCons = document.querySelectorAll('.popup-content form')[0],
      textarea = document.getElementsByTagName('textarea'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      popupContentCons = document.querySelector('.popup-consultation .popup-content'),
      popupContentDesign = document.querySelector('.popup-design .popup-content'),
      popupCloseCons = document.querySelector('.popup-consultation .popup-close'),
      popupCloseDesign = document.querySelector('.popup-design .popup-close');

      

    //проверка input tel
  for (let i = 0; i < input.length; i++) {
    if (input[i].getAttribute('name') == 'phone') {
      input[i].addEventListener('input', () => {
        if (input[i].value[0] != '+') {
          input[i].value = '';
        } else {
         input[i].value = '+' + input[i].value.replace(/[^\d]/g, '');
        }
      });
    }
  }

  function init(formElem, popup, close) {
    formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(formElem),
          elem = popup.children[1],
          obj = {};

      popup.appendChild(statusMessage);

      formData.forEach((value, key, i) => {
        obj[key] = value;
      });

      let json = JSON.stringify(obj);
      
      function postJson(json) {
        return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'appLication/json; charset=utf-8');

          request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          request.send(json);
        });
      }
      
      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
        for (let j = 0; j < textarea.length; j++) {
          textarea[j].value = '';
        }
      }
      function removeChild() {
        formElem.classList.add('hide');
        elem.classList.add('hide');

      }
      function addChild() {
        formElem.classList.remove('hide');
        elem.classList.remove('hide');
      }

      postJson(json)
        .then(() => statusMessage.textContent = message.loading)
        .then(() => {
          statusMessage.textContent = message.success;
          removeChild();
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
          removeChild();
        })
        .then(() => {
          //clearInput();
          close.addEventListener('click', () => {
            statusMessage.remove();
            addChild();
            clearInput();
          });
          // setTimeout(() => {
          //   statusMessage.remove();
          //   addChild();
          // }, 10000);
        });
    });
  }
  init(formDesign, popupContentDesign, popupCloseDesign);
  init(formCons, popupContentCons, popupCloseCons);

  
}
module.exports = form;

/***/ }),

/***/ "./src/js/parts/main-form.js":
/*!***********************************!*\
  !*** ./src/js/parts/main-form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function formMain() {
  let message = {
    loading: 'Идет отправка...',
    success: 'Отправлено',
    failure: 'Ошибка'
  };
  let mainForm = document.querySelector('.consultation form'),
      overlay = document.querySelector('.popup-main'),
      popup = document.querySelector('.popup-main .popup-content'),
      popupClose = document.querySelector('.popup-main .popup-close'),
      showModal = __webpack_require__(/*! ./modal-show.js */ "./src/js/parts/modal-show.js"),
      hideModal = __webpack_require__(/*! ./modal-hide.js */ "./src/js/parts/modal-hide.js"),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

  function init(formElem, overlay, popup) {
    formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(formElem),
          obj = {};

      popup.appendChild(statusMessage);

      formData.forEach((value, key, i) => {
        obj[key] = value;
      });

      let json = JSON.stringify(obj);
      
      function postJson(json) {
        return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'appLication/json; charset=utf-8');

          request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          request.send(json);
        });
      }
      
      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postJson(json)
        .then(() => statusMessage.textContent = message.loading)
        .then(() => {
          statusMessage.textContent = message.success;
          showModal(overlay, popup);
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
          showModal(overlay, popup);
        })
        .then(() => {
          clearInput();
          popupClose.addEventListener('click', () => {
            statusMessage.remove();
            hideModal(overlay, popup);
          });
        });
    });
  }
  init(mainForm, overlay, popup);
}
module.exports = formMain;

/***/ }),

/***/ "./src/js/parts/modal-hide.js":
/*!************************************!*\
  !*** ./src/js/parts/modal-hide.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hideModal(overlay, popup) {
  overlay.classList.remove('show');
  document.body.classList.remove('open');
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

function modalPopupConsultation() {
  let btns = document.querySelectorAll('.button-consultation'),
      overlay = document.querySelector('.popup-consultation'),
      popup = document.querySelector('.popup-consultation .popup-content'),
      popupClose = document.querySelector('.popup-consultation .popup-close'),
      showModal = __webpack_require__(/*! ./modal-show.js */ "./src/js/parts/modal-show.js"),
      hideModal = __webpack_require__(/*! ./modal-hide.js */ "./src/js/parts/modal-hide.js");
      

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      showModal(overlay, popup);
    });

    popupClose.addEventListener('click', () => {
      hideModal(overlay, popup);
    });
  });
}

module.exports = modalPopupConsultation;

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
      showModal(overlay, popup);
    });

    popupClose.addEventListener('click', () => {
      hideModal(overlay, popup);
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
    showModal(overlay, popup);
  });

  popupClose.addEventListener('click', () => {
    hideModal(overlay, popup);
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
  overlay.classList.add('show');
  document.body.classList.add('open');
  popup.classList.add('headShake','animated');
}
module.exports = showModal;


/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('animated', 'bounceInRight');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
 
  let timer = setInterval(() => {
      plusSlides(1);
  }, 3500);
 
  prev.addEventListener('mouseout', () => {
    timer = setInterval(() => {
      plusSlides(-1);
    }, 3500);
  });
  next.addEventListener('mouseout', () => {
    timer = setInterval(() => {
      plusSlides(1);
    }, 3500);
  });
  prev.addEventListener('mouseover', () => {
    clearInterval(timer);
  });
  next.addEventListener('mouseover', () => {
    clearInterval(timer);
  });
  prev.addEventListener('click', () => {
    plusSlides(-1);
    slides[slideIndex-1].classList.remove('bounceInLeft');
  });

  next.addEventListener('click', () => {
    plusSlides(1);
    slides[slideIndex - 1].classList.remove('bounceInRight');
    slides[slideIndex-1].classList.add('bounceInLeft');
  });
}

module.exports = slider;

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
      modalPopupConsultation = __webpack_require__(/*! ./parts/modal-popup-consultation.js */ "./src/js/parts/modal-popup-consultation.js"),
      modalPopupGift = __webpack_require__(/*! ./parts/modal-popup-gift.js */ "./src/js/parts/modal-popup-gift.js"),
      filtration = __webpack_require__(/*! ./parts/filtration.js */ "./src/js/parts/filtration.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
      accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
      formMain = __webpack_require__(/*! ./parts/main-form.js */ "./src/js/parts/main-form.js");

  modalPopupDesign();
  modalPopupConsultation();
  modalPopupGift();
  filtration();
  form();
  formMain();
  slider();
  accordion();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map