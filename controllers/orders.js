
//creating an array of foods
const foods=[
	{
		id:1,
		name:"sweet panneaple",
		description:"very juicy and enriching"
	},
	{
		id:2,
		name:"sweet bannana",
		description:"Good for your health"
	},
	{
		id:3,
		name:"sweet Orange",
		description:"very medicinal"
	}
];
//function to get all orders

function getOrders(req, res){
	res.send( foods);
}

//function for fetch a specific order
function getSpecific(req, res){
	const food = foods.find(c => c.id === parseInt(req.params.id));
	if(!food) res.status(404).send("the food with the given ID was not found");
	res.send(food);
}

// function for placing a new order/post
function postOrders(req, res){
	const newFood={
		id:foods.length +1,
		name:req.body.name,
		description:req.body.description
	};
	foods.push(newFood);
	res.send(newFood);
}

// update the status of and Orders
function updateOrders(req, res){
	const food = foods.find(c => c.id === parseInt(req.params.id));
	if(!food) res.status(404).send("the food with the given ID was not found");
	food.name=req.body.name;
	food.description=req.body.description;
	res.send(food);
}

export default { getOrders, getSpecific,postOrders,updateOrders};
