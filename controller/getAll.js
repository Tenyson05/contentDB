const db = require('../models/index');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item;

exports.getAll = (req, res) => {
	Items.findAll({
		raw: true
	}).then(function(result){
		res.send(result);
	}).catch(err => {
		res.status(500).send({
			message:
			err.message || "Some error occured while retrieving tutorials"
		});
	});
}