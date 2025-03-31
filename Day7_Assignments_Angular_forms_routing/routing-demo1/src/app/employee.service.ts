import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private people = [
    { id: 1, name: 'Alice Johnson', technology: 'Angular', details: 'Expert in Angular and frontend development' },
    { id: 2, name: 'Bob Smith', technology: 'React', details: 'Specialist in React and UI/UX design' },
    { id: 3, name: 'Charlie Brown', technology: 'Python', details: 'Machine Learning and backend expert' }
  ];

  getPeople() {
    return this.people; // Return the list of people
  }

  getPersonById(id: number) {
    return this.people.find(person => person.id === id); // Find person by ID
  }
}
