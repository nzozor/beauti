import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';

import { DOCUMENT } from '@angular/common';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private bookingService: BookingService) { }

  scrolltop: boolean;
  stickyHeader = false;
  windowScroll: Subscription;
  private _menuLinkOpen: boolean;

  sticky = false;
  set menuLinkOpen(menuLinkOpen: boolean) {
    this._menuLinkOpen = menuLinkOpen;
  }

  get menuLinkOpen(): boolean {
    return this._menuLinkOpen;
  }


  ngOnInit() {
    fromEvent<MouseEvent>(this.document, 'scroll')
      .pipe(
        throttleTime(20),
        tap(this.onScroll.bind(this))
      )
      .subscribe();

    this.menuLinkOpen = false;
  }

  onScroll(): void {
    const doc = this.document.documentElement;
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;

    if ((winScroll / height) * 100 > 5) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  setMenuLink(value: boolean) {
    this.menuLinkOpen = value;
  }

  openBooking() {
    this.bookingService.sendBooking(true);
  }

}
