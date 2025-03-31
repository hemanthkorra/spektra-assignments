import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible: boolean = true;

  // Array for *ngFor directive
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  isHighlighted: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

}
