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
    return string.length>0 ? string[0].toUpperCase() + string.slice(1).toLowerCase() : 'empty string';
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    console.log("Let's play a game! First to 3 wins");
    while((playerWins<3) && (computerWins < 3)){
        let playerSelection = cleanText(prompt('Enter your play: '));
        computerSelection = computerPlay();
        console.log(`Computer chooses ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if(result === 1){
            playerWins++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        } else if (result === -1){
            computerWins++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        } else if (result === 0){
            console.log(`It's a tie! You both picked ${playerSelection}`);
        }
        console.log(`Score is \nPlayer: ${playerWins}\nComputer: ${computerWins}`);
    }
    if(playerWins === 3) console.log('Game over! You win!');
    else console.log('Game over, the computer wins!');
}

game();