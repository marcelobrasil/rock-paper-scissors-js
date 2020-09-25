/* Function declarations */
function startGame(e){
    const container = e.target.parentElement;

    /* removes game start button */
    container.removeChild(e.target);

    /* creates and adds player selection buttons */
    const rockButton = document.createElement('button')
    const paperButton = document.createElement('button')
    const scissorsButton = document.createElement('button')
    rockButton.setAttribute('id','rock-button');
    rockButton.setAttribute('class','button');
    rockButton.textContent = 'Rock';
    paperButton.setAttribute('id','paper-button');
    paperButton.setAttribute('class','button');
    paperButton.textContent = 'Paper';
    scissorsButton.setAttribute('id','scissors-button');
    scissorsButton.setAttribute('class','button');
    scissorsButton.textContent = 'Scissors';
    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);

    /*  */
    rockButton.addEventListener('click', play);
    paperButton.addEventListener('click', play);
    scissorsButton.addEventListener('click', play);
};

function computerPlay() {
    const value = Math.random() * 100;
    if (value < 33) {return 'rock'}
    else if (33 <= value < 66) {return 'paper'}
    else {return 'scissors'};
};

function play(e){
    messageBoard = document.getElementById('message');
    choice = e.target.textContent;
    choice.toLowerCase;
    computerChoice = computerPlay();
    if (choice === 'Rock') {
        if (computerChoice === 'rock') {
            messageBoard.textContent = "It's a tie!";
        } else if (computerChoice === 'paper') {
            messageBoard.textContent = "You lose! the computer chose paper.";
        } else if (computerChoice === 'scissors'){messageBoard.textContent = "You win!";};
    }
    else if (choice === 'Paper') {
        if (computerChoice === 'paper') {
            messageBoard.textContent = "It's a tie!";
        } else if (computerChoice === 'scissors') {
            messageBoard.textContent = "You lose! the computer chose scissors.";
        } else if (computerChoice === 'rock'){messageBoard.textContent = "You win!";};
    }
    else if (choice === 'Scissors'){
        if (computerChoice === 'scissors') {
            messageBoard.textContent = "It's a tie!";
        } else if (computerChoice === 'rock') {
            messageBoard.textContent = "You lose! the computer chose rock.";
        } else  if (computerChoice === 'paper'){messageBoard.textContent = "You win!";};
    }
}

/* Game */
const playButton = document.getElementById('game-start');
playButton.addEventListener('click', startGame);
