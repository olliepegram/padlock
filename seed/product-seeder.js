var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://vm3.sm-planet.net/images/t-shirt/1/white.jpg',
        title: 'T-Shirt',
        description: 'Awesome shirt!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4001_102_5_3.jpg',
        title: 'Black shirt',
        description: 'nice fabric...',
        price: 20
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
