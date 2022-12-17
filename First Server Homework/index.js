const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;

    switch(url) {
        case '/': 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2>Index Page</h2>");
            break;
        case '/about': 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2>About Page</h2>");
            break;
        case '/contact': 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2>Contact Page</h2>");
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("<h2>404 Page</h2>");
            break;
    };
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});