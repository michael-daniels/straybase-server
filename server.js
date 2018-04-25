const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const Lob = require('lob')('test_e730dcf98911e40b6c98f22fed84cf2a29e');
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
require("./config/session.js")(app);
var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
