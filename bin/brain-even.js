#!/usr/bin/env node
import sayYourName from "../src/cli.js";
import { randomNum, yourAnswerIs, isAnswerCorrect } from "../src/games/is-even-game-draft.js";

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${sayYourName()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
randomNum();
yourAnswerIs();
isAnswerCorrect();