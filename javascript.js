function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    switch(rand){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 0;
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper') return -1;
        else if(computerSelection === 'scissors') return 1;
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock') return 1;
        else if(computerSelection === 'scissors') return -1;
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock') return -1;
        else if(computerSelection === 'paper') return 1;
    }
    console.log('Oops, an invalid selection was made. Try again');
    return 0;
}

function cleanText(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    console.log("Let's play a game! First to 3 wins");
    while((playerWins<3) && (computerWins < 3)){
        let playerSelection = cleanText(prompt('Enter your play: '));
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result === 1){
            playerWins++;
            alert(`You win! ${playerSelection} beats ${computerSelection}!`);
        } else if (result === -1){
            computerWins++;
            alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
        } else if (result === 0){
            alert(`It's a tie! You both picked ${playerSelection}`);
        }
    }
}