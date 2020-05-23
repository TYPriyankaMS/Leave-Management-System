import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveStatusComponent } from './feature/leave-status/leave-status.component';
import { HomeComponent } from './feature/home/home.component';
import { LeaveRequestComponent } from './feature/leave-request/leave-request.component';


const routes: Routes = [

  { path: 'leavestatus', component: LeaveStatusComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
