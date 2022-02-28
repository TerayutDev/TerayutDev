import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotpComponent } from './fotp.component';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';

const loginRoutes: Route[] = [
  {
      path     : '',
      component: FotpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
   SharedModule

  ],
  declarations: [FotpComponent]
})
export class FotpModule { }
