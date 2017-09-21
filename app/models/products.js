var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    name: String,
    price: Number,
    productId: Number
});

module.exports = mongoose.model('products', productsSchema);
