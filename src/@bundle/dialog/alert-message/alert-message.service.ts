import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertMessageModel } from 'app/core/model/dialog-model';
import { AlertMessageComponent } from './alert-message.component';


@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  onClickClose: BehaviorSubject<any>;
constructor(
  private dialog: MatDialog
) { 

  this.onClickClose = new BehaviorSubject(false);
}


open(data: AlertMessageModel): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const dialogRef = this.dialog.open(AlertMessageComponent, {
      width: '400px',
      data: data,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {
      this.onClickClose.next(res);
      resolve(res || false);
    });
  });
}
}
