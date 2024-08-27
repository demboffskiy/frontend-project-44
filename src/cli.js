import readlineSync from 'readline-sync';
const sayYourName = (name) => {
    const userName = readlineSync.question("May I have your name?" + name);
    console.log("Hello, " + userName + "!");
}

export default sayYourName;