import launchTheGame, { getRandom } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const separator = ' ';

const progressionArr = (randomNumber1, randomNumber2) => {
  const array = [randomNumber1];
  let currentNumber = randomNumber1;

  for (let i = 0; i < 9; i += 1) {
    const sum = currentNumber + randomNumber2;
    array.push(sum);
    currentNumber = sum;
  }
  return array;
};

const getQuestionAndAswer = () => {
  const firstNumber = getRandom(20);
  const secondNumber = getRandom(10);
  const questionArray = progressionArr(firstNumber, secondNumber);
  const randomItem = Math.floor(Math.random() * questionArray.length);
  const correctNumber = questionArray[randomItem];
  questionArray[randomItem] = '..';

  const question = `${questionArray.join(separator)}`;
  const correctAnswer = correctNumber;

  return [question, correctAnswer.toString()];
};

export default () => launchTheGame(gameDescription, getQuestionAndAswer);
