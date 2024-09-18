import launchTheGame, { getRandom } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const answerIsCorrectIf = (randomNumber, operator, randomNumber2) => {
  if (operator === '+') {
    return randomNumber + randomNumber2;
  } if (operator === '-') {
    return randomNumber - randomNumber2;
  } if (operator === '*') {
    return randomNumber * randomNumber2;
  }
};

const getQuestionAndAswer = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  const operatorIndex = getRandom(3);
  const actualOperator = operators[operatorIndex];

  const question = `${firstNumber} ${actualOperator} ${secondNumber}`;
  const correctAnswer = answerIsCorrectIf(firstNumber, actualOperator, secondNumber);

  return [question, correctAnswer.toString()];
};

export default () => launchTheGame(gameDescription, getQuestionAndAswer);
