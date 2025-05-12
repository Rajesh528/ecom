import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest Android smartphone with high-end specs.',
      price: 699,
      imageUrl: 'https://source.unsplash.com/featured/?smartphone',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Powerful laptop for productivity and gaming.',
      price: 1199,
      imageUrl: 'https://source.unsplash.com/featured/?laptop',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      price: 199,
      imageUrl: 'https://source.unsplash.com/featured/?headphones',
    },
    {
      id: 4,
      name: 'Watch',
      description: 'Smartwatch with health and fitness tracking.',
      price: 149,
      imageUrl: 'https://source.unsplash.com/featured/?watch',
    },
     {
      id: 1,
      name: 'Smartphone',
      description: 'Latest Android smartphone with high-end specs.',
      price: 699,
      imageUrl: 'https://source.unsplash.com/featured/?smartphone',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Powerful laptop for productivity and gaming.',
      price: 1199,
      imageUrl: 'https://source.unsplash.com/featured/?laptop',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      price: 199,
      imageUrl: 'https://source.unsplash.com/featured/?headphones',
    },
    {
      id: 4,
      name: 'Watch',
      description: 'Smartwatch with health and fitness tracking.',
      price: 149,
      imageUrl: 'https://source.unsplash.com/featured/?watch',
    }
  ];
}
