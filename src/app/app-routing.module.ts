import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActiveCompComponent } from './active/active-comp/active-comp.component';
import { DeletedCompComponent } from './deleted/deleted-comp/deleted-comp.component';
import { ManageCompComponent } from './manage/manage-comp/manage-comp.component';
import {HomeCompComponent} from './home/home-comp/home-comp.component'

const routes: Routes = [
  {
    component:ActiveCompComponent,
    path:'active'
  },
  {
    component:DeletedCompComponent,
    path:'deleted'
  },
  {
    component:ManageCompComponent,
    path:'manage'
  },
  {
    component:HomeCompComponent,
    path:'home'
  },
  {
    component:HomeCompComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
