import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.round(Math.random() * max);

export const gameEngine = (gameDescription, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const yourAnswerIs = readlineSync.question('Your answer: ');
    if (yourAnswerIs === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswerIs}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
