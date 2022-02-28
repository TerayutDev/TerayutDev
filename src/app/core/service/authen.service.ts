import { Injectable } from '@angular/core';
import { AuthenApiService } from '../api/authen-api.service';
import { AuthService } from '../auth/auth.service';
import { MemberLoginRequest } from '../model/requests/authen-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

constructor(private authenApiService: AuthenApiService,
  private authService: AuthService) { }

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

getProfile(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    this.authenApiService.getProfile().subscribe(resData => {
      resolve(resData);
    }, error => {
      resolve(error);
    });
  });
}


}
