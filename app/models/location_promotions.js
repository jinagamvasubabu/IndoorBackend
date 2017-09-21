var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationPromotionSchema = new Schema ({
    location_id: { type: Schema.Types.ObjectId, ref: 'product_locations' },
    promotions: [{
      title: String,
      Message: String
    }]
});


module.exports = mongoose.model('location_promotions', locationPromotionSchema);
