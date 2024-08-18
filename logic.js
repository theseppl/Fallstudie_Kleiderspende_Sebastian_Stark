document.addEventListener("DOMContentLoaded", function() {
    var meineNavbar = document.getElementById("meine-navbar");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./navigation.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            meineNavbar.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});


document.addEventListener("DOMContentLoaded", function() {
  var myFooter = document.getElementById("myFooter");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./html/footer.html", true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          myFooter.innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}); 


let radioOne = document.getElementById("radio1");
function fetchOrBring() {
  if (radioOne.checked) {
    window.open('./html/clothes.html', '_self')
  } else {
    window.open('./html/fetchRegister.html', '_self')
  }
}


function donate(){
    window.open('./html/donate.html', '_self')
}


function activate_deactivateRegisterButton() {
    let acceptAGB = document.getElementById('accept_AGB');
    let registerButton = document.getElementById('register_button');
    if (acceptAGB.checked == true) {
        registerButton.classList.remove('disabled');
    } else {
        registerButton.classList.add('disabled');
    }
}


// Array mit den ID-Werten der Kleidereingabefelder
const clothesID = [
  "trousers",
  "shirts",
  "pullover",
  "jackets",
  "shoes",
  "caps",
  "other"
];


// Array mit den ID-Werten der Spendendeneingabefelder
const idStrings = [
  "firstName",
  "lastName",
  "street",
  "houseNr",
  "postCode",
  "city",
  "telefon",
  "mail",
  "date",
  "time"
];


// Array mit den Instanzen der Spendendeneingabefelder wird über forEach-Schleife erzeugt
const input = [];
idStrings.forEach(value => {
  const inputField = document.getElementById(value);
  input.push(inputField);
});


// Funktion zur Überprüfung der Pflichtfelder.
function register() {
  let counter = 0;
// for-Schleife um Aufruf von postalCode() nur bei erfolgreicher Validierung zu ermöglichen
  input.forEach(element => {
    if (element.value.trim() != '') {
      counter++;
      if (counter === input.length) {
        postalCode();
        counter = 0;
      }
    }
  });
  // return false um Standardverhalten Seite neu laden zu vermeiden
  return false;
}


// Funktion für die Überprüfung der Postleitzahl bei der Registrierung  
function postalCode() {
  var postCode = document.getElementById("postCode").value;

  if (postCode.substring(0, 2) == '01' || postCode.substring(0, 2) == '26' || postCode.substring(0, 2) == '10' || postCode.substring(0, 2) == '40' || postCode.substring(0, 2) == '36' || postCode.substring(0, 2) == '80') {
    idStrings.forEach(element => {
      let elementValue = document.getElementById(element).value;
      sessionStorage.setItem(element, elementValue);
    });
    window.open('./html/clothes.html', '_self')

  } else {
    window.open('./html/wrongPostCode.html', '_self')
  }
}


// Funktion die verhindert, dass mit Enter-Taste Aktionen ausgelöst werden.
// Dadurch wird sichergestellt, dass nur durch aktivierte Button Aktionen ausgelöst werden.
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});


function final() {
  let dropDownValue = document.getElementById("dropDownID").value;
  sessionStorage.setItem("dropDownValue", dropDownValue);

  clothesID.forEach(element => {
    let elementValue = document.getElementById(element).value;
    sessionStorage.setItem(element, elementValue);
  });
  window.open('./html/final.html', '_self');
  return false;
}

function finish() {
  sessionStorage.clear();
  window.open('./index.html', '_self');
}


