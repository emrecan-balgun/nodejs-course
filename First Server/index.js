const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    // console.log("Request received");
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Index Page</h1>");
    } else if(url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("About Page");
    } else if(url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Contact Page");
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>404 Page</h1>");
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});