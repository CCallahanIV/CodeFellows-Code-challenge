//This is the main javascript file for the functionality of the jeopardy app.

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
  localStorage.setItem("user", userName)
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

  writeGameBoard();
};

function loadAnswer(e){
  var id = e.target.getAttribute('id');
  var cat = categories[Number(id.charAt(0))];
  var aBox = document.getElementsByClassName("answerBox")[0];
  var ans = "a"+(Number(id.charAt(1))+1);
  console.log(ans);

  clearBtn(e);
  aBox.innerHTML=cat[ans].answer;

  for(var i=0; i<3; i++){
    var ind = "q"+(i+1);
    var question = document.getElementById(ind);
    var qtext = cat[ans][ind];
    question.innerHTML=qtext;
  }
};

function checkQuestion(e){
  var id = e.target.getAttribute('id');
};

function clearBtn(e){
  var id = e.target.getAttribute("id");
  e.target.textContent=" ";
  var boardState = JSON.parse(localStorage.getItem("boardState"));
  boardState[Number(id.charAt(0))][Number(id.charAt(1))] = "";
  localStorage.setItem("boardState", JSON.stringify(boardState));
};

window.addEventListener('load', writeGameBoard, false);

var elQBtn = document.getElementById("qList");
elQBtn.addEventListener('click', function(e) { checkQuestion(e) }, false);

var elBtn = document.getElementById("gameBoard")
elBtn.addEventListener('click', function(e) { loadAnswer(e) }, false);

var elNewGame = document.getElementById("newGame");
elNewGame.addEventListener('click', newGame,false);
