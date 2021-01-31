'use strict'

const { products } = require('../db/models');
const response = require('../helper/response');

class productController {
    static async getAllProduct(req, res) {
        try {
            const payload = await products.findAll();
            response({ message: "success retrieved", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async getProductId(req, res) {
        try {
            const payload = await products.findByPk(req.params.id);
            response({ message: "success retrieved", data: payload})(res);
        } catch(error) {
            console.log(error);
        }
    }

    static async createProduct(req, res) {
        let name = req.body.name;
        let price= req.body.price;

        try {
            const payload = await products.create({
               name: name,
               price: price,
            });
            response({ message: "success customer created", data: payload })(res);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateProduct(req, res) {
        try {
            const payload = await products.update({
                name: req.body.name,
                price: req.body.price,
              },
                { 
                  where: 
                  { id: req.params.id } 
                }
              );

              if(!payload) {
                    response({ message: "product not found", data: payload })( res, 404);
                }
                    response({ message: "product updated", data: payload })(res, 200);
            } catch(error) {
                console.log(error);
            }
    } 

    static async deleteProduct(req, res) {
        try {
            const payload = await products.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (payload) {
                response({ message: "product deleted", data: payload })(res, 200);
            }
            response({ message: "product not found", data: payload })(res, 404);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productController;