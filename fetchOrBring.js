let radioOne = document.getElementById("radio1");
      function fetchOrBring() {
        if (radioOne.checked) {
          window.open('./bringRegister.html', '_self')
        } else {
          window.open('./fetchRegister.html', '_self')
        }
      }