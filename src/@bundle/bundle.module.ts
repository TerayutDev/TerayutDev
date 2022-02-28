import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NgxSpinnerModule } from "ngx-spinner";
import { AlertMessageComponent } from "./dialog/alert-message/alert-message.component";
import { ConfirmButtonComponent } from "./dialog/confirm-button/confirm-button.component";
import { ConfirmDialogComponent } from "./dialog/confirm-dialog/confirm-dialog.component";

const BundleComs = [
    ConfirmDialogComponent,
    AlertMessageComponent,
    ConfirmButtonComponent
];
const BundleDialog = [
    ConfirmDialogComponent,
    AlertMessageComponent,
    ConfirmButtonComponent
]
@NgModule({
    imports:[
        NgxSpinnerModule,
        MatDialogModule,
        MatButtonModule,
    ],
    exports:[
        NgxSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        BundleComs
    ],
    declarations:[BundleComs],
    entryComponents:[BundleDialog]
})

export class BundleModule{}