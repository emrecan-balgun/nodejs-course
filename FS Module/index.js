const fs = require('fs');

// Read file
// fs.readFile('password.txt', 'utf8', (error, data) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File read successfully!\nData: ", data);
//     }
// });

// Write file
// fs.writeFile('username.txt', 'test', 'utf8', (error) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File write successfully!");
//     }
// })

// Write file (JSON)
// fs.writeFile('test.json', '{"name": "Emrecan Balgün", "age": 24}', 'utf8', (error) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File write successfully!");
//     }
// })