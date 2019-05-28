function accordion() {
  let info = document.querySelector('#accordion'),
    tab = document.querySelectorAll('.accordion-heading'),
    tabContent = document.querySelectorAll('.accordion-block');


  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('ui-accordion-content-active');
    }
    for (let j = a; j < tab.length; j++) {
      tab[j].classList.remove('ui-accordion-header-active');
    }
  }
  function showTabContent(b) {
    if (!tabContent[b].classList.contains('ui-accordion-content-active')) {
      tabContent[b].classList.add('ui-accordion-content-active');
      tab[b].classList.add('ui-accordion-header-active');
    }
  }
 
  tab.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (tab[i].classList.contains('ui-accordion-header-active')) {
        tabContent[i].classList.remove('ui-accordion-content-active');
        tab[i].classList.remove('ui-accordion-header-active');
      } else {
        hideTabContent(0);
        showTabContent(i);
      }
    });
  });
}

module.exports = accordion;