import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPAComponent } from './CPA.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const CPARoute: Route[] = [
  {
      path     : '',
      component: CPAComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CPARoute),
    SharedModule
  ],
  declarations: [CPAComponent]
})
export class CPAModule { }
