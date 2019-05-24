function modalPopupDesign() {
  let btns = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      popupContent = document.querySelector('.popup-design .popup-content'),
      popupClose = document.querySelector('.popup-design .popup-close');

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      popupDesign.style.display = 'block';
      document.body.style.paddingRight = '17px';
      popupContent.classList.add('headShake');
      popupContent.classList.add('animated');
      document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', () => {
      popupDesign.style.display = 'none';
      popupContent.classList.remove('headShake');
      popupContent.classList.remove('animated');
      document.body.style.paddingRight = '0';
      document.body.style.overflow = '';
    });
  });
}

module.exports = modalPopupDesign;