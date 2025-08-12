
// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(i => i.title === item.title);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.cartItems.push({ ...item });
    }
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }
}
