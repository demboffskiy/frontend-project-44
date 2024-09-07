import readlineSync from 'readline-sync';
import { helloUser } from '../index.js';

export const gettingNumber = () => {
    const userName = helloUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let score = 0;
    while (score < 3) {
        const randomNumber = Math.round(Math.random() * 100);
        console.log(`Question: ${randomNumber}`);
        const yourAnswerIs = readlineSync.question('Your answer: ');
        const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
        if (randomNumber % 2 === 0 && yourAnswerIs === 'yes' || randomNumber % 2 !== 0 && yourAnswerIs === 'no') {
            score += 1;
            console.log('Correct!');
        }
        else if (randomNumber % 2 === 0 && yourAnswerIs === 'no' || randomNumber % 2 !== 0 && yourAnswerIs === 'yes') {
            return console.log(`'${yourAnswerIs}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again ${userName}!`);
        }
        else {
            return console.log(`'${yourAnswerIs}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again ${userName}!`);
        }
    } console.log(`Congratulations, ${userName}!`);
};