const db = require('../models/index');
// .Item must be the name that you gave the table during the db model:generate
const Items = db.sequelize.models.Item

exports.update = (req, res) => {
	const id = req.params.id;

	Items.update(req.body, {
		where: {id: id}
	}).then(num => {
		if(num == 1) {
			res.send({
				message: "Content Successfully updated"
			})
		}else {
			res.send({
				message: `Cannot update content with ID ${id}`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: `Error updating content with ID ${id}`
		});
	});
};