const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btnwrap = document.getElementById("buttons-wrapper");
const header = document.getElementById("header");
const quest = document.getElementById("quest");
let questNumb = 0;

// TODO: Time limit

function prevAndNext() {
  console.log(questNumb);
  header.textContent = `Pytanie ${questNumb}`;
  quest.textContent = randomQuestions[questNumb-1].question;
  checkPrevBtn();
}

// Removing prev button
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

// Next
nextBtn.addEventListener("click", () => {
  if (questNumb == 0) nextBtn.setAttribute("value", "Next");
  if (questNumb < 10) { // amount of questions
    document.getElementsByTagName("ul")[0].textContent = " "; // deleting principles
    questNumb++;
    prevAndNext();
  }
});

// Prev
prevBtn.addEventListener("click", () => {
  if (questNumb > 1) {
    document.getElementsByTagName("ul")[0].textContent = "";
    questNumb--;
    prevAndNext();
  }
});
