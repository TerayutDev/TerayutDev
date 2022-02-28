import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CPA',
  templateUrl: './CPA.component.html',
  styleUrls: ['./CPA.component.scss']
})
export class CPAComponent implements OnInit {
    monthList=[];
    yearList=[];
    inComeList=[];
  constructor() { }

  ngOnInit() {
    this.monthList=[
        {id:1,month:'มกราคม'},
        {id:2,month:'กุมพาพันธ์'},
        {id:3,month:'มีนาคม'},
        {id:4,month:'เมษายน'},
        {id:5,month:'พฤษภาคม'},
        {id:6,month:'มิถุนายน'},
        {id:7,month:'กรกฎาคม'},
        {id:8,month:'สิงหาคม'},
        {id:9,month:'กันยายน'},
        {id:10,month:'ตุลาคม'},
        {id:11,month:'พฤศจิกายน'},
        {id:12,month:'ธันวาคม'},
      ]
      this.setYear();
      this.getInComeData();
  }
  setYear(){
    var date=new Date()
    var yearNow= date.getFullYear();
    for (var i=yearNow-5;i<yearNow;i++){
        this.yearList.unshift({id:i,year:i});
    }
}

getInComeData(){
    this.inComeList=[
        {date:'10-02-2022',register:'1',deposit:500,fistdeposit:500,buy:5000,profit:500,income:500},
        {date:'10-01-2022',register:'1',deposit:50000,fistdeposit:50000,buy:500000,profit:50000,income:50000},
        {date:'10-03-2022',register:'1',deposit:5000,fistdeposit:5000,buy:50000,profit:5000,income:5000},
    ]
}
}
