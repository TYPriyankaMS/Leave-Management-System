import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveStatusComponent } from './feature/leave-status/leave-status.component';
import { ApplyLeaveComponent } from './feature/apply-leave/apply-leave.component';
import { LeaveTypeComponent } from './feature/leave-type/leave-type.component';


const routes: Routes = [
  { path: 'leavestatus', component: LeaveStatusComponent },
  { path: 'apply-leave', component: ApplyLeaveComponent },
  { path: 'leaveType', component: LeaveTypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
