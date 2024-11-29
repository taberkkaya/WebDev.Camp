import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../../models/product.repository';

@Component({
  selector: 'product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // @Input() product: Product;
  // @Output() unselectEvent = new EventEmitter<void>();

  // unselectProduct() {
  //   this.unselectEvent.emit();
  // }

  product: Product | undefined;
  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['productId'];
      this.product = this.productRepository.getProductById(id);
    });
  }
}
