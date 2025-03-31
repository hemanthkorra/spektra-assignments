import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string = "Good Morning Vijayanth 🌞"; 
  
  changeMessage() {
    this.message = "Good Evening Hemanth 🌞"; 
    //here the message is a property of the HelloWorldComponent class without this key words TS would not know message is class property
    setTimeout(() => {
      this.message = "Good Morning Vijayanth 🌞"; 
    }, 2000);
  }
  
}
