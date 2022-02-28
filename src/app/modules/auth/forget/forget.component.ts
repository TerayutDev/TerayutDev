import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { MemberRegisRequest } from 'app/core/model/requests/authen-request';
import { RegisService } from 'app/core/service/regis.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  fpassForm: FormGroup
  constructor(private formBuilder : FormBuilder,
    private router: Router,
    private regisService: RegisService,
    private alertMessage: AlertMessageService) {
    this.fpassForm = this.formBuilder.group({
      number: ['',[Validators.required]],
    })
   }

  ngOnInit() {
  }

  fpassformSubmit(){
    const {number} = this.fpassForm.value;
    const a = number.length;
    if(a == 10)
    {
    let reqData = new MemberRegisRequest();
    reqData.mobileNo = number;
    reqData.type = '2';

    this.regisService.getOtp(reqData).then(res =>{
      console.log(res);
      if(res)
      {
      localStorage.setItem('otp',JSON.stringify(res)); 
      this.router.navigate(['/fotp']);
      }
      else{

      }
    })
  }
else{
  this.alertMessage.open({title:'Warning',message:'กรอกเบอร์โทรให้ครบ 10 หลัก'}).then(res =>{
    if(res){
      return;
    }})

}


  }

  back(){
    this.router.navigate(['/login']);
  }
}
