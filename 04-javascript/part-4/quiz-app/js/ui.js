function UI() {
  this.quiz_box = document.querySelector("#quiz-box");
  this.body = document.querySelector("#quiz-box #body");
  this.correctIcon = '<i class="bi bi-check-circle"></i>';
  this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
  this.btnNext = document.querySelector(".btn-next");
  this.question_index = document.querySelector(".question-index");
  this.score_text = document.querySelector(".score-text");
  this.btnReplay = document.querySelector(".btn-replay");
  this.btnQuit = document.querySelector(".btn-quit");
  this.btnStart = document.querySelector(".btn-start");
  this.button_box = document.querySelector("#button-box");
  this.score_box = document.querySelector("#score-box");
}

UI.prototype.showQuest = function (question) {
  this.body.innerHTML = "";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("question-title");
  title.textContent = question.questContext;

  const optionList = document.createElement("div");
  optionList.classList.add("option-list");

  for (let [key, value] of Object.entries(question.answerOptions)) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.addEventListener("click", optionSelected);
    const span = document.createElement("span");
    span.textContent = key + ") " + value;
    option.appendChild(span);
    optionList.appendChild(option);
  }

  cardBody.appendChild(title);
  cardBody.appendChild(optionList);

  this.body.appendChild(cardBody);
};

UI.prototype.disableAllOption = function () {
  const options = document.querySelectorAll(".option");
  for (let option of options) {
    option.classList.add("disabled");
  }
};

UI.prototype.showQuestPlace = function (questPlace, totalCount) {
  const tag = `<span class="badge text-bg-danger">${
    questPlace + 1
  } / ${totalCount}</span>`;
  this.question_index.innerHTML = "";
  this.question_index.innerHTML = tag;
};

UI.prototype.showScore = function (trueAnswerCount, totalQuestionCount) {
  const tag = `Topla ${totalQuestionCount} soruda ${trueAnswerCount} doğru cevap verdiniz.`;

  this.score_text.innerHTML = tag;
};
