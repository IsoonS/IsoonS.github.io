import { db } from './md.js';
import { collection, getDocs, setDoc, doc, addDoc, onSnapshot, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


// getRealtime()
// change realtime
export function getRealtime() {
    let yourID = localStorage.getItem("yourID")
    console.log(yourID);
    onSnapshot(doc(db, "record", yourID), (doc) => {
        console.log("Current data: ", doc.data());
        document.getElementById("score-a").innerHTML = doc.data()['score-a']
        document.getElementById("score-b").innerHTML = doc.data()['score-b']
    });
}
getRealtime()
// 
