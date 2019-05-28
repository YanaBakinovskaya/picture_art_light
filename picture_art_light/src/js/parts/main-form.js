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
      showModal = require('./modal-show.js'),
      hideModal = require('./modal-hide.js'),
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