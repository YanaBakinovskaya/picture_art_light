//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let modalPopupDesign = require('./parts/modal-popup-design.js'),
      modalPopupConsltation = require('./parts/modal-popup-consultation.js'),
      modalPopupGift = require('./parts/modal-popup-gift.js'),
      filtration = require('./parts/filtration.js');




  modalPopupDesign();
  modalPopupConsltation();
  modalPopupGift();
  filtration();
  
});