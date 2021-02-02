'use strict'

require('dotenv').config();
const axios = require('axios').default;
const responses = require('../helper/responseAPI');

const urlAPI = "https://api.rajaongkir.com/starter/";


class rajaongkirController {
    static async getDataCost(req, res, next) {
        try {
            const payload = await axios.post(urlAPI + "cost", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            responses({ message: "data retrieved", data: payload.data})(res);
        } catch(err) {
            res.status(403);
            next(err);
        }
    }

    static async getDataCity(req, res, next) {
        try {
            const payload = await axios.post(urlAPI + "city", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            responses({ message: "data retrieved", data: payload.data})(res);
        } catch(err) {
            res.status(403);
            next(err);
        }
    }

    static async getDataProvince(req, res, next) {
        try {
            const payload = await axios.post(urlAPI + "province", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            responses({ message: "data retrieved", data: payload.data })(res)
        } catch(err) {
            res.status(403);
            next(err);
        }
    }
}

module.exports = rajaongkirController;