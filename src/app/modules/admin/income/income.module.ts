import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { TableModule } from 'primeng/table';
const incomeRoute: Route[] = [
  {
      path     : '',
      component: IncomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(incomeRoute),
    //TableModule,
    SharedModule
  ],
  declarations: [IncomeComponent]
})
export class IncomeModule { }
