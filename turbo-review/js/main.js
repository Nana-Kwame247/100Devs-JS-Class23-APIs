// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sentence = "Kwame is a hardworking man?";
if (sentence[sentence.length - 1] == "?") {
  console.log("You entered a question");
} else {
  console.log("where is the question mark by the way!");
}

//leons solution

const str = "Is this the best week ever?";
console.log(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let fullDescription =
  "I am a jr.dev at Yonder Tech and I am finally coming into what I have always wanted so help me God!";

console.log(fullDescription.replace("jr.dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "rock";
  } else if (choice > 0.33 && choice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerchoice) {
  let robotChoice = rockPaperScissors();
  if (
    (playerchoice === "rock" && robotChoice === "scissors") ||
    (playerchoice === "paper" && robotChoice === "rock") ||
    (playerchoice === "scissors" && robotChoice === "paper")
  ) {
    console.log("You win");
  } else if (playerchoice === robotChoice) {
    console.log("You tie");
  } else {
    console.log("You lose");
  }
}

checkWin("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGamesXTimes(arr) {
  arr.forEach((choice) => checkWin(choice));
}

playGamesXTimes(["rock", "paper", "scissors"]);
