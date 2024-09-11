import { getRandom } from "../index.js";
import gameEngine from "../index.js";

const gameDescription = 'Find the greatest common divisor of given numbers.';

const answerIsCorrectIf = (randomNumber, randomNumber2) => {
    while (randomNumber2 !== 0) {
        let temp = randomNumber2;
        randomNumber2 = randomNumber % randomNumber2;
        randomNumber = temp;
    }
    return randomNumber;
};

const getQuestionAndAswer = () => {
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = answerIsCorrectIf(firstNumber, secondNumber);

    return [question, correctAnswer.toString()];
}

export const nameGcd = () => gameEngine(gameDescription, getQuestionAndAswer);