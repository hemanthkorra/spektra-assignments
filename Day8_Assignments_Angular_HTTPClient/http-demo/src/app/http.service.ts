import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }



  // Function to fetch all users
  getAllUsers() {
    return this.http.get("http://localhost:3000/users"); // ✅ Correct path
  }
}
