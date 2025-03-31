import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  students = [
    { name: 'John', id: 1, gender: 'M', age: '2004-07-20', coursefee: 15000 },
    { name: 'Doe', id: 2, gender: 'M', age: '2004-08-21', coursefee: 25000 },
    { name: 'Smitha', id: 3, gender: 'F', age: '2004-09-22', coursefee: 35000 },
    { name: 'Sara', id: 4, gender: 'F', age: '2004-01-23', coursefee: 45000 }
  ];

  malestudents: number=this.students.filter(student => student.gender === 'M').length;
  femalestudents: number= this.students.filter(student => student.gender === 'F').length;;
  totalstudents: number= this.students.length;
}
