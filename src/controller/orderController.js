'use strict'

const { orders, order_items } = require('../db/models');
const response = require('../helper/response');

class orderController {
    static async getAllOrder(req, res) {
        try {
            const payload = await orders.findAll();
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async getOrderId(req, res) {
        try {
          const payload = await orders.findByPk(req.params.id);
          response({ message: "succes retrieved", data: payload })(res);
        } catch (error) {
          console.log(error);
        }
    }

    static async createOrders(req, res) {
        try {
            const payload = await orders.create({
                user_id : req.body.user_id,
                status : req.body.status,
                driver_id : req.body.driver_id,
                include: {
                    model: orders,
                    product_id: req.body.product_id,
                    quantity: req.body.quantityt,
                }
            })
          response({ message: "succes order created", data: payload })(res);
        
        } catch (error) {
          console.log(error);
        }
    
    }

    static async updateOrders(req, res) {
        try {
            const payload = await orders.update({
                user_id : req.body.user_id,
                status : req.body.status,
                driver_id : req.body.driver_id,
            },
                {
                    where: { id: req.params.id }
                }
            )
            if (!payload) {
                response({ message: "order not found", data: payload })( res, 404);
            }
                response({ message: "order updated", data: payload })(res, 200);
        }
        catch(error) {
            console.log(error);
        }
    
    }

    static async deleteOrders(req, res) {
        try {
            const payload = await orders.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (payload) {
                response({ message: "order deleted", data: payload })(res, 200);
            }
                response({ message: "order not found", data: payload })(res, 404);
        }catch (error) {
            console.log(error);
        }
      }
}

module.exports = orderController;