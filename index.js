require('dotenv').config();
const express = require('express'),
    app = express(),
    http = require('http'),
    cors = require('cors'),
    constants = require('./config/config');

app.use(cors());
let routes = require('./routes/routes');
routes(app);

app.use((req, res, next) => {
    res.send(400);
})

const server = http.createServer(app);
server.listen(constants.api.port);
console.log(`Server running on port:${constants.api.port}`);

module.exports = server;