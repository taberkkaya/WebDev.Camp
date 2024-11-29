import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [ProductService],
})
export class AppComponent {
  title = 'ng-app';

  constructor(private productService: ProductService) {}

  createProduct() {
    const product = {
      id: 5,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '1.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 1,
    };

    this.productService
      .createProduct(product)
      .subscribe((data) => console.log(data));
  }
}
