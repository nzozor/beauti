import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentsComponent } from './treatments/treatments.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { TreatmentShowcaseModule } from '../treatment-showcase/treatment-showcase.module';

@NgModule({
  declarations: [TreatmentsComponent],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    TreatmentShowcaseModule
  ]
})
export class TreatmentsModule { }
