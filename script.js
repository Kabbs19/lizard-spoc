
// Step 4 from TOP

let humanScore = 0;
let computerScore =0;

//Step 2 from TOP

function getComputerChoice() {

  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    //"if" checks if something is true
    return "rock";
  } else if (randomNumber < 0.66) {
    //"else if" checks if previous is false
    return "paper";
  } else {
    //""else" checks if no other condition before is matched
    return "scissors";
    //"return" gives value back from function
  }
}

// Step 3 from TOP

function getHumanChoice() {

  let userInput = prompt("Type Rock, Paper or Scissors");

  return userInput.toLowerCase();
}

// Step 5 from the OP

function playRound(humanChoice, computerChoice) {
 
  humanChoice = humanChoice.toLowerCase(); // toLowerCase will change all answers to lowercase. For example, if a user inserts "Rock" it will be changed to "rock"

  if (humanChoice === computerChoice) { // === means values must be exactly equal
    console.log("It's a tie! You both chose " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || // && is and
    (humanChoice === "paper" && computerChoice === "rock") || // || is or
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore++; // ++ is add 1 to a variable
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

// Step 6 from TOP

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("\nRound 1");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("\nRound 2");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("\nRound 3");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("\nRound 4");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("\nRound 5");
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`\nFinal Score — You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) console.log("You win the game! 🎉");
  else if (computerScore > humanScore) console.log("Computer wins the game. 🤖");
  else console.log("The game is a tie!");
}

playGame();




