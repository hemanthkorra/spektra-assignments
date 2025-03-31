import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OtherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product = [
    { name: 'Mobile', id: 1, qty: 3, price: 10000 },
    { name: 'Laptop', id: 2, qty: 4, price: 30000 },
    { name: 'Tablet', id: 3, qty: 5, price: 20000 },
    { name: 'Desktop', id: 4, qty: 6, price: 25000 }
  ];

  con_qty = this.product.reduce((sum, item) => sum + item.qty, 0);
  con_price = this.product.reduce((sum, item) => sum + item.price, 0);
}
