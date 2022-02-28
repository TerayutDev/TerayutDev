import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showLayout: BehaviorSubject<any>;
  constructor() {
    this.showLayout = new BehaviorSubject(true);
  }
}
