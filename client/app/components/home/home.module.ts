import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories/categories.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeRoutingModule } from './home-routing.module';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { MenuComponent } from '../../directives/menu/menu.component';
import { AlertComponent } from '../../directives/alert/alert.component';
import { HomeComponent } from './home.component';

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
    HomeComponent
  ],
  providers: [
      AlertService,
      AuthService,
      UserService
  ],
  exports: [MenuComponent],
})
export class HomeModule { }