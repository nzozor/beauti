import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-treatment-full-width',
  templateUrl: './treatment-full-width.component.html',
  styleUrls: ['./treatment-full-width.component.scss']
})
export class TreatmentFullWidthComponent implements OnInit {
  @Input() treatments: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService) { }
  ngOnInit() {
  }
  goToTreatmentShowcase(treatmentParentList: string[], treatmentName: string) {
    this.dataService.activeTreatmentList = treatmentParentList;
    this.dataService.activeTreatment = this.getSlug(treatmentName);

    this.router.navigate([this.getSlug(treatmentName)], { relativeTo: this.route });
  }

  getSlug(treatmentName: string) {
    return treatmentName.split(' ').join('-').split('/').join('');
  }

  openBooking(e) {
    this.bookingService.sendBooking(e);
  }
}
