import { Component } from '@angular/core';
import { CategoryRepository } from '../models/category.repository';
import { Category } from '../models/category';

@Component({
  selector: 'category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: Category[];
  selectedCategory?: Category | null;
  categoryRepository: CategoryRepository;

  displayAll = true;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
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
