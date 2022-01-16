const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
    if(err) throw new Error(err);
    console.log(`Server is listening on => http://localhost:${PORT}`);
});