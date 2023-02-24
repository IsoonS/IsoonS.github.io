import { listAll } from './md.js';

// console.log(await listAll());

async function showData() {
    let dataFromDb = await listAll()
    
    
    
    
    const table = document.createElement("table");
    table.setAttribute("id", "table")
    const headerRow = document.createElement("tr");
    const headers = ["id", "Score A", "Set A", "Score B", "Set B", "Type", "Finished", "Name-A", "Name-B"];
    headers.forEach(header => {
        const th = document.createElement("th");
    
        th.textContent = header;
        th.style.border = "1px solid black";
        th.style.padding = "5px";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    
    
    headerRow.style.border = "1px solid black";
    
    dataFromDb.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let id = doc.id;
        let score_a = doc.data()["score-a"];
        let score_b = doc.data()["score-b"];
        let set_a = doc.data()["set-a"];
        let set_b = doc.data()["set-b"];
        let type = doc.data()["type"];
        let finished = doc.data()["finished"];
        let name_a = doc.data()["name-a"]
        let name_b = doc.data()["name-b"]
        const dataRow = document.createElement("tr");
        
        
        
        const idE = document.createElement("td");
        idE.style.borderRight = "1px solid lightgray";
        idE.style.padding = "5px";
        idE.textContent = id;
        dataRow.appendChild(idE);
        
    
        const scoreA = document.createElement("td");
        scoreA.style.borderRight = "1px solid lightgray";
        scoreA.style.padding = "5px";
        scoreA.textContent = score_a;
        dataRow.appendChild(scoreA);
        console.log(score_a);
    
        const setA = document.createElement("td");
        setA.textContent = set_a;
        dataRow.appendChild(setA);
    
        const scoreB = document.createElement("td");
        scoreB.textContent = score_b;
        dataRow.appendChild(scoreB);
    
        const setB = document.createElement("td");
        setB.textContent = set_b;
        dataRow.appendChild(setB);
    
        const typeE = document.createElement("td");
        typeE.textContent = type;
        dataRow.appendChild(typeE);
    
        const finishedE = document.createElement("td");
        finishedE.textContent = finished;
        dataRow.appendChild(finishedE);

        const nameA = document.createElement("td");
        nameA.textContent = name_a;
        dataRow.appendChild(nameA);

        const nameB = document.createElement("td");
        nameB.textContent = name_b;
        dataRow.appendChild(nameB);
    
        setA.style.borderRight = "1px solid black";
        setA.style.padding = "5px";
    
        scoreB.style.borderRight = "1px solid black";
        scoreB.style.padding = "5px";
    
        setB.style.borderRight = "1px solid black";
        setB.style.padding = "5px";
    
        finishedE.style.borderRight = "1px solid black";
        finishedE.style.padding = "5px";
    
        typeE.style.borderRight = "1px solid black";
        typeE.style.padding = "5px";

        nameA.style.borderRight = "1px solid black";
        nameA.style.padding = "5px";

        nameB.style.borderRight = "1px solid black";
        nameB.style.padding = "5px";
    
        table.appendChild(dataRow);
    
        document.body.appendChild(table);
    });
}




showData()

// window.setInterval(function(){
//     document.getElementById("table").remove()
//     showData()
//   }, 10000);