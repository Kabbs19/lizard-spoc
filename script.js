
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


