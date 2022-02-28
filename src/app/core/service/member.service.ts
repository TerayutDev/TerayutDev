import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  memberCode: BehaviorSubject<string>;
constructor() { 
  this.memberCode = new BehaviorSubject('');
}

setmemberCode(){
  const data = localStorage.getItem('token');

 // const accessToken = atob(token);
 let payload  = jwtDecode(String(data)) as any;

 // const payloadData = JSON.parse(jwtData);
 this.memberCode.next(payload?.memberCode||'');
 // 
 // const { memberCode } = payloadData;
}

}
