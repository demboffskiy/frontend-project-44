import readlineSync from 'readline-sync';
import sayYourName from "../cli.js";
const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export function randomNum () {
    const questionNum = getRandomNum(1, 100);
    console.log(`Question: ${questionNum}`);
}; 

export function yourAnswerIs () {
    const yourAnswer = readlineSync.question('Your answer: ');
    return yourAnswer;
}

export function isAnswerCorrect () {
    let result = '';
    if (randomNum % 2 === 0) {
        if (yourAnswer === 'yes') {
            result = 'Correct!';
        }
    }
    else if (randomNum % 2 !== 0) {
        if (yourAnswer === 'yes') {
            result = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${sayYourName}!`;
        }
    }
    return result;
};