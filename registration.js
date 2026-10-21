let registrationForm = document.getElementById("registrationForm");
let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentAge = document.getElementById("studentAge");
let studentGender = document.getElementById("studentGender");
let studentCourse = document.getElementById("studentCourse");
let newUsername = document.getElementById("newUsername");
let newPassword = document.getElementById("newPassword");
let registerButton = document.getElementById("registerButton");
let registrationMessage = document.getElementById("registrationMessage");
let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");
let loginButton = document.getElementById("loginButton");


registrationForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (studentName.value.trim() === "" || studentEmail.value.trim() === "" || studentAge.value.trim() === "" || studentAge.value <10 || studentGender.value.trim() === "" || studentCourse.value.trim() === "" || newUsername.value.trim() === "" || newPassword.value.trim() === ""){
        registrationMessage.textContent = "Please, all fields must be completed before submission";
        registrationMessage.style.color = "red";
        registrationMessage.style.fontWeight = "bold";
    } else{
        registrationMessage.textContent = "Your registration was Successful, you can now log in!";
        registrationMessage.style.color = "green";
        registrationMessage.style.fontWeight = "bold";
        registrationMessage.style.fontSize = "20px";
    }
});

loginForm.addEventListener("input", function(){
    if(loginUsername.value.trim() !== "" && loginPassword.value.trim() !== ""){
        loginButton.style.backgroundColor = "red";
    }else{
        loginButton.style.backgroundColor = "#123b6d";
    }
});
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (loginUsername.value !== newUsername.value || loginPassword.value !== newPassword.value){
        loginMessage.textContent = "Please, either the username or password is incorrect";
        loginMessage.style.color = "red";
        loginMessage.style.fontSize = "20px";
        loginMessage.style.fontWeight = "bold";
    } else{
        loginMessage.textContent = loginUsername.value + ", You have been logged in Successfully!!!";
        loginMessage.style.color = "green";
        loginMessage.style.fontSize = "25px";
        loginMessage.style.fontWeight = "bolder";
    }
});

