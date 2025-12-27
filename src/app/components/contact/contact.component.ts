import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation]
})
export class ContactComponent {

  state: 'hidden' | 'visible' = 'hidden';
  showSuccess = false;

  sendEmail(form: any, e: Event) {
    e.preventDefault();

    if (form.invalid) return;

    emailjs.sendForm(
      'service_acfvrwb',
      'template_h8j0sui',
      e.target as HTMLFormElement,
      'phkpfANJXeJlBF5_Y'
    ).then(() => {
      this.showSuccess = true;
      form.resetForm();

      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);

    }).catch((err) => {
      console.error('EmailJS Error:', err);
      alert('Failed to send message. Please try again later.');
    });
  }
}
