document.addEventListener("DOMContentLoaded", function() {
    var meineNavbar = document.getElementById("meine-navbar");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/html/navigation.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            meineNavbar.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});  

let radioOne = document.getElementById("radio1");
      function fetchOrBring() {
        if (radioOne.checked) {
          window.open('/html/bringRegister.html', '_self')
        } else {
          window.open('/html/fetchRegister.html', '_self')
        }
      }

function donate(){
        window.open('/html/donate.html', '_self')
    }

function activate_deactivateRegisterButton() {
      let acceptAGB = document.getElementById('accept_AGB');
      let register = document.getElementById('register_button');
      if (acceptAGB.checked == true) {
          register.classList.remove('disabled');
      } else {
          register.classList.add('disabled');
      }
  }

  function register() {
      window.open('./clothes.html', '_self')
  }