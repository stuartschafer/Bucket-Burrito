var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var express = require("express");

var app = express();
var port = 8080;

app.use(express.static(__dirname + "/data"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");