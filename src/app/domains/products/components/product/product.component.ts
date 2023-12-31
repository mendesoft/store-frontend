import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/components/counter/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;


  @Output() addToCart = new EventEmitter(); //Hijo al padre


  addToCartHandler(){
    this.addToCart.emit(this.product);
  }


}
