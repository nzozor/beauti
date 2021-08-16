import { Component, AfterContentInit, HostListener, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  title = 'beauti-frontend';
  stickyHeader = false;
  // imgUrl = 'assets/beauti-girl.jpg'; // ToDO: move to component or directive

  imgUrl = 'assets/beauti-nail-skin.jpg'; // ToDO: move to component or directive
  initialTop: number;
  parallaxDiv: HTMLDivElement;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  ngAfterViewInit() {
    // this.parallaxDiv = this.document.querySelector('.parallax');

    // this.parallaxDiv.style.backgroundPositionY = '100px';
    // this.initialTop = parseInt(this.parallaxDiv.style.backgroundPositionY, 10);
  }

  // @HostListener('window:scroll')
  // onWindowScroll() {
  //   if (window.innerWidth > 600) {
  //     this.parallaxDiv.style.backgroundPositionY = this.initialTop - window.scrollY * 0.5 + 'px';
  //   }
  // }
}
