import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FpassComponent } from './fpass.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const loginRoutes: Route[] = [
  {
      path     : '',
      component: FpassComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [FpassComponent]
})
export class FpassModule { }
