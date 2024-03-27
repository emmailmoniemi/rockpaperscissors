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

function playOneRound() {


    let computerSelection = getComputerChoice();
    let playerSelection = (prompt("Please enter your choice")).toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        return `Draw, ${playerSelection} equals ${computerSelection}`;
    }
    switch (playerSelection, computerSelection) {
        case 'rock', 'paper':
            return 'You Lose! Paper beats Rock';
        case 'paper', 'scissors':
            return 'You Lose! Scissors beats Paper';
        case 'scissors', 'rock':
            return 'You Lose! Rock beats Scissors';
        case 'rock', 'scissors':
            return 'You Win! Rock beats Scissors';
        case 'scissors', 'paper':
            return 'You Win! Scissors beats Paper';
        case 'paper', 'rock':
            return 'You Win! Paper beats Rock';
        default:
            return 'Something went wrong. Was your input correct?';
    }
}

console.log(playOneRound());