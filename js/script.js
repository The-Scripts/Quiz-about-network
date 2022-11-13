const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btnwrap = document.getElementById("buttons-wrapper");
const header = document.getElementById("header");
const quest = document.getElementById("quest");
let questNumb = 0;

console.log(randomQuestions)

//czas do zrobienia

function prevAndNext() {
  console.log(questNumb);
  header.textContent = `Pytanie ${questNumb}`;
  quest.textContent = randomQuestions[questNumb-1].question;
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
