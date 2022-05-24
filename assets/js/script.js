let name = document.querySelector("#name");
let travelbuddy = document.querySelector("#travelbuddy");
let email = document.querySelector("#email");
let date = document.querySelector("#date");
let observations = document.querySelector("#observations");
let nameOk = false
let buddyOk = false
let emailOk = false
let obsOk = false
let map = document.querySelector("#map")

function validatesName() {
  let txtName = document.querySelector("#txtName");
  if (name.value.length < 3) {
    txtName.innerHTML = "Invalid name";
    txtName.style.color = "red";
  } else {
    txtName.innerHTML = "Valid name";
    txtName.style.color = "green";
    nameOk = true
  }
}

function validatesBuddy() {
  let txtBuddy = document.querySelector("#txtBuddy");
  if (travelbuddy.value.length < 3) {
    txtBuddy.innerHTML = "Invalid name";
    txtBuddy.style.color = "red";
  } else {
    txtBuddy.innerHTML = "Valid name";
    txtBuddy.style.color = "green";
    buddyOk = true
  }
}

function validatesEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')==-1){
        txtEmail.innerHTML = 'Invalid email'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Valid email'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validatesObs(){
    let txtObs = document.querySelector('#txtObs')
    if(observations.value.length >= 200){
        txtObs.innerHTML = 'Too much information'
        txtObs.style.color = 'red'
        txtObs.style.display = 'block'
    } else {
        txtObs.innerHTML = 'We will take care of it! ☑️'
        txtObs.style.color = 'blue'
        txtObs.style.display = 'none'
        obsOk = true
    }
}

function send(){
    if(nameOk == true && buddyOk==true && emailOk==true && obsOk==true){
        alert('Form successfully submitted.')
    } else {
        alert('You forgot to fill some info. Please, check your form before sending it.')
    }
}

function zoomIn(){
    map.style.width = '600px'
    map.style.height = '400px'
}
function regularSize(){
    map.style.width = '450px'
    map.style.height = '300px'
}
