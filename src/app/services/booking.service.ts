import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookNow = new Subject<boolean>();

  constructor() { }

  sendBooking(event: boolean) {
    this.bookNow.next(event);
  }

  getBooking(): Observable<boolean> {
    return this.bookNow.asObservable();
  }
}
