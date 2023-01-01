let computerChoice
function getComputerChoice(){
    const randomNum = (Math.trunc(Math.random() * 3 + 1))
    if(randomNum = 1){
        computerChoice = "rock"
    }else if(randomNum = 2){
        computerChoice = "paper"
    }else{
        computerChoice = "scissor"
    }
    console.log(computerChoice)
}
console.log(getComputerChoice)

function playRound(playerSelection,computerSelection){

}

const playerSelection = "rock" 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))