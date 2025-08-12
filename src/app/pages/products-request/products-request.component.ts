// src/app/pages/products-request/products-request.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-request',
  templateUrl: './products-request.component.html',
  styleUrls: ['./products-request.component.css']
})
export class ProductsRequestComponent {
  formData = {
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (
      this.formData.name &&
      this.formData.contact &&
      this.formData.email
    ) {
      console.log('Form Submitted:', this.formData);
      alert('Request submitted successfully!');
      this.formData = {
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Please fill out required fields.');
    }
  }
}
