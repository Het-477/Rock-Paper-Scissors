const movesArray = ['rock', 'paper', 'scissors'];

const roundResultText = document.querySelector("#round-result");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const gameResultText = document.querySelector("#game-result");
const movesMenu = document.querySelector("#moves-menu");

let playerMove = '';
let computerMove = '';
let playerScore = 0;
let computerScore = 0;
let roundResult = '';

function handlePlayerMove(e) {
    const move = e.target;

    // Validate the move
    if (!movesArray.includes(move.id)) {
        console.log("Invalid move");
        return;
    }

    // Update the round result and scores
    updateRoundResult();

    // Play a round
    playerMove = move.id;
    playRound(playerMove, getComputerMove());

    // Check if there is a winner and display the game result
    const winner = calculateGameWinner();
    if (winner !== null) {
        displayGameResult();
        movesMenu.removeEventListener("click", handlePlayerMove); // Stop the game
    }
}

function logMoves() {
    console.log(`You choose: ${playerMove}`);
    console.log(`AI choose: ${computerMove}`);
}

function playRound(playerMove, computerMove) {
    logMoves()

    if (playerMove === computerMove) {
        roundResult = "It's a tie";
    } else if (isPlayerWinner(playerMove, computerMove)) {
        roundResult = "You Won!";
        playerScore++;
    } else {
        roundResult = "You Lose. AI won";
        computerScore++;
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerMove() {
    computerMove = movesArray[getRandomInt(0, 2)];
    return computerMove;
}

function isPlayerWinner(playerMove, computerMove) {
    return (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    );
}

function calculateGameWinner() {
    if (playerScore === 5 && computerScore === 5) {
        return "tie";
    }
    if (playerScore === 5) {
        return "player";
    }
    if (computerScore === 5) {
        return "computer";
    }
    return null;
}

function displayGameResult() {
    const winner = calculateGameWinner();

    if (winner === "player") {
        gameResultText.innerHTML = `
        CONGRATULATIONS!!!!!! 🎉🍾🎉🔥🔥
        <br>
        You won the game by ${playerScore} : ${computerScore}.
        `;
    } else if (winner === "computer") {
        gameResultText.innerHTML = `
        YOU LOSE! 
        <br>
        u lost to your own computer by ${computerScore} : ${playerScore} 🤣🤣.
        `;
    } else if (winner === "tie") {
        gameResultText.innerHTML = `
        🤝 IT'S A TIE! 🤝
        <br>
        Both players reached 5 points simultaneously.
        `;
    }
}

function updateRoundResult() {
    roundResultText.textContent = roundResult;
    playerScoreText.textContent = ` ${playerScore} points`;
    computerScoreText.textContent = ` ${computerScore} points`;
}

function playGame() {
    movesMenu.addEventListener("click", handlePlayerMove); // Start listening for moves
}

// Start the game
playGame();
