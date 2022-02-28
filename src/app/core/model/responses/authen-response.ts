
export class MemberloginResponse {
    token: string = '';
}

export class MemberRegisResponse{
    type: string='';
    isRegis : string='';
    refCode : string='';
    mobileNo : string='';
}

export class MemberOtpResponse{
    memberCode : string='';
    mobileNo: string='';
}

export class MemberPassResponse{
    mobileNo: string='';
    password: string='';
    murCode: string = '';
}

export class MemberSuscessResponse{
    token: string = '';
}