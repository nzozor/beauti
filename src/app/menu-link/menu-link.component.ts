import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
export interface Menu {
  title: string;
  subMenu?: SubMenu[];
  route?: string;
}

export interface SubMenu {
  title: string;
  subTitles: string[];
}

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss'],
  animations: [
    trigger('openClose', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(5%)' }),
          stagger(80, [animate('0.4s', style({ transform: 'translateY(0%)', opacity: 1 }))])
        ], { optional: true }
        )
      ])
    ])
  ]
})
export class MenuLinkComponent implements OnInit, OnChanges {
  @Input() active: boolean;
  @Output() menuLinkOpen = new EventEmitter<boolean>();
  mainMenu: Menu[] = [
    { title: 'About Us', route: '/about-us' },
    {
      title: 'Treatments',
      route: '/treatments'
    },
    { title: 'Contact' }
  ];

  subMenuActive = false;
  activeSubMenu: Menu;

  ngOnChanges() {
    if (!this.active) {
      this.subMenuActive = false;
    }
  }

  ngOnInit() {
  }
  constructor() { }

  togglesSubenu(subMenu: Menu): void {
    this.subMenuActive = !this.subMenuActive;
    this.activeSubMenu = subMenu;
    console.log(this.activeSubMenu);
  }

  closeMenuLink() {
    this.menuLinkOpen.emit(false);
  }
}
