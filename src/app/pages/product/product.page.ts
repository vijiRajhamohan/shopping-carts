import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit{
 cart = [];
 products = [];
 cartItemCount: BehaviorSubject<number>;
 constructor(private cartService: CartService, private modalCtrl: ModalController) {}
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
}
openCart(){

}

}
