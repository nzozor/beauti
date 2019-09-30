import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeaderNavComponent } from './header-nav/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BeautiLogoComponent } from './beauti-logo/beauti-logo.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { QuoteComponent } from './shared/svg/quote/quote.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatIconModule } from '@angular/material/icon';
import { ArrowComponent } from './shared/svg/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerMenuComponent,
    HeaderNavComponent,
    BeautiLogoComponent,
    MenuLinkComponent,
    JumbotronComponent,
    QuoteComponent,
    ReviewsComponent,
    ArrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
