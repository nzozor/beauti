import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  active = false;
  @Input() sticky: boolean;
  @Output() menuLinkOpen = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.active = !this.active;
    this.menuLinkOpen.emit(this.active);
  }
}
