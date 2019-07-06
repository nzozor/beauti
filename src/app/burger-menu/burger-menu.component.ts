import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  active = false;
  @Input() sticky: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.active = !this.active;
  }
}
