(function() {
	var Board = function() {
  	this.answer;
  };

  Board.prototype.bindEventHandlers = function() {
  	// click handler for new game button
  }

  Board.prototype.getQuestions = function(questionMaybe) {
  	return 'your JSON from somewhere';
  }

  Board.prototype.init = function() {
  	this.bindEventHandlers();
  }

  Board.prototype.setupGame = function() {
  	this.setQuestions();
  }

  Board.prototype.setQuestions = function() {
  	var questions = this.getQuestions(questionMaybe);

    if (questions.length > 0) {
    	for (var i = 0, len = questions.length; i < len; i++) {
      	updateQuestion(i, questions[i]);
      }
    }
  }

  Board.prototype.updateQuestion = function(index, questionCopy) {
    var button = new Question(index, questionCopy);
  }

  return Board;
})()

(function() {
	var Answer = function() {}

  Answer.prototype.getQuestion = function() {}

  Answer.prototype.bindEventHandlers = function() {
  	// click handler for 'Answers', should run set questions

  }

	return Answer;
})()

(function() {
	var Question = function() {}

  Question.prototype.bindEventHandler = function() {
  	// click and report
  }

  Question.prototype.init = function() {
  	this.bindEventHandler();
  }

  return Question;
})()


Board.init;
