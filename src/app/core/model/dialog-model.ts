export class ConfirmDialogInputModel {
    header: string = 'ยืนยันการทำรายการ';
    content: string = 'ต้องการทำรายการต่อหรือไม่';
}
export class AlertMessageModel {
    title: string = 'สำเร็จ';
    message: string = 'บันทึกข้อมูลเรียบร้อย';
}

export class ConfirmButtonInputModel {
    text: string = '';
    color?: string = '';;
    header: string = '';;
    content: string = '';;
}

export class WarningMessage{
    title: string ='';
    message: string='';
}
