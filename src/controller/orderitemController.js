'use strict'

const { order_items } = require('../db/models');
const response = require('../helper/response');

class orderitemController {
    static async getAllOrderitem(req, res) {
        try {
            const payload = await order_items.findAll();
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async getOrderitemId(req, res) {
        try {
            const payload = await order_items.findByPk(req.params.id);
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async createOrderitem(req, res) {
        try {
          const payload = await order_items.create({
            order_id: req.body.order_id,
            product_id: req.body.product_id
          });
          response({ message: "succes orderItems created", data: payload })(res);
        } catch (error) {
          console.log(error);
        }
    }

    static async updateOrderitem(req, res) {
        try {
            const payload = await order_items.update({
              order_id: req.body.order_id,
              product_id: req.body.product_id,
            },
            { where: { id: req.params.id } }
            );
    
            if (!payload) {
                    response({ message: "orderItems not found", data: payload })( res, 404);
                }
                    response({ message: "orderItems updated", data: payload })(res, 200);
        }
        catch(error) {
            console.log(error);
        }
    }

    static async deleteOrderitem(req, res) {
        try {
            const payload= await order_items.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (payload) {
                response({ message: "orderItems deleted", data: payload })(res, 200);
            }
            response({ message: "orderItems not found", data: payload})(res, 404);
        }catch (error) {
            console.log(error);
        }
      }

    
}

module.exports = orderitemController;