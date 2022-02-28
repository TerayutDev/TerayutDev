import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotpComponent } from './cotp.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';


const loginRoutes: Route[] = [
  {
      path     : '',
      component: CotpComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [CotpComponent]
})
export class CotpModule { }
