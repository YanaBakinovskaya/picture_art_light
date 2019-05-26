function modalPopupDesign() {
  let btns = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      popupContent = document.querySelector('.popup-design .popup-content'),
      popupClose = document.querySelector('.popup-design .popup-close'),
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