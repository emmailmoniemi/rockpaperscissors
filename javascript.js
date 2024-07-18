const buttons = document.querySelectorAll("button");
const buttonscont = document.querySelector(".buttonscont");
const playerscoretext = document.querySelector("#playerscore");
const computerscoretext = document.querySelector("#computerscore");
const roundtext = document.querySelector(".roundtext");
const resulttext = document.querySelector("#resultcontainer");
const body = document.querySelector("body");


const endgamecont = document.createElement("div");
endgamecont.classList.add("endgamecont");
endgamecont.setAttribute("style", "font-size: 24px; background: yellow; font-weight: bold");


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



function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    //let playerSelection = (prompt("Please enter your choice")).toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        resulttext.textContent = `Draw, ${playerSelection} equals ${computerSelection}`;
        return 'draw';
    }
    switch (playerSelection + computerSelection) {
        case 'rockpaper':
            console.log('You Lose! Paper beats Rock');
            resulttext.textContent = `You Lose! Paper beats Rock`;
            return 'loss';
        case 'paperscissors':
            resulttext.textContent = `You Lose! Scissors beats Paper`;
            return 'loss';
        case 'scissorsrock':
            resulttext.textContent = `You Lose! Rock beats Scissors`;
            return 'loss';
        case 'rockscissors':
            resulttext.textContent = `You Win! Rock beats Scissors`;
            return 'win';
        case 'scissorspaper':
            resulttext.textContent = `You Win! Scissors beats Paper`;
            return 'win';
        case 'paperrock':
            resulttext.textContent = `You Win! Paper beats Rock`;
            return 'win';
        default:
            console.log('Something went wrong. Was your input correct?');
            return 'draw';
    }
}

function endGame(userScore, computerScore) {

    body.insertBefore(endgamecont, roundtext);
    body.removeChild(buttonscont);

    if(userScore > computerScore) {
        console.log("Congrats you won the GAME");
        endgamecont.textContent = "Congrats you won the GAME";
    } else if(computerScore > userScore) {
        endgamecont.textContent = "Lol you lose, sry git gud";
    } else {
        endgamecont.textContent = "Draw. Play again?";
    }
}

function playGame() {

    let userScore = 0;
    let computerScore = 0;
    let round = 1;

    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", function (e) {
          if(computerScore < 5 && userScore < 5) {
            console.log("Round " + round);
            let result = playRound(e.target.id);
            if(result == 'win') {
                userScore++;
                playerscoretext.textContent = `PLAYER: ${userScore}`;
            } else if(result == "loss") {
                computerScore++;
                computerscoretext.textContent = `COMPUTER: ${computerScore}`;
            } 
            console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
            round++;
            roundtext.firstElementChild.textContent = `ROUND: ${round}`;
        } if(computerScore > 4 || userScore > 4) {
            endGame(userScore, computerScore);
        }
        });
      });


   
}

playGame();