var google_autentication = document.getElementById("Google_autentication")
//var autentication = $("#autentication")
var registrar = document.getElementById("registrar")

var email = document.getElementById("email_auth")
var senha = document.getElementById("senha_auth")


registrar.addEventListener('click', function () {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
})
