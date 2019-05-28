function accordion() {
  let info = document.querySelector('#accordion'),
    tab = document.querySelectorAll('.accordion-heading'),
    tabContent = document.querySelectorAll('.accordion-block');


  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
    for (let j = a; j < tab.length; j++) {
      tab[j].classList.remove('ui-accordion-header-active');
    }
  }
  
  hideTabContent(1);
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].classList.add('ui-accordion-header-active');
    }
  }
 
  tab.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideTabContent(0);
      showTabContent(i);
    });
  });
  // info.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target && target.classList.contains('accordion-heading')) {
  //     for (let i = 0; i < tab.length; i++) {
  //       if (target == tab[i]) {
  //         hideTabContent(0);
  //         showTabContent(i);
  //         break;
  //       }
  //     }
  //   }
  // });
}

module.exports = accordion;