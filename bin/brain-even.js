#!/usr/bin/env node
import { sayYourName, randomNum, yourAnswerIs, isAnswerCorrect } from "../src/games/is-even-game-draft.js";

console.log('Welcome to the Brain Games!');
const userName = sayYourName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const questionNum = randomNum();
const yourAnswer = yourAnswerIs();
console.log(isAnswerCorrect(yourAnswer, questionNum, userName));
