import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,

          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  slides = [
    {img: 'assets/cinzia-campigotto-1.jpg' },
    {img: 'assets/cinzia-campigotto-2.jpg' },
    {img: 'assets/cinzia-campigotto-3.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
