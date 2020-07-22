import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentShowcase } from 'src/app/shared/models/treatmentShowcase';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { BookingService } from 'src/app/shared/services/booking.service';

@Component({
  selector: 'app-treatment-showcase',
  templateUrl: './treatment-showcase.component.html',
  styleUrls: ['./treatment-showcase.component.scss']
})
export class TreatmentShowcaseComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private bookingService: BookingService
  ) { }
  treatment: TreatmentShowcase;
  treatmentShowcaseSub: Subscription;
  treatmentParentName: string;
  ngOnInit() {
    const slug: string = this.route.snapshot.params.slug;
    this.treatmentParentName = this.dataService.currentParentTreatment;
    this.treatmentShowcaseSub = this.dataService.getTreatmentShowcase(slug).subscribe(treatment => {
      this.treatment = treatment[0];
    }
    );
  }

  ngOnDestroy() {
    this.treatmentShowcaseSub.unsubscribe();
  }

  getImage(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${this.dataService.beautiCmsUrl}${this.treatment.images[0].url}`);
  }

  goToParent() {
    this.router.navigate([`treatments`]);
    this.dataService.currentParentTreatment = this.treatmentParentName;
  }

  openBooking(e) {
    this.bookingService.sendBooking(e);
  }
}
