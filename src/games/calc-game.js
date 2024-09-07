import readlineSync from 'readline-sync';
import { helloUser } from '../index.js';

export const sayYourNum = () => {
    const userName = helloUser();
    console.log('What is the result of the expression?');
    let score = 0;
    while (score < 3) {
        let arr = ['+', '-', '*'];
        const randomNumber = Math.round(Math.random() * 100);
        const randomNumber2 = Math.round(Math.random() * 100);
        const randomItem = arr[Math.floor(Math.random() * arr.length)];
        
        const correctAnswer = () => {
            let result;
            if (randomItem === '+') {
                result = randomNumber + randomNumber2;
            }
            else if (randomItem === '-') {
                result = randomNumber - randomNumber2;
            }
            else if (randomItem === '*') {
                result = randomNumber * randomNumber2;
            }
            return result;
        };

        const question = `Question: ${randomNumber} ${randomItem} ${randomNumber2}`;
        console.log(question);

        const yourAnswerIs = readlineSync.question('Your answer: ');

        if (Number(yourAnswerIs) === correctAnswer()) {
            console.log('Correct!');
            score += 1;
        } else {
            return console.log(`'${yourAnswerIs}' is wrong answer ;(. Correct answer was '${correctAnswer()}'. \nLet's try again ${userName}!`);
        }
    } console.log(`Congratulations, ${userName}!`);
};