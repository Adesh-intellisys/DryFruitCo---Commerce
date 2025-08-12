
// src/app/components/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // Refresh view
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) =>
      total + (item.price - (item.price * item.discount / 100)) * item.quantity, 0);
  }
}
