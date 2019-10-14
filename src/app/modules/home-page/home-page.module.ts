import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing.module';
import { ExcluStocklistComponent } from './exclu-stocklist/exclu-stocklist.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MapComponent } from 'src/app/shared/map/map.component';
import { QuoteComponent } from 'src/app/shared/svg/quote/quote.component';
import { ArrowComponent } from 'src/app/shared/svg/arrow/arrow.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HomePageComponent, ExcluStocklistComponent, JumbotronComponent, ReviewsComponent, MapComponent, QuoteComponent,
  ArrowComponent]
})
export class HomePageModule { }
