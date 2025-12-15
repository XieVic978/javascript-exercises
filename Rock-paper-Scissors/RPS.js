

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3)

    if(randomNum == 0 ){
        return 'Rock'
    }
    else if(randomNum == 1 ){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}

function getHumanChoice(){
    const prompt = require('prompt-sync')();

    let userInput = prompt('Play rock paper scissors: Choose either rock, paper, or scissors: ')
    return userInput
}




function playGame(){

    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice){
            
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()

        if(humanChoice === computerChoice){
            console.log(`${humanChoice} ties with ${computerChoice}, it's a tie`)
        }
        else if(humanChoice==='rock' && computerChoice ==='scissors'||
        humanChoice==='paper'&& computerChoice==='rock'||
        humanChoice==='scissors'&&computerChoice==='paper'){
            humanScore+=1
            console.log( `You chose ${humanChoice}. ${humanChoice} beats ${computerChoice}, you Win! Your score: ${humanScore}, Computer's Score: ${computerScore}`)
        }
        else{
            computerScore+=1
            console.log( `Computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}, you Lose! Your score: ${humanScore}, Computer's Score: ${computerScore}`)
        }
    }
    for(let i = 0; i<5; i++){
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        
    }
    if(humanScore>computerScore){
        return `You win with a score of ${humanScore} `
    }
    else if(computerScore>humanScore){
        return `Computer wins with a score of ${computerScore} `
    }
    else{
        return "It's a tie"
    }    
}

//use map, filter, and reduce method

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
array = [1,2,3,4,5,6]  

console.log(sumOfTripledEvens(array))
  
