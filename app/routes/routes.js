var products = require('../models/products');
var productLocations = require('../models/product_locations');
var locationPromotions = require('../models/location_promotions');

module.exports = function (app) {

    //get all products
    app.get('/api/all/products', function (req, res) {
      products.find({}, function (err, products) {
          if (err) {
              res.send(err);
          }
          res.json(products);
      });
    });

    //get product by id
    app.get('/api/product/:id', function (req, res) {
        products.findOne({productId: req.params.id}, function(err, product) {
          if (err) {
              res.send(err);
          }
          res.json(product);
        });
    });

    // getProductByLocation
    app.get('/api/location/:prodId', function (req, res) {
        productLocations.findOne({productId: req.params.prodId}, function(err, product) {
          if (err) {
              res.send(err);
          }
          res.json(product);
        });
    });

    // getPromotions by location
    app.get('/api/promotions/:locationId', function (req, res) {
        productLocations.findOne({location_id: req.params.locationId}, function(err, promotions) {
          if (err) {
              res.send(err);
          }
          res.json(promotions);
        });
    });
};
