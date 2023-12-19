import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/components/counter/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;


  @Output() addToCart = new EventEmitter(); //Hijo al padre


  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit('hola este msg es desde el hijo ' + this.title);
  }


}
