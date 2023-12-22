import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../components/counter/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart = signal<Product[]>([]);
  total = computed(() => this.cart().reduce((total, product) => total + product.price, 0))

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
  }

}
