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
    window.open('https://widget.treatwell.co.uk/place/beauti-skin-clinic/', '_blank');
  }

  getBooking(): Observable<boolean> {
    return this.bookNow.asObservable();
  }
}
