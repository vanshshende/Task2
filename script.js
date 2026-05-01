// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let msg = document.getElementById("message").value.trim();
let formMsg = document.getElementById("formMsg");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name=="" || email=="" || phone=="" || msg==""){
formMsg.innerHTML="Please fill all fields";
formMsg.style.color="red";
}
else if(!email.match(emailPattern)){
formMsg.innerHTML="Invalid Email";
formMsg.style.color="red";
}
else if(phone.length!=10){
formMsg.innerHTML="Phone must be 10 digits";
formMsg.style.color="red";
}
else{
formMsg.innerHTML="Form Submitted Successfully!";
formMsg.style.color="green";
document.getElementById("contactForm").reset();
}
});

// ToDo List
function addTask(){
let taskInput=document.getElementById("taskInput");
let task=taskInput.value.trim();

if(task==="") return;

let li=document.createElement("li");
li.innerHTML=`${task} <button class="delete" onclick="this.parentElement.remove()">X</button>`;

document.getElementById("taskList").appendChild(li);

taskInput.value="";
}