import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMessageModel } from 'app/core/model/dialog-model';


@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertMessageComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: AlertMessageModel
  ) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close(true)
    }

}
