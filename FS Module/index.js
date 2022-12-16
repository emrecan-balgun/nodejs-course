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
// });

// Write file (JSON)
// fs.writeFile('test.json', '{"name": "Emrecan Balgün", "age": 24}', 'utf8', (error) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File write successfully!");
//     }
// });

// Append file
// fs.appendFile('username.txt', '\nadded line', 'utf8', (error) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File append successfully!");
//     }
// });

// Delete file
// fs.unlink('test.json', (error) => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("File deleted successfully!");
//     }
// });

// Make directory
// Recursive: true needs to be used to create nested directories
// fs.mkdir('uploads/img', { recursive: true }, error => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("Directory created successfully!");
//     }
// });

// Delete directory
// Recursive: true needs to be used to delete nested directories
// fs.rmdir to fs.rm
// fs.rm('uploads', { recursive: true }, error => {
//     if(error) {
//         console.log("Error: ", error);
//     } else {
//         console.log("Directory deleted successfully!");
//     }
// });

// Print current directory
// console.log(__dirname);