/* Function declarations */

function computerPlay() {
    const play = (Math.random() * 100);
    if (play < 33) {
        return 'rock'
    } else if (33 <= play < 66) {
        return 'paper'
    } else {return 'scissors'}
};

function playRound(playerSelection) {
    playerSelection.toLowerCase();
    const computerSelection = computerPlay()
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return "It's a tie!"
        } else if (computerSelection === 'paper'){
            return "You lose! paper beats rock."
        } else {return "You win! rock beats scissors."};
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return "You win! paper beats rock."
        } else if (computerSelection === 'paper'){
            return "It's a tie!"
        } else {return "You lose! scissors beat paper."};
    } else {
        if (computerSelection === 'rock'){
            return "You lose! rock beats scissors"
        } else if (computerSelection === 'paper'){
            return "You win! scissors beat paper."
        } else {return "It's a tie!"};
    };
};

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i < 6; i++) {
        let playerPlay = prompt();
        let result = playRound(playerPlay);
        if (result.includes('win')) {
            playerCounter++
        } else if (result.includes('lose')) {
            computerCounter++
        };
        console.log(result);
    }
    if (playerCounter > computerCounter) {
        console.log("You're the winner! You scored " + playerCounter + " against " + computerCounter);
    } else if (computerCounter > playerCounter) {
        console.log("You're the loser! You scored " + playerCounter + " against " + computerCounter);
    } else {console.log("This game was a tie! Both you and the computer scored " + playerCounter)}
};

game()