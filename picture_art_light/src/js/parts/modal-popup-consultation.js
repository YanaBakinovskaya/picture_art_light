function modalPopupDesign() {
  let btns = document.querySelectorAll('.button-consultation'),
      popupDesign = document.querySelector('.popup-consultation'),
      popupContent = document.querySelector('.popup-consultation .popup-content'),
      popupClose = document.querySelector('.popup-consultation .popup-close'),
      showModal = require('./modal-show.js'),
      hideModal = require('./modal-hide.js');

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      showModal(popupDesign,popupContent);
    });

    popupClose.addEventListener('click', () => {
      hideModal(popupDesign,popupContent);
    });
  });
}

module.exports = modalPopupDesign;