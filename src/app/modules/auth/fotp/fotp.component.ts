import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { MemberOtpRequest } from 'app/core/model/requests/authen-request';
import { RegisService } from 'app/core/service/regis.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-fotp',
  templateUrl: './fotp.component.html',
  styleUrls: ['./fotp.component.scss']
})
export class FotpComponent implements OnInit {

  time1 = 0;
  label: any;
  isDisabled = true;

  fotpForm: FormGroup
  otp = '';
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private regisService: RegisService,
    private alertMessage: AlertMessageService) {
    this.fotpForm = this.formBuilder.group({
      otp1: ['', [Validators.required]],
      otp2: ['', [Validators.required]],
      otp3: ['', [Validators.required]],
      otp4: ['', [Validators.required]],
      otp5: ['', [Validators.required]],
      otp6: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
    if (localStorage.getItem('otp')) {
      let abc = JSON.parse(localStorage.getItem('otp') || '');
      this.otp = abc.refCode;
      this.sendotp();
    }
    else {
      this.warrning();
    }


  }

  otpformSubmit() {
    if (localStorage.getItem('otp')) {
      const abc = JSON.parse(localStorage.getItem('otp') || '');
      if (abc.mobileNo && abc.refCode && abc.type) {
        let obj = this.fotpForm.value;
        let confirm = obj.otp1 + obj.otp2 + obj.otp3 + obj.otp4 + obj.otp5 + obj.otp6;
        const a = confirm.length;
        if( a == 6)
        {
        let reqData = new MemberOtpRequest();
        reqData.mobileNo = abc.mobileNo;
        reqData.refCode = abc.refCode;
        reqData.otp = confirm;
        reqData.type = abc.type;
        this.regisService.confirmOtp(reqData).then(res => {
          console.log(res);
          if (res) {
            console.log(res)
            localStorage.removeItem('otp');
            localStorage.setItem('otp', JSON.stringify(res));
            this.router.navigate(['/fpass']);
          }
        })
      }
      else{
        this.alertMessage.open({ title: 'Warning', message: 'กรุณากรอกOTPให้ครบ' }).then(res => {
          if (res) {
            return
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


  sendotp() {
    if (this.time1 == 0) {
      this.isDisabled = true;
      this.time1 = 15;
      this.label = "( " + this.time1 + ' วินาที )';
      let obs = interval(1000);
      let a = obs.subscribe((d) => {
        this.time1 -= 1;
        this.label = "( " +this.time1 + ' วินาที )';
        if (this.time1 <= 0) {
          this.isDisabled = false;
          this.label = '';
          a.unsubscribe();
        }
      })
    }
    else {
      this.alertMessage.open({ title: 'Warning', message: 'กรุณารออีก ' + this.time1 + ' วินาที' }).then(res => {
        if (res) {
          return
        }
      })
    }
  }


  otpController(event: any, next: any, prev: any) {
    if (event.target.value.length < 1 && prev) {
      prev.focus();
    }
    else if (next && event.target.value.length > 0) {
      next.focus();
    }
  }
  back() {
    this.router.navigate(['/login']);
  }

  warrning() {
    this.alertMessage.open({ title: 'Warning', message: 'โปรดทำตามขั้นตอน' }).then(res => {
      if (res) {
        this.router.navigate(['/login']);
      }
    })
  }

}
