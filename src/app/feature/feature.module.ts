import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ApplyLeaveComponent, LeaveStatusComponent, LeaveTypeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class FeatureModule { }
