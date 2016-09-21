//This is the main javascript file for the functionality of the jeopardy app.

function newUser(){
  var userName = prompt("Please enter your name: ");
  localStorage.setItem("user", userName)
};

function newGame(){
  localStorage.clear();
  newUser();

  //Declare variable to track state of game board.  Must be stored locally to ensure game board state survives page refresh.
  var boardState = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]];
  localStorage.setItem("boardState", JSON.stringify(boardState));

  var userScore = 0;
  localStorage.setItem("userScore", userScore);

  var catArray = [0,1,2,3];
  localStorage.setItem("catArray", JSON.stringify(catArray));

  var value=200;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      var id = j.toString()+i.toString();
      var elGameBtn = document.getElementById(id);
      elGameBtn.textContent=value.toString();
    }
    value+=400;
  }
}

function loadAnswer(e){
  var id = e.target.getAttribute('id');
  var cat = categories[Number(id.charAt(0))];
  var aBox = document.getElementsByClassName("answerBox")[0];

  clearBtn(e, id);

  aBox.innerHTML=cat.a1.answer;

  for(var i=0; i<3; i++){
    var ind = "q"+(i+1);
    var question = document.getElementById(ind);
    var qtext = cat.a1[ind];
    question.innerHTML=qtext;
  }
}

function checkQuestion(e){
  var id = e.target.getAttribute('id');
  if id = 
}

function clearBtn(e, id){
  e.target.textContent=" ";
}

var elQBtn = document.getElementById("qList");
elQBtn.addEventListener('click', function(e) { checkQuestion(e) }, false);

var elBtn = document.getElementById("gameBoard")
elBtn.addEventListener('click', function(e) { loadAnswer(e) }, false);

var elNewGame = document.getElementById("newGame");
elNewGame.addEventListener('click', newGame,false);
