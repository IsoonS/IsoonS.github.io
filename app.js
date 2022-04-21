const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
});


// modal section
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let v = document.getElementById("score-a");
// console.log(v);

// v.innerHTML = 20;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


// can reset
// can update score
// can detect who win
// can add set 

class GameScore {

  static #haveWinner = false;
  static #setPoint = 21; // default is badminton
  static #numOfSetToWin = 2;

  static #sport_name = 'Badminton';

  static setPointByTypeOfSport = {
    'Badminton': 21,
    'Table tennis': 11,
    'Volleyball': 25,
    'Sepak takraw': 21
  }

  static numOfSetToWinByTypeOfSport = {
    'Badminton': 2,
    'Table tennis': 3,
    'Volleyball': 3,
    'Sepak takraw': 2
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
    this.#score = score;
  }

  getTeamName() {
    return this.#teamName;
  }

  setTeamName(teamName) {
    this.#teamName = teamName;
  }



  static getHaveWinner() {
    return GameScore.#haveWinner;
  }

  static setHaveWinner(haveWinner) {
    GameScore.#haveWinner = haveWinner;
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

  static getNumOfSetToWin() {
    return GameScore.#numOfSetToWin;
  }

  static setNumOfSetToWin(numOfSetToWin) {
    GameScore.#numOfSetToWin = numOfSetToWin;
  }

  static setSportName(sportName) {
    GameScore.#sport_name = sportName;
  }

  static getSportName() {
    return GameScore.#sport_name;
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
    GameScore.setNumOfSetToWin(GameScore.numOfSetToWinByTypeOfSport[typeOfSport]);
    console.log("Num of set to win" + GameScore.getNumOfSetToWin());

  }

  static checkWinner(player1, player2) {
    console.log(player1.getWinSet());
    if (player1.getWinSet() == GameScore.#numOfSetToWin) {
      GameScore.#haveWinner = true;
      // player1.addSet();
      // GameScore.updateSet(player1 ,player2);
      console.log("p1 win");
      // document.getElementById("sport-type").innerHTML = "The winner is Team A";
      document.getElementById("sport-type").innerHTML = `The winner is ${teamA.getTeamName()}`;
      // console.log(document.getElementById("result"));
      console.log("p----1 win");
      modal.style.display = "block";
      // document.getElementsByClassName("modal-content")[0].innerHTML = "The winner is Team A";
      // document.getElementById("winnerTeamText").innerHTML = "The winner is Team A";
      document.getElementById("winnerTeamText").innerHTML = `The winner is ${teamA.getTeamName()}`;


    } else if (player2.getWinSet() == GameScore.#numOfSetToWin) {
      GameScore.#haveWinner = true;
      // player2.addSet();
      // GameScore.updateSet(player1 ,player2);
      console.log("p2 win");
      // document.getElementById("sport-type").innerHTML = "The winner is Team B";
      document.getElementById("sport-type").innerHTML = `The winner is ${teamB.getTeamName()}`;
      modal.style.display = "block";
      // document.getElementById("winnerTeamText").innerHTML = "The winner is Team B";
      document.getElementById("winnerTeamText").innerHTML = `The winner is ${teamB.getTeamName()}`;
    }
  }

  static checkForUpdateSet(player1, player2) {

    if (player1.getScore() == GameScore.#setPoint) {
      player1.addSet();
      GameScore.updateSet(player1, player2);

    } else if (player2.getScore() == GameScore.#setPoint) {
      player2.addSet();
      GameScore.updateSet(player1, player2);
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
    if (!GameScore.#haveWinner) {
      GameScore.checkForUpdateSet(player1, player2);
    }
  }

  static resetScoreAndSet(player1, player2) {
    GameScore.#haveWinner = false;
    player1.setWinSet(0);
    player2.setWinSet(0);
    GameScore.updateSet(player1, player2);
    // displayRadioValue();
    let ele = document.getElementsByName('type-sport');
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        console.log(ele[i].value);
        document.getElementById("sport-type").innerHTML = ele[i].value;

      }
    }

  }

