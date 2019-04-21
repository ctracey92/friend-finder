//Dependencies
var express = require("express");
var path = require("path");
var dataGrabbed = require("./app/data/friends.js")

//Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up ability to parse the data
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});