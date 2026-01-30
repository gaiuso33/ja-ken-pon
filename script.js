console.log("made you look")
let humanScore=0;
let computerScore=0;

const game = document.querySelector("#game");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const scores = document.querySelector("#scores");
const winner = document.querySelector("#winner");
const btn_refresh = document.querySelector('.refresh-btn');

let selection = document.querySelector('#selection');

const user = prompt('Welcome, what should I call you?');

const userNameDiv = document.querySelector('#userName');
userNameDiv.innerHTML = 
`<h3>Welcome ${user}, to my rock paper scissors game, 
this website might not look like much yet but i assure you we are bringing improvements to this website</h3>`;

let humanChoice
let computerChoice

const reset_btn = function() {
    human.textContent = "";
    computer.textContent = "";
    winner.textContent = "";
    humanScore=0;
    computerScore=0;
    scores.textContent = ``;
}

function getComputerChoice(){
    const random = Math.trunc((Math.random() * 3) + 1);  
    if (random === 1) return "rock";
    if (random === 2) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "tie";
    const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

    return humanWins ? "human" : "computer";
}

function updateScores() {
    scores.textContent = `Score — ${user}: ${humanScore} | Computer: ${computerScore}`;
}
updateScores(); // show 0 - 0 at start
// ✅ Event delegation: runs every time you click a button
selection.addEventListener("click", (event) => {
const btn = event.target.closest("button");
if (!btn) return;

const humanChoice = btn.id; // rock/paper/scissors
const computerChoice = getComputerChoice();

human.textContent = `${user} chooses ${humanChoice}`;
computer.textContent = `Computer chooses ${computerChoice}`;

const result = playRound(humanChoice, computerChoice);

if (result === "tie") {
    winner.textContent = "It's a tie!";
} else if (result === "human") {
    humanScore++;
    winner.textContent = `${user} wins this round!`;
} else {
    computerScore++;
    winner.textContent = "Computer wins this round!";
}

updateScores();
});

btn_refresh.addEventListener('click', reset_btn());




// function getHumanChoice(){
//     selection.addEventListener('click', (event) => {
//         let target = event.target;
//         if (!target.matches('button')) return;
    
//         switch(target.id) {
//             case 'rock':
//                 human.textContent='Human chooses rock';
//                 break;
//             case 'paper':
//                 human.textContent='Human chooses paper';
//                 break;
//             case 'scissors':
//                 human.textContent='Human chooses scissors';
//                 break;
//         }
//     });        
// }
// humanChoice = getHumanChoice();
// human.textContent=`Computer chooses ${choice}`;
// const choice = getComputerChoice();
// computer.textContent=`Computer chooses ${choice}`;

// humanChoice= parseInt(prompt('Welcome to my Rock-Paper-Scissors game. Enter 1 for rock, 2 for paper, 3 for scissors. Enter 0 to quit'))
    // if(humanChoice==1){
    //     console.log('Human chooses rock');
    // }
    // else if(humanChoice==2){
    //     console.log('Human chooses paper');
    // }
    // else if(humanChoice==3){
    //     console.log('Human chooses scissors')
    // }
    // return humanChoice


// playGame()
// function playRound(humanChoice, computerChoice){
//     if(humanChoice==computerChoice){
//         console.log(`uh oh, its a draw. the score is ${computerScore}-${humanScore}. Wanna play again?`)
//     }
//     else if(humanChoice==1 && computerChoice==2){
//         computerScore++
//         console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
//     }
//     else if(humanChoice==1 && computerChoice==3){
//         humanScore++
//         console.log(`human wins, the score is ${computerScore}-${humanScore}.`)
//     }else if(humanChoice==2 && computerChoice==1){
//         humanScore++
//         console.log(`human wins, the score is ${computerScore}-${humanScore}.`)
//     }else if(humanChoice==2 && computerChoice==3){
//         computerScore++
//         console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
//     }else if(humanChoice==3 && computerChoice==1){
//         computerScore++
//         console.log(`computer wins, the score is ${computerScore}-${humanScore}.`)
//     }else if(humanChoice==3 && computerChoice==2){
//         humanScore++
//         console.log(`Human wins, the score is ${computerScore}-${humanScore}.`)
//     }
// }
// function playGame(){
    

//     console.log(`Final score: Computer ${computerScore} - Human ${humanScore}`);
// }
// for(let i=0;i<5;i++){        
//     const humanSelection = getHumanChoice();
//     if(humanSelection==0){
//         break
//     }
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
// }


/*
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    For now, remove the logic that plays exactly five rounds.

    Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    Add a div for displaying results and change all of your console.logs into DOM methods.
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.



Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.
Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

    Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
    Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
    If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!

Make sure to publish the project on GitHub Pages and add a live preview link in https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
*/