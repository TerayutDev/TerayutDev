import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisComponent } from './regis.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const regisRoutes: Route[] = [
  {
      path     : '',
      component: RegisComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(regisRoutes),
    SharedModule
  ],
  declarations: [RegisComponent]
})
export class RegisModule { }
