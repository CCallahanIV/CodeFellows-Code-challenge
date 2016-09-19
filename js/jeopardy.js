//This is the main javascript file for the functionality of the jeopardy app.

function newUser(){
  var userName = prompt("Please enter your name: ");
  localStorage.setItem("user", userName)
};

function newGame(){
  localStorage.clear();
  newUser();

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
  var points = e.target.textContent;
  console.log(points);

  clearBtn(e);
  var id = e.target.getAttribute('id').split("");
  console.log(id);
  var cat = categories[Number(id[0])];
  console.log(cat);
//  var aBox = document.getElementsByClassName("answerBox")[0];
//  aBox.textContent=answer;
}

function clearBtn(e){
  e.target.textContent=" ";
}

var elBtn = document.getElementById("gameBoard")
elBtn.addEventListener('click', function(e) { loadAnswer(e) }, false);

var elNewGame = document.getElementById("newGame");
elNewGame.addEventListener('click', newGame,false);
