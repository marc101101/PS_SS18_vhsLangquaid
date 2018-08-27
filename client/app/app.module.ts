import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {environment} from '../environments/environment.dev';
import {ServiceWorkerModule} from '@angular/service-worker';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PageNotFoundComponent } from './components/not-found';
import { FormsModule }   from '@angular/forms';
import { AlertService } from './services/alert.service';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ProfilComponent } from './components/home/profil/profil.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './directives/alert/alert.component';
import { MenuComponent } from './directives/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        CategoriesComponent,
        PageNotFoundComponent,
        AlertComponent,
        ProfilComponent,
        HomeComponent,
        MenuComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,     
        RouterModule
        //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        AuthGuard,
        AuthService,
        AlertService,
        RouterModule,
        HttpClientModule
    ],
    exports: [AlertComponent, MenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
