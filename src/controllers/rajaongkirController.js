'use strict'

require('dotenv').config();
const axios = require('axios').default;
const response = require('../helper/responseAPI');

const urlAPI = "https://api.rajaongkir.com/starter/";


class rajaongkirController {
    static async getDataCost(req, res) {
        try {
            const payload = await axios.post(urlAPI + "cost", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            response({ message: "data retrieved", data: payload.data})(res);
        } catch(error) {
            response({ message: "Error", data: error })(res, 400);
        }
    }

    static async getDataCity(req,res) {
        try {
            const payload = await axios.post(urlAPI + "city", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            response({ message: "data retrieved", data: payload.data})(res);
        } catch(error) {
            response({ message: "Error", data: error })(res, 400);
        }
    }

    static async getDataProvince(req, res) {
        try {
            const payload = await axios.post(urlAPI + "province", req.body, {
                headers: {
                    key: process.env.API_KEY,
                },
            });
            response({ message: "data retrieved", data: payload.data })(res)
        } catch(error) {
            response({ message: "Error", data: error})(res, 400);
        }
    }
}

module.exports = rajaongkirController;