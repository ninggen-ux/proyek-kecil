import * as http from 'http';
import * as up from 'upper-case';

http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(up.upperCase("hello world!!!"));
    res.end();
}).listen(8080);