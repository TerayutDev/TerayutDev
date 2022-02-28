import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { MemberPassRequest } from 'app/core/model/requests/authen-request';
import { RegisService } from 'app/core/service/regis.service';

@Component({
  selector: 'app-cpass',
  templateUrl: './cpass.component.html',
  styleUrls: ['./cpass.component.scss']
})
export class CpassComponent implements OnInit {

  passForm: FormGroup
  hide1 = true;
  hide2 = true;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private regisService: RegisService,
    private alertMessage: AlertMessageService) {
    this.passForm = this.formBuilder.group({
      password1: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    if (localStorage.getItem('otp')) {

    }
    else {
      this.warrning();
    }
  }

  passformSubmit() {
    if (localStorage.getItem('otp')) {
      let abc = JSON.parse(localStorage.getItem('otp') || '');
      if (abc.MmbCode && abc.mobileNo) {
        const { password1, password2 } = this.passForm.value;
        const a = password1.length;
        const b = password2.length;
        if (a != 6) {
          this.alertMessage.open({ title: 'Warning', message: 'กรุณากรอกรหัสผ่านให้ครบ6หลัก' }).then(res => {
            if (res) {
              return
            }
          })
        }
        else if (b != 6) {
          this.alertMessage.open({ title: 'Warning', message: 'กรุณากรอกยืนยันรหัสผ่านให้ครบ6หลัก' }).then(res => {
            if (res) {
              return
            }
          })
        }
        else if (a == 6 && b == 6) {
        let reqData = new MemberPassRequest();
        reqData.memberCode = abc.MmbCode;
        reqData.password = password1;
        reqData.confirmPassword = password2;
        reqData.mobileNo = abc.mobileNo;
        console.log(reqData)
        this.regisService.confirmPass(reqData).then(res => {
          console.log(res);
          if (res) {
            localStorage.removeItem('otp');
            localStorage.setItem('otp', JSON.stringify(res));
            this.router.navigate(['/cdone']);
          }
        })
      }
    }
      else {
        this.warrning();
      }
    }
    else {
      this.warrning();
    }


  }

  warrning() {
    this.alertMessage.open({ title: 'Warning', message: 'โปรดทำตามขั้นตอน' }).then(res => {
      if (res) {
        this.router.navigate(['/login']);
      }
    })
  }
  back() {
    this.router.navigate(['/login']);
  }
}
