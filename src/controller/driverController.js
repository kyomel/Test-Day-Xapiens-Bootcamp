'use strict'

const { drivers, orders } = require('../db/models');
const response = require('../helper/response');

class driverController {
    static async getAllDriver(req, res) {
        try {
            const payload = await drivers.findAll();
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async getDriverId(req, res) {
        try {
            const payload = await drivers.findByPk(req.params.id);
            response({ message: "success retrieved", data: payload})(res);
        } catch(error) {
            console.log(error);
        }
    }

    static async createDriver(req, res) {
        let full_name = req.body.full_name;
        let phone_number = req.body.phone_number;

        try {
            const payload = await drivers.create({
               full_name: full_name,
               phone_number: phone_number
            });
            response({ message: "success drivers created", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateDriver(req, res) {
        try {
            const payload = await drivers.update({
                full_name: req.body.full_name,
                phone_number: req.body.phone_number
              },
                { 
                  where: 
                  { id: req.params.id } 
                }
              );

              if(!payload) {
                    response({ message: "driver not found", data: payload })( res, 404);
                }
                    response({ message: "driver updated", data: payload })(res, 200);
            } catch(error) {
                console.log(error);
            }
    }
    
    static async deleteDrivers(req, res) {
        try {
            const payload = await drivers.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (payload) {
                response({ message: "driver deleted", data: payload })(res, 200);
            }
            response({ message: "driver not found", data: payload })(res, 404);
        }catch (error) {
            console.log(error);
        }
    }

    static async updateStatus(req, res) {
            try {
                const payload = await orders.update({
                    status: req.body.status
                }, {
                    where: 
                    {
                        driver_id: req.params.id
                    }
                });

                if (!payload) {
                        response({ message: "status order not found", data: payload })( res, 404);
                    }
                        response({ message: "status order updated order", data: payload })(res, 200);
            }
            catch(error) {
                console.log(error);
            }
    }
}

module.exports = driverController;