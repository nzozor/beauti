import { Component, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'beauti-frontend';
  stickyHeader = false;
  imgUrl = 'assets/beauti-girl.jpg'; // ToDO: move to component or directive
  initialTop: string;
  parallaxDiv: HTMLDivElement;
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  ngAfterContentInit() {
    this.parallaxDiv = document.querySelector('.parallax');
    this.parallaxDiv.style.backgroundPositionY = '0px';
    this.initialTop = this.parallaxDiv.style.backgroundPositionY;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.parallaxDiv.style.backgroundPositionY =  - window.scrollY * 0.5 + 'px';
  }
}
