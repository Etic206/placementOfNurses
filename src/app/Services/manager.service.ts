import { Injectable } from '@angular/core';
import { Manager } from '../Models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  manager: Manager;

  constructor() {
    this.manager = {
      ID: "2088042365",
      Last_Name: "Israel",
      First_Name: "Israeli",
      Password: "2015544"
    };
  }
}