  static setInformationInScreen(player1, player2) {

    document.getElementsByClassName("team-name")[0].innerText = player1.getTeamName();
    document.getElementsByClassName("team-name")[1].innerText = player2.getTeamName();
    document.getElementById('score-a').innerHTML = player1.getScore();
    document.getElementById('score-b').innerHTML = player2.getScore();
    document.getElementById('set-a').innerHTML = player1.getWinSet();
    document.getElementById('set-b').innerHTML = player2.getWinSet();
    document.getElementById("sport-type").innerHTML = GameScore.getSportName();
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

// // https://stackoverflow.com/questions/14266730/js-how-to-cache-a-variable

// function setDefaultVariables() {
//   var stored = localStorage['scoreKey'];
//   let dataFromCache;
//   if (stored) {
//     dataFromCache = JSON.parse(stored);
//   }
//   else {
//     // if not have retrieve from php -> from database
//     dataFromCache = "not have";
//   }

//   console.log(dataFromCache);

// }

function sendToPhp(score_a, set_a, score_b, set_b, sport, set_point, num_of_set_to_win) {
  // console.log(str);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  // https://www.google.com/search?q=get+multiple+value+in+php&oq=get+multiple+value+in+php&aqs=chrome..69i57j0i22i30l4j0i390.14066j0j7&sourceid=chrome&ie=UTF-8
  const datas = {
    score_a: score_a,
    set_a: set_a,
    score_b: score_b,
    set_b: set_b,
    sport: sport,
    set_point: set_point,
    num_of_set_to_win: num_of_set_to_win
  }

  let str = "";

  for (const property in datas) {
    console.log(`${property}: ${datas[property]}`);
    str += `${property}=${datas[property]}&`;
  }

  str = str.substring(0, str.length - 1);
  console.log(str);


  // AJAX Request
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "update.php?" + str, true);
  xmlhttp.onload = function () {
    if (this.status == 200) {
      // document.getElementById('output').innerHTML = this.responseText;
      console.log(this.responseText);
    }
  }
  xmlhttp.send();
}

function getFromPhp() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "get_data.php", true);
  xmlhttp.onload = function () {
    if (this.status == 200) {
      // document.getElementById('output').innerHTML = this.responseText;
      console.log(this.responseText);
    }
  }
  xmlhttp.send();
}



// function backUpVariables(score_a, set_a, score_b, set_b, sport, set_point, num_of_set_to_win) {
//   let backUpData = { a: { score: 0, set: 0 }, b: { score: 0, set: 0 }, sport: 'Badminton', set_point: 21, num_of_set_to_win: 2 }; // default
//   backUpData['a']['score'] = score_a;
//   backUpData['a']['set'] = set_a;
//   backUpData['b']['score'] = score_b;
//   backUpData['b']['set'] = set_b;
//   backUpData['sport'] = sport;
//   backUpData['set_point'] = set_point;
//   backUpData['num_of_set_to_win'] = num_of_set_to_win;

//   // console.log(score_a);

//   localStorage['myKey'] = JSON.stringify(backUpData);


// }



// ------------------------------------------------------------------------------

const teamA = new ScorePlayer1("Team A");
const teamB = new ScorePlayer2("Team B");
let milli_second;

// setDefaultVariables();


// console.log(teamA);

// function updateScoreAndSet() {
//   document.getElementById('score-a').innerHTML = teamA.getScore();
//   document.getElementById('score-b').innerHTML = teamB.getScore();
// }

// var IDs = new Array();
//         images['s'] = "Images/Block_01.png";
//         images['g'] = "Images/Block_02.png";
//         images['C'] = "Images/Block_03.png";
//         images['d'] = "Images/Block_04.png";

// https://stackoverflow.com/questions/14266730/js-how-to-cache-a-variable


