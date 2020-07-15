// get all files in the models directory via index.js
const db = require('../models/index');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item;


exports.getOne = (req, res) => {
	const id = req.params.id;
	
	Items.findByPk(id)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: `Error retrieving content with ${id}`
		})
	})
}