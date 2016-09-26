//This is the main javascript file for the functionality of the jeopardy app.

//localStorage.clear();

var board = {
  gameState: {
    userName : "",
    userScore: 0,
    boardState: [[200,200,200,200],
                  [600,600,600,600],
                  [1000,1000,1000,1000]],
    catArray: [],
    libraryMap: [],
    selectedQ: "",
    isJAnswerable: true,
    isJQuestionable: false,
    finalComplete: false
  },

  storeGameState: function(){
    localStorage.setItem("gameState", JSON.stringify(this.gameState));
  },

  updateGameState: function(key, value){
    this.gameState.key = value;
  },

  loadGameStateItem: function(key){
    var gameState = JSON.parse(localStorage.getItem("gameState"));
    return gameState.key;
  },

  loadGameState: function(){
    if(localStorage.getItem("gameState") !== null){
      this.gameState = JSON.parse(localStorage.getItem("gameState"));
      console.log("Loaded from local storage.");
    }
  },

  genCatArray: function(){
    function randomNum(min, max){
      return Math.round((max-min) * Math.random() + min);
    }
    function numFound(rNum, rArray){
      for (var i=0; i<rArray.length; i++){
        if(rNum==rArray[i]){
          return (-1);
        }
      }
      return rNum;
    }
    function uniqueArray(l, min, max){
      var temp, rArray = new Array;
      for (var i=0; i<l; i++){
        while((temp = numFound(randomNum(min, max),rArray))==-1);
        rArray[i]=temp;
      }
      return rArray;
    }
    this.gameState.catArray=uniqueArray(5,0,7);
  },

  writeUserName: function(){
    var elUserName = document.getElementById("userName");
    elUserName.textContent = this.gameState.userName;
  },

  writeUserScore: function(){
    var elUserScore = document.getElementById("userScore");
    elUserScore.textContent = this.gameState.userScore;
  },

  writeAnswerAndQs: function(){
    var elaBox = document.getElementsByClassName("answerBox")[0];
    if(!(this.gameState.libraryMap.length > 0)){
      elaBox.innerHTML = "Welcome to Joepardy-Lite!"

      for(var i=0; i<3;i++){
        var ind = "q"+i;
        var question = document.getElementById(ind);
        question.innerHTML = "Question";
        question.setAttribute('class','questionBox');
      }
      return;
    }

    var cat = this.gameState.libraryMap[0];
    var ans = "a"+(Number(this.gameState.libraryMap[1]));

    elaBox.innerHTML = categories[this.gameState.catArray[cat]][ans].answer;
    for(var i=0; i<3; i++){
      var ind = "q"+i;
      var question = document.getElementById(ind);
      var qtext = categories[this.gameState.catArray[cat]][ans][ind];
      question.innerHTML=qtext;
      question.setAttribute('class','questionBox');
    }
  },

  writeCats: function(){
    if(!(this.gameState.catArray.length>0)){
      return;
    }

    var elCategories = document.getElementsByClassName("category");
    for(var k=0; k<4; k++){
      elCategories[k].textContent = categories[this.gameState.catArray[k]].cat;
    }
  },

  writeBoard: function(){
    for(var i=0;i<3;i++){
      for(var j=0;j<4;j++){
        var id = j.toString()+i.toString();
        var elGameBtn = document.getElementById(id);
        elGameBtn.textContent=this.gameState.boardState[i][j];
      }
    }
  },

  checkIfSelected: function(id){
    if(this.gameState[Number(id.charAt(1))][Number(id.charAt(0))]===""){
      window.alert("Already chose this one, please select another.");
      return true;
    }
  },

  checkAnswer: function(){
    var cat = categories[this.gameState.catArray[this.gameState.libraryMap[0]]];
    var ans = "a"+(Number(this.gameState.libraryMap[1]));
    var choiceID = "q"+(Number(this.gameState.libraryMap[2]));

    var points = cat[ans].points;
    var correct;

    if(choiceID == cat[ans].correct){
      correct = true;
    } else {
      points = -(points);
      correct = false;
    }
    this.gameState.userScore += points;
    switchQClass(correct, choiceID);
  },

  checkFinalBoard: function(){
    //reduce game board array of arrays to be able to test for "empty" state.
    var flat = this.gameState.boardState.reduce(function(a, b) {
      return a.concat(b);
      }, []);
    var reduced = flat.reduce(function(a, b) {
      return a + b;
      }, 0);
    if(reduced==0){
      return true;
    } else {
      return false;
    }
  },

  //reset game state to default values (do with prototype?)
  resetGameState: function(){
    this.gameState = {
        userName : "",
        userScore: 0,
        boardState: [[200,200,200,200],
                      [600,600,600,600],
                      [1000,1000,1000,1000]],
        catArray: [],
        libraryMap: [],
        selectedQ: "",
        isJAnswerable: true,
        isJQuestionable: false,
        finalComplete: false
    }
  }

};

