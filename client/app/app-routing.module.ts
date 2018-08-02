import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

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
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
