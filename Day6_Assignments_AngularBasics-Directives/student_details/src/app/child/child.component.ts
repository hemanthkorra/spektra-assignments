import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() C_malestudents: number=0;
  @Input()C_femalestudents: number=0;
  @Input() C_totalstudents: number=0;
}
