const nextBtn = document.getElementById("next");
let ktrPyt = 1;

//czas
//pytania i odpowiedzi lista2D
//tab co już było
//licznik i wyświetlacz ilości pytań


nextBtn.addEventListener("click", () => {
    document.getElementsByTagName("ul")[0].textContent = " "; //usuwa zasady

    switch(ktrPyt) {
        case 1:
            document.getElementsByTagName("h1")[0].textContent = "Pytanie 1"; //wyświetla które pytanie z koleji
            document.getElementById("quest").textContent = "Lorem ipsum dolor sit amet? 1"; //wyświetla wylosowane pytanie
        break;
        case 2:
            document.getElementsByTagName("h1")[0].textContent = "Pytanie 2";
            document.getElementById("quest").textContent = "Lorem ipsum dolor sit amet? 2";
        break;
        case 3:
            document.getElementsByTagName("h1")[0].textContent = "Pytanie 3";
            document.getElementById("quest").textContent = "Lorem ipsum dolor sit amet? 3";
        break;
        case 4:
            document.getElementsByTagName("h1")[0].textContent = "Pytanie 4";
            document.getElementById("quest").textContent = "Lorem ipsum dolor sit amet? 4";
            break;
        case 5:
            document.getElementsByTagName("h1")[0].textContent = "Pytanie 5";
            document.getElementById("quest").textContent = "Lorem ipsum dolor sit amet? 5";
        break;
    }

ktrPyt++;
})

