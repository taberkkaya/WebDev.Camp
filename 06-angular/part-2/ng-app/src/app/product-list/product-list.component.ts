import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[];
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }
}
