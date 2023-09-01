var express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.routers();
    }

    routers() {
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        })
    }

    listen() {
        this.app.listen(this.port, function () {
            console.log('Example app listening on port ${this.port}');
        })
    }
}

module.exports = Server