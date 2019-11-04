import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-treatwell',
  templateUrl: './treatwell.component.html',
  styleUrls: ['./treatwell.component.scss'],

})
export class TreatwellComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MatDialog>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
