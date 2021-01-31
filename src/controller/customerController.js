'use strict'

const { customers, orders } = require('../db/models');
const response = require('../helper/response');

class customerController {
    static async getAllCustomer(req, res) {
        try {
            const payload = await customers.findAll();
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async getCustomerId(req, res) {
        try {
            const payload = await customers.findByPk(req.params.id);
            response({ message: "success retrieved", data: payload})(res);
        } catch(error) {
            console.log(error);
        }
    }

    static async createCustomer(req, res) {
        let full_name = req.body.full_name;
        let username = req.body.username;
        let email = req.body.email;
        let phone_number = req.body.phone_number;

        try {
            const payload = await customers.create({
               full_name: full_name,
               username: username,
               email: email,
               phone_number: phone_number
            });
            response({ message: "success customer created", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateCustomer(req, res) {
        try {
            const payload = await customers.update({
                full_name: req.body.full_name,
                username: req.body.username,
                email: req.body.email,
                phone_number: req.body.phone_number
              },
                { 
                  where: 
                  { id: req.params.id } 
                }
              );

              if(!payload) {
                    response({ message: "customer not found", data: payload })( res, 404);
                }
                    response({ message: "customer updated", data: payload })(res, 200);
            } catch(error) {
                console.log(error);
            }
    } 

    static async updateStatus(req, res) {
        const getKey = req.body.data.attributes;
        const getValue = req.body.data.status;
        const customerId = getKey.user_id;
        const orderId = getKey.order_id;

        const setStatus = { status: getValue };
        const resWhere = { user_id: customerId, id: orderId };

            try {
                const payload = await orders.update(setStatus,
                { where: resWhere }
                );

                if (!payload) {
                        response({ message: "order not found", data: payload })( res, 404);
                    }
                        response({ message: "customer updated order", data: payload })(res, 200);
            }
            catch(error) {
                console.log(error);
            }
    }

    static async deleteCustomers(req, res) {
        try {
            const payload = await customers.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (payload) {
                response({ message: "customer deleted", data: payload })(res, 200);
            }
            response({ message: "customer not found", data: payload })(res, 404);
        }catch (error) {
            console.log(error);
        }
    }
}


module.exports = customerController;