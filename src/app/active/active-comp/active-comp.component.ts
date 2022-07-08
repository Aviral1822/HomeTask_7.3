import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service"
@Component({
  selector: 'app-active-comp',
  templateUrl: './active-comp.component.html',
  styleUrls: ['./active-comp.component.css']
})
export class ActiveCompComponent implements OnInit {
  title='hm-7.2';
ngOnInit(): void {
  }
  users:any;
  constructor(private userData:UserService)
  {
    console.log(userData.users());
    this.users=userData.users();
  }

  user:any;

  onSelect(user:any){
    user.isDeleted=true;
  }
}
