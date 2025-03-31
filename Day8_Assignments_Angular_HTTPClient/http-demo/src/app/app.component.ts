import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'http-demo';
  users: any = [];

  constructor(private userService: HttpService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      console.log("Fetched Users:", data);
      this.users = data;
    });
  }

  // Fetch and display users

  // Add user and refresh the table
}
