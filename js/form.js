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
        showingInfoError("Wpisz poprawne imie", inputToCheck);
    } else if (error) {
        showingInfoError("Wpisz poprawne nazwisko", inputToCheck);
    } else if (error == false) {
        document.getElementById(`error-${inputToCheck}`).remove();
    }
}

document.getElementById("submit-btn").addEventListener("click", (event) => {
    if (error == false && userName.value != "" && userSurname.value != "" && userEmail.value != "") {
        window.location.href = "./quiz.html";
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
        for (let i = 0; i < userEmailText.length; i++) {
            const charInI = userEmailText.charCodeAt(i);
            if ((charInI > 63 && charInI < 90) || 
            (charInI > 96 && charInI < 123)  ||
            (charInI > 47 && charInI < 58) ||
            (charInI == 46)) {
                error = false;
            } else {
                error = true;
                break;
            }
        }

        if (error) {
            showingInfoError("Wpisz poprawny email", "user-email");
        } else if (error == false) {
            document.getElementById(`error-user-email`).remove();
        }
    } 

    if (errorElement.children.length == 0) {
        errorElement.remove();
    }
})