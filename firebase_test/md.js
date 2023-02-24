// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { collection, getDocs, setDoc, doc, addDoc, onSnapshot, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { ref, set, getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXKnPE9I9okdxrLkGLbhE1qPmU85AhUYA",
    authDomain: "scoretracker-c2542.firebaseapp.com",
    projectId: "scoretracker-c2542",
    storageBucket: "scoretracker-c2542.appspot.com",
    messagingSenderId: "325829243254",
    appId: "1:325829243254:web:797f5eb2c12ca604970a57",
    measurementId: "G-V052LXBEDY",
    databaseURL: "https://scoretracker-c2542-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);


// db.collection.get().then(user => {
//     user.docs.array.forEach(doc => {
//         console.log(dog);
//     });
// })
console.log("ok");

export async function listAll() {
    const querySnapshot = await getDocs(collection(db, "record"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot;
}

export async function addNew(id, score_a, score_b, set_a, set_b, type, finished, teamNameA="Team A", teamNameB = "Team B") {
    // // Add a new document in collection "cities"
    // // await setDoc(doc(db, "record", id), {
    // //     "score-a": score_a,
    // //     "set-a": set_a,
    // //     "score-b": score_b,
    // //     "set_b": set_b,
    // //     "type": type,
    // //     "finished": finished
    // // });
    // const recordRef = db.collection("record").doc();
    // const recordID = recordRef.id;
    // await recordRef.set({
    //     "score-a": score_a,
    //     "set-a": set_a,
    //     "score-b": score_b,
    //     "set_b": set_b,
    //     "type": type,
    //     "finished": finished
    // });

    // const res = await db.collection('record').add({
    //     "score-a": score_a,
    //     "set-a": set_a,
    //     "score-b": score_b,
    //     "set_b": set_b,
    //     "type": type,
    //     "finished": finished
    // });

    await addDoc(collection(db, "record"), {
        "score-a": score_a,
        "set-a": set_a,
        "score-b": score_b,
        "set-b": set_b,
        "type": type,
        "finished": finished,
        "name-a": teamNameA,
        "name-b": teamNameB
    });
}
// let dt = 'ok'

// export const unsub = onSnapshot(doc(db, "record", "ijSe5pbrQrus3ErOsDMH"), (doc) => {
//     console.log("Current data: ", doc.data());
// });



// // // change realtime
// export function getRealtime() {
//     let yourID = localStorage.getItem("yourID")
//     onSnapshot(doc(db, "record", yourID), (doc) => {
//         console.log("Current data: ", doc.data());
//         document.getElementById("score-a").innerHTML = doc.data()['score-a']
//         document.getElementById("score-b").innerHTML = doc.data()['score-b']
//     });
// }
// // // 

export async function getDataByID(yourID) {
    const docRef = doc(db, "record", yourID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    return docSnap.data()

}

export async function updateData(id, score_a, score_b, set_a, set_b, type, isFinished) {
    // let db = getDatabase();
    // set(ref(db, '/record/' + id), {
    //     "score-a": score_a,
    //     "set-a": set_a,
    //     "score-b": score_b,
    //     "set-b": set_b,
    //     "type": type,
    //     "finished": finished
    // });
    // const cityRef = db.collection('record').doc(id);
    // console.log(cityRef);
    // await cityRef.update({
    //         "score-a": score_a,
    //         "set-a": set_a,
    //         "score-b": score_b,
    //         "set-b": set_b,
    //         "type": type,
    //         "finished": finished
    //     });

    // // is id exist.
    // ref.child("record").orderByChild("ID").equalTo(id).once("value",snapshot => {
    //     if (snapshot.exists()){
    //       const userData = snapshot.val();
    //       console.log("exists!", userData);
    //     }
    // });


    if(getDataByID(id))
    {

        const frankDocRef = doc(db, "record", id);
        await setDoc(frankDocRef, {
            "score-a": score_a,
            "set-a": set_a,
            "score-b": score_b,
            "set-b": set_b,
            "type": type,
            "finished": isFinished
        });

    } else {
        alert("Please check your ID")
    }


    // // To update age and favorite color:
    // await updateDoc(frankDocRef, {
    //     "age": 13,
    //     "favorites.color": "Red"
    // });


}



// await update('g', 5, 5, 5, 5, "pingpong", true)

// listAll()



