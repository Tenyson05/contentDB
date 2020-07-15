var express = require('express');
var router = express.Router();

const contentR = require("../controller/index");

// const db = require('../models/index');
// // .Item must be the name that you gave the table during the db model:generate
// const Items = db.sequelize.models.Item;

/* GET users listing. */
router.get('/', contentR.getAll);

router.get('/:id', contentR.getOne);

router.post('/', contentR.create);

router.put('/:id', contentR.update);

router.delete('/:id', contentR.deleteOne);

router.delete('/', contentR.deleteAll);

module.exports = router;
