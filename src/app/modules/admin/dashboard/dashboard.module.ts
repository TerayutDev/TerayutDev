import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const dashboardRoute: Route[] = [
  {
      path     : '',
      component: DashboardComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute),
    SharedModule
  
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
