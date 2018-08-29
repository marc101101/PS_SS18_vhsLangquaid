import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories/categories.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeRoutingModule } from './home-routing.module';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from './shared/alert/alert.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommunicationService } from './shared/communication.service';
import { UserService } from '../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [
    CategoriesComponent,
    ProfilComponent,
    MenuComponent,
    HomeComponent,
    AlertComponent
  ],
  providers: [
      AlertService,
      AuthService,
      UserService,
      CommunicationService
  ],
  exports: [MenuComponent],
})
export class HomeModule { }