import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from '../../src/app/Components/login/login.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {
  title = 'placementOfNurses';
}
