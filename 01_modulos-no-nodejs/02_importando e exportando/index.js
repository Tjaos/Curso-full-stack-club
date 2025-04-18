const { createProduct, Product } = require("./product");


require('./hello');

const product = createProduct(1, 'Iphone', 7000);

const product2 = new Product(2, 'Mac', 1600)

console.log(product.getInfo());
console.log(product2.getInfo());