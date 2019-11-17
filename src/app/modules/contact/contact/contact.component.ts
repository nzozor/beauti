import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    dots: true,
    // variableWidth: true,
  };

  slides = [
    {img: 'assets/beauti-skin-clinic-oval-1.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-2.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-3.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-alumier.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-sothys.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-waxed.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
