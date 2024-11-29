import { Component } from '@angular/core';
import { CategoryRepository } from '../models/category.repository';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  providers: [CategoryService],
})
export class CategoryListComponent {
  categories: Category[];
  selectedCategory?: Category | null;
  displayAll = true;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
