import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeaderNavComponent } from './header-nav/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { BeautiLogoComponent } from './beauti-logo/beauti-logo.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HomePageModule } from './modules/home-page/home-page.module';
import { TreatmentsModule } from './modules/treatments/treatments.module';
import { RouterModule } from '@angular/router';
import { InstaComponent } from './shared/svg/insta/insta.component';
import { SafePipe } from './pipes/safe.pipe';
import { TreatwellComponent } from './components/treatwell/treatwell.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerMenuComponent,
    HeaderNavComponent,
    BeautiLogoComponent,
    MenuLinkComponent,
    FooterComponent,
    InstaComponent,
    SafePipe,
    TreatwellComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    HomePageModule,
    TreatmentsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TreatwellComponent]
})
export class AppModule { }
