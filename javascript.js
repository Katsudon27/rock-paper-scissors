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


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);