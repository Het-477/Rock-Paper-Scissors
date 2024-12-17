const movesArray = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    const move = movesArray[getRandomIntInclusive(0, 2)];
    return move;
}

function getHumanChoice() {
    const move = prompt(`enter rock, paper, or scissors.\nenter "stop" to stop the game`).toLowerCase();
    // console.log(isValidMove(move))
    return move;
}

function isValidMove(move) {
    return movesArray.includes(move);
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (computerChoice === humanChoice) {
        return `Its a Tie, ${humanChoice} can't beat ${computerChoice}.`;
    }
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    // console.log(humanChoice)
    // console.log(computerChoice)
}



console.log(playRound());
// getHumanChoice()

