import { Category } from './category';

export class CategoryRepository {
  private categories: Category[] = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'PC' },
    { id: 3, name: 'TV' },
  ];
  getCategories() {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find((p) => p.id == id);
  }
}
