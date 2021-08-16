import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  banners;
  slideConfig = {

    slidesToShow: 1, slidesToScroll: 1, dots: true,
    infinite: true,
    adaptiveHeight: true,
    focusOnSelect: false,
    touchThreshold: 1000,
  };

  constructor(private dataService: DataService, private bookingService: BookingService) { }

  get cmsUrl() {
    return this.dataService.beautiCmsUrl;
  }
  ngOnInit() {
    this.getBanners();
   }

  getBanners() {
    this.dataService.getHomageBanners().subscribe(banners =>  {
      this.banners = banners;
      console.log(this.banners);
    });
  }

  openBooking(event) {
    this.bookingService.sendBooking(event);
  }
}
