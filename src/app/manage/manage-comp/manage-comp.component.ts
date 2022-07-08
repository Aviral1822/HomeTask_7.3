import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service"
@Component({
  selector: 'app-manage-comp',
  templateUrl: './manage-comp.component.html',
  styleUrls: ['./manage-comp.component.css']
})
export class ManageCompComponent implements OnInit {

  ngOnInit(): void {
  }
  
  users:any;
  constructor(private userData:UserService)
  {
    console.log(userData.users());
    this.users=userData.users();
  }
  id:String="";
 
  selectedUser:any;

  onSelect(user:any){
     this.selectedUser=user;
     
     this.id=user.id;
  }
}
