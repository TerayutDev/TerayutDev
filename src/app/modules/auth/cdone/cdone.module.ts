import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdoneComponent } from './cdone.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';


const loginRoutes: Route[] = [
  {
      path     : '',
      component: CdoneComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [CdoneComponent]
})
export class CdoneModule { }
