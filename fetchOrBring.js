let radioOne = document.getElementById("radio1");
      function fetchOrBring() {
        if (radioOne.checked) {
          window.open('/html/bringRegister.html', '_self')
        } else {
          window.open('/html/fetchRegister.html', '_self')
        }
      }