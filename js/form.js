const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userEmail = document.getElementById("user-email");
const errorElement = document.getElementById("error");
let error = true;

document.getElementById("submit-btn").addEventListener("click", (event) => {
    if (error == false) {
        window.location.href = "./quiz.html";
        sessionStorage.setItem("user-name", userName.value.trim());
        sessionStorage.setItem("user-surname", userSurname.value.trim());
        sessionStorage.setItem("user-email", userEmail.value.trim());
    }
})

document.getElementById("user-name").addEventListener("focusout", () => {
    let userNameText = userName.value.trim();
    for (let i = 0; i < userNameText.length; i++) {
        if ((userNameText.char > 64 && userNameText.charCodeAt(i) < 90) || 
        (userNameText.charCodeAt(i) > 96 && userNameText.charCodeAt(i) < 123)) {
            error = false;
            if (i == userNameText.length - 1) {
                document.getElementById("error-name").remove();
            }
            console.log(userNameText.charCodeAt(i));
        } else {
            error = true;
            break;
        }
    }
    

    if (error && errorElement.children.length == 0) {
        const errorInfo = document.createElement('p');
        errorInfo.id = "error-name";
        errorInfo.textContent = "Wpisz poprawne imię";
        errorElement.appendChild(errorInfo);
        errorElement.style.display = "block";
    }
})