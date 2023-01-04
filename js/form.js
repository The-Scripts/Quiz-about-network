const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userEmail = document.getElementById("user-email");
const errorUserName = document.getElementById("error-user-name");
const errorUserSurname = document.getElementById("error-user-surname");
const errorUserEmail = document.getElementById("error-user-email");
let error = true;

const checkNames = (inputToCheck) => {
    const userNameText = document.getElementById(inputToCheck).value.trim();
    for (let i = 0; i < userNameText.length; i++) {
        const charInI = userNameText.charCodeAt(i);
        if ((charInI > 64 && charInI < 90) || 
        (charInI > 96 && charInI < 123)) {
            error = false;
        } else {
            error = true;
            break;
        }
    }

    if (error && inputToCheck == "user-name") {
        errorUserName.style.display = "block";
    } else if (error) {
        errorUserSurname.style = "block"
    } else if (error == false && inputToCheck == "user-name") {
        errorUserName.style.display = "none";
    } else if (error == false) {
        errorUserSurname.style.display = "none";
    }
}

document.getElementById("submit-btn").addEventListener("click", (event) => {
    if (error == false && userName.value != "" && userSurname.value != "" && userEmail.value != "") {
        window.location.replace("https://the-scripts.github.io/Quiz-about-network/quiz.html");
        sessionStorage.setItem("user-name", userName.value.trim());
        sessionStorage.setItem("user-surname", userSurname.value.trim());
        sessionStorage.setItem("user-email", userEmail.value.trim());
    }
})

document.getElementById("user-form").addEventListener("focusout", (event) => {
    if (event.target.id == "user-name" || event.target.id == "user-surname") {
        checkNames(event.target.id);
    } else if (event.target.id == "user-email") {
        const userEmailText = userEmail.value.trim();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value.trim())) {
            error = false;
            errorUserEmail.style.display = 'none';
        }
        else {
            error = true;
            errorUserEmail.style.display = 'block';
        }
    } 
})