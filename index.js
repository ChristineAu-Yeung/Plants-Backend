require('dotenv').config();
const express = require('express'),
    app = express(),
    http = require('http'),
    cors = require('cors'),
    constants = require('./config/config'),
    db = require('./config/db');

db.connect(constants.api.database);
app.use(cors());
app.use(express.json());
let routes = require('./routes/routes');
routes(app);

app.use((req, res, next) => {
    return res.status(400)
})

const server = http.createServer(app);
server.listen(constants.api.port);
console.log(`Server running on port:${constants.api.port}`);

module.exports = server;