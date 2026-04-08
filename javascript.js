function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 0.33){
        return("rock");
    }else if (randomNumber >= 0.33 && randomNumber < 0.66){
        return("paper");
    }else{
        return("scissors");
    }
}

function getHumanChoice(){
    return(prompt("Enter Rock, Paper, or Scissors: "));
}

function determineWinner(humanScore, computerScore){
    if(humanScore > computerScore){
        console.log("You managed to beat the computer!");
    }else{
        console.log("You lost to the computer!");
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if ((humanChoice == "rock" && computerChoice == "scissors") |(humanChoice == "paper" && computerChoice == "rock") | (humanChoice == "scissors" && computerChoice == "paper")){
            switch (humanChoice) {
                case "rock":
                    console.log("You win! Rock beats Scissors.");
                    break;
                
                case "scissors":
                    console.log("You win! Scissors beats Paper.");
                    break;
                
                case "paper":
                    console.log("You win! Paper beats Rock.");
                    break;
            }
            humanScore += 1;
        }else{
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors.");
                    break;
                
                case "scissors":
                    console.log("You lose! Scissors beats Paper.");
                    break;
                
                case "paper":
                    console.log("You lose! Paper beats Rock.");
                    break;
            }
            computerScore += 1;
        }
    }

    const computerSelection = getComputerChoice();

    const body = document.querySelector("body");

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";

    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scissorsButton);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.textContent, computerSelection);
        });
    });

    const displayResult = document.createElement("div");

    const currentScore = document.createElement("p");
    currentScore.textContent = "Current Score";

    const displayPlayerScore = document.createElement("p");
    displayPlayerScore.textContent = "Human player: " + humanScore;

    const displayComputerScore = document.createElement("p");
    displayComputerScore.textContent = "Computer: " + humanScore;

    displayResult.appendChild(currentScore);
    displayResult.appendChild(displayPlayerScore);
    displayResult.appendChild(displayComputerScore);

    determineWinner(humanScore, computerScore);
}

playGame();