import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpassComponent } from './cpass.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const loginRoutes: Route[] = [
  {
      path     : '',
      component: CpassComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [CpassComponent]
})
export class CpassModule { }