//This function calls an attempt to load gameState from local storage and then calls board object functions to write to the game board.
function writeGameBoard(){
  board.loadGameState();
  board.writeUserName();
  board.writeUserScore();
  board.writeCats();
  board.writeBoard();
  board.writeAnswerAndQs();
};

function newUser(){
  board.gameState.userName = prompt("Please enter your name: ");
  board.writeUserName();
};

//handler for new game event: clears local storage, generates new random category array, prompts for new user name, and writes out the gameboard.
function newGame(){
  localStorage.clear();
  board.resetGameState();
  board.genCatArray();
  board.gameState.finalComplete = false;
  newUser();
  writeGameBoard();
};

//Handler for answer select event
function selectAnswer(e){
  //Check for disqualifying game states
  if(board.gameState.finalComplete){
    window.alert("Game over, thank you for playing!");
    board.gameState.isJQuestionable = false;
    return;
  }
  if(board.gameState.isJAnswerable === false){
    window.alert("Please select a question!");
    return;
  }
  var id = e.target.getAttribute('id');

  //Map ans id's to library map in case of page refresh.
  board.gameState.libraryMap=[];
  board.gameState.libraryMap[0]=Number(id.charAt(0));
  board.gameState.libraryMap[1]=Number(id.charAt(1));

  board.writeAnswerAndQs();
  clearBtn(e);

  board.gameState.isJQuestionable=true;
  board.gameState.isJAnswerable=false;
};

//Function to clear game board tiles
function clearBtn(e){
  var id = e.target.getAttribute("id");
  if(id[0]==="c"){
    return;
  }
  e.target.textContent=" ";
  board.gameState.boardState[Number(id.charAt(1))][Number(id.charAt(0))] = "";
  console.log(board.gameState.boardState);
};

//Handler for question select event
function selectQuestion(evt){
  //Check for disqualifying game states
  if(board.gameState.isJQuestionable===false){
    window.alert('Please select an Answer');
    return;
  }
  if(board.gameState.finalComplete){
    window.alert("Game over, thank you for playing!");
    board.gameState.isJQuestionable = false;
    return;
  }

  //extract selected question id and store in map in case of page refresh
	var choiceID = evt.target.getAttribute('id');
  board.gameState.libraryMap[2] = Number(choiceID.charAt(1));

  board.checkAnswer();
  board.gameState.isJAnswerable = true;
  board.gameState.isJQuestionable = false;
  board.writeUserScore();

  //Check if the board is empty to activate end-game state.
  if(board.checkFinalBoard()){
    window.alert("Game over, thank you for playing! Your final score is: "+ board.gameState.userScore);
    board.gameState.finalComplete = true;

    //Not working... why?
    elBtn.removeEventListener('click',function(e){selectAnswer(e)}, false);
    elqList.removeEventListener('click',function(evt) { selectQuestion(evt)}, false);
  }
};

function switchQClass(correct, choiceID){
	var elQuestion = document.getElementById(choiceID);
	if(correct){
		elQuestion.setAttribute("class", "questionCorrect");
	} else {
		elQuestion.setAttribute("class", "questionWrong");
	}
};

function storeState(){
  board.storeGameState();
};


//All event listeners for the window.
window.addEventListener('load', writeGameBoard, false);

window.addEventListener('beforeunload', storeState, false);

var elqList = document.getElementById("qList");
elqList.addEventListener('click', function(evt) { selectQuestion(evt)}, false);

var elBtn = document.getElementById("gameBoard")
elBtn.addEventListener('click', function(e) { selectAnswer(e) }, false);

var elNewGame = document.getElementById("newGame");
elNewGame.addEventListener('click', newGame,false);
