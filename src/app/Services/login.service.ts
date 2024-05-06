import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NursesService } from '../Services/nurses.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Nurses: any[] = [];
  constructor(private nursesService: NursesService) {}

  login(Id: string): any {
    this.Nurses = this.nursesService.list;

    const filteredNurse = this.Nurses.find(item => item.ID === Id);
    if (filteredNurse) {
      return filteredNurse;
    } else {
      return null;
    }
  }
}