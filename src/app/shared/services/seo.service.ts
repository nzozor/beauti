import { Injectable } from "@angular/core";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private defaultTitle =
    "Beauti Skin Clinic | Advanced Skin Treatments in SW London";

  constructor(private meta: Meta, private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} | ${this.defaultTitle}`);
  }

  public setMeta(meta: MetaDefinition[]) {
    this.meta.addTags(meta);
  }

  public setDefaultMeta() {
    this.titleService.setTitle(
      `Beauti Skin Clinic | Advanced Skin Treatments in SW London`
    );
    this.meta.addTags([
      {
        name: 'description',
        content:
          `Professional skin and waxing services only 5 mins walk from Oval Station.
           Founded by Aesthetician Cinzia Campigotto who has over 20 years of experience.`,
      },
    ]);
  }
}
