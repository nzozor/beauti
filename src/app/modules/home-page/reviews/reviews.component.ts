import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @ViewChild('sliderEl', { static: false }) sliderEl: ElementRef;
  @ViewChild('start', { static: false }) start: ElementRef;
  @ViewChild('slickModal', { static: false }) slickModal: any;

  activeSlide = 0;
  slideCount = 0;
  visiblePanels = 3;
  sensitivity = 25;
  visibleContainerStyle: {};
  sliderMainContainerStyle: {};
  sliderWidth: number;
  activeSliderWidth: number;

  sliderPanelstyle = {
    width: '247px'
  };

  minHeight = 273;
  marginBetweenSlides = 10;
  totalSlideWidth: number;
  stars = [1, 2, 3, 4, 5];
  innerWidth: number;

  reviews = [
    {
      reviewerName: 'Jade',
      quote: 'Exellent service as always',
    },
    {
      reviewerName: 'Robert',
      quote: 'Excellent service with a very kind, friendly and professional staff.',
    },
    {
      reviewerName: 'Miriam',
      quote: 'Best waxing I’ve had in London, I highly recommend Beauti!',
    },
    {
      reviewerName: 'Jade',
      quote: 'Exellent service as always',
    },
    {
      reviewerName: 'Robert',
      quote: 'Excellent service with a very kind, friendly and professional staff.',
    },
    {
      reviewerName: 'Miriam',
      quote: 'Best waxing I’ve had in London, I highly recommend Beauti!',
    }
  ];


  slides = [
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/1.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/2.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/3.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/4.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/5.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/6.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/7.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/8.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/9.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/10.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/11.jpg' },
    { img: 'https://www.freakyjolly.com/demo/Angular/Angular7/slickCarousel/assets/images/12.jpg' }
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    touchThreshold: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  constructor() { }

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');

  }

  swipe() {
    setTimeout(() => {
      this.slickModal.slickGoTo(this.slickModal.currentIndex);
    }, 0);
  }
  slickGoTo(e) {
    this.slickModal.slickGoTo(4);
    console.log(e);
    console.log(this.slickModal);
  }
}
