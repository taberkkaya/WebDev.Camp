import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Samsung 0", "Phone", 1000),
      new Product(2, "Samsung 1", "Phone", 2000),
      new Product(3, "Samsung 2", "Phone", 3000),
      new Product(4, "Samsung 3", "Phone", 4000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
