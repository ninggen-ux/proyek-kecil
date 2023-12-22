let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer((permintaan, respon) => {
    let q = url.parse(permintaan.url, true);
    let namaFile = "." + q.pathname;
    fs.readFile(namaFile, (error, data) => {
        if (error) {
            respon.writeHead(404, { "Content-type": "text/html" });
            return respon.end("404 tidak di temukan")
        }

        respon.writeHead(200, { "Content-type": "text/html" });
        respon.write(data);
        return respon.end();
    })
}).listen(8080);