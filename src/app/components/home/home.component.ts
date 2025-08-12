// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cart: any[] = [];
  constructor(private cartService: CartService) {}
  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert(`${item.title || item.name} `);

  }
   increaseQty(product: any) {
    product.quantity++;
  }

  decreaseQty(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
         
  featuredCategories = [
    { title: 'Dry Fruits', img: 'assets/dryfruits..jpg', price: 100, discount: 20, quantity: 1 },
    { title: 'Organic Foods', img: 'assets/orgnicfoods.jpeg', price: 150, discount: 10, quantity: 1 },
    { title: 'Chocolates', img: 'assets/chocolatesnew.jpg', price: 200, discount: 5, quantity: 1 }
  ];
      
  bestSellers = [
    { title: 'Premium Almonds 250g', img: 'assets/almond 200.jpg', price: 220, discount: 15, quantity: 1 },
    { title: 'Cashews 500g', img: 'assets/cas.jpg', price: 300, discount: 10, quantity: 1 },
    { title: 'Hazelnut kernels 100G ', img: 'assets/hazelnutkernels.jpg', price: 180, discount: 5, quantity: 1 }
  ];

  onSale = [
    { title: 'Walnuts 400g', img: 'assets/walnut400.jpg', price: 320, discount: 25, quantity: 1 },
    { title: 'Organic Dates 500g', img: 'assets/organicdates.jpg', price: 250, discount: 20, quantity: 1 }
  ];

  organicFoods = [
    { title: 'Organic Rice', img: 'assets/OR.jpg', price: 120, discount: 10, quantity: 1 },
    { title: 'Organic Dal', img: 'assets/OD2.jpg', price: 130, discount: 12, quantity: 1 }
  ];

  dryFruits = [
    { title: 'Dry Mango Slices', img: 'assets/drymango.webp', price: 140, discount: 8, quantity: 1 },
    { title: 'Pista Premium', img: 'assets/pista premium.webp', price: 280, discount: 18, quantity: 1 }
  ];

  chocolates = [
    { title: 'Chocolate Almonds', img: 'assets/CA1.jpg', price: 200, discount: 15, quantity: 1 },
    { title: 'Dark Chocolate Figs', img: 'assets/DC1.png', price: 220, discount: 10, quantity: 1 }
  ];
}




