var firebaseConfig = {
    apiKey: "AIzaSyCxc1L5aYY8bFE_bcWXikmtCPITjo1aMo4",
    authDomain: "kwitter-5f4a2.firebaseapp.com",
    databaseURL: "https://kwitter-5f4a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-5f4a2",
    storageBucket: "kwitter-5f4a2.appspot.com",
    messagingSenderId: "720182333511",
    appId: "1:720182333511:web:3a35000eb425e41b402162"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+username+"!";

function addroom(){
var roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
    purpose:"adding room name"
});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("romname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirect(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}
