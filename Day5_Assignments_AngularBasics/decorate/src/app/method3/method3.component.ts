import { Component } from '@angular/core';

@Component({
  selector: 'app-method3',
  imports: [],
  template: `<div>
  <h2>This is method 3(Multiple Template)</h2>
  <i>It can contai multiple liens of code in the template</i>
  <p>When we use back tick in css we can also apply styles to multiple selectors</p>
  </div>`,
  styles: [`h2{
    color: blue;
  }
  i{
    background-color: yellow;
    font-size: 20px;
  }
  p{
    color: orange;
    font-family: Arial;
    font-size: 16px;
  }`]
})
export class Method3Component {

}
