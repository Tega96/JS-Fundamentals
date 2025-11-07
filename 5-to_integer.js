/**
 * Write a script that prints My number: <first argument converted in integer> if
 * the first argument can be converted to an integer:
 * 
 * If the argument can't be converted to an integer, print "Not a number"
 */


const firstArg = process.argv[2]
if (firstArg !== undefined && !isNaN(parseInt(firstArg))) {
    console.log("My number:", parseInt(firstArg))
} else {
    console.log("Not a Number")
}