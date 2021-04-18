//Starting point of server
const express = require("express");
const http = require("http");
const bodyPardser = require("body-parser");
const morgan = require("morgan");
const app = express();
//App setup

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`server listening on port ${port}`);
