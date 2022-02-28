import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmButtonInputModel } from 'app/core/model/dialog-model';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent implements OnInit {


  @Input() config: ConfirmButtonInputModel;
  @Output() afterConfirm = new EventEmitter<boolean>();
  constructor(private confirmDialogService: ConfirmDialogService) {
    this.config = new ConfirmButtonInputModel();
   }

  ngOnInit() {
  }

  open(): void {
    this.confirmDialogService.open({
      header: this.config.header,
      content: this.config.content
    }).then(res => {
      this.afterConfirm.next(res);
    });
  }

}
