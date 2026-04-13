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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function determineWinner(humanScore, computerScore){
        const gameResult = document.createElement("p");
        displayResult.appendChild(gameResult);

        if(humanScore > computerScore){
            gameResult.textContent = "You managed to beat the computer!";
        }else{
            gameResult.textContent = "You lost to the computer!";
        }
    }
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        const roundResult = document.createElement("p");
        displayResult.appendChild(roundResult);

        if ((humanChoice == "rock" && computerChoice == "scissors") |(humanChoice == "paper" && computerChoice == "rock") | (humanChoice == "scissors" && computerChoice == "paper")){
            switch (humanChoice) {
                case "rock":
                    roundResult.textContent = "You win! Rock beats Scissors.";
                    break;
                
                case "scissors":
                    roundResult.textContent = "You win! Scissors beats Paper.";
                    break;
                
                case "paper":
                    roundResult.textContent = "You win! Paper beats Rock.";
                    break;
            }
            humanScore += 1;
            displayHumanScore.textContent = "Human: " + humanScore;
        }else{
            switch (computerChoice) {
                case "rock":
                    roundResult.textContent = "You lose! Rock beats Scissors.";
                    break;
                
                case "scissors":
                    roundResult.textContent = "You lose! Scissors beats Paper.";
                    break;
                
                case "paper":
                    roundResult.textContent = "You lose! Paper beats Rock.";
                    break;
            }
            computerScore += 1;
            displayComputerScore.textContent = "Computer: " + computerScore;
        }

        if (humanScore == 5 || computerScore == 5){
            determineWinner(humanScore, computerScore);
        }
    }

    const buttons = document.querySelectorAll("button");
    const displayResult = document.getElementById("displayResult");
    const displayHumanScore = document.getElementById("humanScore");
    const displayComputerScore = document.getElementById("computerScore");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.textContent, getComputerChoice());
        });
    });
}

playGame();