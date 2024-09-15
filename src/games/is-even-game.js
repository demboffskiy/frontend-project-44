/* import readlineSync from 'readline-sync';

export function sayYourName() {
    const userName = readlineSync.question("May I have your name? ");
    return userName;
};

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export function randomNum () {
    const questionNum = getRandomNum(1, 100);
    console.log(`Question: ${questionNum}`);
    return questionNum;
};

export function yourAnswerIs () {
    const yourAnswer = readlineSync.question('Your answer: ');
    return yourAnswer;
}

export const isAnswerCorrect = (yourAnswer, questionNum, userName) => {
    const correctAnswer = (questionNum % 2 === 0) ? 'yes' : 'no';
    while (yourAnswer === correctAnswer) {
        return 'Correct!';
    }
    return `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again ${userName}!`;
};  */
