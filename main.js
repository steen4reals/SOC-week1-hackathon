console.log("hello");

let playerMove = "rock";
let computerMove = "scissors";

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

