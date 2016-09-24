
//This is the main javascript file for the functionality of the jeopardy app.

localStorage.clear();

function writeGameBoard(){
  if(!localStorage.getItem("boardState")){
    var boardState = [
      ["","","",""],
      ["","","",""],
      ["","","",""]];
    localStorage.setItem("boardState", JSON.stringify(boardState));
  }
  boardState = JSON.parse(localStorage.getItem("boardState"));
  console.log(boardState);

  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      var id = j.toString()+i.toString();
      var elGameBtn = document.getElementById(id);
      elGameBtn.textContent=boardState[i][j];
    }
  }
};

function newUser(){
  var userName = prompt("Please enter your name: ");
  localStorage.setItem("user", userName);

  var elUserName = document.getElementById("userName");
  elUserName.textContent = userName;
};

function newGame(){
  localStorage.clear();
  newUser();
  //Declare variable to track state of game board.  Must be stored locally to ensure game board state survives page refresh.
  var boardState = [
    [200,200,200,200],
    [600,600,600,600],
    [1000,1000,1000,1000]];
  localStorage.setItem("boardState", JSON.stringify(boardState));

  var userScore = 0;
  localStorage.setItem("userScore", userScore);

  var catArray = [0,1,2,3];
  localStorage.setItem("catArray", JSON.stringify(catArray));

  var dailyDouble = "12";
  localStorage.setItem("dailyDouble", dailyDouble);

  writeGameBoard();
};

//write answer and questions
function game(e){
  var id = e.target.getAttribute('id');
  var cat = categories[Number(id.charAt(0))];
  var ans = "a"+(Number(id.charAt(1))+1);
  //Display Answer in answer box
  var elaBox = document.getElementsByClassName("answerBox")[0];

  if(elaBox.getAttribute("isJAnswerable")==='false'){
    window.alert("Please select a game tile");
    return;
  }
  var boardState = JSON.parse(localStorage.getItem("boardState"));
  if(boardState[Number(id.charAt(1))][Number(id.charAt(0))]===""){
    window.alert("Already chose this one, please select another.");
    return;
  }

  //Clear Game Board Button and display answer
  clearBtn(e);


  elaBox.innerHTML=cat[ans].answer;
	elaBox.setAttribute('data',id);

  //Display Questions
  for(var i=0; i<3; i++){
    var ind = "q"+(i+1);
    var question = document.getElementById(ind);
    var qtext = cat[ans][ind];
    question.innerHTML=qtext;
    question.setAttribute('class','questionBox');
  }
  elaBox.setAttribute("isJQuestionable","true");
  elaBox.setAttribute("isJAnswerable","false");
};

//Function to clear game board tiles
function clearBtn(e){
  var id = e.target.getAttribute("id");
  e.target.textContent=" ";
  var boardState = JSON.parse(localStorage.getItem("boardState"));
  boardState[Number(id.charAt(1))][Number(id.charAt(0))] = "";
  localStorage.setItem("boardState", JSON.stringify(boardState));
};

//Function to update user score, store in local storage.
function updateScore(points){
  var score = parseInt(localStorage.getItem("userScore"));
  console.log("score before:" + score);

  score += points;
  localStorage.setItem("userScore", score);
  console.log("score after:" + score);

  elUserScore = document.getElementById("userScore");
  elUserScore.textContent = score;
};

function checkAnswer(evt){
	var elaBox = document.getElementsByClassName('answerBox')[0];
	var id = elaBox.getAttribute('data');

  if(elaBox.getAttribute("isJQuestionable")==='false'){
    window.alert("Please select a question!");
    return;
  }

	var choiceID = evt.target.getAttribute('id');
	var cat = categories[Number(id.charAt(0))];
	var ans = "a"+(Number(id.charAt(1))+1);
	var points = 0;

	if(choiceID == cat[ans].correct){
		points = cat[ans].points;
		switchQClass(true, choiceID);
	} else {
		points = -(cat[ans].points);
		switchQClass(false, choiceID);
	}
	updateScore(points);
  elaBox.setAttribute("isJAnswerable","true");
  elaBox.setAttribute("isJQuestionable","false");
};

function switchQClass(correct, choiceID){
	var elQuestion = document.getElementById(choiceID);
	if(correct){
		elQuestion.setAttribute("class", "questionCorrect");
	} else {
		elQuestion.setAttribute("class", "questionWrong");
	}
};

window.addEventListener('load', writeGameBoard, false);

var elqList = document.getElementById("qList");
elqList.addEventListener('click', function(e) { checkAnswer(e)}, false);

var elBtn = document.getElementById("gameBoard")
elBtn.addEventListener('click', function(evt) { game(evt) }, false);

var elNewGame = document.getElementById("newGame");
elNewGame.addEventListener('click', newGame,false);
