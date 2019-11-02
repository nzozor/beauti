import { Component, AfterContentInit, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  // ngAfterContentInit() {
  //   this.parallaxDiv = document.querySelector('.parallax');
  //   this.parallaxDiv.style.backgroundPositionY = '200px';
  //   this.initialTop = parseInt(this.parallaxDiv.style.backgroundPositionY, 10);
  // }

  // @HostListener('window:scroll')
  // onWindowScroll() {
  //   this.parallaxDiv.style.backgroundPositionY =  this.initialTop - window.scrollY * 0.5 + 'px';
  // }
}
