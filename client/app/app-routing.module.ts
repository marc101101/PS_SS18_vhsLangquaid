import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/not-found';

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
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
