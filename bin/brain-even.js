#!/usr/bin/env node
import { helloUser, gettingNumber } from "../src/games/is-even-game-draft.js";

console.log('Welcome to the Brain Games!');
const userName = helloUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gettingNumber(userName);
