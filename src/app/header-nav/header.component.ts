import { Component, OnInit, Inject, OnDestroy, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderNavComponent implements OnInit, OnDestroy {

  constructor() { }
  scrolltop: boolean;
  stickyHeader = false;
  windowScroll: Subscription;

  @Output() stickyEmit = new EventEmitter<boolean>();

  ngOnInit() {
    this.windowScroll = fromEvent<MouseEvent>(document, 'scroll')
      .pipe(
        throttleTime(20),
        tap(this.onScroll.bind(this))
      )
      .subscribe();
  }

  onScroll(): void {
    const doc = document.documentElement;
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;

    if ((winScroll / height) * 100 > 5) {
      this.stickyEmit.emit(true);
      // this.stickyHeader = true;
    } else {
      // this.stickyHeader = false;
      this.stickyEmit.emit(false);
    }
  }

  ngOnDestroy(): void {
    this.windowScroll.unsubscribe();
  }
}
