/* 
-document.querySelectorAll('.choice'): Selects all elements with the class choice, which are the buttons for Rock, Paper, and Scissors.

-forEach(button => { ... }): Loops through each button element.

-button.addEventListener('click', function() { ... }): Adds a click event listener to each button. When a button is clicked, the code inside the event listener runs.

-this.getAttribute('data-choice'): Retrieves the value of the data-choice attribute from the clicked button (this refers to the clicked button). This gives us the user's choice (either "rock", "paper", or "scissors").

-getComputerChoice(): Calls the getComputerChoice function to get the computer's choice.

-determineWinner(userChoice, computerChoice): Calls the determineWinner function to determine the outcome of the game based on the user's choice and the computer's choice.

-The next three lines update the HTML to display the user's choice, the computer's choice, and the outcome of the game.

-document.getElementById('result').classList.remove('hidden'): Removes the hidden class from the result section to make it visible.
*/

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", function () {
    const userChoice = this.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const outcome = determineWinner(userChoice, computerChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("outcome").textContent = outcome;

    document.getElementById("result").classList.remove("hidden");
  });
});

/* 
-const choices = ['rock', 'paper', 'scissors']: Defines an array with the possible choices.

-Math.random() * choices.length: Generates a random number between 0 (inclusive) and the length of the choices array (exclusive).

-Math.floor(...): Rounds down the random number to the nearest integer, giving us an index between 0 and 2.

-return choices[randomIndex]: Returns the choice at the randomly generated index.
*/

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/* 
-if (userChoice === computerChoice): Checks if the user's choice and the computer's choice are the same. If they are, it's a tie.

-The next else if statement checks all possible winning combinations for the user:

-userChoice === 'rock' && computerChoice === 'scissors': Rock beats Scissors.

-userChoice === 'paper' && computerChoice === 'rock': Paper beats Rock.

-userChoice === 'scissors' && computerChoice === 'paper': Scissors beat Paper.

-If the user's choice doesn't match any of the winning combinations, the user loses.
*/

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