function setDefaultVariables() {
  var stored = localStorage['scoreKey'];
  let dataFromCache;
  if (stored) {
    dataFromCache = JSON.parse(stored);

    teamA.setTeamName(dataFromCache['team_a']);
    teamA.setScore(dataFromCache['score_a']);
    teamA.setWinSet(dataFromCache['set_a']);

    teamB.setTeamName(dataFromCache['team_b']);
    teamB.setScore(dataFromCache['score_b']);
    teamB.setWinSet(dataFromCache['set_b']);

    GameScore.setSportName(dataFromCache['sport']);
    GameScore.setSetPoint(dataFromCache['set_point']);
    GameScore.setNumOfSetToWin(dataFromCache['num_of_set_to_win']);
    GameScore.setHaveWinner(dataFromCache['have_winner']);
    milli_second = dataFromCache['milli_second'];

    // document.querySelector(`input[value=${dataFromCache['sport']}]`); 
    // console.log(document.querySelector(`input[value=${dataFromCache['sport']}]`));
    console.log(dataFromCache['sport']);

    GameScore.setInformationInScreen(teamA, teamB);

    let ele = document.getElementsByName('type-sport');

    for (i = 0; i < ele.length; i++) {
      if (ele[i].value == dataFromCache['sport']) {
        // https://bobbyhadz.com/blog/javascript-set-radio-to-checked-unchecked#:~:text=To%20set%20a%20radio%20button,same%20name%20attribute%20become%20unchecked.
        ele[i].checked = true;
        GameScore.selectSportAndSetPointToWin(ele[i].value);
        document.getElementById("result").innerHTML
          = "Type of sport: " + ele[i].value + ", Set point: " + GameScore.getSetPoint();
        document.getElementById("sport-type").innerHTML = ele[i].value;
        backUpVariables();
      }
    }
  }
  else {
    dataFromCache = "not have";
    milli_second = 0;
  }


}

setDefaultVariables();

function getDataArray() {
  // array in js can have multiple type 
  const returnArray = [teamA.getTeamName(), teamA.getScore(), teamA.getWinSet(), teamB.getTeamName(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin(), GameScore.getHaveWinner()];
  // console.log(returnArray);
  // console.log(returnArray[0]);
  return returnArray;
}

function backUpVariables() {
  const dataArray = getDataArray();
  let backUpData = {};
  backUpData['team_a'] = dataArray[0]
  backUpData['score_a'] = dataArray[1];
  backUpData['set_a'] = dataArray[2];
  backUpData['team_b'] = dataArray[3];
  backUpData['score_b'] = dataArray[4];
  backUpData['set_b'] = dataArray[5];
  backUpData['sport'] = dataArray[6];
  backUpData['set_point'] = dataArray[7];
  backUpData['num_of_set_to_win'] = dataArray[8];
  backUpData['have_winner'] = dataArray[9];
  backUpData['milli_second'] = milli_second;
  console.log(milli_second);
  localStorage['scoreKey'] = JSON.stringify(backUpData);
  console.log(backUpData);
}


function addScoreTeamA() {
  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin()) {


    teamA.addScore();
    // const data = getDataArray();
    // console.log(typeof(data));
    // console.log(data[0]);
    // backUpVariables(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
    backUpVariables();
    // updateScoreAndSet()
    GameScore.updateScore(teamA, teamB);
  }
  // GameScore.updateScoreAndSet();
  // document.getElementById('score-a').innerText = teamA.getScore()
}

function subtractScoreTeamA() {
  teamA.subtractScore();
  // updateScoreAndSet()
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
  backUpVariables();
  GameScore.updateScore(teamA, teamB);
}

function addScoreTeamB() {
  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin()) {

    teamB.addScore();
    // updateScoreAndSet()
    // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
    backUpVariables();
    GameScore.updateScore(teamA, teamB);
  }

}

function subtractScoreTeamB() {
  teamB.subtractScore();
  // updateScoreAndSet()
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
  backUpVariables();
  GameScore.updateScore(teamA, teamB);
}

function resetScoreAndSet() {
  // teamA.setScore(0);
  // teamB.setScore(0);
  // updateScoreAndSet();
  // GameScore.updateScoreAndSet();
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());

  GameScore.resetScoreAndSet(teamA, teamB);
  backUpVariables();


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

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      GameScore.selectSportAndSetPointToWin(ele[i].value);
      document.getElementById("result").innerHTML
        = "Type of sport: " + ele[i].value + ", Set point: " + GameScore.getSetPoint();
      document.getElementById("sport-type").innerHTML = ele[i].value;
      GameScore.resetScoreAndSet(teamA, teamB)
      // console.log(GameScore.getSetPoint());
      GameScore.setSportName(ele[i].value);
      // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
      backUpVariables();
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

  $(document).ready(function () {

    $("#select-sport").slideToggle("slow");
  });
}

