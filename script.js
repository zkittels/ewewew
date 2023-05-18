function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function guess() {
    const userGuess = prompt('Угадай число от 1 до 100');

    if (userGuess === null) {
      alert('Игра окончена');
    } else if (isNaN(+userGuess)) {
      alert('Введи число!');
      guess();
    } else {
      const guessNumber = +userGuess;

      if (guessNumber === secretNumber) {
        alert('Поздравляю, Вы угадали!!!');
      } else if (guessNumber < secretNumber) {
        alert('Загаданное число больше');
        guess();
      } else {
        alert('Загаданное число меньше');
        guess();
      }
    }
  }

  guess();
}

guessNumber();
