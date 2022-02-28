import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@bundle/service/api.service';
import { MemberOtpRequest, MemberPassRequest, MemberRegisRequest } from '../model/requests/authen-request';
import { MemberOtpResponse, MemberPassResponse, MemberRegisResponse } from '../model/responses/authen-response';

@Injectable({
  providedIn: 'root'
})
export class MemberApiService {

constructor(private apiservice: ApiService) { }

register(reqData: MemberRegisRequest): Observable<MemberRegisResponse> {
  return this.apiservice.post('/member/getOtp', reqData);
}

confirmotp(reqData: MemberOtpRequest): Observable<MemberOtpResponse> {
  return this.apiservice.post('/member/confirmOtp', reqData);
}

confirmPass(reqData: MemberPassRequest): Observable<MemberPassResponse> {
  return this.apiservice.post('/member/savePassword', reqData);
}


}
