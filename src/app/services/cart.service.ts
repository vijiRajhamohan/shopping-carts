import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product{
  id: number;
  name: string;
  price: number;
  quantity: any;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Dal', price: 80.00, quantity: '500g', amount:0},
    { id: 1, name: 'oil', price: 90.00,  quantity: '1L', amount:0},
    { id: 2, name: 'honey', price: 300.00, quantity: '500l', amount:0},
    { id: 3, name: 'rice', price: 60.00,  quantity: '5kg', amount:0},
    { id: 4, name: 'chilly', price: 60.00,  quantity: '5kg', amount:0},
    { id: 5, name: 'ghee', price: 200.00,  quantity: '150g', amount:0},
    { id: 6, name: 'tea', price: 40.00,  quantity: '100g', amount:0},
    { id: 7, name: 'coffee', price: 60.00,  quantity: '100g', amount:0},
    { id: 8, name: 'sugar', price: 60.00,  quantity: '1kg', amount:0},
    { id: 9, name: 'wheat flour', price: 60.00,  quantity: '1kg', amount:0},
    { id: 10, name: 'cumin', price: 60.00,  quantity: '100g', amount:0},
  ];
private cart = [];
private cartItemCount = new BehaviorSubject(0);
  constructor() { }
  getProducts(){
    return this.data;
  }
  getCart(){
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }
  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
  for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        // eslint-disable-next-line eqeqeq
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
