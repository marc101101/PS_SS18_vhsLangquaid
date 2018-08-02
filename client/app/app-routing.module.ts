import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthGuard } from './services/auth-guard';

 const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/registration',
        component: RegistrationComponent
    },
    {
        path: '/categories',
        component: CategoriesComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
