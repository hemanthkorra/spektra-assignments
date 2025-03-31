import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisableComponent } from './disable/disable.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DisableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
