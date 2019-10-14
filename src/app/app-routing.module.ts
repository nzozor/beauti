import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'treatments',
    loadChildren: () => import('./modules/treatments/treatments.module').then(m => m.TreatmentsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
