import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfilComponent } from './profil/profil.component';
import { CoursesComponent } from './courses/courses.component';
import { SingleCourseComponent } from './singlecourse/singlecourse.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'kategorien',
        component: CategoriesComponent
      },
      {
        path: 'aktuelles',
        component: CategoriesComponent
      },
      {
        path: 'kurs-uebersicht/:id',
        component: CoursesComponent
      },
      {
        path: 'kurs/:id',
        component: SingleCourseComponent
      },
      {
        path: 'kontakt',
        component: ContactComponent
      },
      {
        path: 'kontakt/:id',
        component: ContactComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class HomeRoutingModule { }