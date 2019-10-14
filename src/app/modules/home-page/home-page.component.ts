import { Component, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterContentInit {
  title = 'beauti-frontend';
  stickyHeader = false;
  imgUrl = 'assets/beauti-girl.jpg'; // ToDO: move to component or directive
  initialTop: number;
  parallaxDiv: HTMLDivElement;
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  ngAfterContentInit() {
    this.parallaxDiv = document.querySelector('.parallax');
    this.parallaxDiv.style.backgroundPositionY = '200px';
    this.initialTop = parseInt(this.parallaxDiv.style.backgroundPositionY, 10);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.parallaxDiv.style.backgroundPositionY = this.initialTop - window.scrollY * 0.5 + 'px';
  }
}
