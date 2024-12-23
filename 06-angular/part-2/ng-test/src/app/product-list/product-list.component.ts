import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[];
  selectedProduct: Product | null;
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  unselectProduct() {
    this.selectedProduct = null;
  }
}
