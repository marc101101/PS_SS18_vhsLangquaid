import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/not-found';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ProfilComponent } from './components/home/profil/profil.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
    imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
    exports: [RouterModule],
    providers: [SelectivePreloadingStrategy, { provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
