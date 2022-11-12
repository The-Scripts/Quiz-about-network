const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btnwrap = document.getElementById("buttons-wrapper");
let questNumb = 0;

//czas do zrobienia

function prevAndNext() {
  console.log(questNumb);
  document.getElementsByTagName("h1")[0].textContent = `Pytanie ${questNumb}`;
  document.getElementById(
    "quest"
  ).textContent = `Lorem ipsum dolor sit amet? ${questNumb}`;
  checkPrevBtn();
}

function checkPrevBtn() {
  if (questNumb >= 1) {
    prevBtn.removeAttribute("disabled");
    prevBtn.style.display = "block";
  }
  if (questNumb == 1) {
    prevBtn.style.display = "none";
    btnwrap.style.display = "block";
  }
  nextBtn.style.width = "40vw";
}
nextBtn.addEventListener("click", () => {
  //NEXT
  if (questNumb == 0) nextBtn.setAttribute("value", "Next");
  if (questNumb < 10) { //10 to ilość pytań
    document.getElementsByTagName("ul")[0].textContent = " "; //usuwa zasady
    questNumb++;
    prevAndNext();
  }
});
prevBtn.addEventListener("click", () => {
  //PREV
  if (questNumb > 1) {
    document.getElementsByTagName("ul")[0].textContent = "";
    questNumb--;
    prevAndNext();
  }
});
