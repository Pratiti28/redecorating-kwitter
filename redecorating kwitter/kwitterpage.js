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
var username=localStorage.getItem("username");
var roomname=localStorage.getItem("roomname");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
var nametag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
messagetag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'>like="+like+"</span></button><hr>";
row=nametag+messagetag+likebutton+spantag;
document.getElementById("output").innerHTML+=row;
 } });  }); }
getData();

function updatelike(message_id){
 console.log("clicked on like button=+"+message_id);
 button_id=message_id;
 likes=document.getElementById(button_id).value;
 updatedlike=Number(likes)+1;
 console.log(updatedlike);
 firebase.database().ref(roomname).child(message_id).update({
       like:updatedlike
 });
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
}
