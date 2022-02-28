import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { MemberLoginRequest } from 'app/core/model/requests/authen-request';
import { AuthenService } from 'app/core/service/authen.service';
import { RegisService } from 'app/core/service/regis.service';

@Component({
  selector: 'app-cdone',
  templateUrl: './cdone.component.html',
  styleUrls: ['./cdone.component.scss']
})
export class CdoneComponent implements OnInit {
  murCode = '';
  constructor(
    private router: Router,
    private authenService: AuthenService,
    private RegisService: RegisService,
    private alertMessage: AlertMessageService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('otp')){
    let abc = JSON.parse(localStorage.getItem('otp')||'');
    console.log(abc);
    this.murCode = abc.memberCode;
    }
    else{
      this.warrning();
    }

    this. murCode = 'AAAA100';
  }

  login(){
    if(localStorage.getItem('otp')){
    let abc = JSON.parse(localStorage.getItem('otp')||'');
    if(abc.mobileNo && abc.password)
    {
    let reqData = new MemberLoginRequest();
        reqData.username = abc.mobileNo;
        reqData.password = abc.password;
    localStorage.clear();
        this.authenService.login(reqData).then(res => {
          console.log('login', res)
          if (res) {
            this.router.navigate(['/example']);

          } else {

          }
    })
  }
  else{
    this.warrning();
    }
  }
  else{
    this.warrning();
    }
}

warrning(){
  this.alertMessage.open({title:'Warning',message:'โปรดทำตามขั้นตอน'}).then(res =>{
    if(res){
      this.router.navigate(['/login']);
    }})
}
}
