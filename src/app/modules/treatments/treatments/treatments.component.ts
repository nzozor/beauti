import { Component, OnInit } from '@angular/core';
import { SKIN_TREATMENTS } from '../mocks/skin-treatments';
import { SKIN_IMP_REM } from '../mocks/skin-imperfections';
import { WAX_DATA } from '../mocks/waxing';
import { BODY_MASSAGE, BODY_CONTOURING } from '../mocks/body';
import { BEAUTY_NAIL, BEAUTY_FACIAL } from '../mocks/beauty';
import { HAIR_REMOVAL_IPL_LASER, HAIR_REMOVAL_ELECTRO } from '../mocks/hair-removal';
import { BookingService } from 'src/app/services/booking.service';

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


  constructor(private bookingService: BookingService) { }

  get isWideScreen() {
    return this.innerWidth >= 600;
  }

  openBooking(e) {
    e.preventDefault();
    e.stopPropagation();
    this.bookingService.sendBooking(true);
  }

  ngOnInit() {
    this.leftCol = this.waxing[0].options.slice(0, Math.ceil(this.waxing[0].options.length / 2));
    this.rightCol = this.waxing[0].options.slice(Math.ceil(this.waxing[0].options.length / 2));

    this.innerWidth = window.innerWidth;
  }
}
