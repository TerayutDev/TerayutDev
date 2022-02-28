import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';

import {TableModule} from'primeng/table'

 import {ToastModule} from 'primeng/toast';
 import {CalendarModule} from 'primeng/calendar';
 import {SliderModule} from 'primeng/slider';
 import {MultiSelectModule} from 'primeng/multiselect';
 import {ContextMenuModule} from 'primeng/contextmenu';
 import {DialogModule} from 'primeng/dialog';
 import {ButtonModule} from 'primeng/button';
 import {DropdownModule} from 'primeng/dropdown';
 import {ProgressBarModule} from 'primeng/progressbar';
 import {InputTextModule} from 'primeng/inputtext';
 import { TabViewModule } from 'primeng/tabview';
 import {FileUploadModule} from 'primeng/fileupload';
 import {MessageService} from 'primeng/api';
import {GMapModule} from 'primeng/gmap';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule,
    MatNativeDateModule,
    CoreModule,
    FlexLayoutModule,
    FuseCardModule,
    FuseAlertModule,

    TableModule,
     ToastModule,
    CalendarModule,
     SliderModule,
     MultiSelectModule,
     ContextMenuModule,
     DialogModule,
     ButtonModule,
     DropdownModule,
    ProgressBarModule,
     InputTextModule,
    TabViewModule,
    FileUploadModule,
    // MessageService,
     GMapModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule,
    MatNativeDateModule,
    CoreModule,
    FlexLayoutModule,
    FuseCardModule,
    FuseAlertModule,

    TableModule,
     ToastModule,
     CalendarModule,
     SliderModule,
     MultiSelectModule,
     ContextMenuModule,
     DialogModule,
     ButtonModule,
    DropdownModule,
     ProgressBarModule,
     InputTextModule,
     TabViewModule,
     FileUploadModule,
    //MessageService,
     GMapModule,
    ]
})
export class SharedModule
{
}
