import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../components/counter/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  url :string = "https://api.escuelajs.co/api/v1/products"
  constructor() { }


  getProducts() {
    return this.http.get<Product[]>(this.url)
  }


}
