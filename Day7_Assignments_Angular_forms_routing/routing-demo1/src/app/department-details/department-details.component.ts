import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department-details',
  imports: [RouterModule],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  person: any = null;

  constructor(private route: ActivatedRoute, private peopleService: EmployeeService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.peopleService.getPersonById(id); // Fetch person details
  }
}
