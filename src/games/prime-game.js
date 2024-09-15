import { getRandom } from '../index.js';
import gameEngine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise "no".';

const isPrime = (randomNumber) => {
    for (let i = 2; i < randomNumber; i += 1) {
        if (randomNumber % i === 0) {
            return false; 
        }
    }
    return true;
};

const getQuestionAndAswer = () => {
    const question = getRandom(100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

export const numberIsPrime = () => gameEngine(gameDescription, getQuestionAndAswer);