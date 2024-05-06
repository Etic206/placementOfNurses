import { NursesService } from '../../Services/nurses.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']

})
export class MyAccountComponent implements OnInit {

  Nurses: any[] = []; 
  nurseDetails: any;

  constructor(private nursesService: NursesService) {}

  ngOnInit(): void {
    //this.Nurses = this.nursesService.list;
    //this.nurseDetailsList = this.nursesService.getNurseDetailsList(this.Nurses);
  }

nurseDetailsList: any[] = [];

getNurseDetails() {
  console.log('getNurseDetails-------------')
  this.Nurses = this.nursesService.list;
  this.nurseDetailsList = this.nursesService.getNurseDetailsList(this.Nurses);
 }
}
