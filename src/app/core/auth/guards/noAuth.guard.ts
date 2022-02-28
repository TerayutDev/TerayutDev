import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { switchMap } from 'rxjs/operators';
import { LayoutService } from 'app/layout/layout.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate
{
    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private layoutService: LayoutService
    )
    {
    }

async canActivate(){
    console.log('noAuthGuard')
        const token = localStorage.getItem('token');

        if (token) { // login
        console.log('noAuthGuard to page')

            this.router.navigate(['/example']); // to login
            return false;
        } 
        else {
    


        }
        return true;
}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
    //  *
    //  * @param route
    //  * @param state
    //  */
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     return this._check();
    // }

    // /**
    //  * Can activate child
    //  *
    //  * @param childRoute
    //  * @param state
    //  */
    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    // {
    //     return this._check();
    // }

    // /**
    //  * Can load
    //  *
    //  * @param route
    //  * @param segments
    //  */
    // canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     return this._check();
    // }

    // // -----------------------------------------------------------------------------------------------------
    // // @ Private methods
    // // -----------------------------------------------------------------------------------------------------

    // /**
    //  * Check the authenticated status
    //  *
    //  * @private
    //  */
    // private _check(): Observable<boolean>
    // {
    //     // Check the authentication status
    //     return this._authService.check()
    //                .pipe(
    //                    switchMap((authenticated) => {

    //                        // If the user is authenticated...
    //                        if ( authenticated )
    //                        {
    //                            // Redirect to the root
    //                            this._router.navigate(['']);

    //                            // Prevent the access
    //                            return of(false);
    //                        }

    //                        // Allow the access
    //                        return of(true);
    //                    })
    //                );
    // }
}
