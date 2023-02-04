class GameScore {
    #score = 0
    #set = 0
    #teamName = ""
    static type = ''
    constructor(teamName) {
        this.#teamName = teamName
    }

    getScore() {
        return this.#score
    }

    setScore(newScore) {
        this.#score = newScore
    }

    addScore() {
        this.setScore(this.getScore() + 1)
    }
}

const teamA = new GameScore("A")
const teamB = new GameScore("B")

let yourID = localStorage.getItem("yourID")


document.getElementById("add-1").onclick = (e) => {
    teamA.addScore()
    document.getElementById("score-a").innerHTML = teamA.getScore()

    updateData(yourID, teamA.getScore(), teamB.getScore(), 5, 5, GameScore.type, false)
    // console.log("ok");
}

document.getElementById("add-2").onclick = (e) => {
    teamB.addScore()
    document.getElementById("score-b").innerHTML = teamB.getScore()
    updateData(yourID, teamA.getScore(), teamB.getScore(), 5, 5, GameScore.type, false)
    // console.log("ok");
}

// db.collection.get().then(user => {
//     user.docs.array.forEach(doc => {
//         console.log(dog);
//     });
// })



import { db, addNew, getDataByID, updateData } from './md.js';

console.log(db);
// console.log(dt);

// getDataByID('2XIgg73t1H00xPoPmD60')
async function updateScreen() {
    let dataByID =  await getDataByID(yourID)
    document.getElementById("sport-type").innerText = dataByID["type"]
    document.getElementById("score-a").innerText = dataByID["score-a"]
    document.getElementById("score-b").innerText = dataByID["score-b"]
    teamA.setScore(dataByID['score-a'])
    teamB.setScore(dataByID['score-b'])
    GameScore.type = dataByID["type"]
    // document.getElementById("set-a").innerText = dataByID["set-a"]
    // document.getElementById("set-b").innerText = dataByID["set-b"]
}

await updateScreen()





// document.getElementById("new-bt").onclick = (e) => {
//     console.log("add new");
//     // addNew("VB1", 0, 0, 0, 0, "volleyball", false)
// }

// const newButton = document.getElementById("new-bt");
// newButton.addEventListener("click", function() {
//     console.log("add new");
//   // Your code here
// });


