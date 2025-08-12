// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';

  subscribe() {
    if (this.email) {
      alert(`Subscribed with: ${this.email}`);
      this.email = '';
    } else {
      alert('Please enter a valid email address');
    }
  }
}
