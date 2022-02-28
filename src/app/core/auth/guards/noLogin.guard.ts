import { Injectable } from '@angular/core';
import {  CanActivate,  Router,  } from '@angular/router';
import { LayoutService } from 'app/layout/layout.service';
@Injectable({
    providedIn: 'root'
})
export class NoLogin implements CanActivate {

    constructor(
        public router: Router,
        private layoutService:LayoutService
    ) {
    }
    async canActivate() {
        const token = localStorage.getItem('token');
        this.layoutService.showLayout.next(true);

        if (token) { // login
            this.router.navigate(['/pages/home']); // to login
            return false;
        }else{
            this.layoutService.showLayout.next(true);
        }
        return true;
    }

}
