// get all files in the models directory via index.js
const db = require('../models/index');
const { UnavailableForLegalReasons } = require('http-errors');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item;

exports.deleteAll = (req, res) => {
	Items.destroy({
		where: {},
		truncate: false
	})
	.then(nums => {
		res.send({ 
			message: `${nums} Content was deleted`
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Error occured while trying to delete stuff"
			})
		})
	})
}