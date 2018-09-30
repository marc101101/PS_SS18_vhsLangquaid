import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/not-found';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InfoComponent } from './components/info/info.component';

 const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
        //canActivate: [AuthGuard],
        data: {prelaod: true}
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })],
    exports: [RouterModule],
    providers: [SelectivePreloadingStrategy, { provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
