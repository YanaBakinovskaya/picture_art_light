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
      popupContentDesign = document.querySelector('.popup-design .popup-content');

    //проверка input tel
  for (let i = 0; i < input.length; i++) {
    if (input[i].getAttribute('name') == 'phone') {
      input[i].addEventListener('input', () => {
        if (input[i].value[0] != '+' ) {
          input[i].value = '';
        } else {
         input[i].value = '+' + input[i].value.replace(/[^\d]/g, '');
        }
      });
    }
  }

  function init(formElem, popup) {
    formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(formElem);
      popup.appendChild(statusMessage);
      let elem = popup.children[1];
      let obj = {};
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
          clearInput();
          setTimeout(() => {
            statusMessage.remove();
            addChild();
          }, 10000);

        });
    });
  }
  init(formDesign, popupContentDesign);
  init(formCons, popupContentCons);

  
}
module.exports = form;