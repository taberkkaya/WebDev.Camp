function Question(questContext, answerOptions, trueAnswer) {
  this.questContext = questContext;
  this.answerOptions = answerOptions;
  this.trueAnswer = trueAnswer;
}

Question.prototype.control = function (answer) {
  return answer === this.trueAnswer;
};
