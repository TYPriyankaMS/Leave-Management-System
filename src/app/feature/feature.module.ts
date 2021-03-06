import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [LeaveStatusComponent, LeaveTypeComponent, HomeComponent, LeaveRequestComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class FeatureModule { }
