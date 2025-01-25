const movesArray = ['rock', 'paper', 'scissors'];

const roundResultText = document.querySelector("#round-result");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

let humanMove = '';
let computerMove = '';
let playerScore = 0;
let computerScore = 0;
let roundResult = '';

updateRoundResult()

function getPlayerMoveAndPlayRound() {
    let movesMenu = document.querySelector("#moves-menu");

    movesMenu.addEventListener("click", (e) => {
        let move = e.target;

        switch (move.id) {
            case 'rock':
                humanMove = 'rock';
                break;

            case 'paper':
                humanMove = 'paper';
                break;

            case 'scissors':
                humanMove = 'scissors';
                break;

            default:
                console.log('Invalid move');
        }
        // plays a single round
        playRound(humanMove, getComputerMove())

        // updates the round's score after each round
        updateRoundResult();
    });
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

// for debugging purposes
function logRoundScore(playerScore, computerScore) {
    console.log(`Your score: ${playerScore}`)
    console.log(`AI score: ${computerScore}`)
}

function playRound(playerMove, computerMove) {
    // getPlayerMoveAndPlayRound()
    console.log(`You choose: ${playerMove}`)
    console.log(`AI choose: ${computerMove}`)

    if (playerMove === computerMove) {
        roundResult = 'Its a tie'
        console.log(roundResult);
        logRoundScore(playerScore, computerScore)
    }
    if (isPlayerWinner(playerMove, computerMove)) {
        roundResult = `You Won!`;
        console.log(roundResult);
        playerScore++;
        logRoundScore(playerScore, computerScore)
    }
    if (isComputerWinner(playerMove, computerMove)) {
        roundResult = 'You Lose. AI won';
        console.log(roundResult);
        computerScore++;
        logRoundScore(playerScore, computerScore)
    }
}

function isPlayerWinner(playerMove, computerMove) {
    if (playerMove === 'rock' && computerMove === 'scissors'
        || playerMove === 'paper' && computerMove === 'rock'
        || playerMove === 'scissors' && computerMove === 'paper') {
        return true
    }
}

function isComputerWinner(playerMove, computerMove) {
    if (computerMove === 'rock' && playerMove === 'scissors'
        || computerMove === 'paper' && playerMove === 'rock'
        || computerMove === 'scissors' && playerMove === 'paper') {
        return true;
    }
}

function updateRoundResult() {
    roundResultText.textContent = roundResult;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

getPlayerMoveAndPlayRound()
// updateRoundResult()

