/**
 * Write a script that computes and prints a factorial
 * 
 * The first argument is integer (argument can be cast as integer) used for computing the factorial
 * Factorial of NaN is 1
 * You must do it recursively
 */

// const [,,args] = process.argv;
// const factNum = parseInt(args);
// function factorial(num) {
//     if (num === factNum) {
//         break;
//     } else {
        
//     }
// }
// factorial(factNum)

const n = process.argv[2]

function factorial(n) {
    if (isNaN(n)) {
        return 1
    }

    if (parseInt(n) <= 1) {
        return 1;
    }
    return parseInt(n) * factorial(parseInt(n) -1)
}
console.log(factorial(n))