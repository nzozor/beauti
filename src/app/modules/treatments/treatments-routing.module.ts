import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentShowcaseComponent } from '../treatment-showcase/treatment-showcase/treatment-showcase.component';

const routes: Routes = [
  {
    path: '',
    component: TreatmentsComponent
  },
  // {
  //   path: ':id',
  //   loadChildren: () => import('../treatment-showcase/treatment-showcase.module').then(m => m.TreatmentShowcaseModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentsRoutingModule { }
