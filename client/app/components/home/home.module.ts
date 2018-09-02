import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories/categories.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthService } from '../../services/auth.service';
import { HomeComponent } from './home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommunicationService } from './shared/communication.service';
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../sharedModule/shared.module';
import { AlertService } from '../../services/alert.service';
import { CategoryService } from '../../services/category.service';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './shared/courses.service';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProfilComponent,
    CoursesComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
      AuthService,
      UserService,
      AlertService,
      CommunicationService,
      CoursesService,
      CategoryService
  ],
  exports: [MenuComponent],
})
export class HomeModule { }