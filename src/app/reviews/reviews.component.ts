import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderEl', { static: false }) sliderEl: ElementRef;
  @ViewChild('start', { static: false }) start: ElementRef;

  activeSlide = 0;
  slideCount = 0;
  visiblePanels = 3;
  sensitivity = 25;
  visibleContainerStyle: {};
  sliderMainContainerStyle: {};
  sliderWidth = 247;
  
  activeSliderWidth = 350;
  sliderPanelstyle = {
    width: '247px'
  };
 
  minHeight = 273;
  marginBetweenSlides = 10;
  totalSlideWidth = (this.sliderWidth + this.marginBetweenSlides * 2);
  stars = [1, 2, 3, 4, 5];

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

  constructor() { }
  ngOnInit() {
    this.slideCount = 6;
    this.sliderMainContainerStyle = {
      width: this.totalSlideWidth * this.slideCount
      + this.activeSliderWidth - this.sliderWidth + 'px'
    };
    this.visibleContainerStyle = {
      width: this.totalSlideWidth * this.visiblePanels
      + this.activeSliderWidth - this.sliderWidth + 'px'
    };
  }

  ngAfterViewInit() {
    this.setActiveSlide();
  }

  setActiveSlide() {
    const allSliderPanels = document.querySelectorAll('.slider-panel');
    const middleSlide = (allSliderPanels[this.activeSlide + 1]) as HTMLElement;
    [].forEach.call(allSliderPanels, (el) => el.classList.remove('active-panel'));

    middleSlide.classList.add('active-panel');
  }

  onPan(e) {
    console.log(e.pointers[0].clientX);
  }

  sliderPan(e) {
    // Calculate pixel movements into 1:1 screen percents so gestures track with motion
    const percentage = 100 / this.slideCount * e.deltaX
      / this.sliderWidth;

    // Multiply percent by # of slide we’re on
    const percentageCalculated = percentage - 100 / this.slideCount * this.activeSlide;

    // 4g. Apply transformation
    (document.querySelector('.slider') as HTMLElement).style.transform = 'translateX( ' + percentageCalculated + '% )';

    if (e.isFinal) {
      if (e.velocityX > 1) {
        this.sliderGoTo(this.activeSlide - 1);
      } else if (e.velocityX < -1 ) {
        this.sliderGoTo(this.activeSlide + 1);
      } else {
        if (percentage <= -(this.sensitivity / this.slideCount)) {
          this.sliderGoTo(this.activeSlide + 1);
        } else if (percentage >= (this.sensitivity / this.slideCount)) {
          this.sliderGoTo(this.activeSlide - 1);
        } else {
          this.sliderGoTo(this.activeSlide);
        }
      }
    }
  }

  sliderGoTo(slideNum: number) {
    // Stop it from doing weird things like moving to slides that don’t exist
    let timer;

    if (slideNum < 0) {
      this.activeSlide = 0;
    } else if (slideNum > this.slideCount - 1 - 2) {
      this.activeSlide = this.slideCount - 1 - 2;
    } else {
      this.activeSlide = slideNum;
    }

    // 5b. Apply transformation & smoothly animate via .is-animating CSS
    const sliderEl = (document.querySelector('.slider') as HTMLElement);
    sliderEl.classList.add('is-animating');

    const widthToTranslate = - this.totalSlideWidth * this.activeSlide;

    // sliderEl.style.transform = 'translateX( ' + percentage + '% )';
    sliderEl.style.transform = 'translateX( ' + widthToTranslate + 'px )';

    this.setActiveSlide();
    clearTimeout(timer);

    timer = setTimeout(() => {
      sliderEl.classList.remove('is-animating');
    }, 9000);
  }
}
