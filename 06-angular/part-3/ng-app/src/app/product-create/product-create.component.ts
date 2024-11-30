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

  saveProduct() {
    // name: any,
    // price: any,
    // imgUrl: any,
    // desc: any,
    // isActive: any,
    // categoryId: any
    // if (name.value == '' || name.value.length < 3) {
    //   this.error = 'Name must be not empty and min 3 characters.';
    //   return;
    // }
    // if (price.value == '') {
    //   this.error = 'Price must be not empty.';
    //   return;
    // }
    // if (desc.value == '') {
    //   this.error = 'Description must be not empty.';
    //   return;
    // }
    // if (imgUrl.value == '') {
    //   this.error = 'Image url must be not empty.';
    //   return;
    // }
    // if (categoryId.value == 0) {
    //   this.error = 'Category must be selected.';
    //   return;
    // }
    // const extensions = ['jpeg', 'jpg', 'png'];
    // const extension = imgUrl.value.split('.').pop();
    // if (extensions.indexOf(extension) == -1) {
    //   this.error = 'Image extension must be jpeg, jpg or png';
    //   return;
    // }
    // const product = {
    //   id: 5,
    //   name: name.value,
    //   price: price.value,
    //   imgUrl: imgUrl.value,
    //   desc: desc.value,
    //   isActive: isActive.checked,
    //   categoryId: categoryId.value,
    // };
    // this.productService.createProduct(product).subscribe((data) => {
    //   this.router.navigate(['/products']);
    // });
    console.log(this.model);
  }
}
