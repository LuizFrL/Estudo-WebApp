var google_autentication = $("#Google_autentication")
//var autentication = $("#autentication")
var registrar = $("#registrar")
var email = $("#email_auth")
var senha = $("#senha_auth")
var autentication = $("#autentication")


var senha_login = $('#senha_login')
var email_login = $('#email_login')

var logout = $("#logout-sair")

logout.click(function(){
  firebase.auth().signOut();
  app.views.current.router.navigate('/', { 'clearPreviousHistory': true });
})


// Quando qualquer login for feito
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
    adcUserData(user.uid, user.displayName, user.email, user.photoURL)
    novoPost(user.uid)
    app.views.current.router.navigate('/dashboard/', { 'clearPreviousHistory': true })

  } else {
    app.views.current.router.navigate('/', { 'clearPreviousHistory': true });
  }

})


// Criar usuário
registrar.on('click', function () {
  firebase.auth().createUserWithEmailAndPassword(email.val(), senha.val()).then(function () {
    email.val('')
    senha.val('')
  })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '\n' + errorMessage);

    })
})

// Autenticar usuário Google
google_autentication.click(function () {
  var provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log(result.user);
  }).catch(function (error) {
    console.log(error);
  });
})

// Autenticar usuário Login/Senha
autentication.click(function () {
  console.log(email_login.val() + '\n' + senha_login.val());

  firebase.auth().signInWithEmailAndPassword(email_login.val(), senha_login.val())
    .then(function (user) {
      console.log(user);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '\n' + errorMessage);
    });
})

