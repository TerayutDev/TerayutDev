import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdoneComponent } from './fdone.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';


const loginRoutes: Route[] = [
  {
      path     : '',
      component: FdoneComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [FdoneComponent]
})
export class FdoneModule { }
