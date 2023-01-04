const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btnwrap = document.getElementById("buttons-wrapper");
const header = document.getElementById("header");
const quest = document.getElementById("quest");

let answerButtons = new Array(
  document.getElementById("answer1"),
  document.getElementById("answer2"),
  document.getElementById("answer3"),
  document.getElementById("answer4")
);

let answers = [];
let questNumb = 0;
let score = 0;
let randomQuestions = new Array(10);

function prevAndNext() {
  header.textContent = `Pytanie ${questNumb}`;
  quest.textContent = randomQuestions[questNumb - 1].question;
  for (let i = 0; i < 4; i++) {
    answerButtons[i].value = randomQuestions[questNumb - 1].answerOrder[i];
  }
  checkPrevBtn();

  // Ticking checked buttons
  for (let i = 0; i < 4; i++) {
    if (answers[questNumb-1] == answerButtons[i].value) {
      answerButtons[i].style.opacity = 0.6;
    } else {
      answerButtons[i].style.opacity = 1;
    }
  }
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
  if (nextBtn.value == "Submit") {
    // Deleting buttons
    for (let i = 0; i < 4; i++) {
      answerButtons[i].style.display = "none";
    }
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    // Checking answers
    for (let i = 0; i < 10; i++) {
      if (answers[i] == randomQuestions[i].options[0]) {
        score++;
      }
    }
    // Showing answer in the end
    header.innerHTML = `Twój wynik: ${score}/10`
    document.getElementById("buttons-wrapper").style.display = "none";
    document.getElementsByClassName("start-prev-wrapper")[0].style.display = "none"
    quest.innerHTML = `<p></p>`
    for (let i = 0; i < 10; i++) {
      if (answers[i] == undefined) answers[i] = "Brak odpowiedzi";
        quest.innerHTML += `<p>Pytanie ${i+1} <br> Twoja odpowiedz: ${answers[i]} <br> Poprawna odpowidz: ${randomQuestions[i].options[0]}</p>`;
    }
  }

  if (questNumb == 0) nextBtn.setAttribute("value", "Next");
  if (questNumb == 9) nextBtn.setAttribute("value", "Submit")
  if (questNumb < 10) {
    // amount of questions
    document.getElementsByTagName("ul")[0].textContent = " "; // deleting principles
    questNumb++;
    prevAndNext();
  }
  
  
});

// Prev
prevBtn.addEventListener("click", () => {
  if (questNumb <= 10) nextBtn.setAttribute("value", "Next");
  
  if (questNumb > 1) {
    document.getElementsByTagName("ul")[0].textContent = "";
    questNumb--;
    prevAndNext();
  }
});

// Randomize questions
const questions = new Array(
  question01, question02, question03, question04, question05, question06, question07, question08, question09,
  question10, question11, question12, question13, question14, question15, question16, question17, question18,
  question19, question20, question21, question22, question23, question24, question25, question26, question27,
  question28, question29, question30, question31, question32, question33, question34, question35, question36,
  question37, question38, question39, question40, question41, question42, question43, question44, question45,
  question46, question46, question47, question48, question50
);

function randomizeNumbers(howMany, ceiling) {
  let randomNumbers = [];
  let nextNumber = true;
  let number = 0;
  for (let i = 0; i < howMany; i++) {
      do {
          nextNumber = false
          number = Math.round(Math.random() * (ceiling - 1));
          for (let a = 0; a < i; a++) {
              if (number == randomNumbers[a]) {
                  nextNumber = true;
                  break;
              }
              
          }
      } while (nextNumber == true);
      randomNumbers.push(number);
  }

  return randomNumbers;
}

let order = new Array(4);
let randomNumbersForQuestions = new Array(10);
let randomNumbersForOrder = new Array(4);

randomNumbersForQuestions = randomizeNumbers(10, 50);

for (let i = 0; i < 10; i++) {
  randomQuestions[i] = questions[randomNumbersForQuestions[i]];
}

for (let i = 0; i < 10; i++) {
  randomNumbersForOrder = randomizeNumbers(4, 4);
  randomQuestions[i].answerOrder = [0, 1, 2, 3];
  for (let a = 0; a < 4; a++) {
      randomQuestions[i].answerOrder[a] = randomQuestions[i].options[randomNumbersForOrder[a]];
  }
}

// Saving answers
document.getElementById("myform").addEventListener("click", (event) => {
  let checkedButton = event.target.value
  if (event.target.type == "button") {
    if (checkedButton != "") {
      for (let i = 0; i < 4; i++) {
        answerButtons[i].style.opacity = 1;
      }
      event.target.style.opacity = 0.6;
      answers[questNumb-1] = checkedButton;
    } else {
      event.target.style.opacity = 0.6;
      answers[questNumb-1] = checkedButton;
    }
  }
  
  console.log(answers);
});
