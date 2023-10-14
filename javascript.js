const userSelection2 = prompt("play: ");
const userSelection = userSelection2.toUpperCase();


if (userSelection !== "ROCK" && userSelection !== "PAPER" && userSelection !== "SCISSORS") {
    location.reload();
}


function getComputerChoice() {
    const strings = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    return randomString;
}


function playRound(playerSelection) {
   const computerSelection = getComputerChoice();
    let result;
   if (playerSelection === computerSelection) {
        result = "It's a tie!";
    }

    if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            result = "You win!";
        } else if (computerSelection === "PAPER") {
            result = "You lose!";
        }
    } else if(playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            result = "You win!";
        } else if (computerSelection === "SCISSORS") {
            result = "You lose!";
        }
    } else {
        if (computerSelection === "ROCK") {
            result = "You lose!";
        } else if (computerSelection === "PAPER") {
            result = "You win!";
        }
    }

    return [playerSelection, computerSelection, result];
}


const [op1, op2, op3] = playRound(userSelection);


console.log("You chose: ", op1);
console.log("Computer chose: ", op2);
console.log("Result: ", op3);