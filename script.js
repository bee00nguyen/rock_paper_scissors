let selection = prompt("Please choose rock, paper, or scissors!")

console.log("you chose " + selection);

let choice = ["rock","paper","scissors"];
function computerPlay (placeholder){
   return (placeholder[Math.floor(Math.random()*placeholder.length)]);
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper"){
        return ("you lose! paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock")
    {
        return ("you win! papper beats rock");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return ("you win! rock beats scissors");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return ("you lose! rock beats scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return ("you lose! scissors beats paper");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return ("you win! scissors beats paper");
    }
    else {
        return ("you got the same thing! choose again");
    }
}


let computerSelection = computerPlay(choice);

console.log("the computer chose " + computerSelection);

//console.log(playRound(selection,computerSelection));

function game(i) {
    for (let i = 0; i < 5; i++){
        playRound(selection,computerSelection);
    }   
    return i;
    
}

console.log(game(playRound(selection,computerSelection)));

