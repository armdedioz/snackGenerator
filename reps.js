const snackArray = ["Chips","Cookies","Bread","Crackers","Ice Cream"];

const snackButton = document.getElementById("snack-btn");
const snackOutput = document.getElementById("snack-box");
const resetButton = document.getElementById("reset-btn");
const snackList = document.getElementById("snack-list");

snackButton.addEventListener("click", function(){
const randomIndex = Math.floor(Math.random() * snackArray.length);
const randomSnack = snackArray[randomIndex];

let found = false;
for(let i = 0; i < snackList.children.length; i++){
    const li = snackList.children[i];
    if(li.textContent === randomSnack){
        found = true;
        break;
    }
}

if (!found){
const li = document.createElement("li");
li.textContent = randomSnack;
snackList.appendChild(li);
}

});
resetButton.addEventListener("click", function(){
snackList.innerHTML = "";
});