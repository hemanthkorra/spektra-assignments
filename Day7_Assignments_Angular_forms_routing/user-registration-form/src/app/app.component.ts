import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$') // No numbers allowed
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$') // No numbers allowed
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email // Valid email required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8), // At least 8 characters
    ])
  });

  submitted = false;


  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      alert('User Registered Successfully!');
      console.log(this.userForm.value);
    }
  }
}
