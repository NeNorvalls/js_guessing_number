function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
  let guess;
  do {
    guess = prompt("Guess a number between 1 and 100:");
    if (guess === null) {
      return null;
    }
    guess = parseInt(guess);
  } while (isNaN(guess) || guess < 1 || guess > 100);
  return guess;
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "Too low!";
  } else if (playerGuess > correctNumber) {
    return "Too high!";
  } else {
    return "Correct!";
  }
}

function game() {
  const maxAttempts = 7;
  let randomNumber = generateRandomNumber();
  console.log("Random number generated:", randomNumber);
  let attempts = 0;
  let score = 100;

  while (attempts < maxAttempts) {
    let guess = getPlayerGuess();
    if (guess === null) {
      console.log("Game canceled by the player.");
      alert("Game canceled. Your score: " + score);
      return;
    }
    console.log("Player guessed:", guess);
    attempts++;
    let result = checkGuess(guess, randomNumber);
    console.log("Result of guess:", result);
    alert(result);
    if (result === "Correct!") {
      console.log(
        "Player guessed the correct number in " + attempts + " attempts."
      );
      console.log("Player score:", score);
      alert(
        "Congratulations! You've guessed the correct number in " +
          attempts +
          " attempts!"
      );
      alert("Your final score: " + score);
      return;
    } else {
      score -= 10;
    }

    console.log("Attempts:", attempts);
    console.log("Score:", score);
  }
  console.log("Player used all attempts. Correct number was:", randomNumber);
  console.log("Player score:", score);
  alert(
    "Sorry, you've used all your attempts. The correct number was " +
      randomNumber
  );
  alert("Your final score: " + score);
}

game();
