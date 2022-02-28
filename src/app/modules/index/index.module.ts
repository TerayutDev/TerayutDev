import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    RouterModule.forChild(IndexRoutes),
    FormsModule,
    CoreModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
