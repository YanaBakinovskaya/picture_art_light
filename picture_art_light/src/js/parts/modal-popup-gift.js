function modalPopupGift() {
  let btn = document.querySelector('.fixed-gift'),
      overlay = document.querySelector('.popup-gift'),
      popup = document.querySelector('.popup-gift .popup-content'),
      popupClose = document.querySelector('.popup-gift .popup-close'),
      showModal = require('./modal-show.js'),
      hideModal = require('./modal-hide.js');

  btn.classList.add('animated');
  
  btn.addEventListener('click', () => {
    showModal(overlay, popup);
  });

  popupClose.addEventListener('click', () => {
    hideModal(overlay, popup);
  });

}

module.exports = modalPopupGift;