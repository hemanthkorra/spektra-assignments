import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Method2Component } from './method2/method2.component';
import { Method3Component } from './method3/method3.component';

@Component({
  selector: 'my-componenet',
  imports: [RouterOutlet,Method2Component, Method3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'decorate';
}
