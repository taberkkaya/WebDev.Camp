import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    id: 1,
    name: 'Iphone 3',
    price: 20000,
    imgUrl: 'https://picsum.photos/id/237/200/300',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tenetur eos perferendis laudantium cumque similique minus exercitationem aliquid deserunt!',
    isActive: false,
  };

  productList = ['Lorem', 'lorem', 'lore.'];
  products: any = [
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
      isActive: false,
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
}
