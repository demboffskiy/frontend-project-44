import gameEngine, { getRandom } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const answerIsCorrectIf = (randomNumber1, randomNumber2) => {
  let num1 = randomNumber1;
  let num2 = randomNumber2;

  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  while (randomNumber2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const getQuestionAndAswer = () => {
  const firstNumber = getRandom(1000);
  const secondNumber = getRandom(1000);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = answerIsCorrectIf(firstNumber, secondNumber);

  return [question, correctAnswer.toString()];
};

export default () => gameEngine(gameDescription, getQuestionAndAswer);
