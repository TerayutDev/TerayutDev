import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { switchMap } from 'rxjs/operators';
import { LayoutService } from 'app/layout/layout.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private router: Router,
        private layoutService: LayoutService
    )
    {
    }

    async canActivate(){
        console.log('AuthGuard')
        const token = localStorage.getItem('token');

        if (!token) { // ไม่ login
            // this.layoutService.showLayout.next(false);
            this.router.navigate(['/index']); // to login
            return false;
        }else{
            // this.layoutService.showLayout.next(true);
        }
        return true;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
    //  * @param route
    //  * @param state
    //  */
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }

    // /**
    //  * Can activate child
    //  *
    //  * @param childRoute
    //  * @param state
    //  */
    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    // {
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }

    // /**
    //  * Can load
    //  *
    //  * @param route
    //  * @param segments
    //  */
    // canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     return this._check('/');
    // }

    // // -----------------------------------------------------------------------------------------------------
    // // @ Private methods
    // // -----------------------------------------------------------------------------------------------------

    // /**
    //  * Check the authenticated status
    //  *
    //  * @param redirectURL
    //  * @private
    //  */
    // private _check(redirectURL: string): Observable<boolean>
    // {
    //     // Check the authentication status
    //     return this._authService.check()
    //                .pipe(
    //                    switchMap((authenticated) => {

    //                        // If the user is not authenticated...
    //                        if ( !authenticated )
    //                        {
    //                            // Redirect to the sign-in page
    //                            this._router.navigate(['sign-in'], {queryParams: {redirectURL}});

    //                            // Prevent the access
    //                            return of(false);
    //                        }

    //                        // Allow the access
    //                        return of(true);
    //                    })
    //                );
    // }
}
