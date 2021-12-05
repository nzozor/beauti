import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreatmentShowcase } from '../models/treatmentShowcase';
import { environment } from '../../../environments/environment.prod';
import { env } from 'process';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  beautiCmsUrl = environment.cmsUrl;
  // beautiCmsUrl = `http://localhost:1337`;

  currentParentTreatment = 'Skin Treatmetns';
  activeTreatmentList: string[];
  activeTreatment: string;
  
  getTreatmentShowcase(slug: string): Observable<TreatmentShowcase> {
    return this.http.get<TreatmentShowcase>(`${this.beautiCmsUrl}/treatments?slug=${slug}`);  // Template litterral ``
  }

  getHomageBanners(): Observable<any> {
    return this.http.get<any>(`${this.beautiCmsUrl}/homepage-sliders`).pipe(
      map((banners: []) => banners.sort((a:string, b: string) => new Date(b.publication) - new Date(a.publication)))
    );  
  }
}
