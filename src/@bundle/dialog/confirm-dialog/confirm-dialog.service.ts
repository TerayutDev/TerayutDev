import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogInputModel } from 'app/core/model/dialog-model';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

constructor(
  private dialog: MatDialog
) { }

open(config: ConfirmDialogInputModel): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: config
    });
    dialogRef.afterClosed().subscribe(res => {
      resolve(res || false);
    });
  });
}


}
