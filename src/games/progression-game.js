import { getRandom } from '../index.js';
import gameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const separator = ' ';

const progressionArr = (randomNumber1, randomNumber2) => {
    const array = [randomNumber1];

    for (let i = 0; i < 9; i += 1 ) {
        let sum = array[i] + randomNumber2;
        array.push(sum);
        randomNumber1 = sum;
    };
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
}

export const nameCorrectNum = () => gameEngine(gameDescription, getQuestionAndAswer);