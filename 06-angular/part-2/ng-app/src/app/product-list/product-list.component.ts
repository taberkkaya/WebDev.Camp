import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[];
  // selectedProduct: Product | null;
  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
    // this.products = this.productRepository.getProducts();
  }
  // selectProduct(product: Product) {
  //   this.selectedProduct = product;
  // }
  // unselectProduct() {
  //   this.selectedProduct = null;
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['categoryId']) {
        this.products = this.productRepository.getProductsByCategoryId(
          params['categoryId']
        );
      } else {
        this.products = this.productRepository.getProducts();
      }
    });
  }
}
