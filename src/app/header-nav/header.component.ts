import { Component, OnInit, Inject, OnDestroy, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';


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
  private _menuLinkOpen: boolean;

  sticky = false;

  set menuLinkOpen(menuLinkOpen: boolean) {
    this._menuLinkOpen = menuLinkOpen;
  }

  get menuLinkOpen(): boolean {
    return this._menuLinkOpen;
  }


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
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  setMenuLink(value: boolean) {
    this.menuLinkOpen = value;
  }

  ngOnDestroy(): void {
    this.windowScroll.unsubscribe();
  }
}
