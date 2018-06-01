var models = require('../models');


function getColors(req,res) {
	models.Color.findAll()
		.then(function(colors){
			res.status(200).send(colors)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

module.exports={
	getColors
}