import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    ManageCompComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ManageCompComponent
  ]
})
export class ManageModule { }
