let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'молодец!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!! игра окончена !!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'неа!';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'бери выше!' ;
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'бери ниже!';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true; 
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'начать новую игру';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[1].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}