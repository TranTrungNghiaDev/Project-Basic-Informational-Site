const http = require("http");
const url = require("url");
const fs = require("fs");

const readFile = (pathName, res) => {
    fs.readFile(pathName, (err, data) => {
        if (err) throw err
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
    }
    )
};

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const pathName = q.pathname;
    switch (pathName) {
        case "/":
            readFile("./index.html", res);
            break;
        case "/about":
            readFile("./about.html", res);
            break;
        case "/contact-me":
            readFile("./contact-me.html", res);
            break;
        default:
            readFile("./404.html", res);
            break;
    }
}).listen(8080)