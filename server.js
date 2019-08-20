var express = require("express");

var expressHandlebars = require("express-handlebars");

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/pulbic"));

app.use(router);

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

app.set("veiw engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(PORT, function(){
    console.log("Listening on Port"  + PORT);
})