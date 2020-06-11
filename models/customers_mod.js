var mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    
    name : {type: String, required: true, max: 100},
    Email : {type: String, unique: true, required: true, max: 100},
    address : {type: String, required: true, max: 300}
});

// AuthorSchema
// .virtual('url')
// .get(function () {
//   return '/customer/' + this._id;
// });

var Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;