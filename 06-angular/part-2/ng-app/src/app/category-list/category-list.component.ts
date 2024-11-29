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
  selectedCategory: Category | null;
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  selectCategory(category: Category) {
    if (this.selectedCategory) {
      if (this.selectedCategory != category) {
        this.selectedCategory = category;
      } else {
        this.selectedCategory = null;
      }
    } else {
      this.selectedCategory = category;
    }
  }
}
