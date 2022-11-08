const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btnwrap = document.getElementById("buttons-wrapper");
let questNumb = 0;

//czas
//pytania i odpowiedzi lista2D
//tab co już było
//licznik i wyświetlacz ilości pytań

function prevAndNext() {
  console.log(questNumb);
  document.getElementsByTagName("h1")[0].textContent = `Pytanie ${questNumb}`;
  document.getElementById(
    "quest"
  ).textContent = `Lorem ipsum dolor sit amet? ${questNumb}`;
}

function checkPrevBtn() {
  if (questNumb >= 0) {
    prevBtn.style.display = "block";
    btnwrap.style.display = "block";
  }
  if (questNumb >= 1) {
    prevBtn.removeAttribute("disabled");
  }
  nextBtn.style.width = "40vw";
  // if(questNumb == 1)
  //     prevBtn.setAttribute("disabled", "")
}
nextBtn.addEventListener("click", () => {
  //NEXT
  checkPrevBtn();
  if (questNumb == 0) nextBtn.setAttribute("value", "Next");
  if (questNumb < 5) {
    //5 to ilość pytań (domyślnie ma być 10)
    document.getElementsByTagName("ul")[0].textContent = " "; //usuwa zasady
    questNumb++;
    prevAndNext();
  }
});
prevBtn.addEventListener("click", () => {
  //PREV
  checkPrevBtn();
  if (questNumb > 1) {
    document.getElementsByTagName("ul")[0].textContent = "";
    questNumb--;
    prevAndNext();
  }
});