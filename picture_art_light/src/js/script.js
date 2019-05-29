//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let modalPopupDesign = require('./parts/modal-popup-design.js'),
      modalPopupConsultation = require('./parts/modal-popup-consultation.js'),
      modalPopupGift = require('./parts/modal-popup-gift.js'),
      filtration = require('./parts/filtration.js'),
      slider = require('./parts/slider.js'),
      form = require('./parts/form.js'),
      accordion = require('./parts/accordion.js'),
      formMain = require('./parts/main-form.js'),
      calc = require('./parts/calculation.js');


  modalPopupDesign();
  modalPopupConsultation();
  modalPopupGift();
  filtration();
  form();
  formMain();
  slider();
  accordion();
  calc();

});