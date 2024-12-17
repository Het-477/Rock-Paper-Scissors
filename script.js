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
    // console.log(checkValidMove(move))
    return move;
}

function checkValidMove(move) {
    return movesArray.includes(move);
}



console.log(playRound());
// getHumanChoice()

