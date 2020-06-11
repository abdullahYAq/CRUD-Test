var customerMod = require('../models/customers_mod');
// Read all Customers
exports.getCustomers = async function(){
    try{
        console.log("Get Serv")
        var customers = await customerMod.find();
        //Console.log(customers)
        return customers;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}
// Save New Custumer
exports.saveCustomer = async function(name, email, address){
    try{
        //console.log("save Serv")
        
        const cust = new customerMod({
            "name": name,
            "Email": email,
            "address": address
        });
        //const cust = new customerMod(data);
        //console.log(cust)
        const savedCustomer = await cust.save();
        console.log("saved Serv")
       // res.status(200).json(savedCustomer);
       return savedCustomer;
    }catch(e){
        throw Error('somthing went wrong.');
    }
}

// Search By Id 
exports.getCustomersById = async function(id){
    try{
        console.log("GetById Serv")
        var customer = await customerMod.findOne({ _id: id });
        //Console.log(customers)
        return customer;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}

exports.delCustomersById = async function(id){
    try{
        console.log("Del Serv")
        console.log(id)
        var customer = await customerMod.remove({_id: id});
        //Console.log(customers)
        return customer;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}


exports.UpdateCustomersById = async function(id, name, email, address){
    try{
        console.log("update Serv")
        var customer = await customerMod.updateOne({_id: id}, { $set : {name: name, Email: email, address: address}});
        //Console.log(customers)
        console.log(customer)
        return customer;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}

exports.SearchByEmail = async function(email){
    try{
        //console.log("GetById Serv")
        var customer = await customerMod.find({"Email": email});
        //Console.log(customers)
        return customer;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}

exports.UpdateCustomerByEmail = async function(emailprams, name, email, address){
    try{
        console.log("update Serv")
        var customer = await customerMod.updateOne({Email: emailprams}, { $set : {name: name, Email: email, address: address}});
        //Console.log(customers)
        //console.log(customer)
        return customer;
    } catch (e){
        throw Error('somthing went wrong.');
    }
}