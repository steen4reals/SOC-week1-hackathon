console.log("hello");

let playerMove = "rock";
let computerMove = "scissors";


/*
if (playerMove === computerMove){
    console.log("draw")
}

if (playerMove === "rock" && computerMove === "scissors"){
    console.log("Player Wins!")
}

if (playerMove === "paper" && computerMove === "rock"){
    console.log("Player Wins!")
}

if (playerMove === "scissors" && computerMove === "paper"){
    console.log("Player Wins!")
}

if (playerMove === "scissors" && computerMove === "rock"){
    console.log("Computer Wins!")
}

if (playerMove === "rock" && computerMove === "paper"){
    console.log("Computer Wins!")
}

if (playerMove === "paper" && computerMove === "scissors"){
    console.log("Computer Wins!")
}
*/

function getWinner (player, computer) {

    if (player === computer){
        console.log("0")
    }
    
    if (player === "rock" && computer === "scissors"){
        console.log("1")
    }
    
    if (player === "paper" && computer === "rock"){
        console.log("1")
    }
    
    if (player === "scissors" && computer === "paper"){
        console.log("1")
    }
    
    if (player === "scissors" && computer === "rock"){
        console.log("-1")
    }
    
    if (player === "rock" && computer === "paper"){
        console.log("-1")
    }
    
    if (player === "paper" && computer === "scissors"){
        console.log("-1")
    }
    
}