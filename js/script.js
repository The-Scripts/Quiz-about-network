const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let questNumb = 0;

//czas
//pytania i odpowiedzi lista2D
//tab co już było
//licznik i wyświetlacz ilości pytań

function prevAndNext(){
    console.log(questNumb);
    switch(questNumb) {
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
}
function checkPrevBtn(){
    if(questNumb >= 0)
        prevBtn.style.display = "block";
    if(questNumb >= 1)
        prevBtn.removeAttribute("disabled");
    // if(questNumb == 1)
    //     prevBtn.setAttribute("disabled", "")

}
nextBtn.addEventListener("click", () => { //NEXT
    checkPrevBtn();
    if(questNumb == 0)
        nextBtn.setAttribute("value", "Next");
    if(questNumb<5){ //5 to ilość pytań (domyślnie ma być 10)
        document.getElementsByTagName("ul")[0].textContent = " "; //usuwa zasady
        questNumb++;
        prevAndNext();
    }
})
prevBtn.addEventListener("click", () => { //PREV
    checkPrevBtn();
    if(questNumb > 1){
        document.getElementsByTagName("ul")[0].textContent = "";
        questNumb--;
        prevAndNext();
    }
})

