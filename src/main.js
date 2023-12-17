
let guessHistory = [];
let correctNumber =getRandomNumber(); 


window.onload = function() {
    document.getElementById("guess-button").addEventListener("click",playgame);
    document.getElementById("reset-button").addEventListener("click",initGame);
   
}

function getRandomNumber() { 
    return Math.floor(Math.random() * 100) + 1;
}


function saveGuessHistory(guess) {  
    guessHistory.push(guess); 
    console.log(guessHistory);
}

function playgame() {
    let numberGuess = document.getElementById("guess-number").value;
    if(numberGuess < 1 || numberGuess > 100 || isNaN(numberGuess)) {
    alert("Please enter a number between 1 and 100!");
    }
    else {
    displayResult( numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
    }
}
function displayResult(numberGuess){
    if (numberGuess > correctNumber) {
        showNumberAbove();
    }
    else if (numberGuess < correctNumber) {
        showNumberBelow();
    }
    else {
        showYouWon();         
    }
   
}

function initGame() {
    resetResult();
}

function resetResult(){
    document.getElementById("result-div").innerHTML = "";
    document.getElementById("history").innerHTML = "";
    guessHistory = [];
    correctNumber = getRandomNumber();

}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='border-solid rounded-lg p-2 w-1/2 text-center text-yellow-500  bg-yellow-100 font-bold'   role='alert'>";
            break;
        case "won":
            dialog = "<div class=' border-solid rounded-lg p-2 w-1/2 text-center text-green-500  bg-green-100 font-bold' role='alert'>";
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}



function showYouWon(){
const text = "Awesome job, you got it!"
let dialog = getDialog("won", text);
document.getElementById("result-div").innerHTML = dialog;


}

function showNumberAbove(){
const text = "Your guess is too high!"
let dialog = getDialog("warning", text);
document.getElementById("result-div").innerHTML = dialog;
}

function showNumberBelow(){
const text = "Your guess is too low!"
let dialog = getDialog("warning", text);
document.getElementById("result-div").innerHTML = dialog;
}

function displayHistory() {
    let index = guessHistory.length - 1; 
    let list = "<ul class = 'w-3/4   p-4 '>";
    while(index >= 0) {
        list += "<li class='border-solid border-2 rounded-lg border-black p-4 text-center text-black  bg-white font-bold'>" + "You guessed " + guessHistory[index] + "</li>";
        index -= 1;
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}

