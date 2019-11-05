import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

  openBooking() {
    // this.bookingService.sendBooking(true);
    window.location.href = 'https://widget.treatwell.co.uk/place/beauti-skin-clinic/';
  }

}
