function add_user(){
    user_name=document.getElementById('user_name').value;
    localStorage.setItem("user name",user_name);
    window.location="chat web_room.html";
}