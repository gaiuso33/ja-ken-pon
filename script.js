console.log("made you look")
let humanScore=0;
let computerScore=0;
let humanChoice
let computerChoice
playGame()
function playRound(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        console.log(`uh oh, its a draw. the score is ${computerScore}-${humanScore}. Wanna play again?`)
    }
    else if(humanChoice==1 && computerChoice==2){
        computerScore++
        console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
    }
    else if(humanChoice==1 && computerChoice==3){
        humanScore++
        console.log(`human wins, the score is ${computerScore}-${humanScore}.`)
    }else if(humanChoice==2 && computerChoice==1){
        humanScore++
        console.log(`human wins, the score is ${computerScore}-${humanScore}.`)
    }else if(humanChoice==2 && computerChoice==3){
        computerScore++
        console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
    }else if(humanChoice==3 && computerChoice==1){
        computerScore++
        console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
    }else if(humanChoice==3 && computerChoice==2){
        humanScore++
        console.log(`Human wins, the score is ${computerScore}-${humanScore}.`)
    }
}
function playGame(){
    for(let i=0;i<5;i++){        
        const humanSelection = getHumanChoice();
        if(humanSelection==0){
            break
        }
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final score: Computer ${computerScore} - Human ${humanScore}`);
}


function getComputerChoice(){
    function getRandomArbitrary(min, max) {
        computerChoice= Math.floor(Math.random() * (max - min) + min);
        if(computerChoice==1){
            console.log('Computer chooses rock');
        }
        else if(computerChoice==2){
            console.log('Computer chooses paper');
        }
        else{
            console.log('Computer chooses scissors')
        }
        /**/
    }
    getRandomArbitrary(1, 4)    
    return computerChoice

}

function getHumanChoice(){
    humanChoice= parseInt(prompt('Welcome to my Rock-Paper-Scissors game. Enter 1 for rock, 2 for paper, 3 for scissors. Enter 0 to quit'))
    if(humanChoice==1){
        console.log('Human chooses rock');
    }
    else if(humanChoice==2){
        console.log('Human chooses paper');
    }
    else if(humanChoice==3){
        console.log('Human chooses scissors')
    }
    return humanChoice
    /**/
}
