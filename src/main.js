let express = require('express');
let app = express();
let body_parser = require('body-parser');
let path = require('path');
const router = require('../router/main.router')
let connection = require('../connection/main.connection');
let port = process.env.PORT || 8000;

app.use(body_parser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Method', 'OPTIONS, GET, PUT , POST, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})

app.use('/api', router);

app.listen(port);
console.log("Server is connected at the port 8000...");