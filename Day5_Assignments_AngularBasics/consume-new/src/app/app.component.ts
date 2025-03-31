import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTransferService } from 'msgs-transfer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTransferService],
  // providers: [DataTransferService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consume-new';
  
  constructor(private msgsTransferService: DataTransferService) {
    this.msgsTransferService.logmsg("Hello from consume-new");
  }
}
