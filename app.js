`use strict`

const fs = require('fs');

fs.readdir('/', (err, result) => {
    if(err){
        console.log(err);
    } else {
        console.log("\nCurrent directory filenames");
        result.forEach(file => {
            console.log(file);
        })
    }
})