import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
// we are importing the router service to navigate to the new route
@Component({
  selector: 'app-department-list',
  imports: [],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  people: any[] = [];

  constructor(private peopleService: EmployeeService, private router: Router) {
    this.people = this.peopleService.getPeople(); // Fetch people from service
  }

//   constructor(private router: Router){}
// // We are injecting the service
 onselect(deartment: any)
 {
   this.router.navigate(['/deartment', deartment.id])
 }
}
