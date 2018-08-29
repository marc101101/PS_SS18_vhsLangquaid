import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
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
import { AlertComponent } from './directives/alert/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        PageNotFoundComponent,
        AlertComponent
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
    exports: [AlertComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
