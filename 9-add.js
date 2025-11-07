/**
 * Write a script that prints the addition of 2 integers
 * 
 * The first arguments is the first integer
 * The second argument is the second integer
 * 
*/


const [,,num1, num2] = process.argv
const parsedNum1 = parseInt(num1)
const parsedNum2 = parseInt(num2)

function add(a, b) {
    console.log(a + b)
}
add(parsedNum1, parsedNum2);