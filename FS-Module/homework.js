const fs = require('fs');

// Create file
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (error) => {
    if(error) {
        console.log("Error: ", error);
    } else {
        console.log("File write successfully!");
    }
});

// Read file
fs.readFile('employees.json', 'utf8', (error, data) => {
    if(error) console.log(error);
    else console.log("File read successfully!\nData: ", data);
});

// Update file
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 8000}', 'utf8', error => {
    if(error) console.log(error);
    else console.log("File updated successfully!");
});

// Delete file
fs.unlink('employees.json', error => {
    if(error) console.log(error);
    else console.log("File deleted successfully!");
});