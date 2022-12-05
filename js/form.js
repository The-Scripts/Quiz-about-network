let error = false;

document.getElementById("submit-btn").addEventListener("click", (event) => {
    if (error == false) {
        window.location.href = "./quiz.html";
    }
    sessionStorage.setItem("user-name", document.getElementById("user-name").value);
    sessionStorage.setItem("user-surname", document.getElementById("user-surname").value);
    sessionStorage.setItem("user-email", document.getElementById("user-email").value);

    
})