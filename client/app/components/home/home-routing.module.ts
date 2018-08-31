import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfilComponent } from './profil/profil.component';

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
        path: 'meine-kurse',
        component: CategoriesComponent
      },
      {
        path: 'aktuelles',
        component: CategoriesComponent
      },
      {
        path: 'kurs-uebersicht',
        component: CategoriesComponent
      },
      {
        path: 'kontakt',
        component: CategoriesComponent
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