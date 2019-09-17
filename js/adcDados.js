//Adicinando dados
function adcUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username : name,
        email : email,
        profile_picture : imageUrl
    });
}


function novoPost(idUsuario) {
    // A post entry.
    var postData = {
        dia: '2018-12-01',
        item: 'Luvas de Box',
        valor: 23.65,
        local: 'Loja de artigos esportivos'
    
    };

    var newPostKey = firebase.database().ref().child('gastos').push().key;
    console.log(newPostKey);
    
    var updates = {};
    updates['/users/' + idUsuario + '/gastos/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }