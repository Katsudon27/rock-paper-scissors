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
    return(prompt("Enter R for Rock, P for Paper, or S for Scissors: "));
}

let humanScore = 0;
let computerScore = 0;