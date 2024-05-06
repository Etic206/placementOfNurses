import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  idNumber: string = '';
  isNurseDataAvailable: boolean = false;
  nurseDetailsList: any;

  constructor(private logService: LoginService, private router: Router) {}

  onKeyPress(event: any) {
    

    if (event.key === 'Enter') {
      this.check();
    }
  }

  ngOnInit(): void {}

  check(): void {
    console.log('The ID is:', this.idNumber);
    const result = this.logService.login(this.idNumber);
    if (result) {
      console.log('ID exists');
      this.isNurseDataAvailable = true;
      this.nurseDetailsList = result;
    } else {
      console.log('ID does not exist');
      this.isNurseDataAvailable = false;
      this.nurseDetailsList = null;
    }
  }
}
