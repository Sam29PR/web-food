import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPaymentMethod: string = '';

  paymentMethods: string[] = ['Credit Card', 'Debit Card', 'PayPal', 'Cash'];

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
    console.log(`Selected Payment Method: ${method}`);
  }

  confirmPayment(): void {
    if (this.selectedPaymentMethod) {
      alert(`Payment confirmed with: ${this.selectedPaymentMethod}`);
    } else {
      alert('Please select a payment method.');
    }
  }
}
