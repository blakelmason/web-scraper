//env
require('dotenv').config()

//packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const routes = require('./routes')

//mongoose connection
mongoose.connect(process.env.MLAB_KEY);

//app
const app = express();

//port
const PORT = process.env.PORT || 3000;

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static
app.use(express.static('./client/build'));

//routes
app.use(routes.comment);
app.use(routes.scrape);

//listen
app.listen(PORT, function () {
  console.log("Server on port " + PORT);
});