const movesArray = ['rock', 'paper', 'scissors'];

let humanMove = '';
let computerMove = '';

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
        playRound(humanMove, getComputerMove())
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

function playRound(playerMove, computerMove) {
    // getPlayerMoveAndPlayRound()
    console.log(`You choose: ${playerMove}`)
    console.log(`AI choose: ${computerMove}`)
}



// playRound()
getPlayerMoveAndPlayRound()

