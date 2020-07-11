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
    width: '347px'
  };

  minHeight = 373;
  marginBetweenSlides = 10;
  totalSlideWidth: number;
  stars = [1, 2, 3, 4, 5];
  innerWidth: number;

  reviews = [
    {
      quote: 'Really happy with my wax! Lovely venue, very clean and luxurious and my treatment was very professional. Would highly recommend.',
      reviewerName: 'Kate'
    },
    {
      reviewerName: 'Liz',
      quote: 'Such a professional and well run clinic. I have already made a follow up appointment. Cinzia was very knowledgeable about treatments and products without any hard sell. It was a lovely relaxing environment and I will be back. Thank you'
    },
    {
      reviewerName: 'Ruth',
      quote: 'There is nowhere I would trust more with my skin! I\'ve been coming here for about a year now and will continue. Cinza and her team are professional but also like my agony aunts!'
    },
    {
      reviewerName: 'WeiTing',
      quote: 'Cinzia was SO lovely. Walked into the salon, it smelled fab and the ambience was on point. My Hollywood laser treatment was as painless as it can be haha. Would definitely come back.'
    },
    {
      reviewerName: 'Kate',
      quote: 'Couldn\'t be bettered! Brilliant service, pleasant atmosphere, highly trained people who know their job!'
    },
    {
      reviewerName: '',
      quote: 'Fabulous treatment as always. Professional with that signature Beauti charm!'
    },
    {
      reviewerName: 'Jodie',
      quote: 'Such friendly staff - very clean',
    },
    {
      reviewerName: 'Lucy',
      quote: 'Lovely manicure - clean salon and professional and very friendly staff',
    },
    {
      reviewerName: 'Miriam',
      quote: 'Best waxing I’ve had in London, I highly recommend Beauti!',
    },
    {
      reviewerName: 'Jade',
      quote: 'Wonderful ladies and a beautiful venue',
    },
    {
      reviewerName: 'Bethany',
      quote: 'Lovely staff and great atmosphere. Both treatments were perfect I’ll definitely be coming back',
    },
    {
      reviewerName: 'Nadia',
      quote: 'Brilliant and painless waxing - very chilled and Julia was perfect',
    },
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
    focusOnSelect: false,
    touchThreshold: 1000,
    // touchMove: false,
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
