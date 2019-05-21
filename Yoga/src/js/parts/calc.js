function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      counterInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('input', function() {  
        if (this.value[0] != 0 && this.value) {
          for (let i = 0; i < this.length; i++) {
            this[i].value = this[i].value.replace(/-?(\d+|\d+.\d+|.)([eE][-+])?[^\d]/g, '');
          }
          personsSum = +this.value;
          total = (daysSum * personsSum) * 4000 * place.options[place.selectedIndex].value;
          if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
            total = (daysSum * personsSum) * 4000;
          }
        } else {
          this.value = '';
        }   
      });

      restDays.addEventListener('input', function() {
        if (this.value[0] != 0 && this.value) {
          for (let i = 0; i < this.length; i++) {
            this[i].value = this[i].value.replace(/-?(\d+|\d+.\d+|.)([eE][-+])?[^\d]/g, '');
          }
          daysSum = +this.value;
          total = (daysSum * personsSum) * 4000 * place.options[place.selectedIndex].value;
          if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
            total = (daysSum * personsSum) * 4000;
          }
        } else {
          this.value = '';
        }
      });

      place.addEventListener('input', function() {
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });

      // for (let i = 0; i < counterInput.length; i++) {
      //   if (counterInput[i]) {
      //     counterInput[i].addEventListener('input', () => {
      //       counterInput[i].value = counterInput[i].value.replace(/-?(\d+|\d+.\d+|.)([eE][-+])?[^\d]/g, '');
      //     });
      //   }
      // }
}

module.exports = calc;
