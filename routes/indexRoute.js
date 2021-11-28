const express = require('express');

const indexController = require('./../controller/indexComtroller');

const router = express.Router()

router.get("/", indexController.index)

module.exports = router