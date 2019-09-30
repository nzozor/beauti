import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.svg',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {
  @Input() position: 'left' | 'right';
  constructor() { }

  ngOnInit() {
  }

}
