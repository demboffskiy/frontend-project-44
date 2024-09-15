import gameEngine, { getRandom } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const answerIsCorrectIf = (randomNumber, operator, randomNumber2) => {
  let result;
  if (operator === '+') {
    result = randomNumber + randomNumber2;
  } else if (operator === '-') {
    result = randomNumber - randomNumber2;
  } else if (operator === '*') {
    result = randomNumber * randomNumber2;
  }
  return result;
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

export const sayYourNum = () => gameEngine(gameDescription, getQuestionAndAswer);
