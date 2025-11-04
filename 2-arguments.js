const { argv } = require('node:process');

argv.find((val, index) => {
    if (!val) {
        console.log("No argument")
    } else if (val.length === index) {
        console.log("Argument found")
    } else {
        console.log("Arguments found")
    }
})