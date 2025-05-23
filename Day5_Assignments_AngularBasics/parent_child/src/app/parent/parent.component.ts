import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  username: string = 'This is parent component';
  childdata: string = '';
  parentmethod(data: string)
  {
    this.childdata = data;
  }
}
