"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _methodOverride = require("method-override");

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _router = require("./utils/router");

var _router2 = _interopRequireDefault(_router);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//set port

//import loginRouter from "./controllers/login";

//import expressHbs from "express-handlebars";
var port = process.env.PORT || 3000;
// set view engine
//app.engine("handlebars", expressHbs({defaultLayout:"main"}));
//app.set("view engine","handlebars");

// set body-parser
app.use((0, _morgan2.default)("dev"));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));

app.use((0, _cookieParser2.default)());
app.use((0, _methodOverride2.default)("_method"));

//get home page
app.use("/api/v1", _router2.default);

//setting http
app.listen(port, function (req, res) {
	console.log("listening...");
});

module.exports = app;