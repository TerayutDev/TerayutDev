import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private route:Router) { }
  urlImage='../../../assets/images/';
  ngOnInit() {
  }

  login(){
    this.route.navigate(['/login'])
  }
regis()
{
  this.route.navigate(['/regis']);
}
}
