import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  categories = [
    {
      title: 'Chocolates',
      image: 'assets/chocolates1.png',
      route: '/chocolates'
    },
    {
      title: 'Dry Fruits',
      image: 'assets/dryfruits1.png',
      route: '/dryfruits'
    },
    {
      title: 'Spices',
      image: 'assets/spices1.png',
      route: '/spices'
    },
    {
      title: 'Organic Foods',
      image: 'assets/organicfoods1.jpg',
      route: '/organic'
    },
  ];
}
