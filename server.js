var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
var root = __dirname + '/dist'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))


// const express = require("express");
// const path = require("path");
// const serveStatic = require("serve-static");

// let app = express();
// app.use(serveStatic(__dirname + "/dist/"));


const port = 4200;
//require('dotenv').config();

app.listen(port, () => {
console.log("Listening on port " + port);
});