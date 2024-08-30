#!/usr/bin/env node
import { helloUser, gettingNumber } from "../src/games/is-even-game-draft.js";

const userName = helloUser();
gettingNumber(userName);
