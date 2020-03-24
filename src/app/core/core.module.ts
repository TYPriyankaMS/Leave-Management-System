import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavTopComponent } from './header/nav-top/nav-top.component';



@NgModule({
  declarations: [
    HeaderComponent, NavTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]

})
export class CoreModule { }
