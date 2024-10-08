import launchTheGame, { getRandom } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getQuestionAndAswer = () => {
  const question = getRandom(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => launchTheGame(gameDescription, getQuestionAndAswer);
