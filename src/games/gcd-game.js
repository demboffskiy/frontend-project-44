import gameEngine, { getRandom } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const answerIsCorrectIf = (randomNumber1, randomNumber2) => {
  while (randomNumber2 !== 0) {
    const temp = randomNumber2;
    randomNumber2 = randomNumber1 % randomNumber2;
    randomNumber1 = temp;
  }
  return randomNumber1;
};

const getQuestionAndAswer = () => {
  const firstNumber = getRandom(1000);
  const secondNumber = getRandom(1000);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = answerIsCorrectIf(firstNumber, secondNumber);

  return [question, correctAnswer.toString()];
};

export const nameGcd = () => gameEngine(gameDescription, getQuestionAndAswer);
