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
    const move = prompt(`enter rock, paper, or scissors.\npress F12 on your keyboard to see the game status\nenter "stop" to stop the game`);
    if (move === null || move.trim() === "") return "stop";
    const trimmedMove = move.trim().toLowerCase();
    if (trimmedMove === "stop") return "stop";
    if (isValidMove(trimmedMove)) {
        return trimmedMove
    } else {
        alert(`${trimmedMove} is not a valid move`);
        console.log(`Enter one of these moves: ${movesArray}`);
    }
}

// Checks if the move is valid or not
function isValidMove(move) {
    return movesArray.includes(move);
}

// Determines the winner of each round
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

// Plays a single round of the game
function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === "stop") return `Game stopped by the user.`;

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

function displayGameResult() {
    console.log(`~~Final result~~  
        \nPlayer: ${humanScore}  
        \nComputer: ${computerScore}`);

    if (computerScore > humanScore) {
        console.log(`You lose, computer won by ${computerScore} : ${humanScore}`);
    } else if (humanScore === computerScore) {
        console.log(`Its a Tie! try next time.`);
    } else {
        console.log(`Congratulations! you won by ${humanScore} : ${computerScore}`);
    }
}

function playGame() {
    console.log(`Welcome to the game of Rock, Paper, Scissors!`);

    // Game loop which will play 5 rounds 
    for (let round = 1; round <= 5; round++) {
        console.log(`Round: ${round}`);
        const gameResult = playRound();
        console.log(gameResult);

        if (gameResult === "Game stopped by the user.") break;

        console.log(`Player score: ${humanScore} - Computer score: ${computerScore}`);
    }

    displayGameResult();
}

playGame();

