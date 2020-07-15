const db = require('../models/index');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item;

exports.create = (req, res) => {
	if(!req.body.name) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const content = {
		name: req.body.name,
		description: req.body.description,
		url: req.body.url,
	};

	Items.create(content)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Error occured while creating tutorial"
		})
	})
}