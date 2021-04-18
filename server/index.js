//Starting point of server
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
//Database setup
mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
//App setup
app.use(morgan("combined"));
app.use(express.json({ type: "*/*" }));
router(app);
//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`server listening on port ${port}`);
