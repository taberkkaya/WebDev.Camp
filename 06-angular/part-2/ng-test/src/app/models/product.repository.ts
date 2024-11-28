import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 20000,
      imgUrl: 'https://picsum.photos/id/237/200/300',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tenetur eos perferendis laudantium cumque similique minus exercitationem aliquid deserunt!',
      isActive: true,
    },
    {
      id: 1,
      name: 'Iphone',
      price: 20000,
      imgUrl: 'https://picsum.photos/id/237/200/300',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tenetur eos perferendis laudantium cumque similique minus exercitationem aliquid deserunt!',
      isActive: true,
    },
    {
      id: 1,
      name: 'Iphone',
      price: 20000,
      imgUrl: 'https://picsum.photos/id/237/200/300',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tenetur eos perferendis laudantium cumque similique minus exercitationem aliquid deserunt!',
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
