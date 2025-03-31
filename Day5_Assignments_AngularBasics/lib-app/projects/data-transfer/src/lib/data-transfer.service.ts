import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  logmsg(msg: any) {
    console.log("This is from library: ", msg);
  }
}
