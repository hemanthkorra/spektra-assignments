import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employees: any[] = [];
  showEmployees = false; // Initially, employees are hidden

  constructor(private employeeService: EmployeeService) {}

  displayEmployees() {
    this.employees = this.employeeService.getEmployees(); // Fetch employees from service
    this.showEmployees = true; // Show employee list
  }
}
