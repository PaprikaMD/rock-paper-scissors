function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.style.backgroundColor = 'black')
    switch(rand){
        case 0: buttons[0].style.backgroundColor = 'rgb(60, 0, 0)';
        return 'Rock';
        case 1: buttons[1].style.backgroundColor = 'rgb(60, 0, 0)';
        return 'Paper';
        case 2: buttons[2].style.backgroundColor = 'rgb(60, 0, 0)';
        return 'Scissors';
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

function updatePage(result){
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let message = document.querySelector('.message');
    if(result === 1){
        playerScore.textContent++;
        message.textContent = 'Player wins!';
    }
    if(result === -1){
        computerScore.textContent++;
        message.textContent = 'Computer wins!';
    }
    if(result === 0){
        message.textContent = 'It\'s a tie!';
    }
    if(playerScore.textContent == 5){
        document.querySelector('.winner').textContent = 'PLAYER WINS!';
        return true;
    }
    if(computerScore.textContent == 5){
        document.querySelector('.winner').textContent = 'COMPUTER WINS!';
        return true;
    }
    return false;
}

function game() {
    const buttons = document.querySelectorAll('button');
    let gameOver = false;
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let result = playRound(button.id, computerPlay());
            gameOver = updatePage(result);
        })
    })
}

game();