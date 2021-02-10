'use strict'

const routers = require("express").Router();
const rajaongkirController = require('../controllers/rajaongkirController');

routers.post('/cost', rajaongkirController.getDataCost);
routers.post('/city', rajaongkirController.getDataCity);
routers.post('/province', rajaongkirController.getDataProvince);

module.exports = routers;