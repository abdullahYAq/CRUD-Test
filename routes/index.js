var express = require('express');
var router = express.Router();

//var customer = require('../models/customers_mod');

var customerController = require('../controller/customer_cont');


router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to test CRUD api on http://localhost:4522/customers',
    });
});


// router.get('/customers',  function(req, res) {

// });


router.get('/customers/:cusId', customerController.getCustomerById)
router.get('/customers/email/:email', customerController.SearchByEmail)

router.delete('/customers/:cusId', customerController.delCustomerById)

router.patch('/customers/:cusId', customerController.UpdateCustomerById)

router.route('/customers')
.get(customerController.getCustomers)
.post(customerController.saveCustomer);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {data: customerController.getCuctomers});
// });


module.exports = router;
