import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';



@NgModule({
  declarations: [ApplyLeaveComponent, LeaveStatusComponent, LeaveTypeComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
