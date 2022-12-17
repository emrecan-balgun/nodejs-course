const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("Request received");
    res.write('Hello World');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});