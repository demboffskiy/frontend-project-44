import readlineSync from 'readline-sync';

function sayYourName() {
    const userName = readlineSync.question("May I have your name? ");
    return userName;
}

export default sayYourName;