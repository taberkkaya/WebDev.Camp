import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  standalone: false,
  providers: [CategoryService],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css',
})
export class CategoryCreateComponent {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveCategory(name: any) {
    this.categoryService
      .createCategory({ id: 0, name: name.value })
      .subscribe((data) => this.router.navigate(['/products']));
  }
}
