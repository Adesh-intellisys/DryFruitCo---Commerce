import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      alert('Message sent successfully!');
      console.log('Form Data:', form.value);
      form.reset();
    }
  }
}
