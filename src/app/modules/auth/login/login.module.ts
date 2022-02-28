import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';




const loginRoutes: Route[] = [
  {
      path     : '',
      component: LoginComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
