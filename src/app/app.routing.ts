import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: '/index'},


    {
        path: '',
        canActivate: [NoAuthGuard],
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'index', loadChildren: () => import('app/modules/index/index.module').then(m => m.IndexModule)}
        ]
    },
    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    // {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'regis',loadChildren: () => import('app/modules/auth/regis/regis.module').then(m => m.RegisModule)},
            {path: 'login', loadChildren: () => import('app/modules/auth/login/login.module').then(m => m.LoginModule)},
            {path: 'cotp', loadChildren:()=> import('app/modules/auth/cotp/cotp.module').then(m => m.CotpModule)},
            {path: 'cpass',loadChildren:() => import('app/modules/auth/cpass/cpass.module').then(m => m.CpassModule)},
            {path: 'cdone',loadChildren:() => import('app/modules/auth/cdone/cdone.module').then(m => m.CdoneModule)},
            {path: 'fdone',loadChildren:() => import('app/modules/auth/fdone/fdone.module').then(m => m.FdoneModule)},
            {path: 'fpass',loadChildren:() => import('app/modules/auth/fpass/fpass.module').then(m => m.FpassModule)},
            {path: 'fotp',loadChildren:() => import('app/modules/auth/fotp/fotp.module').then(m=>m.FotpModule)},
            {path: 'forget',loadChildren:() => import('app/modules/auth/forget/forget.module').then(m=> m.ForgetModule)},
            {path: 'sign-in',loadChildren:() => import('app/modules/auth/sign-in/sign-in.module').then(m=> m.AuthSignInModule)},
        ]
    },

    // Auth routes for authenticated users
    // {
    //     path: '',
    //     // canActivate: [AuthGuard],
    //     // canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
    //         {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
    //     ]
    // },

    // Landing routes
    // {
    //     path: 'pages',
    //     // canActivate: [AuthGuard],
    //     component  : LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children   : [
    //         {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
    //     ]
    // },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'dashboard', loadChildren:()=> import('app/modules/admin/dashboard/dashboard.module').then(m=> m.DashboardModule)},
            {path: 'cpa' , loadChildren:()=> import('app/modules/admin/CPA/CPA.module').then(m=> m.CPAModule)},
            {path: 'income',loadChildren:()=> import('app/modules/admin/income/income.module').then(m=> m.IncomeModule)},
            {path: 'pay' , loadChildren:() => import('app/modules/admin/pay/pay.module').then(m=>m.PayModule)}
        ]
    }
];
