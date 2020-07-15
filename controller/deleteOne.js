// get all files in the models directory via index.js
const db = require('../models/index');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item;

exports.deleteOne = (req, res) => {
	const id = req.params.id;

	Items.destroy({
		where: {id: id}
	}).then(num => {
		if(num == 1) {
			res.send({
				message: "Content was deleted"
			});
		}else{
			res.send({
				message: `Unable to delete content with id ${id}`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: `Could not delete content with ID ${id}`
		});
	});
};