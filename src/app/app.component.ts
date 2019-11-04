import { Component, AfterContentInit, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { BookingService } from './services/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { TreatwellComponent } from './components/treatwell/treatwell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements AfterContentInit {
export class AppComponent implements OnInit {

  title = 'beauti-frontend';
  stickyHeader = false;
  // imgUrl = 'assets/beauti-girl.jpg'; // ToDO: move to component or directive
  // initialTop: number;
  // parallaxDiv: HTMLDivElement;
  constructor(
    private router: Router,
    private bookingService: BookingService,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.bookingService.getBooking().subscribe(() => this.openBookingModal());
  }
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  private openBookingModal() {
    this.dialog.open(
      TreatwellComponent,
      {
        height: '800px',
        width: '1100px',
        panelClass: 'custom-dialog-container'
      },
    );
  }
}
