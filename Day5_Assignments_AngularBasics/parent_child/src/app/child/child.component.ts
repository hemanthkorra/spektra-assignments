import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() usernames: string = '';
  @Output() notify = new EventEmitter<string>();
  @Output() count: number = 0;
  passdata() {
    this.notify.emit('Data from child component');
  }
}
