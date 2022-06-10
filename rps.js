function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function playRound(userChoice, compChoice) {
    userChoice = userChoice.toLowerCase();
    successMsg = "You win!" + " " + userChoice + " beats " + compChoice; 
    failMsg = "You lose!" + " " + compChoice + " beats " + userChoice; 
    tieMsg = "Tie! You and the computer both picked " + userChoice;

    if (userChoice == "rock" && compChoice == "scissors") {
        return successMsg;
    } else if (userChoice == "paper" && compChoice == "rock") {
        return successMsg;
    } else if (userChoice == "scissors" && compChoice == "paper") {
        return successMsg;
    }

    if (userChoice == "rock" && compChoice == "paper") {
        return failMsg;
    } else if (userChoice == "paper" && compChoice == "scissors") {
        return failMsg;
    } else if (userChoice == "scissors" && compChoice == "rock") {
        return failMsg;
    }

    if (userChoice == compChoice) {
        return tieMsg;
    }
}

function validateInput(playerChoice) {
    while (playerChoice != "rock" &&
           playerChoice != "paper" &&
           playerChoice != "scissors") {
               playerChoice = prompt("Unrecognized input. Try again");
           }

    return playerChoice;
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        // Prompt user for input
        let playerChoice = prompt("Rock, paper, or scissors...: ");
        playerChoice = validateInput(playerChoice); // Validate user input
        let result = playRound(playerChoice, computerPlay());

        // Tally wins and losses
        if (result.charAt(5) == 'w') {
            userScore++;
        } else {
            compScore++;
        }

        console.log(playRound(playerChoice, computerPlay()) + "\n");
    }

    if (userScore > compScore) {
        console.log("Congradulations! You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

game();