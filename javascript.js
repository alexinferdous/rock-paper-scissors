function getUserInput() {
    const userSelection2 = prompt("play: ");
    const userSelection3 = userSelection2.toUpperCase();
    let userSelection4;

    if (userSelection3 === "ROCK" || userSelection3 === "PAPER" || userSelection3 === "SCISSORS") {
        userSelection4 = userSelection3;
    } else if (userSelection3 !== "ROCK" && userSelection3 !== "PAPER" && userSelection3 !== "SCISSORS") {
        alert("Please choose anyone from rock/paper/scissors")
        const userSelection2 = prompt("play: ");
        userSelection4 = userSelection2.toUpperCase();
        
    }
    console.log(userSelection4);
    return userSelection4;

}

const userSelection = getUserInput();

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