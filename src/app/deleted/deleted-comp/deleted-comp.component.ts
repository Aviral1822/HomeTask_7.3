import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service"

@Component({
  selector: 'app-deleted-comp',
  templateUrl: './deleted-comp.component.html',
  styleUrls: ['./deleted-comp.component.css']
})
export class DeletedCompComponent implements OnInit {


 

  ngOnInit(): void {
  }

  valid:boolean = true;
  users:any;

  constructor(private userData:UserService)
  {
    console.log(userData.users());
    this.users=userData.users();
  }

  user:any;

  onSelect(user:any){
    //user.isDeleted=true;
 

    user.isDeleted=(user.isDeleted)?false:true;
  }

}
