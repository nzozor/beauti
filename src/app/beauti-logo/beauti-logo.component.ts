import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beauti-logo',
  templateUrl: './beauti-logo.component.html',
  styleUrls: ['./beauti-logo.component.scss']
})
export class BeautiLogoComponent implements OnInit {
  public fill =  '#000';
  @Input() sticky: boolean;
  constructor() { }

  ngOnInit() {
  }

}
