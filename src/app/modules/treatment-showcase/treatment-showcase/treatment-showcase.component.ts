import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentShowcase } from 'src/app/shared/models/treatmentShowcase';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { BookingService } from 'src/app/shared/services/booking.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    private bookingService: BookingService,
    public breakpointObserver: BreakpointObserver
  ) { }
  treatment: TreatmentShowcase;
  treatmentShowcaseSub: Subscription;
  treatmentParentName: string;
  activeTreatmentList: string[];
  breakpoint: string;
  ngOnInit() {
    const slug: string = this.route.snapshot.params.slug;
    this.treatmentParentName = this.dataService.currentParentTreatment;
    this.activeTreatmentList = this.dataService.activeTreatmentList ? this.dataService.activeTreatmentList : ['Back to Treatments'];
    this.treatmentShowcaseSub = this.dataService.getTreatmentShowcase(slug).subscribe(treatment => {
      this.treatment = treatment[0];
    }
    );
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
        this.breakpoint = 'large';
      }
    });
  }

  ngOnDestroy() {
    this.treatmentShowcaseSub.unsubscribe();
  }

  getImage() {
    if (this.breakpoint === 'large') {
      return this.domSanitizer.bypassSecurityTrustUrl(`${this.dataService.beautiCmsUrl}${this.treatment.images[0].formats.large.url}`);
    } else {
      return this.domSanitizer.bypassSecurityTrustUrl(`${this.dataService.beautiCmsUrl}${this.treatment.images[0].formats.small.url}`);
    }
  }

  goToParent() {
    this.router.navigate([`treatments`]);
  }

  openBooking(e) {
    this.bookingService.sendBooking(e);
  }
}
