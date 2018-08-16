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
import { CategoriesComponent } from './components/categories/categories.component';
import { PageNotFoundComponent } from './components/not-found';
import { FormsModule }   from '@angular/forms';
import { AlertService } from './services/alert.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        CategoriesComponent,
        PageNotFoundComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,        
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        AuthGuard,
        AuthService,
        AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
