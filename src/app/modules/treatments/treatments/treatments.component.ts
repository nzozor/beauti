import { Component, OnInit, OnDestroy } from '@angular/core';
import { SKIN_TREATMENTS } from '../mocks/skin-treatments';
import { SKIN_IMP_REM } from '../mocks/skin-imperfections';
import { WAX_DATA } from '../mocks/waxing';
import { BODY_MASSAGE, BODY_CONTOURING } from '../mocks/body';
import { BEAUTY_NAIL, BEAUTY_FACIAL } from '../mocks/beauty';
import { HAIR_REMOVAL_IPL_LASER, HAIR_REMOVAL_ELECTRO } from '../mocks/hair-removal';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  skinTreatments = SKIN_TREATMENTS;
  skinImperfectionRemoval = SKIN_IMP_REM;
  waxing: any[] = WAX_DATA;
  bodyRelaxingMassage: any[] = BODY_MASSAGE;
  bodyContouring: any[] = BODY_CONTOURING;
  beautyFacial: any[] = BEAUTY_FACIAL;
  beautyNail: any[] = BEAUTY_NAIL;
  hairRemoveLaser: {} = HAIR_REMOVAL_IPL_LASER;
  hairRemoveElectro: any[] = HAIR_REMOVAL_ELECTRO;
  innerWidth: any;

  leftCol: [];
  rightCol: [];
  activeTreatment: string;
  activeTreatmentList: string[];
  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private viewPortScroller: ViewportScroller
  ) { }

  get isWideScreen() {
    return this.innerWidth >= 600;
  }

  openBooking(e) {
    this.bookingService.sendBooking(e);
  }

  ngOnInit() {
    this.leftCol = this.waxing[0].options.slice(0, Math.ceil(this.waxing[0].options.length / 2));
    this.rightCol = this.waxing[0].options.slice(Math.ceil(this.waxing[0].options.length / 2));
    this.innerWidth = window.innerWidth;
    this.activeTreatment =  this.dataService.currentParentTreatment;
    this.activeTreatmentList = this.dataService.activeTreatmentList;
    if (this.activeTreatmentList) {
      this.viewPortScroller.scrollToAnchor('Advanced-Skin-Treatments');
    }
  }

  goToTreatmentShowcase(treatmentParent: string, treatmentName: string) {
    this.dataService.currentParentTreatment = treatmentParent;
    this.router.navigate([this.getSlug(treatmentName)], { relativeTo: this.route });
  }

  getSlug(treatmentName: string) {
    return treatmentName.split(' ').join('-');
  }

  isActive(treatment): boolean {
    if (this.activeTreatmentList) {
      return !!this.activeTreatmentList.find(treat => treat === treatment );
    } else {
      return false;
    }
  }
}
