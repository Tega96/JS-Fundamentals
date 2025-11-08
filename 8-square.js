/**
 * Write a Script that prints a square
 * 
 * The first argument is the size of the square
 * If the first argument can't be converted to an integer, print 'Missing size'
 * You must use the character x to print the square
 */

// Get value from cli
const size = process.argv[2]

// Check if number is it is a number
if (size !== undefined && !isNaN(parseInt(size))) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row = row + 'X'
        }
        console.log(row)
    }
} else {
    console.log('Missing size')
}

