import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beauti-frontend';
  stickyHeader = false;
  imgUrl = '../assets/home-video.png'; // ToDO: move to component or directive

  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }
}
