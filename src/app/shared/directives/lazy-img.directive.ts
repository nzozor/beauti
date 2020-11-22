import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgLazyLoad]'
})
export class LazyImgDirective implements AfterViewInit  {
  observer: IntersectionObserver;
  constructor() {
  }
  ngAfterViewInit() {
    const supports = 'loading' in HTMLImageElement.prototype;

    const images = document.querySelectorAll('.js-lazy-image');
    if (supports) {
      images.forEach(image => image.setAttribute('loading', 'lazy'));
    } else if ('IntersectionObserver' in window) {
      // fallback to IntersectionObserver
      const config = {
        // If the image gets within 50px in the Y axis, start the download.
        rootMargin: '50px 0px',
        threshold: 0.01
      };
      // The observer for the images on the page
      this.observer = new IntersectionObserver(this.onIntersection, config);
      images.forEach(image => {
        this.observer.observe(image);
      });
    } else {
      Array.from(images).forEach(image => this.preloadImage(image));
    }
  }

  onIntersection(entries) {
    // Loop through the entries
    entries.forEach(entry => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        // Stop watching and load the image
        this.observer.unobserve(entry.target);
        this.preloadImage(entry.target);
      }
    });
  }

  preloadImage(url) {
    const img = new Image();
    img.src = url;
  }
}
