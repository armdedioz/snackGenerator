const snackArray = ["Chips","Cookies","Bread","Crackers","Ice Cream"];

const snackButton = document.getElementById("snack-btn");
const snackOutput = document.getElementById("snack-box");
const resetButton = document.getElementById("reset-btn");
const snackList = document.getElementById("snack-list");
const heroImg = document.getElementById("hero-img");


const snackImages = {
    "Chips": "imgs/chips.jpg",
    "Cookies": "imgs/cookies.png", 
    "Bread": "imgs/bread.jpeg",
    "Crackers": "imgs/crackers.png", 
    "Ice Cream": "imgs/ice cream.jpg"
};
//pressing snack button
snackButton.addEventListener("click", function(){
const randomIndex = Math.floor(Math.random() * snackArray.length);
const randomSnack = snackArray[randomIndex];


//check for duplicates
let found = false;
for(let i = 0; i < snackList.children.length; i++){
    const li = snackList.children[i];
    if(li.textContent === randomSnack){
        found = true;
        break;
    }
}
//append array element to list
if (!found){
const li = document.createElement("li");
li.textContent = randomSnack;
snackList.appendChild(li);
}
//changes the placeholder
const url = snackImages[randomSnack] || "imgs/placeholder.png";
heroImg.src = url;
heroImg.alt = randomSnack;

});
resetButton.addEventListener("click", function(){
snackList.innerHTML = "";
heroImg.src = "imgs/placeholder.png";
heroImg.alt = "No snack yet";

});
snackList.addEventListener("click",function(){
if(event.target.tagName === "LI"){
    const clickedSnack = event.target.textContent;
    const url = snackImages[clickedSnack];
    heroImg.src = url;
    heroImg.alt = clickedSnack;
}
});