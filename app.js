const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

// let v = document.getElementById("score-a");
// console.log(v);

// v.innerHTML = 20;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


// can reset
// can update score
// can detect who win
// can add set 

class GameScore {
  static #setPoint = 21; // default is badminton
  static #numOfSetToWin = 2;

  static setPointByTypeOfSport = {
    'Badminton': 21,
    'Table tennis': 11,
    'Volleyball': 25,
    'Sepak takraw': 21
  }
  

  static #totalScore;

  #score = 0;
  #winSet = 0;

  #teamName;

  

  constructor(teamName) {
    this.setTeamName(teamName);
    this.#score = 0;
    this.#winSet = 0;
  }

  

  getScore() {
    return this.#score;
  }

  setScore(score) {
    this.#score = 0;
  }

  getTeamName() {
    return this.#teamName;
  }

  setTeamName(teamName) {
    this.#teamName = teamName;
  }

  

  static getSetPoint() {
    return GameScore.#setPoint;
  }

  static setSetPoint(setPoint) {
    GameScore.#setPoint = setPoint;
  }

  static getNumOfSetToWin() {
    return GameScore.#numOfSetToWin;
  }

  static setNumOfSetToWin(numOfSetToWin) {
    GameScore.#numOfSetToWin = numOfSetToWin;
  }

  addScore() {
    if (this.#score < GameScore.#setPoint) {
      this.#score += 1;
    } 
    // else if (GameScore.#setPoint == this.getScore()) {
    //   this.addSet();
    // }
    // this.#score += 1;
  }

  subtractScore() {
    if (this.#score > 0) {
      this.#score -= 1;
    }
  }

  addSet() {
    if (this.#winSet < GameScore.#numOfSetToWin) {

      this.#winSet += 1;
    } 
    // else if (this.#winSet == GameScore.#numOfSetToWin) {
    //   // this.#winSet++;
    //   // window.alert("win");
    // }
    // this.setScore(0);

  }

  getWinSet() {
    return this.#winSet;
  }

  setWinSet(winSet) {
    this.#winSet = winSet;
  }

  // static updateScoreAndSet(team) {
  //   document.getElementById().innerText = getScore();
  //   document.getElementById('score-b').innerHTML = getScore();
  // }

  static selectSportAndSetPointToWin(typeOfSport) {
    GameScore.setSetPoint(GameScore.setPointByTypeOfSport[typeOfSport]);
    
  }

  static checkWinner(player1, player2) {
    console.log(player1.getWinSet());
    if (player1.getWinSet() == GameScore.#numOfSetToWin) {
      // player1.addSet();
      // GameScore.updateSet(player1 ,player2);
      console.log("p1 win");
      document.getElementById("sport-type").innerHTML = "The winner is Team A";
      // console.log(document.getElementById("result"));
      console.log("p----1 win");

      
    } else if (player2.getWinSet() == GameScore.#numOfSetToWin) {
      // player2.addSet();
      // GameScore.updateSet(player1 ,player2);
      console.log("p2 win");
      document.getElementById("sport-type").innerHTML = "The winner is Team B";
    }
  }

  static checkForUpdateSet(player1, player2) {
    if (player1.getScore() == GameScore.#setPoint) {
      player1.addSet();
      GameScore.updateSet(player1 ,player2);
      
    } else if (player2.getScore() == GameScore.#setPoint) {
      player2.addSet();
      GameScore.updateSet(player1 ,player2);
    }
    GameScore.checkWinner(player1, player2);
  }

  static updateSet(player1, player2) {
    
    player1.setScore(0);
    player2.setScore(0);
    // document.getElementById('score-a').innerHTML = player1.getScore();
    // document.getElementById('score-b').innerHTML = player2.getScore();

    GameScore.updateScore(player1, player2);
    
    document.getElementById('set-a').innerHTML = player1.getWinSet();
    document.getElementById('set-b').innerHTML = player2.getWinSet();
    
  }

  
  static updateScore(player1, player2) {
    document.getElementById('score-a').innerHTML = player1.getScore();
    document.getElementById('score-b').innerHTML = player2.getScore();
    GameScore.checkForUpdateSet(player1, player2);
  }

  static resetScoreAndSet(player1, player2) {
    player1.setWinSet(0);
    player2.setWinSet(0);
    GameScore.updateSet(player1, player2);
    displayRadioValue();
  }
  

}

class ScorePlayer1 extends GameScore {
  constructor(teamName) {
    // this.setTeamName(teamName);
    super(teamName);
  }
  
}

class ScorePlayer2 extends GameScore {
  constructor(teamName) {
    // this.setTeamName(teamName);
    super(teamName);
  }
}

const teamA = new ScorePlayer1("Team A");
const teamB = new ScorePlayer2("Team B");

console.log(teamA);

function updateScoreAndSet() {
  document.getElementById('score-a').innerHTML = teamA.getScore();
  document.getElementById('score-b').innerHTML = teamB.getScore();
}

function addScoreTeamA() {
  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin())
  {

    teamA.addScore();
    // updateScoreAndSet()
    GameScore.updateScore(teamA, teamB);
  }
  // GameScore.updateScoreAndSet();
  // document.getElementById('score-a').innerText = teamA.getScore()
}

function subtractScoreTeamA() {
  teamA.subtractScore();
  // updateScoreAndSet()
  GameScore.updateScore(teamA, teamB);
}

function addScoreTeamB() {
  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin())
  {

    teamB.addScore();
    // updateScoreAndSet()
    GameScore.updateScore(teamA, teamB);
  }
  
}

function subtractScoreTeamB() {
  teamB.subtractScore();
  // updateScoreAndSet()
  GameScore.updateScore(teamA, teamB);
}

function resetScoreAndSet() {
  // teamA.setScore(0);
  // teamB.setScore(0);
  // updateScoreAndSet();
  // GameScore.updateScoreAndSet();

  GameScore.resetScoreAndSet(teamA, teamB);
  
  
}


function showSelect() {
  let x = document.getElementById("select-sport");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function displayRadioValue() {
  let ele = document.getElementsByName('type-sport');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      {
        document.getElementById("result").innerHTML
                = "Type of sport: "+ele[i].value;
        document.getElementById("sport-type").innerHTML = ele[i].value;
        GameScore.selectSportAndSetPointToWin(ele[i].value);
        GameScore.resetScoreAndSet(teamA, teamB)
        console.log(GameScore.getSetPoint());
      }
  }

  
}

// $(document).ready(function(){
//   $("#flip").click(function(){
//     $("#panel").slideToggle("slow");
//   });
// });

// $(document).ready(function(){
//   $("#flip").click(function(){
//     $("#select-sport").slideToggle("slow");
//   }
//   );
// });
function selectSport() {

  $(document).ready(function(){
    
      $("#select-sport").slideToggle("slow");
  });
}
  
  