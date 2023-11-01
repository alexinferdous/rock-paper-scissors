function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    return randomString;
}

function forRock() {
    const computerChoice = getComputerChoice();
    let result;
    if (computerChoice === "rock"){
        result = "It's a Tie!";
    } else if (computerChoice === "paper") {
        result = "You Lose!";
    } else {
        result = "You Win!";
    }
    return result;
}

function forPaper() {
    const computerChoice = getComputerChoice();
    let result;
    if (computerChoice === "paper"){
        result = "It's a Tie!";
    } else if (computerChoice === "scissors") {
        result = "You Lose!";
    } else {
        result = "You Win!";
    }
    return result;
}

function forScissors() {
    const computerChoice = getComputerChoice();
    let result;
    if (computerChoice === "scissors"){
        result = "It's a Tie!";
    } else if (computerChoice === "rock") {
        result = "You Lose!";
    } else {
        result = "You Win!";
    }
    return result;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let loseCount = 0;
let winCount = 0;
let winQuote = "";

function rockClick() {
    if (rockButton.style.backgroundColor === "blue"){
        rockButton.style.backgroundColor = "white";
    } else {
    rockButton.style.backgroundColor = "blue";
    }
    const result = forRock();
    if (result === "You Win!") {
        winCount = winCount + 1;
    } else if (result === "You Lose!") {
        loseCount = loseCount + 1;
    }

    if(winCount === 5){
        winQuote = "You are the winner! Congrats!"
    } else if (loseCount === 5) {
        winQuote = "Computer is the winner. Better luck next time";
    } else {
        winQuote = "";
    }


    const selector = document.getElementById("newDiv");
    const showResult = document.createElement("p");
    showResult.textContent = result + "   Number of Wins: " + winCount + "   Number of Losses: " + loseCount + "   " + winQuote;
    selector.appendChild(showResult);

}

function paperClick() {
    if (paperButton.style.backgroundColor === "blue"){
        paperButton.style.backgroundColor = "white";
    } else {
    paperButton.style.backgroundColor = "blue";
    }
    const result = forPaper();
    if (result === "You Win!") {
        winCount = winCount + 1;
    } else if (result === "You Lose!") {
        loseCount = loseCount + 1;
    }

    if(winCount === 5){
        winQuote = "You are the winner! Congrats!"
    } else if (loseCount === 5) {
        winQuote = "Computer is the winner. Better luck next time";
    } else {
        winQuote = "";
    }


    const selector = document.getElementById("newDiv");
    const showResult = document.createElement("p");
    showResult.textContent = result + "   Number of Wins: " + winCount + "   Number of Losses: " + loseCount + "   " + winQuote;
    selector.appendChild(showResult);

}

function scissorsClick() {
    if (scissorsButton.style.backgroundColor === "blue"){
        scissorsButton.style.backgroundColor = "white";
    } else {
        scissorsButton.style.backgroundColor = "blue";
    }
    const result = forScissors();
    if (result === "You Win!") {
        winCount = winCount + 1;
    } else if (result === "You Lose!") {
        loseCount = loseCount + 1;
    }

    if(winCount === 5){
        winQuote = "You are the winner! Congrats!"
    } else if (loseCount === 5) {
        winQuote = "Computer is the winner. Better luck next time";
    } else {
        winQuote = "";
    }


    const selector = document.getElementById("newDiv");
    const showResult = document.createElement("p");
    showResult.textContent = result + "   Number of Wins: " + winCount + "   Number of Losses: " + loseCount + "   " + winQuote;
    selector.appendChild(showResult);

}

rockButton.addEventListener('click', rockClick);
paperButton.addEventListener('click', paperClick);
scissorsButton.addEventListener('click', scissorsClick);

