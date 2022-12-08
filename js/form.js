const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userEmail = document.getElementById("user-email");
const errorElement = document.getElementById("error");
let error = true;

const showingInfoError = (infoContent, errorName) => {
    const errorInfo = document.createElement('p');
    errorInfo.id = `error-${errorName}`;
    errorInfo.textContent = infoContent;
    errorElement.appendChild(errorInfo);
    errorElement.style.display = "block";
}

const checkNames = (inputToCheck) => {
    let userNameText = document.getElementById(inputToCheck).value.trim();
    for (let i = 0; i < userNameText.length; i++) {
        if ((userNameText.char > 64 && userNameText.charCodeAt(i) < 90) || 
        (userNameText.charCodeAt(i) > 96 && userNameText.charCodeAt(i) < 123)) {
            error = false;
        } else {
            error = true;
            break;
        }
    }

    if (error && inputToCheck == "user-name") {
        showingInfoError("Wpisz poprawne imie", 1, inputToCheck);
    } else if (error) {
        showingInfoError("Wpisz poprawne nazwisko", 1, inputToCheck);
    } else if (error == false) {
        document.getElementById(`error-${inputToCheck}`).remove();
    }
}

document.getElementById("submit-btn").addEventListener("click", (event) => {
    if (error == false) {
        window.location.href = "./quiz.html";
        sessionStorage.setItem("user-name", userName.value.trim());
        sessionStorage.setItem("user-surname", userSurname.value.trim());
        sessionStorage.setItem("user-email", userEmail.value.trim());
    }
})

document.getElementById("user-form").addEventListener("focusout", (event) => {
    if (event.target.id == "user-name" || event.target.id == "user-surname") {
        checkNames(event.target.id);
    }
})