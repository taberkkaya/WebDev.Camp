"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung 0", "Phone", 1000), new Product_1.Product(2, "Samsung 1", "Phone", 2000), new Product_1.Product(3, "Samsung 2", "Phone", 3000), new Product_1.Product(4, "Samsung 3", "Phone", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
