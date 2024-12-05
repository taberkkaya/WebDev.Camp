import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: false,
  providers: [CategoryService],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  categories: Category[] = [];
  error: string = '';
  model: any = {
    name: 'Lorem.',
    price: 1,
    imgUrl: '1.jpeg',
    desc: 'Lorem#>111111',
    isActive: true,
    categoryId: '-OCtudhq2XOYT9hSnxWd',
  };
  //two way binding

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

  saveProduct(form: NgForm) {
    const extensions = ['jpeg', 'jpg', 'png'];
    const extension = this.model.imgUrl.split('.').pop();
    if (extensions.indexOf(extension) == -1) {
      this.error = 'Image extension must be jpeg, jpg or png';
      return;
    }
    if (this.model.categoryId == 0) {
      this.error = 'Category must be selected.';
      return;
    }

    const product = {
      id: 5,
      name: this.model.name,
      price: this.model.price,
      imgUrl: this.model.imgUrl,
      desc: this.model.desc,
      isActive: this.model.isActive,
      categoryId: this.model.categoryId,
    };

    if (form.valid) {
      this.productService.createProduct(product).subscribe((data) => {
        this.router.navigate(['/products']);
      });
    } else {
      this.error = 'Control form.';
      return;
    }
    console.log(this.model);
  }
}
