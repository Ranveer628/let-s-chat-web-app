const firebaseConfig = {
      apiKey: "AIzaSyC0MQ2e-igDtYzBGqmt19sMMH4Oa4qrLSo",
      authDomain: "let-s-chat-web-app-df709.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-df709-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-df709",
      storageBucket: "let-s-chat-web-app-df709.appspot.com",
      messagingSenderId: "920435965859",
      appId: "1:920435965859:web:a7f2e63902d5e7ffb76416"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

function add_room(){
      room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose:"Hello Ranveer "
      });
      localStorage.setItem("room name",room_names);
      window.location="chat web_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+ Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room name",name);
      window.location="chat web_page.html";
      }

      function logout(){
            localStorage.removeItem("user name");
            localStorage.removeItem("room name");
            window.location="index.html";
      }