let submit = document.getElementById("submit");
let user = document.getElementById("User")
let pass = document.getElementById("pass")
let userImg=document.getElementById("userImg");
let passImg=document.getElementById("passImg")

function validateUser() {
    if (user.value.trim() == "") {
        user.style.border = "1px solid red";
        userImg.style.display="inline";
        userImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        return false
    }
    else{
        user.style.border="1px solid green";
        userImg.style.display="inline"
        userImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        return true
    }
}
function validatePass() {
    if (pass.value.trim() == "") {
        pass.style.border = "1px solid red";
        passImg.style.display="inline"
        passImg.src="https://em-content.zobj.net/thumbs/160/facebook/355/cross-mark-button_274e.png"
        return false
    }
    else{
        pass.style.border="1px solid green";
        passImg.style.display="inline"
        passImg.src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png"
        return true
    }
}
// Submit Form Validation
function validateform(){
    if(!validateUser()||!validatePass()){
        alert("Please Enter All Values")
        return false
    }
    else{
        return true
    }
}