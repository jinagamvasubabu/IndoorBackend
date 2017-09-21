var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productLocationSchema = new Schema({
      product: { type: Schema.Types.Object, ref: 'products' },
      location: {
        aisle: Number,
        orientationCode: Number,
        modSequence: Number,
        shelfCode: String,
        productPosition: Number,
        location_String: String
      },
      coordinates: {
        latitude: Number,
        Longitude: Number,
        Floor: Number
      },
      productFrnId: Number,
      productLocationId: Number
});

module.exports = mongoose.model('product_locations', productLocationSchema);
