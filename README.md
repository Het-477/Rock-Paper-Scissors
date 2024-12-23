# Rock-Paper-Scissors

Welcome to the Rock-Paper-Scissors game! This is a simple implementation of our childhood game where you play against the computer. This game project is the part of the Odin Project curriculum where we learn by building and doing, However this project has its flaws in terms of its code quality and its implementation but they will corrected as i learn.

## Technologies used:

- HTML

  - Used to link js file to the webpage.

- JavaScript
  - Used to build the main logic behind the game.

Anyways, this was the first time i've built a rock, paper, scissors game and learned a lot form it.

## Pseudocode for this project:

- The player will be playing against computer. so we need to make a function which returns string of "rock", "paper", "scissors" randomly. This function will be named `getComputerChoice`, it will use `Math.random` function and array of these three words to return the string present in the array by the index which returned by the `Math.random` function.
- The player will input his/her move with the help of `prompt` which will be case-insensitive while taking inputs such as: "RoCk" "ROCk" or "rocK". if the player enters an incorrect move or has a typo in his move such as: "rack" "rick" then the browser will throw an alert and the player will have to reenter his move. this logic will be written in a `while` loop which only stops when player enters "stop" in the `prompt`. This function will be called `getHumanChoice`.
- The program will keep track of scores of both player and computer, for this two new variables will be created `humanScore` and `computerScore` to keep track of score. **those variables will be initialized with 0**.
- The game will be played round by round. we will create a function named `playRound` which takes `humanChoice` and `computeChoice` as arguments, plays a single round, increments the rounds winner score and logs it onto the console.
