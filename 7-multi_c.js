/**
 * Write a script that prints x times "C is fun"
 * 
 * Where x  is the first argument of the script
 * If the first argument can't be converted to an integer, print "Missing number of occurence"
 */

const count = process.argv[2]

if (count !== undefined && !isNaN(parseInt(count))) {

    for (let i = 0; i < parseInt(count); i++) {
        console.log('C is fun')
    }
    
} else {
    console.log("Missing number of occurences")
}
