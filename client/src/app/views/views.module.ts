import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterPageComponent } from './router-page/router-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { TeamDashboardPageComponent } from './team-dashboard-page/team-dashboard-page.component';
import { UserDashboardPageComponent } from './user-dashboard-page/user-dashboard-page.component';



@NgModule({
  declarations: [
    RouterPageComponent,
    PlanningPageComponent,
    TeamDashboardPageComponent,
    UserDashboardPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
