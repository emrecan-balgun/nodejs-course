const fs = require('fs');

// Read file
fs.readFile('password.txt', 'utf8', (error, data) => {
    if(error) {
        console.log("Error: ", error);
    } else {
        console.log("File read successfully!\nData: ", data);
    }
});

