import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompComponent } from './home-comp/home-comp.component';



@NgModule({
  declarations: [
    HomeCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeCompComponent
  ]
})
export class HomeModule { }
