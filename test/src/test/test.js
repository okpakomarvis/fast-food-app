"use strict";

process.env.NODE_ENV = "test";
//Require the dev-dependencies
import chai from "chai";
import  chaiHttp  from "chai-http";
import server from "../app";
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe("/GET orders", () => {
	it("it should GET all the the orders", (done) => {
		chai.request(server)
			.get("/api/v1/orders")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("array");
				done();
			});
	});
});

// test post request
describe("/POST Orders", () => {
	it("it should  POST a food", (done) => {
		let food = {
			id: 4,
			name:"beans",
			description: "beans is a good protein source"
		};
		chai.request(server)
			.post("/api/v1/orders")
			.send(food)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				done();
			});
	});

});

//test the get /fectch a specific order
describe("/GET/:id Order", () => {
	it("it should GET a food by the given id", (done) => {
		let food = {
			id: 4,
			name:"beans",
			description: "beans is a good protein source"
		};
		chai.request(server)
			.get("/api/v1/orders/" + food.id)
			.send(food)
			.end((err, res) => {
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

describe("/PUT/:id Orders", () => {
		it("it should UPDATE a food given the id", (done) => {
		let food = {
			id: 4,
			name:"rice",
			description: "rice is a good carbonhydrate source"
		};
		chai.request(server)
			.put("/api/v1/orders/" + food.id)
			.send({id: 4,
				name:"beans",
				description: "beans is a good protein source"})
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("name").eql("beans");
				res.body.should.have.property("description").eql("beans is a good protein source");
				done();
			});
	});
});