document.getElementsByClassName("team-name")[0].addEventListener("input", function () {
  // console.log("input event fired");
  // console.log(document.getElementsByClassName("team-name")[0].innerText);
  // console.log(document.getElementsByClassName("team-name")[0].innerText);
  let teamName = document.getElementsByClassName("team-name")[0].innerText;
  teamA.setTeamName(teamName);
  backUpVariables();
}, false);
document.getElementsByClassName("team-name")[1].addEventListener("input", function () {
  // console.log("input event fired");
  // console.log(document.getElementsByClassName("team-name")[1].innerText);
  let teamName = document.getElementsByClassName("team-name")[1].innerText;
  teamB.setTeamName(teamName);
  backUpVariables();
  console.log(teamB.getTeamName());
}, false);

function editTeamName() {
  console.log(newTeamName);
  if (team == "a") {
    console.log("change team A");
  } else if (team == "b") {
    console.log("change team B");
  }
}



// https://dev.to/stackfindover/how-to-create-a-stopwatch-in-javascript-57a8
// Stopwatch script
const watch = document.querySelector("#stopwatch");
let dateTimer = new Date(milli_second);
watch.innerHTML = ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
  ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
  ('0' + dateTimer.getUTCSeconds()).slice(-2);
let timer;

function timeStart() {
  watch.style.color = "#002581";
  clearInterval(timer);
  timer = setInterval(() => {
    milli_second += 1000;
    backUpVariables();

    let dateTimer = new Date(milli_second);

    watch.innerHTML =
      ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCSeconds()).slice(-2);
  }, 1000);
}


function timePaused() {
  watch.style.color = "red";
  clearInterval(timer);
}

function timeReset() {
  watch.style.color = "#002581";
  setInterval(timer)
  milli_second = 0;
  watch.innerHTML = "00:00:00";
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.id === 'start') timeStart();
  if (el.id === 'pause') timePaused();
  if (el.id === 'reset') timeReset();
})

// -----------------
function matches() {
  var elem = document.getElementById("addButton1");
  var elem2 = document.getElementById("addButton2");
  var elem3 = document.getElementById("subtractButton1");
  var elem4 = document.getElementById("subtractButton2");
  elem.innerHTML = window.matchMedia("(max-width: 480px)").matches ? "+" : "Add";
  elem2.innerHTML = window.matchMedia("(max-width: 480px)").matches ? "+" : "Add";
  elem3.innerHTML = window.matchMedia("(max-width: 480px)").matches ? "-" : "Subtract";
  elem4.innerHTML = window.matchMedia("(max-width: 480px)").matches ? "-" : "Subtract";
}
window.onresize = function (event) {
  matches();
};
matches();

// ------------------------------
window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("DOMContentLoaded", onLoad, false);

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var canvas,
  ctx,
  w,
  h,
  particles = [],
  probability = 0.04,
  xPoint,
  yPoint;

function onLoad() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();

  window.requestAnimationFrame(updateWorld);
}

function resizeCanvas() {
  if (!!canvas) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight / 10;
  }
}

function updateWorld() {
  update();
  paint();
  window.requestAnimationFrame(updateWorld);
}

function update() {
  if (particles.length < 500 && Math.random() < probability) {
    createFirework();
  }
  var alive = [];
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].move()) {
      alive.push(particles[i]);
    }
  }
  particles = alive;
}

function paint() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw(ctx);
  }
}

function createFirework() {
  xPoint = Math.random() * (w - 200) + 100;
  yPoint = Math.random() * (h - 200) + 100;
  var nFire = Math.random() * 50 + 100;
  var c =
    "rgb(" +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    ")";
  for (var i = 0; i < nFire; i++) {
    var particle = new Particle();
    particle.color = c;
    var vy = Math.sqrt(25 - particle.vx * particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy > 0 ? vy : -vy;
    }
    particles.push(particle);
  }
}

function Particle() {
  this.w = this.h = Math.random() * 4 + 1;

  this.x = xPoint - this.w / 2;
  this.y = yPoint - this.h / 2;

  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;

  this.alpha = Math.random() * 0.5 + 0.5;

  this.color;
}

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= 0.01;
    if (
      this.x <= -this.w ||
      this.x >= screen.width ||
      this.y >= screen.height ||
      this.alpha <= 0
    ) {
      return false;
    }
    return true;
  },
  draw: function (c) {
    c.save();
    c.beginPath();

    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.arc(0, 0, this.w, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;

    c.closePath();
    c.fill();
    c.restore();
  }
};
