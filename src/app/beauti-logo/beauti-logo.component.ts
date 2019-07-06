import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beauti-logo',
  templateUrl: './beauti-logo.component.svg',
  styleUrls: ['./beauti-logo.component.scss']
})
export class BeautiLogoComponent implements OnInit {
  // private fill =  '#3E3D3C';
  private fill =  '#fff';
  @Input() sticky: boolean;
  constructor() { }

  ngOnInit() {
  }

}
