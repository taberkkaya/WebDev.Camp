import { Category } from './category';
import { Product } from './product';

export class CategoryRepository {
  private categories: Category[] = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'PC' },
    { id: 3, name: 'TV' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
