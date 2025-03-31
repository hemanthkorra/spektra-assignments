import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: User;  

  constructor() {
    this.user = new User('Hemanth', 22);  
  }
}

class User {
  constructor(public name: string, public age: number) {}
}