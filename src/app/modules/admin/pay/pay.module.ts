import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const payRoutes: Route[] = [
  {
      path     : '',
      component: PayComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(payRoutes),
        SharedModule

  ],
  declarations: [PayComponent]
})
export class PayModule { }
