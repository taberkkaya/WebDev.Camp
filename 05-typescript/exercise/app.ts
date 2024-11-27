import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;
result = _productService.getProducts();
let p2 = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = "Iphone";
p.price = 6000;
p.category = "Phone";

_productService.saveProduct(p);
_productService.deleteProduct(p2);

console.log(result);
