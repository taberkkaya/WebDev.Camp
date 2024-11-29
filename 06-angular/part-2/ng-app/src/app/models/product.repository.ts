import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Lorem, ipsum dolor.',
      imgUrl: '1.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
    },
    {
      id: 2,
      name: 'Lorem, ipsum dolor.',
      imgUrl: '2.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
    },
    {
      id: 3,
      name: 'Lorem, ipsum dolor.',
      imgUrl: '3.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis?',
      isActive: true,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }
}
