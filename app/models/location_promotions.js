var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationPromotionSchema = new Schema ({
    productLocation: { type: Schema.Types.Object, ref: 'product_locations' },
    promotions: [{
      title: String,
      Message: String
    }],
    productLocationFrnId: Number
});


module.exports = mongoose.model('location_promotions', locationPromotionSchema);
