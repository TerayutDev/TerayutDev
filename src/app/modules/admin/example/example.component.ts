import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenService } from 'app/core/service/authen.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls  : ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit 
{
    /**
     * Constructor
     */
    constructor(private authenService: AuthenService)
    {
    }

    ngOnInit() {
        this.getProfile();
      }

      getProfile(){
        this.authenService.getProfile()
      }
}
