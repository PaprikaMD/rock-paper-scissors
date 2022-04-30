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

function game() {
    
}