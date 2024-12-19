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
    const move = prompt(`enter rock, paper, or scissors.\nenter "stop" to stop the game`);
    if (move === null) return "stop";
    const trimmedMove = move.trim().toLowerCase();
    if (trimmedMove === "stop") return "stop";
    if (isValidMove(trimmedMove)) {
        return trimmedMove
    } else alert(`${trimmedMove} s not a valid move`)
}

function isValidMove(move) {
    return movesArray.includes(move);
}

function isComputerWinner(computerChoice, humanChoice) {
    if (computerChoice === 'rock' && humanChoice === 'scissors'
        || computerChoice === 'paper' && humanChoice === 'rock'
        || computerChoice === 'scissors' && humanChoice === 'paper') {
        return true;
    }
}

function isHumanWinner(computerChoice, humanChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper') {
        return true
    }
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(`Your move: ${humanChoice} \nComputer's move: ${computerChoice}`);

    if (computerChoice === humanChoice) {
        return `Its a Tie, ${humanChoice} can't beat ${computerChoice}.`;
    }
    if (isComputerWinner(computerChoice, humanChoice)) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    if (isHumanWinner(computerChoice, humanChoice)) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
}

function playGame() {
    const game = playRound();
    for (let round = 1; round < 5; round++) {
        playRound();
        game();
    }
}

console.log(playRound());
// console.log(playGame())
// getHumanChoice()
// console.log(playGame());
// playGame();


