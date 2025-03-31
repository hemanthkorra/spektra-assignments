import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 103, name: 'Charlie Brown', email: 'charlie@example.com' }
  ];

  getEmployees() {
    return this.employees; // Returning employee details
  }
}
