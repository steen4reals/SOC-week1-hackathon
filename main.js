console.log("hello");

/*
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
*/
//let computer ="scissors"
//let player = "paper"
function runGame() {

let player = prompt("choose now Rock Paper Scissors");
console.log(player);

let compRand =["paper", "scissors", "rock"];

let computer = compRand[Math.floor(Math.random() * compRand.length)];
console.log(computer);


function getWinner (player, computer) {

    if (player === computer){
        console.log(0);
        return 0;
    }
    if (player === "rock" && computer === "scissors"){
       console.log(1);
        return 1;
    }
    if (player === "paper" && computer === "rock"){
        console.log(1);
        return 1;
    } 
    if (player === "scissors" && computer === "paper"){
        console.log(1);
        return 1;
    }
    if (player === "scissors" && computer === "rock"){
        console.log(-1);
        return -1;
    }
    if (player === "rock" && computer === "paper"){
        console.log(-1);
        return -1;
    }
    if (player === "paper" && computer === "scissors"){
        console.log(-1);
        return -1;
    } 
}
//let result = getWinner(computer, player);
let result = getWinner(player, computer);
console.log(result)

alert(result)
}

/*let count = 0;
while(count < 10) {
    runGame();
    count ++;
}
*/

while() {
    runGame();
    prompt("Want to play again?");
    let answer = prompt("Want to play again?");
    if (answer === "no") {
        break;
    }
}