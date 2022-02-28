import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetComponent } from './forget.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const loginRoutes: Route[] = [
  {
      path     : '',
      component: ForgetComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [ForgetComponent]
})
export class ForgetModule { }
