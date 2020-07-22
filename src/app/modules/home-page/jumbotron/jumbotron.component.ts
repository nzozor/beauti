import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';

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
    this.bookingService.sendBooking(true);
  }

}
