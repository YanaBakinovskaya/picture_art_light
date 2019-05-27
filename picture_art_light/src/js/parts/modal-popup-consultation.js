function modalPopupConsultation() {
  let btns = document.querySelectorAll('.button-consultation'),
      overlay = document.querySelector('.popup-consultation'),
      popup = document.querySelector('.popup-consultation .popup-content'),
      popupClose = document.querySelector('.popup-consultation .popup-close'),
      showModal = require('./modal-show.js'),
      hideModal = require('./modal-hide.js');
      

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