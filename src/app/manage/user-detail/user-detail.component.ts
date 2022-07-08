import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input() userDetail :{id:string,firstName:string,lastName:string,age:number,login:string,password:string,isDeleted:boolean}= {id:"One user",firstName:"Aviral",lastName:"Srivastava",age:23,login:"avisri007",password:"100XXX100",isDeleted:true};
isValid:boolean=true;
  constructor() { 
 
    this.isValid=this.userDetail.isDeleted;
  }

  ngOnInit(): void {
  }



}
