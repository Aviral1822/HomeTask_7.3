import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

  }
  
myData=[
  {id:"One user",firstName:"Aviral",lastName:"Srivastava",age:23,login:"avisri007",password:"100XXX100",isDeleted:true},
  {id:"Two user",firstName:"Saurav",lastName:"Shukla",age:23,login:"saurabhshukla111",password:"200XXX200",isDeleted:false},
  {id:"Three user",firstName:"Pranjal",lastName:"Srivastava",age:22,login:"pranjal222",password:"300XXX300",isDeleted:true},
  {id:"Four user",firstName:"Sumit",lastName:"Srivastava",age:22,login:"sumitsri900",password:"400XXX400",isDeleted:false},
  {id:"Five user",firstName:"Ayush",lastName:"Srivastava",age:23,login:"ayushsr987",password:"500XXX500",isDeleted:true},
  {id:"Six user",firstName:"Vibhor",lastName:"Thakur",age:23,login:"vibhrthakur277",password:"600XXX600",isDeleted:false},
  {id:"Seven user",firstName:"Sankalp",lastName:"Srivastava",age:23,login:"spankysri165",password:"700XXX700",isDeleted:true},
  {id:"Eight user",firstName:"Vanshika",lastName:"Malik",age:22,login:"vanshimalik123",password:"800XXX800",isDeleted:true},
  {id:"Nine user",firstName:"Harshita",lastName:"Sachdeva",age:22,login:"harrudeva654",password:"900XXX900",isDeleted:false},
  {id:"Ten user",firstName:"Yogya",lastName:"Khurana",age:23,login:"yogikhur743",password:"000XXX000",isDeleted:true}
]
  users(){
    return this.myData
  }
}
