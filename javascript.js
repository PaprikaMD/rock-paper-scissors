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
        return `It's a tie! You both picked ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}!`
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper') return 'You lose! Paper beats Rock';
        else if(computerSelection === 'scissors') return 'You win! Rock beats Scissors!';
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock') return 'You win! Paper beats Rock!';
        else if(computerSelection === 'scissors') return 'You lose! Scissors beats Paper!';
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock') return 'You lose! Rock beats Scissors!';
        else if(computerSelection === 'paper') return 'You win! Scissors beats Paper!';
    }
    return 'Oops, an invalid selection was made.';
}

for(let i = 0; i < 50; i++){
    let play1 = computerPlay();
    let play2 = computerPlay();
    console.log(play1 +' vs ' + play2);
    console.log(playRound(play1,play2));
}