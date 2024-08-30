import readlineSync from 'readline-sync';

export const helloUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

export const randomSymbol = () => {
    let arr = ['+', '-', '*'];
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomItem());
};

