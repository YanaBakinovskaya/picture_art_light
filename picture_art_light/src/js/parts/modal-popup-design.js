function modalPopupDesign() {
  let btns = document.querySelectorAll('.button-design'),
      overlay = document.querySelector('.popup-design'),
      popup = document.querySelector('.popup-design .popup-content'),
      popupClose = document.querySelector('.popup-design .popup-close'),
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

module.exports = modalPopupDesign;