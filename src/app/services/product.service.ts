import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
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
    
  ];
  private apiUrl = 'https://api.example.com/products'; // Your API URL

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.apiUrl);
    return of(this.mockProducts);
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Update an existing product
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
