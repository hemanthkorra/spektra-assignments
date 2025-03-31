import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {
    first: '',
    last: '',
    mail: '',
  };

  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      alert("Form Submitted Successfully!");
    }
  }
}
