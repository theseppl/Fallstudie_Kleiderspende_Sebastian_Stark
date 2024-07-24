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

document.addEventListener("DOMContentLoaded", function() {
  var myFooter = document.getElementById("myFooter");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/html/footer.html", true);
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
          window.open('/html/clothes.html', '_self')
        } else {
          window.open('/html/fetchRegister.html', '_self')
        }
      }

function donate(){
        window.open('/html/donate.html', '_self')
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

  const input = [
    document.getElementById('firstName'),
    document.getElementById('lastName'),
    document.getElementById('input3'),
    document.getElementById('input4'),
    document.getElementById('input5'),
    document.getElementById('input6'),
    document.getElementById('mail'),
    document.getElementById('postCode'),
  ]
  
// Funktion zur Überprüfung der Pflichtfelder.
function register() {
  let counter = 0;
  // const input = [
  //   document.getElementById('firstName'),
  //   document.getElementById('lastName'),
  //   document.getElementById('input3'),
  //   document.getElementById('input4'),
  //   document.getElementById('input5'),
  //   document.getElementById('input6'),
  //   document.getElementById('mail'),
  //   document.getElementById('postCode'),
  // ]

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
    let firstName = document.getElementById("firstName").value;
    localStorage.setItem("firstName", firstName);
  
    let lastName = document.getElementById("lastName").value;
    localStorage.setItem("lastName", lastName);
    
    window.open('/html/clothes.html', '_self')
  } else {
    window.open('/html/wrongPostCode.html', '_self')
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
  let trousers = document.getElementById("trousers").value;
  localStorage.setItem("trousers", trousers);

  let shirts = document.getElementById("shirts").value;
  localStorage.setItem("shirts", shirts);


  window.open('/html/final.html', '_self');
  return false;
}

const preElement = document.getElementById('finalList');
input.forEach(value => {
  // console.log(value.id);
  // preElement = document.getElementById('finalList');
  let inputValue = localStorage.getItem("firstName");
  let valueListElement = document.createElement('li');
  valueListElement.textContent = "Vorname: " + inputValue;
  console.log(valueListElement.textContent);
  preElement.appendChild(valueListElement);
});


// preElement = document.getElementById('finalList');

// let firstName = localStorage.getItem("firstName");
// const firstNameListElement = document.createElement('li');
// firstNameListElement.textContent = "Vorname: " + firstName;
// preElement.appendChild(firstNameListElement);

// let lastName = localStorage.getItem("lastName");
// const lastNameListElement = document.createElement('li');
// lastNameListElement.textContent = "Nachname: " + lastName;
// preElement.appendChild(lastNameListElement);

// let trousers = localStorage.getItem("trousers");
// const trousersListElement = document.createElement('li');
// trousersListElement.textContent = "Hosen: " + trousers;
// preElement.appendChild(trousersListElement);

// let shirts = localStorage.getItem("shirts");
// const shirtsListElement = document.createElement('li');
// shirtsListElement.textContent = "T-Shirts: " + shirts;
// preElement.appendChild(shirtsListElement);

