// import  Service
var customerServ = require('../services/customer_serv');
//var custo = require('../models/customers_mod')
// export getcustomer function for routes
exports.getCustomers = async function(req, res){

    // var page = req.params.page ? req.params.page : 1;
    // var limit = req.params.limit ? req.params.limit : 10;
    try{
        //console.log("Get Cont")
        var customers = await customerServ.getCustomers();
        return res.json({data: customers});
    } catch (e) {
        return e.message; 
    }
}

// export function to save new customer
exports.saveCustomer = async function(req, res){
    try{
   // console.log(res.params)
        //console.log(req.body)
        //console.log("Save Cont")
    //    var data = ({
    //     "name": req.body.name,
    //     "Email": req.body.Email,
    //     "address": req.body.address
    //    });
    //    console.log(data)
    var name = req.body.name;
    var Email = req.body.Email;
    var address = req.body.address;
       var savedCustomer = await customerServ.saveCustomer(name, Email,address);
       console.log("Saved Cont")
       return res.json({data: savedCustomer});
    }catch(e){
        return  e.message;
    }
}

exports.getCustomerById = async function(req, res){
    try{
        var id = req.params.cusId;
        //console.log("GetById Cont")
        var customer = await customerServ.getCustomers(id);
        return res.json({CustomerData: customer});
    } catch (e) {
        return e.message; 
    }
}

exports.delCustomerById = async function(req, res){
    try{
       // console.log("Del Cont")
        var customer = await customerServ.delCustomersById(req.params.cusId);
        return res.json({CustomerDel: customer});
    } catch (e) {
        return e.message; 
    }
}

exports.UpdateCustomerById = async function(req, res){
    try{
        //console.log("Update Cont")
        if (req.params.cusId){
            var customer = await customerServ.UpdateCustomersById(req.params.cusId, req.body.name, req.body.Email, req.body.address);
        } else {
            var customer = "Id Not Found!";
        }
        return res.json({CustomerUpdated: customer});
    } catch (e) {
        return e.message; 
    }
}

exports.SearchByEmail = async function(req, res){
    try{
        var email = req.params.email;
        //console.log(email)
        if (email){
            var customer = await customerServ.SearchByEmail(email);
        } else{
            var customer = "Nothing Here!";
        }

        return res.json({Found: customer});
    } catch (e) {
        return e.message; 
    }
}