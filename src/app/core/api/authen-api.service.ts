import { Injectable } from '@angular/core';
import { ApiService } from '@bundle/service/api.service';
import { Observable } from 'rxjs';
import { MemberLoginRequest } from '../model/requests/authen-request';
import { MemberloginResponse } from '../model/responses/authen-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenApiService {

constructor(
  private apiService: ApiService
) {
  
 }

login(reqData: MemberLoginRequest): Observable<MemberloginResponse> {
  return this.apiService.post('/auth/login', reqData);
}
getProfile(): Observable<any> {
  return this.apiService.post('/auth/getProfile', null);
}


}
