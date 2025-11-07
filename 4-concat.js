/**
 * Write a script that prints two arguments passed to it, in the following format:
 * argument "is" argument
 */

const { argv } = require('node:process')
const [,,firstArg, secondArg] = process.argv;
console.log(firstArg + " is " + secondArg);