import { Product } from '../products/product.model';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '1.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '2.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '3.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '1.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '2.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 6,
      name: 'Lorem, ipsum dolor.',
      price: 2000,
      imgUrl: '3.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
      categoryId: 3,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getProductsByCategoryId(id: number): Product[] {
    return this.products.filter((p) => p.categoryId == id);
  }
}
