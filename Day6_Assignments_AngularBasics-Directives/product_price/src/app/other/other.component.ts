import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  @Input() product_price: number=0;
  @Input() product_quantity: number=0;
}
