var name = firebase.auth().currentUser.displayName;
var email = firebase.auth().currentUser.email;
var profile_pic = firebase.auth().currentUser.photoURL;

window.onload = function(){
    // firebase.initializeApp(config);
    // firebaseInit();
    document.getElementById("name").innerHTML=name;
    console.log(name, email, profile_pic)
}


