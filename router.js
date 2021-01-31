const router = require('express').Router();
const customerController = require('./src/controller/customerController');
const driverController = require('./src/controller/driverController');

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

module.exports = router;