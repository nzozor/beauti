import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookNow = new Subject<boolean>();

  constructor() { }

  sendBooking(event) {
    // event.preventDefault();
    // event.stopPropagation();
    window.open('https://widget.treatwell.co.uk/place/beauti-skin-clinic/', '_blank', 'noopener');
    // window.open('mailto:info@beautiskinclinic.com?subject=Beauti Skin Clinic Booking', '_blank', 'noopener');

    // location.href = "mailto:info@beautiskinclinic.com "+'&body='+'Booking Beauti Skin Clinic';

  }

  sendBookingBespoke(event) {
    window.open('mailto:info@beautiskinclinic.com?subject=Beauti Skin Clinic Booking', '_blank', 'noopener');
  }


  getBooking(): Observable<boolean> {
    return this.bookNow.asObservable();
  }
}
