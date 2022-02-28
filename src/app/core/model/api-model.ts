export class ApiResponseModel {
    status: ApiStatusModel | undefined;
    message: ApiMessageModel | undefined;
    data: any;
}

class ApiStatusModel {
    code: number = 0;
    description: string = '';
}

class ApiMessageModel {
    type: string = '';
    title: string = '';
    detail: string = '';
}
