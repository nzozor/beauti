import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultTitle  = 'Beauti Skin Clinic | Advanced Skin Treatments in SW London';

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} | ${this.defaultTitle}`);
  }
}
