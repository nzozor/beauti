import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentShowcaseComponent } from './treatment-showcase/treatment-showcase.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: TreatmentShowcaseComponent
  }
];

@NgModule({
  declarations: [TreatmentShowcaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatIconModule
  ]
})
export class TreatmentShowcaseModule { }
