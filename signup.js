let submit=document.getElementById("submit");
let Name=document.getElementById("fullname");
let email=document.getElementById("mail");
let pass=document.getElementById("pass");
let confirmPass=document.getElementById("confirm-pass");
let checkedImg=document.getElementById("nameImg")
let mailImg=document.getElementById("mailImg");
let passImg=document.getElementById("passImg")
let confirmImg=document.getElementById("confirmImg")
function validateName(){
    if(Name.value.trim()==""){
        Name.style.border="1px solid red";
        nameImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        nameImg.style.display="inline";
        return false;
    }
    else if(Name.value.trim().length<6){
        Name.style.border="1px solid red";
        nameImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        nameImg.style.display="inline";
        return false;
    }
    else if(Name.value.trim().length>=7){
        Name.style.border="1px solid green";
        nameImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        nameImg.style.display="inline"
        return true
    }
}


// Email Validation
function validateEmail(){
    if(email.value.trim()==""){
        email.style.border="1px solid red";
        mailImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        mailImg.style.display="inline";
        return false;
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.border="1px solid red";
        mailImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        mailImg.style.display="inline";
        return false;
    }
    else{
        email.style.border="1px solid green";
        mailImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        mailImg.style.display="inline"
        return true
    }
}
// Password validation

function validatePass(){
    if(pass.value==""){
    pass.style.border="1px solid red";
    passImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
    passImg.style.display="inline";
    return false;
    }
    else if(pass.value.length<6){
        pass.style.border="1px solid red";
        passImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        passImg.style.display="inline";
        return false;
    }
    else if(pass.value.length>6){
        pass.style.border="1px solid green";
        passImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        passImg.style.display="inline"
        return true
    }
}
//  validating confirm pass
function confirmpass(){
    if(pass.value===confirmPass.value){
        confirmPass.style.border="1px solid green";
        confirmImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        confirmImg.style.display="inline"
        return true
    }
    else{
        confirmPass.style.border="1px solid red";
        confirmImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        confirmImg.style.display="inline";
        return false;
    }
}


// total form validation
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePass() || !confirmpass()){
        alert("please Enter the correct Values")
        return false
    }
    else{
        return true
    }
   
}
