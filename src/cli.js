import readlineSync from "readline-sync";

const playerGuidance = () => {
 const userName = readlineSync.question("May I have your name?");
 console.log("Hello, " + userName + "!");
};

export default playerGuidance;
