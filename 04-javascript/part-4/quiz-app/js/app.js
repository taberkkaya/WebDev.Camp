const questionList = [
  new Question(
    "1-Hangisi Javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d"
  ),
  new Question(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascipt", d: "sql" },
    "d"
  ),
  new Question(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "typescript", c: "angular", d: "react" },
    "a"
  ),
  new Question(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  startTimer(10);
  startTimeLine();
  ui.quiz_box.classList.add("active");
  ui.button_box.classList.remove("active");
  ui.showQuest(quiz.getQuestion());
  ui.showQuestPlace(quiz.questionIndex, quiz.questions.length);
  ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    startTimer(10);
    startTimeLine();
    ui.btnNext.classList.remove("show");
    ui.showQuest(quiz.getQuestion());
    ui.showQuestPlace(quiz.questionIndex, quiz.questions.length);
  } else {
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.showScore(quiz.trueAnswerCount, quiz.questions.length);
  }
});

function optionSelected(e) {
  clearInterval(counter);
  clearInterval(counterLine);
  let selectedElement = e.target;
  if (selectedElement.nodeName == "SPAN") {
    selectedElement = e.target.parentElement;
  }
  const answer = selectedElement.textContent[0];
  const question = quiz.getQuestion();
  if (question.control(answer)) {
    quiz.trueAnswerCount += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.questionIndex += 1;
  ui.disableAllOption();
  ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.trueAnswerCount = 0;
  //star button
  ui.btnStart.click();
  ui.score_box.classList.remove("active");
});

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_second.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süre Bitti";
      ui.disableAllOption();
      quiz.questionIndex += 1;

      ui.btnNext.classList.add("show");
    }
  }
}

let counterLine;

function startTimeLine() {
  let line_width = 0;
  counterLine = setInterval(timer, 20);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
