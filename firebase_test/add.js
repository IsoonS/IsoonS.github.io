import { addNew } from './md.js';


document.getElementById("new-bt").addEventListener("click", function () {
  console.log("add new");
  let e = document.getElementById("type-s");
  let value = e.value;
  let typeOfSport = e.options[e.selectedIndex].text;

  let nameA = document.getElementById("team-a").value
  let nameB = document.getElementById("team-b").value


  addNew("", 0, 0, 0, 0, typeOfSport, false, nameA, nameB)
  document.getElementById("new-bt").disabled = true;


  var buttonEl = document.createElement("button");
  buttonEl.innerText = "show new button"
	buttonEl.onclick = () => {
    document.getElementById("new-bt").disabled = false;
  }
  // document.getElementsByClassName("container")[0].appendChild(document.createElement("br"));
  let k = document.getElementById("container-1");
  // console.log(k);
  k.appendChild(document.createElement("br"));
  k.appendChild(buttonEl);
  // Your code here
});
