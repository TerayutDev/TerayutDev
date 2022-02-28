export class MemberLoginRequest {
    username: string = '';
    password: string = '';
}

export class MemberRegisRequest{
    mobileNo: string='';
    type: string='';
}

export class MemberOtpRequest{
    type: string='';
    mobileNo: string='';
    refCode: string='';
    otp: string='';
}

export class MemberPassRequest{
    mobileNo: string='';
    memberCode: string='';
    password: string = '';
    confirmPassword: string = '';
}

export class MemberSuscessRequest {
    username: string = '';
}