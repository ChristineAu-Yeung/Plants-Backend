const Plants = require('../models/plants.model');

exports.getPlants = async (req, res, next) => {
	// find, findOneAndUpdate 'findOne and something', deleteOne, updateOne, update, delete
	/**
	 * collection: the table in SQL, ie: Plants, users, etc...
	 * documents: the objects we store in a collection ie: {"name": "Ficus", "img": "plants.com"}
	 */
	const { type } = req.query;
	const { userId } = req.body; // after validating user JWT, get userId from the body
	const search = { ...req.query } // <==> plantType: 'Ficus' or it'll be null and search = {}
	let plants = await Plants.find(search); // plants found ?, if no plants returns []
	// console.log({search})
	return res.status(200).json(plants)
}

exports.getPlantsByType = async (req, res, next) => {
	return res.status(200);
}

exports.addPlant = async (req, res, next) => {
	try {
		const addedPlant = await new Plants({ ...req.body }).save();
		return res.status(200).json(addedPlant);
	} catch (e) {
		return res.status(400).json({ error: e.message })
	}
}

exports.deletePlant = async (req, res, next) => {
	// console.log(req.params)
	try {
		const { plantId } = req.params;
		const deletedPlant = await Plants.findOneAndDelete({ _id: plantId });
		// console.log(deletedPlant);
		if (!deletedPlant) throw new Error("Could not find :(");
		return res.status(200).json(deletedPlant)
	} catch (e) {
		return res.status(400).json({ error: e.message })
	}
}

exports.updatePlant = async (req, res, next) => { // PUT/POST 
	try {
		const { plantId } = req.params;
		const { userId } = req.body;
		const query = { _id: plantId, userId }
		const updatedPlant = await Plants.findOneAndUpdate(query, req.body, { new: true });
		return res.status(200).json(updatedPlant)
	} catch (e) {
		return res.status(400).json({ error: e.message })
	}
}

