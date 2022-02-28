import { Injectable } from '@angular/core';
import { AuthenApiService } from '../api/authen-api.service';
import { MemberApiService } from '../api/member-api.service';
import { AuthService } from '../auth/auth.service';
import { MemberLoginRequest, MemberOtpRequest, MemberPassRequest, MemberRegisRequest } from '../model/requests/authen-request';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

constructor(private memberApiService: MemberApiService,
  private authService: AuthService,
  private authenApiService: AuthenApiService) { }

getOtp(reqData: MemberRegisRequest): Promise<any>{
  return new Promise((resolve, rejects) => {
    this.memberApiService.register(reqData).subscribe(resData => {
      console.log(resData)
      if(resData){resolve(resData);}else{resolve(false);}
    },error =>{
      resolve(false);
    });
    });

}

confirmOtp(reqData: MemberOtpRequest): Promise<any>{
  return new Promise((resolve, rejects) => {
    this.memberApiService.confirmotp(reqData).subscribe(resData => {
      console.log(resData)
      if(resData){resolve(resData)}else{resolve(false);}
    },error => {
      resolve(false);
    });
  });
}

confirmPass(reqData: MemberPassRequest): Promise<any>{
  return new Promise((resolve, rejects) => {
    this.memberApiService.confirmPass(reqData).subscribe(resData => {
      console.log(resData)
      if(resData){resolve(resData)}else{resolve(false);}
    },error => {
      resolve(false);
    });
  });
}


login(reqData: MemberLoginRequest): Promise<boolean> {
  return new Promise((resolve, reject) => {
    this.authenApiService.login(reqData).subscribe(resData => {
      console.log('login', resData)
      if (resData) {
        this.authService.saveToken(resData.token);
        resolve(true);
      } else {
        resolve(false);
      }
    }, error => {
      resolve(false);
    });



  });
}

}
