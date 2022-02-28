import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field/form-field-control';
import { Router } from '@angular/router';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { ConfirmDialogService } from '@bundle/dialog/confirm-dialog/confirm-dialog.service';
import { fuseAnimations } from '@fuse/animations';
import { ConfirmDialogInputModel } from 'app/core/model/dialog-model';
import { MemberLoginRequest } from 'app/core/model/requests/authen-request';
import { AuthenService } from 'app/core/service/authen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenService: AuthenService,
    private confirmDialog: ConfirmDialogService,
    private alertMessage:AlertMessageService

  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }


  loginformSubmit() {
    console.log(this.loginForm.value);


        const { username, password } = this.loginForm.value;
        const a = username.length;
        const b = password.length;
        if(a != 10 || b != 6)
        {
          this.alertMessage.open({title:'Warning',message:'กรุณากรอกเบอร์โทรและรหัสผ่านให้ครบ'}).then(res =>{
            if(res){
              return
            }})
        }
        else if(a ==10 && b==6)
        {
        let reqData = new MemberLoginRequest();
        reqData = { username, password };

        this.authenService.login(reqData).then(res => {
          console.log('login', res)
          if (res) {
            this.router.navigate(['/example']);
          } else {
          }
        })
      }
 
}

regis(){
  this.router.navigate(['/regis'])
}

forget(){
  this.router.navigate(['/forget'])
}


}
