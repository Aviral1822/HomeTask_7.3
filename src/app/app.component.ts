import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {UserService} from './services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hm-7.2';
  users:any;
 
  constructor(private userData:UserService)
  {
    console.log(userData.users());
    this.users=userData.users();
    
  }
 
}
