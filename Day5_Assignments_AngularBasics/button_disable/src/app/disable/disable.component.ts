import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-disable',
  imports: [FormsModule],
  templateUrl: './disable.component.html',
  styleUrl: './disable.component.css'
})
export class DisableComponent {
text: string='';
val: boolean=true;
 check(){
  if(this.text.length>0){
    this.val=false;
  }
  else{
    this.val=true;
  }
}
}
