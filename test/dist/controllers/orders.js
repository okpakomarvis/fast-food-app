"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

//creating an array of foods
var foods = [{
	id: 1,
	name: "sweet panneaple",
	description: "very juicy and enriching"
}, {
	id: 2,
	name: "sweet bannana",
	description: "Good for your health"
}, {
	id: 3,
	name: "sweet Orange",
	description: "very medicinal"
}];
//function to get all orders

var getOrders = function getOrders(req, res) {
	res.send(foods);
};

//function for fetch a specific order
var getSpecific = function getSpecific(req, res) {
	var food = foods.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	res.send(food);
};

// function for placing a new order/post
var postOrders = function postOrders(req, res) {
	var newFood = {
		id: foods.length + 1,
		name: req.body.name,
		description: req.body.description
	};
	foods.push(newFood);
	res.send(newFood);
};

// update the status of and Orders
var updateOrders = function updateOrders(req, res) {
	var food = foods.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	food.name = req.body.name;
	food.description = req.body.description;
	res.send(food);
};

exports.default = { getOrders: getOrders, getSpecific: getSpecific, postOrders: postOrders, updateOrders: updateOrders };