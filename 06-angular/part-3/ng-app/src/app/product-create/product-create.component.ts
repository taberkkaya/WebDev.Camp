import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-product-create',
  standalone: false,
  providers: [CategoryService],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  saveProduct(
    name: any,
    price: any,
    imgUrl: any,
    desc: any,
    isActive: any,
    categoryId: any
  ) {
    const product = {
      id: 5,
      name: name.value,
      price: price.value,
      imgUrl: imgUrl.value,
      desc: desc.value,
      isActive: isActive.checked,
      categoryId: categoryId.value,
    };

    this.productService.createProduct(product).subscribe((data) => {
      this.router.navigate(['/products']);
    });
  }
}
