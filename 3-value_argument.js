/**
 * Write a Script that prints the first argument passed to it:
 * If no arguments are passed to the script, print "No argument"
 */

const { argv } = require('node:process');

const args = process.argv.slice(2);

if (args[0] === undefined) {
    console.log("No argument")
} else {
    console.log(args[0])
}