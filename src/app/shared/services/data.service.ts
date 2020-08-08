import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreatmentShowcase } from '../models/treatmentShowcase';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  beautiCmsUrl = `https://localhost`;
  currentParentTreatment: string;
  activeTreatmentList: string[];
  getTreatmentShowcase(slug: string): Observable<TreatmentShowcase> {
    return this.http.get<TreatmentShowcase>(`${this.beautiCmsUrl}/treatments?slug=${slug}`);  // Template litterral ``
  }
}
