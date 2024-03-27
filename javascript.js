function getComputerChoice() {
    let rand = Math.random();
    if (rand < 0.33) {
        return 'rock';
    } else if (rand < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function playRound() {

    let computerSelection = getComputerChoice();
    let playerSelection = (prompt("Please enter your choice")).toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        return `Draw, ${playerSelection} equals ${computerSelection}`;
    }
    switch (playerSelection + computerSelection) {
        case 'rockpaper':
            return 'You Lose! Paper beats Rock';
        case 'paperscissors':
            return 'You Lose! Scissors beats Paper';
        case 'scissorsrock':
            return 'You Lose! Rock beats Scissors';
        case 'rockscissors':
            return 'You Win! Rock beats Scissors';
        case 'scissorspaper':
            return 'You Win! Scissors beats Paper';
        case 'paperrock':
            return 'You Win! Paper beats Rock';
        default:
            return 'Something went wrong. Was your input correct?';
    }
}

function playGame() {

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log("Round " + (i + 1));
        console.log(result);

        if(result.includes("You Win")) {
            userScore++;
            console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
        } else if(result.includes("You Lose")) {
            computerScore++;
            console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
        } else {
            console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
        }

    }

    if(userScore > computerScore) {
        console.log("Congrats you won the GAME")
    } else if(computerScore > userScore) {
        console.log("Lol you lose, sry git gud")
    } else {
        console.log("Draw. Play again?");
    }
}

playGame();