"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require("../app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = "test";
//Require the dev-dependencies

var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);
//Our parent block
describe("/GET orders", function () {
	it("it should GET all the the orders", function (done) {
		_chai2.default.request(_app2.default).get("/api/v1/orders").end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("array");
			done();
		});
	});
});

// test post request
describe("/POST Orders", function () {
	it("it should  POST a food", function (done) {
		var food = {
			id: 4,
			name: "beans",
			description: "beans is a good protein source"
		};
		_chai2.default.request(_app2.default).post("/api/v1/orders").send(food).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			done();
		});
	});
});

//test the get /fectch a specific order
describe("/GET/:id Order", function () {
	it("it should GET a food by the given id", function (done) {
		var food = {
			id: 4,
			name: "beans",
			description: "beans is a good protein source"
		};
		_chai2.default.request(_app2.default).get("/api/v1/orders/" + food.id).send(food).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			res.body.should.have.property("name");
			res.body.should.have.property("description");
			res.body.should.have.property("id").eql(food.id);
			done();
		});
	});
});

// put //update the status of an order
// Test the /PUT/:id route

describe("/PUT/:id Orders", function () {
	it("it should UPDATE a food given the id", function (done) {
		var food = {
			id: 4,
			name: "rice",
			description: "rice is a good carbonhydrate source"
		};
		_chai2.default.request(_app2.default).put("/api/v1/orders/" + food.id).send({ id: 4,
			name: "beans",
			description: "beans is a good protein source" }).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			res.body.should.have.property("name").eql("beans");
			res.body.should.have.property("description").eql("beans is a good protein source");
			done();
		});
	});
});