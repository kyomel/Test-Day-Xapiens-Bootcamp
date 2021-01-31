const router = require('express').Router();
const customerController = require('./src/controller/customerController');
const driverController = require('./src/controller/driverController');
const orderController = require('./src/controller/orderController');
const productController = require('./src/controller/productController');
const orderitemController = require('./src/controller/orderitemController');

// Customer routes
router.get('/customers', customerController.getAllCustomer);
router.get('/customers/:id', customerController.getCustomerId);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.put('/customers/updateStatus', customerController.updateStatus);
router.delete('/customers/:id', customerController.deleteCustomers);

// Driver routes
router.get('/drivers', driverController.getAllDriver);
router.get('/drivers/:id', driverController.getDriverId);
router.post('/drivers', driverController.createDriver);
router.put('/drivers/:id', driverController.updateDriver);
router.delete('/drivers/:id', driverController.deleteDrivers);
router.put('/drivers/updateStatus/:id', driverController.updateStatus);

// Order routes
router.get('/orders', orderController.getAllOrder);
router.get('/orders/:id', orderController.getOrderId);
router.post('/orders', orderController.createOrders);
router.put('/orders/:id', orderController.updateOrders);
router.delete('/orders/:id', orderController.deleteOrders);

// Product routes
router.get('/products', productController.getAllProduct);
router.get('/products/:id', productController.getProductId);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// Order Item routes
router.get('/orderitems', orderitemController.getAllOrderitem);
router.get('/orderitems/:id', orderitemController.getOrderitemId);
router.post('/orderitems', orderitemController.createOrderitem);
router.put('/orderitems/:id', orderitemController.updateOrderitem);
router.delete('/orderitems/:id', orderitemController.deleteOrderitem);

module.exports = router;